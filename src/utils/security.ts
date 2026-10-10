/**
 * DJ Clip Cutter - Security & Anti-Scraping Utility
 * Obfuscates sensitive contact information to protect against automated web scrapers and email harvesters,
 * and generates structured, sanitized email briefings with verified URLs.
 */

// Encoded segments assembled at client runtime
const _u = ['d', 'j', 'c', 'l', 'i', 'p', 'c', 'u', 't', 't', 'e', 'r'];
const _d = ['g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm'];

/**
 * Reconstructs official contact email dynamically in client runtime.
 */
export const getSecureEmail = (): string => {
  return `${_u.join('')}@${_d.join('')}`;
};

export const DEFAULT_EMAIL_SUBJECT = 'Solicitação de Produção de Cortes — DJ Clip Cutter';

export const DEFAULT_EMAIL_BODY = [
  'Olá, DJ Clip Cutter!',
  '',
  'Gostaria de solicitar a produção de cortes para o meu set.',
  '',
  '1. Link do Set (YouTube / SoundCloud / Drive / WeTransfer / Dropbox / Vimeo): ',
  '2. Trecho preferido (opcional / minuto do drop): ',
  '3. Formato desejado (Vídeo do YouTube ou Template com Waveform): ',
  '4. Meu Nome Artístico / Instagram: ',
  '',
  'Aguardo o retorno para combinarmos os detalhes!',
].join('\n');

/**
 * Builds standardized secure mailto link with encoded parameters.
 */
export const getSecureMailto = (
  subject: string = DEFAULT_EMAIL_SUBJECT,
  body: string = DEFAULT_EMAIL_BODY
): string => {
  const email = getSecureEmail();
  const params: string[] = [];

  if (subject) {
    params.push(`subject=${encodeURIComponent(subject)}`);
  }
  if (body) {
    params.push(`body=${encodeURIComponent(body)}`);
  }

  return `mailto:${email}${params.length > 0 ? `?${params.join('&')}` : ''}`;
};

export interface ValidatedBriefingParams {
  artistName?: string;
  sanitizedUrl: string;
  platformName: string;
  preferredTimestamp?: string;
  visualFormat?: string;
}

/**
 * Builds structured subject for validated link briefings.
 */
export function buildValidatedBriefingSubject(artistName?: string, platformName?: string): string {
  const djTag = artistName?.trim() ? artistName.trim() : 'Novo DJ';
  const platformTag = platformName ? ` (Plataforma: ${platformName})` : '';
  return `[DJ CLIP CUTTER] Solicitação de Cortes — ${djTag}${platformTag}`;
}

/**
 * Builds structured, sanitized email body with inspected URL and parameters.
 */
export function buildValidatedBriefingBody(params: ValidatedBriefingParams): string {
  const { artistName, sanitizedUrl, platformName, preferredTimestamp, visualFormat } = params;

  return [
    '==================================================',
    'SOLICITAÇÃO DE PRODUÇÃO DE CORTES — DJ CLIP CUTTER',
    '==================================================',
    '',
    '• IDENTIFICAÇÃO DO DJ:',
    `  Nome Artístico / Instagram: ${artistName?.trim() || '[A preencher]'}`,
    '',
    '• ORIGEM DO MATERIAL (VALIDADO):',
    `  Plataforma: ${platformName}`,
    '  Status de Segurança: URL Oficial Homologada (HTTPS)',
    `  Link Seguro: ${sanitizedUrl}`,
    '',
    '• ESPECIFICAÇÕES DO PEDIDO:',
    `  Trecho / Minutagem: ${preferredTimestamp?.trim() || 'Identificar os drops de maior energia automaticamente'}`,
    `  Formato Visual Desejado: ${visualFormat?.trim() || 'Reels 9:16 (Vertical) / Safe Zones 1:1 e 4:5'}`,
    '',
    '==================================================',
    'Nota de Segurança: O link acima foi inspecionado e validado pelo sistema oficial DJ Clip Cutter.',
  ].join('\n');
}

/**
 * Generates verified mailto link with structured briefing and sanitized safe URL.
 */
export function getValidatedMailto(params: ValidatedBriefingParams): string {
  const subject = buildValidatedBriefingSubject(params.artistName, params.platformName);
  const body = buildValidatedBriefingBody(params);
  return getSecureMailto(subject, body);
}
