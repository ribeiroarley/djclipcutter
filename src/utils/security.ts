/**
 * DJ Clip Cutter - Security & Anti-Scraping Utility
 * Obfuscates sensitive contact information to protect against automated web scrapers and email harvesters.
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
  '1. Link do Set (YouTube / SoundCloud / Drive): ',
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
