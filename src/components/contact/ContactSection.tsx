import React, { useState, useId } from 'react';
import {
  Copy,
  Check,
  Send,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Link2,
  Sparkles,
  Clock,
  User,
  ExternalLink,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { getSecureEmail, getValidatedMailto, getSecureMailto } from '../../utils/security';
import { validateSetUrl, getSupportedPlatformList } from '../../utils/urlValidator';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = getSecureEmail();

  // Form states
  const [rawUrl, setRawUrl] = useState('');
  const [artistName, setArtistName] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [visualFormat, setVisualFormat] = useState('Vídeo Vertical 9:16 (YouTube)');

  const urlInputId = useId();
  const artistInputId = useId();
  const timestampInputId = useId();
  const visualFormatInputId = useId();

  const supportedPlatforms = getSupportedPlatformList();

  // Real-time URL validation
  const validation = rawUrl.trim() ? validateSetUrl(rawUrl) : null;
  const isUrlValid = validation?.isValid === true && Boolean(validation.sanitizedUrl && validation.platform);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Generate safe mailto URL when link is validated, otherwise fallback to standard mailto
  const mailtoHref = isUrlValid && validation?.sanitizedUrl && validation.platform
    ? getValidatedMailto({
        sanitizedUrl: validation.sanitizedUrl,
        platformName: validation.platform.name,
        artistName: artistName.trim(),
        preferredTimestamp: timestamp.trim(),
        visualFormat,
      })
    : getSecureMailto();

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-32 bg-bg-primary relative overflow-hidden">
      {/* Background neon flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[250px] sm:h-[350px] bg-accent-neon/15 blur-[120px] sm:blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-4 sm:right-1/4 w-[250px] sm:w-[400px] h-[200px] sm:h-[300px] bg-cdj-cyan/10 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0c1424] via-[#080d17] to-[#050a12] border-2 border-border-official p-5 sm:p-10 lg:p-14 text-center space-y-6 sm:space-y-8 shadow-2xl relative overflow-hidden">
            {/* Top accent glow line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-neon via-cdj-cyan to-accent-neon" />

            {/* Badges */}
            <div className="inline-flex items-center gap-2 flex-wrap justify-center">
              <Badge variant="orange" pulse size="md">
                Canal Oficial de Contratação
              </Badge>
              <Badge variant="cyan" size="md">
                Atendimento Direto & Seguro
              </Badge>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="font-bebas text-3xl sm:text-5xl lg:text-7xl text-white tracking-wide leading-tight">
                ELEVE SEUS SETS AO NÍVEL{' '}
                <span className="text-accent-neon text-glow-orange block sm:inline">PROFISSIONAL</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto font-sans leading-relaxed">
                Envie o link do seu set ou arquivo direto através das plataformas homologadas. Nossa validação de segurança garante recebimento limpo, sem riscos de phishing ou arquivos corrompidos.
              </p>
            </div>

            {/* INTERACTIVE BRIEFING & URL VALIDATION FORM */}
            <div className="text-left rounded-2xl bg-bg-card/90 border border-border-official p-4 sm:p-6 lg:p-8 space-y-5 shadow-2xl backdrop-blur-xl w-full box-border">
              <div className="flex items-center justify-between border-b border-border-official/60 pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent-neon" />
                  <span className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                    Briefing de Contratação & Validação de Link
                  </span>
                </div>
                <span className="text-[10px] font-mono text-text-muted">
                  6 Plataformas Homologadas
                </span>
              </div>

              {/* Supported Platforms Chips */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block">
                  Plataformas aceitas para envio do set:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {supportedPlatforms.map((plat) => (
                    <span
                      key={plat.id}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                        validation?.platform?.id === plat.id
                          ? 'bg-accent-neon/20 border-accent-neon text-accent-neon font-bold shadow-neon-sm'
                          : 'bg-bg-primary/80 border-border-official text-text-secondary'
                      }`}
                    >
                      {plat.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Input 1: Set URL with live validation */}
              <div className="space-y-1.5">
                <label
                  htmlFor={urlInputId}
                  className="font-mono text-xs font-semibold text-text-primary flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Link2 className="w-3.5 h-3.5 text-accent-neon" />
                    Link do Set ou Apresentação *
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">
                    Obrigatório (HTTPS)
                  </span>
                </label>

                <div className="relative">
                  <input
                    id={urlInputId}
                    type="url"
                    value={rawUrl}
                    onChange={(e) => setRawUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=... ou soundcloud.com/..."
                    className={`w-full max-w-full box-border rounded-xl bg-bg-primary border px-3.5 py-3 text-xs sm:text-sm font-mono text-white placeholder-text-muted focus:outline-none transition-all ${
                      validation === null
                        ? 'border-border-official focus:border-accent-neon/80'
                        : isUrlValid
                        ? 'border-vu-green/70 focus:border-vu-green shadow-[0_0_15px_rgba(0,230,118,0.15)]'
                        : 'border-vu-red/70 focus:border-vu-red shadow-[0_0_15px_rgba(255,59,48,0.15)]'
                    }`}
                  />
                </div>

                {/* Live Validation Feedback Pill */}
                {validation && (
                  <div className="pt-1">
                    {isUrlValid && validation.platform ? (
                      <div className="p-3 rounded-xl bg-vu-green/10 border border-vu-green/40 flex items-start gap-2.5 text-xs font-mono text-emerald-300">
                        <ShieldCheck className="w-4 h-4 text-vu-green shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="font-bold text-vu-green block">
                            ✓ {validation.platform.name} Homologado com Sucesso
                          </span>
                          <span className="text-[11px] text-text-secondary break-all block">
                            Link sanitizado: {validation.sanitizedUrl}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-vu-red/10 border border-vu-red/40 flex items-start gap-2.5 text-xs font-mono text-red-300">
                        <ShieldAlert className="w-4 h-4 text-vu-red shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-vu-red block">
                            Atenção de Segurança
                          </span>
                          <span className="text-[11px] text-red-200 block mt-0.5">
                            {validation.errorMessage}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Form Grid: Artist & Timestamp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Input 2: Artist Name / Instagram */}
                <div className="space-y-1.5">
                  <label
                    htmlFor={artistInputId}
                    className="font-mono text-xs font-semibold text-text-primary flex items-center gap-1.5"
                  >
                    <User className="w-3.5 h-3.5 text-cdj-cyan" />
                    Nome Artístico / Instagram
                  </label>
                  <input
                    id={artistInputId}
                    type="text"
                    value={artistName}
                    onChange={(e) => setArtistName(e.target.value)}
                    placeholder="Ex: DJ @seunome"
                    className="w-full max-w-full box-border rounded-xl bg-bg-primary border border-border-official focus:border-cdj-cyan/80 px-3.5 py-2.5 text-xs sm:text-sm font-mono text-white placeholder-text-muted focus:outline-none transition-all"
                  />
                </div>

                {/* Input 3: Timestamp */}
                <div className="space-y-1.5">
                  <label
                    htmlFor={timestampInputId}
                    className="font-mono text-xs font-semibold text-text-primary flex items-center gap-1.5"
                  >
                    <Clock className="w-3.5 h-3.5 text-vu-green" />
                    Minutagem Desejada (Opcional)
                  </label>
                  <input
                    id={timestampInputId}
                    type="text"
                    value={timestamp}
                    onChange={(e) => setTimestamp(e.target.value)}
                    placeholder="Ex: 14:20 a 15:10 ou Deixar o sistema identificar"
                    className="w-full max-w-full box-border rounded-xl bg-bg-primary border border-border-official focus:border-vu-green/80 px-3.5 py-2.5 text-xs sm:text-sm font-mono text-white placeholder-text-muted focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Input 4: Visual Format */}
              <div className="space-y-1.5">
                <label
                  htmlFor={visualFormatInputId}
                  className="font-mono text-xs font-semibold text-text-primary flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-accent-neon" />
                  Formato Visual de Preferência
                </label>
                <select
                  id={visualFormatInputId}
                  value={visualFormat}
                  onChange={(e) => setVisualFormat(e.target.value)}
                  className="w-full max-w-full box-border rounded-xl bg-bg-primary border border-border-official focus:border-accent-neon/80 px-3.5 py-2.5 text-xs sm:text-sm font-mono text-white focus:outline-none transition-all"
                >
                  <option value="Vídeo Vertical 9:16 (YouTube)">
                    Reenquadramento Vertical 9:16 (Vídeo do YouTube)
                  </option>
                  <option value="Template Interativo com Waveform Reativa">
                    Template com Waveform Reativa (SoundCloud / Áudio)
                  </option>
                  <option value="Feed Retrato 4:5 + Reels 9:16">
                    Multi-formato (Reels 9:16 + Feed Retrato 4:5)
                  </option>
                </select>
              </div>

              {/* Action Button: Validated Mailto Trigger */}
              <div className="pt-2 w-full box-border space-y-2">
                {isUrlValid ? (
                  <Button
                    href={mailtoHref}
                    variant="primary"
                    icon={<Send className="w-4 h-4 shrink-0" />}
                    fullWidth
                    className="w-full max-w-full box-border py-4 px-6 flex items-center justify-center gap-2.5 rounded-xl text-sm font-semibold tracking-wide shadow-lg shadow-neon-glow"
                  >
                    Gerar Briefing e Abrir E-mail Seguro
                  </Button>
                ) : (
                  <div className="w-full max-w-full box-border py-3.5 px-6 rounded-xl bg-bg-primary/60 border border-border-official flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono text-text-muted select-none cursor-not-allowed">
                    <Lock className="w-4 h-4 text-text-muted shrink-0" />
                    <span>Cole e valide um link homologado para desbloquear o envio</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] font-mono text-text-muted px-1">
                  <span>Canal Oficial: {email}</span>
                  <span className="flex items-center gap-1">
                    <ExternalLink className="w-3 h-3 text-accent-neon" />
                    Abre seu aplicativo de e-mail pré-preenchido
                  </span>
                </div>
              </div>
            </div>

            {/* Email Spotlight Box & Manual Copy Fallback */}
            <div className="p-4 sm:p-5 rounded-2xl bg-bg-primary/90 border border-border-official max-w-2xl mx-auto space-y-3 w-full">
              <span className="text-[11px] font-mono text-text-muted uppercase tracking-widest block">
                Prefere enviar manualmente direto pelo seu e-mail?
              </span>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
                <span className="font-mono text-xs sm:text-base text-white font-bold tracking-wider select-all break-all sm:break-normal">
                  {email}
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyEmail}
                    className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all w-full sm:w-auto shrink-0 active:scale-95 ${
                      copied
                        ? 'bg-vu-green text-black shadow-[0_0_12px_#00E676]'
                        : 'bg-accent-neon/20 text-accent-neon hover:bg-accent-neon hover:text-white border border-accent-neon/50'
                    }`}
                    aria-label="Copiar endereço de e-mail"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Copiado! ✓
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copiar E-mail
                      </>
                    )}
                  </button>

                  <a
                    href={getSecureMailto()}
                    className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-mono text-text-secondary hover:text-white bg-bg-card border border-border-official hover:border-accent-neon/50 transition-colors shrink-0"
                  >
                    Modelo Padrão
                  </a>
                </div>
              </div>
            </div>

            {/* What to send guide */}
            <div className="pt-5 sm:pt-6 border-t border-border-official/60 max-w-2xl mx-auto w-full">
              <h4 className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-4">
                Critérios de Qualidade para Produção do Set:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left w-full">
                <div className="p-4 rounded-xl bg-bg-secondary/70 border border-border-official space-y-1">
                  <span className="font-mono text-xs sm:text-sm font-bold text-accent-neon block">
                    1. Link Homologado
                  </span>
                  <span className="text-xs sm:text-sm text-text-secondary leading-snug block">
                    YouTube, SoundCloud, Drive, WeTransfer, Dropbox ou Vimeo.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-bg-secondary/70 border border-border-official space-y-1">
                  <span className="font-mono text-xs sm:text-sm font-bold text-cdj-cyan block">
                    2. Curadoria do Drop
                  </span>
                  <span className="text-xs sm:text-sm text-text-secondary leading-snug block">
                    Indique seu trecho favorito ou deixe nosso sistema mapear os momentos de pico.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-bg-secondary/70 border border-border-official space-y-1">
                  <span className="font-mono text-xs sm:text-sm font-bold text-vu-green block">
                    3. Visual Sob Medida
                  </span>
                  <span className="text-xs sm:text-sm text-text-secondary leading-snug block">
                    Corte de vídeo nativo ou templates com waveforms reativas em 9:16 e 4:5.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
