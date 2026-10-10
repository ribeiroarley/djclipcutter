import React, { useState } from 'react';
import { Copy, Check, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { getSecureEmail, getSecureMailto } from '../../utils/security';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = getSecureEmail();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-32 bg-bg-primary relative overflow-hidden">
      {/* Background neon flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[250px] sm:h-[350px] bg-accent-neon/15 blur-[120px] sm:blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-4 sm:right-1/4 w-[250px] sm:w-[400px] h-[200px] sm:h-[300px] bg-cdj-cyan/10 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0c1424] via-[#080d17] to-[#050a12] border-2 border-border-official p-5 sm:p-10 lg:p-16 text-center space-y-6 sm:space-y-8 shadow-2xl relative overflow-hidden">
            {/* Top accent glow line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-neon via-cdj-cyan to-accent-neon" />

            {/* Badges */}
            <div className="inline-flex items-center gap-2 flex-wrap justify-center">
              <Badge variant="orange" pulse size="md">
                Canal Oficial de Contratação
              </Badge>
              <Badge variant="cyan" size="md">
                Atendimento Direto
              </Badge>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="font-bebas text-3xl sm:text-5xl lg:text-7xl text-white tracking-wide leading-tight">
                ELEVE SEUS SETS AO NÍVEL{' '}
                <span className="text-accent-neon text-glow-orange block sm:inline">PROFISSIONAL</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto font-sans leading-relaxed">
                Envie o link do seu set (YouTube ou SoundCloud) ou arquivo direto. Analisamos sua apresentação e retornamos rapidamente com a melhor proposta.
              </p>
            </div>

            {/* Email Spotlight Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-bg-primary/90 border border-accent-neon/40 shadow-neon-sm max-w-xl mx-auto space-y-4 w-full">
              <span className="text-[11px] sm:text-xs font-mono text-text-muted uppercase tracking-widest block">
                E-mail Oficial DJ Clip Cutter
              </span>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                <span className="font-mono text-sm xs:text-base sm:text-2xl text-white font-bold tracking-wider select-all break-all sm:break-normal">
                  {email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-mono font-bold transition-all w-full sm:w-auto shrink-0 active:scale-95 ${
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
              </div>

              {/* Direct Mailto Action */}
              <div className="pt-2 w-full box-border">
                <Button
                  href={getSecureMailto()}
                  variant="primary"
                  icon={<Send className="w-4 h-4 shrink-0" />}
                  fullWidth
                  className="w-full max-w-full box-border py-4 px-6 flex items-center justify-center gap-2.5 rounded-xl text-sm font-semibold tracking-wide shadow-lg shadow-neon-glow"
                >
                  Abrir E-mail com Briefing Pronto
                </Button>
              </div>
            </div>

            {/* What to send guide */}
            <div className="pt-5 sm:pt-6 border-t border-border-official/60 max-w-2xl mx-auto w-full">
              <h4 className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-4">
                O que incluir no seu e-mail:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left w-full">
                <div className="p-4 rounded-xl bg-bg-secondary/70 border border-border-official space-y-1">
                  <span className="font-mono text-xs sm:text-sm font-bold text-accent-neon block">
                    1. Link ou Arquivo do Set
                  </span>
                  <span className="text-xs sm:text-sm text-text-secondary leading-snug block">
                    Envie o link do YouTube, SoundCloud ou arquivo direto de áudio/vídeo.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-bg-secondary/70 border border-border-official space-y-1">
                  <span className="font-mono text-xs sm:text-sm font-bold text-cdj-cyan block">
                    2. Minutagem Desejada
                  </span>
                  <span className="text-xs sm:text-sm text-text-secondary leading-snug block">
                    Indique seu trecho favorito ou deixe o sistema identificar os drops de maior energia.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-bg-secondary/70 border border-border-official space-y-1">
                  <span className="font-mono text-xs sm:text-sm font-bold text-vu-green block">
                    3. Escolha do Visual
                  </span>
                  <span className="text-xs sm:text-sm text-text-secondary leading-snug block">
                    Escolha entre o corte de vídeo nativo do YouTube ou um dos templates de áudio com waveform reativa.
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
