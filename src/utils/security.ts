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

/**
 * Builds secure mailto link with encoded parameters.
 */
export const getSecureMailto = (subject?: string, body?: string): string => {
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
