import React from 'react';
import { PLANS_DATA } from '../../data/plans';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Check, Mail, Clock, Video } from 'lucide-react';
import { getSecureEmail, getSecureMailto } from '../../utils/security';

export const Plans: React.FC = () => {
  const plan = PLANS_DATA[0];

  return (
    <section id="planos" className="py-16 sm:py-20 lg:py-32 bg-bg-secondary relative border-t border-border-official overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-accent-neon/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="orange" size="md">
              Produção Sob Demanda
            </Badge>
            <Badge variant="green" size="md">
              Capacidade de Entrega Ativa
            </Badge>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-tight">
            PRODUÇÃO SOB DEMANDA
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary font-sans leading-relaxed">
            Envie o link do seu set gravado e receba seus vídeos finalizados prontos para publicação.
          </p>
        </div>

        {/* Unified Single Centered Card */}
        <div className="flex justify-center items-center max-w-xl mx-auto w-full box-border">
          <div className="rounded-3xl p-5 sm:p-8 w-full max-w-xl mx-auto box-border overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#090e17] to-[#060b13] border-2 border-accent-neon/40 shadow-[0_0_35px_rgba(255,85,0,0.18)] relative space-y-6">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <Badge variant="orange" pulse size="md">
                PRODUÇÃO SOB DEMANDA • FORMATO EXCLUSIVO
              </Badge>
              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                SEM MENSALIDADE
              </span>
            </div>

            {/* Plan Title & Description */}
            <div className="space-y-2">
              <h3 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
                {plan.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-text-secondary font-sans leading-relaxed">
                {plan.description}
              </p>
            </div>

            {/* Turnaround & Quality Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 py-3 sm:py-4 border-y border-border-official/60 text-xs font-mono">
              <div className="flex items-center gap-2 text-text-primary">
                <Clock className="w-4 h-4 text-accent-neon shrink-0" />
                <span>{plan.turnaround}</span>
              </div>
              <div className="flex items-center gap-2 text-text-primary">
                <Video className="w-4 h-4 text-cdj-cyan shrink-0" />
                <span>{plan.outputQuality}</span>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="space-y-3">
              <h4 className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-text-muted">
                O que está incluso na entrega:
              </h4>
              <ul className="space-y-2.5">
                {plan.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-primary">
                    <div className="w-4 h-4 rounded-full bg-accent-neon/20 border border-accent-neon text-accent-neon flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights Box */}
            <div className="p-4 rounded-xl bg-bg-primary/70 border border-border-official space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-accent-neon uppercase tracking-wider block">
                Diferenciais do Pacote:
              </span>
              {plan.highlights.map((h, hIdx) => (
                <p key={hIdx} className="text-xs text-text-secondary flex items-center gap-2 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-neon shrink-0" />
                  <span>{h}</span>
                </p>
              ))}
            </div>

            {/* Direct Mail CTA */}
            <div className="pt-4 border-t border-border-official/60 space-y-2 w-full box-border">
              <Button
                href={getSecureMailto(
                  'Solicitação de Produção - Set Avulso',
                  'Olá time DJ Clip Cutter,\n\nGostaria de solicitar a produção do meu Set Avulso:\n\n• Link do Set (YouTube/SoundCloud/Drive):\n• Nome do DJ/Artista:\n• Estilo Musical:\n• Observações ou Minutos Favoritos:\n\nAtenciosamente,'
                )}
                variant="primary"
                fullWidth
                size="lg"
                icon={<Mail className="w-4 h-4 shrink-0" />}
                className="w-full max-w-full box-border block text-center py-3.5 px-4 rounded-xl text-sm sm:text-base font-bold"
              >
                {plan.ctaLabel}
              </Button>

              <p className="text-[11px] font-mono text-center text-text-muted">
                Contratação oficial direta: <span className="text-accent-neon">{getSecureEmail()}</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
