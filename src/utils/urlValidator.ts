/**
 * DJ Clip Cutter - Strict URL Validation & Sanitization Utility
 * Implements strict domain whitelisting, punycode/IDN homograph attack prevention,
 * and generic shortener blocking to guarantee security against phishing and malware.
 */

export type SupportedPlatformId =
  | 'youtube'
  | 'soundcloud'
  | 'google-drive'
  | 'wetransfer'
  | 'dropbox'
  | 'vimeo';

export interface SupportedPlatform {
  id: SupportedPlatformId;
  name: string;
  category: 'video' | 'audio' | 'cloud';
  hosts: string[];
  description: string;
}

export const SUPPORTED_PLATFORMS: Record<SupportedPlatformId, SupportedPlatform> = {
  youtube: {
    id: 'youtube',
    name: 'YouTube',
    category: 'video',
    hosts: ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'music.youtube.com', 'youtu.be'],
    description: 'Vídeos de sets gravados, transmissões arquivadas e apresentações completas',
  },
  soundcloud: {
    id: 'soundcloud',
    name: 'SoundCloud',
    category: 'audio',
    hosts: ['soundcloud.com', 'www.soundcloud.com', 'm.soundcloud.com', 'on.soundcloud.com'],
    description: 'Sets de áudio, faixas autorais e podcasts para visualizadores reativos',
  },
  'google-drive': {
    id: 'google-drive',
    name: 'Google Drive',
    category: 'cloud',
    hosts: ['drive.google.com'],
    description: 'Arquivos brutos de vídeo (MP4/MOV) ou áudio (WAV/FLAC) em alta fidelidade',
  },
  wetransfer: {
    id: 'wetransfer',
    name: 'WeTransfer',
    category: 'cloud',
    hosts: ['wetransfer.com', 'www.wetransfer.com', 'we.tl'],
    description: 'Envio rápido e direto de gravações brutas e stems musicais',
  },
  dropbox: {
    id: 'dropbox',
    name: 'Dropbox',
    category: 'cloud',
    hosts: ['dropbox.com', 'www.dropbox.com', 'dl.dropboxusercontent.com'],
    description: 'Pastas compartilhadas com arquivos de apresentação ou áudio de alta resolução',
  },
  vimeo: {
    id: 'vimeo',
    name: 'Vimeo',
    category: 'video',
    hosts: ['vimeo.com', 'www.vimeo.com', 'player.vimeo.com'],
    description: 'Vídeos de alta fidelidade sem compressão agressiva',
  },
};

// Generic URL shorteners strictly prohibited due to masking phishing and malware destinations
const BLOCKED_SHORTENERS = new Set([
  'bit.ly',
  'tinyurl.com',
  'cutt.ly',
  't.co',
  'is.gd',
  'ow.ly',
  'buff.ly',
  'rebrand.ly',
  'shorturl.at',
  'goo.gl',
  'shorte.st',
  'v.gd',
  'adf.ly',
]);

// Tracking parameters stripped during sanitization
const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'igshid',
  'gclid',
  '_hsenc',
  '_hsmi',
  'mc_cid',
  'mc_eid',
];

export interface UrlValidationResult {
  isValid: boolean;
  platform?: SupportedPlatform;
  sanitizedUrl?: string;
  hostname?: string;
  errorMessage?: string;
  errorCode?:
    | 'EMPTY'
    | 'INVALID_FORMAT'
    | 'UNSAFE_PROTOCOL'
    | 'USERINFO_DETECTED'
    | 'PUNYCODE_HOMOGRAPH'
    | 'IP_ADDRESS_NOT_ALLOWED'
    | 'BLOCKED_SHORTENER'
    | 'UNSUPPORTED_PLATFORM';
}

/**
 * Validates and sanitizes a user-submitted URL against the strict whitelist.
 * Returns detailed security status and canonical clean URL.
 */
export function validateSetUrl(rawInput: string): UrlValidationResult {
  if (!rawInput || typeof rawInput !== 'string') {
    return {
      isValid: false,
      errorCode: 'EMPTY',
      errorMessage: 'Por favor, insira o link do seu set ou arquivo.',
    };
  }

  let input = rawInput.trim();
  if (input.length === 0) {
    return {
      isValid: false,
      errorCode: 'EMPTY',
      errorMessage: 'Por favor, insira o link do seu set ou arquivo.',
    };
  }

  // Scheme & protocol safety check
  const hasScheme = /^[a-zA-Z][a-zA-Z0-9+.-]*:/i.test(input);
  if (hasScheme) {
    if (!/^https?:\/\//i.test(input)) {
      return {
        isValid: false,
        errorCode: 'UNSAFE_PROTOCOL',
        errorMessage: 'Protocolo de URL não permitido. Apenas links seguros HTTPS são aceitos.',
      };
    }
  } else {
    // Auto-prepend https:// if user pasted a domain without scheme (e.g. "youtube.com/watch?v=...")
    input = `https://${input}`;
  }

  let parsed: URL;
  try {
    parsed = new URL(input);
  } catch {
    return {
      isValid: false,
      errorCode: 'INVALID_FORMAT',
      errorMessage: 'Formato de link inválido. Verifique se a URL foi copiada corretamente.',
    };
  }

  // 1. Strict Protocol Check
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
    return {
      isValid: false,
      errorCode: 'UNSAFE_PROTOCOL',
      errorMessage: 'Apenas links HTTP e HTTPS são aceitos.',
    };
  }

  // 2. Reject Userinfo (prevents https://drive.google.com@attacker.com bypass)
  if (parsed.username || parsed.password) {
    return {
      isValid: false,
      errorCode: 'USERINFO_DETECTED',
      errorMessage: 'URL com estrutura suspeita (userinfo / @ não permitido).',
    };
  }

  const hostname = parsed.hostname.toLowerCase();

  // 3. Reject Punycode / IDN Homograph attacks (xn--)
  if (hostname.includes('xn--')) {
    return {
      isValid: false,
      errorCode: 'PUNYCODE_HOMOGRAPH',
      errorMessage: 'Caracteres especiais ou links punycode não são permitidos por segurança.',
    };
  }

  // 4. Reject Raw IP Addresses (IPv4 / IPv6)
  if (/^(\d{1,3}\.){3}\d{1,3}$/.test(hostname) || hostname.startsWith('[') || hostname.includes(':')) {
    return {
      isValid: false,
      errorCode: 'IP_ADDRESS_NOT_ALLOWED',
      errorMessage: 'Links com endereços IP diretos não são aceitos. Utilize plataformas oficiais.',
    };
  }

  // 5. Hostname strict character validation (must be standard ASCII alphanumeric, dot, or hyphen)
  if (!/^[a-z0-9.-]+$/.test(hostname)) {
    return {
      isValid: false,
      errorCode: 'INVALID_FORMAT',
      errorMessage: 'O domínio do link contém caracteres não suportados.',
    };
  }

  // 6. Generic Shorteners Detection (strict blocking)
  if (BLOCKED_SHORTENERS.has(hostname) || Array.from(BLOCKED_SHORTENERS).some(shortener => hostname.endsWith(`.${shortener}`))) {
    return {
      isValid: false,
      errorCode: 'BLOCKED_SHORTENER',
      errorMessage: `Encurtadores genéricos (${hostname}) são bloqueados por segurança. Envie o link original e direto da plataforma.`,
    };
  }

  // 7. Whitelist Matching
  let matchedPlatform: SupportedPlatform | undefined;

  for (const platform of Object.values(SUPPORTED_PLATFORMS)) {
    for (const allowedHost of platform.hosts) {
      if (hostname === allowedHost || hostname.endsWith(`.${allowedHost}`)) {
        matchedPlatform = platform;
        break;
      }
    }
    if (matchedPlatform) break;
  }

  if (!matchedPlatform) {
    return {
      isValid: false,
      errorCode: 'UNSUPPORTED_PLATFORM',
      errorMessage: 'Plataforma não homologada. Aceitamos links do YouTube, SoundCloud, Google Drive, WeTransfer, Dropbox ou Vimeo.',
    };
  }

  // 8. URL Sanitization: Remove invasive ad/tracking query parameters while keeping essential video/audio tokens
  const cleanUrl = new URL(parsed.toString());
  // Force secure https
  cleanUrl.protocol = 'https:';

  for (const param of TRACKING_PARAMS) {
    cleanUrl.searchParams.delete(param);
  }

  return {
    isValid: true,
    platform: matchedPlatform,
    sanitizedUrl: cleanUrl.toString(),
    hostname,
  };
}

/**
 * Helper to get list of supported platforms for UI badges and help tooltips.
 */
export function getSupportedPlatformList(): SupportedPlatform[] {
  return Object.values(SUPPORTED_PLATFORMS);
}
