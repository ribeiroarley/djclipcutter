import React from 'react';
import { Mail, ShieldCheck, Disc3, Radio, Send } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { getSecureEmail } from '../../utils/security';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-official bg-bg-secondary/80 relative overflow-hidden">
      {/* Decorative top accent line with neon glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-accent-neon to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-bg-card border border-border-official flex items-center justify-center">
                <Radio className="w-5 h-5 text-accent-neon" />
              </div>
              <span className="font-bebas text-2xl tracking-wider text-text-primary">
                DJ CLIP CUTTER
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-md">
              Cortes inteligentes em alta fidelidade e design visual para DJs e produtores de música eletrônica. Sincronia perfeita com o drop.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 justify-center md:justify-start">
              <Badge variant="orange" size="sm">
                Alta Definição
              </Badge>
              <Badge variant="cyan" size="sm">
                Sincronia no Drop
              </Badge>
              <Badge variant="green" size="sm">
                Fluidez Nativa
              </Badge>
            </div>
          </div>

          {/* Direct Contact Block */}
          <div className="md:col-span-4 space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-text-primary flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-3.5 h-3.5 text-accent-neon" />
              Canal Oficial Único de Contratação
            </h4>
            <p className="text-xs text-text-secondary">
              Envie o link do seu set ou projeto diretamente para nosso canal de atendimento:
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-accent-neon hover:text-white transition-colors bg-accent-neon/10 px-3.5 py-2 rounded-lg border border-accent-neon/30 hover:border-accent-neon"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar Briefing do Set</span>
            </a>
            <p className="text-[11px] font-mono text-text-muted">
              Canal oficial: <span className="text-zinc-300 font-semibold">{getSecureEmail()}</span>
            </p>
          </div>

          {/* Standards & Philosophy */}
          <div className="md:col-span-3 space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-text-primary flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-cdj-cyan" />
              Diretrizes de Qualidade
            </h4>
            <ul className="text-xs text-text-secondary space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-neon shrink-0" />
                Alta Fidelidade Visual
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cdj-cyan shrink-0" />
                Sincronia Precisa no Drop
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vu-green shrink-0" />
                Renderização com Fluidez Nativa
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-neon shrink-0" />
                Safe Zones 1:1, 4:5 e 9:16
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border-official/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-mono text-center sm:text-left">
          <div className="flex items-center justify-center gap-2">
            <Disc3 className="w-3.5 h-3.5 text-accent-neon animate-spin-slow shrink-0" />
            <span>
              &copy; 2026 DJ CLIP CUTTER • Cortes Verticais para DJs. Todos os direitos reservados.
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="text-text-secondary">Produção Audiovisual para DJs & Produtores</span>
            <span className="text-border-official hidden sm:inline">•</span>
            <span className="text-accent-neon">{getSecureEmail()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
