import React, { useState } from 'react';
import { TEMPLATES_DATA } from '../../data/templates';
import type { AspectRatioType } from '../../types';
import { TemplatePreview } from './TemplatePreview';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Check, Send, Layers } from 'lucide-react';

export const Showcase: React.FC = () => {
  const [activeTemplateIndex, setActiveTemplateIndex] = useState(0);
  const [activeRatio, setActiveRatio] = useState<AspectRatioType | 'all'>('all');

  const currentTemplate = TEMPLATES_DATA[activeTemplateIndex];

  return (
    <section id="templates" className="py-16 sm:py-20 lg:py-32 bg-bg-secondary relative border-y border-border-official overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent-neon/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-cdj-cyan/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="orange" size="md">
              Coleção Oficial de Estúdio
            </Badge>
            <Badge variant="cyan" size="md">
              Safe Zones 1:1 • 4:5 • 9:16
            </Badge>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-tight">
            TEMPLATES INTERATIVOS COM{' '}
            <span className="text-accent-neon text-glow-orange block sm:inline">MOTION DESIGN REATIVO</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed font-sans">
            Visualizadores de áudio de alta fidelidade para faixas e sets do SoundCloud ou arquivos locais, com waveforms pulsando no ritmo exato da pista.
          </p>
        </div>

        {/* Template Selector: Symmetrical Grid on Mobile (3x3), Tablet, and Desktop (1x9) */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-1.5 sm:gap-2.5 w-full mb-8 sm:mb-10">
          {TEMPLATES_DATA.map((tmpl, idx) => {
            const isSelected = idx === activeTemplateIndex;
            return (
              <button
                key={tmpl.id}
                onClick={() => setActiveTemplateIndex(idx)}
                className={`p-2 sm:p-2.5 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between w-full group active:scale-95 ${
                  isSelected
                    ? 'bg-bg-card border-accent-neon shadow-neon-sm -translate-y-0.5'
                    : 'bg-bg-primary/60 border-border-official hover:border-border-subtle hover:bg-bg-card/70'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1 sm:mb-1.5">
                  <span
                    className={`font-mono text-[9px] sm:text-[10px] font-bold ${
                      isSelected ? 'text-accent-neon' : 'text-text-muted group-hover:text-text-secondary'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? 'bg-accent-neon shadow-[0_0_6px_#FF5500]' : 'bg-border-official'
                    }`}
                  />
                </div>
                <span
                  className={`text-[10px] sm:text-xs font-semibold leading-snug line-clamp-2 ${
                    isSelected ? 'text-white' : 'text-text-secondary group-hover:text-white'
                  }`}
                >
                  {tmpl.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage: Details on Left, Live Simulator on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center bg-bg-primary/70 rounded-3xl border border-border-official p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          {/* Left Details Panel */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="orange" size="sm">
                Template #{activeTemplateIndex + 1}
              </Badge>
              <Badge variant="cyan" size="sm">
                {currentTemplate.category}
              </Badge>
              <Badge variant="neutral" size="sm">
                {currentTemplate.badge}
              </Badge>
            </div>

            <div>
              <h3 className="font-bebas text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-wide">
                {currentTemplate.name}
              </h3>
              <p className="text-sm sm:text-base text-accent-neon font-mono mt-1">
                {currentTemplate.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed font-sans">
              {currentTemplate.description}
            </p>

            {/* Template Features Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-border-official/60">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted">
                Especificações de Renderização:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {currentTemplate.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-text-primary">
                    <div className="w-4 h-4 rounded-full bg-accent-neon/15 border border-accent-neon/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-accent-neon" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safe Zone Control Toggles */}
            <div className="pt-3 border-t border-border-official/60 space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-xs font-mono text-text-secondary flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cdj-cyan" />
                  Simulador de Safe Zones:
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-text-muted">
                  Toque para isolar a proporção
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'Todas as Grades' },
                  { id: '1:1', label: '1:1 Grade Quadrada' },
                  { id: '4:5', label: '4:5 Feed Retrato' },
                  { id: '9:16', label: '9:16 Reels / TikTok' },
                ].map((ratio) => (
                  <button
                    key={ratio.id}
                    onClick={() => setActiveRatio(ratio.id as AspectRatioType | 'all')}
                    className={`text-xs font-mono px-2.5 sm:px-3 py-1.5 rounded-lg border transition-all active:scale-95 ${
                      activeRatio === ratio.id
                        ? 'bg-accent-neon text-white border-accent-neon shadow-neon-sm font-bold'
                        : 'bg-bg-subtle/80 text-text-secondary border-border-official hover:text-white'
                    }`}
                  >
                    {ratio.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full box-border">
              <Button
                href="#contato"
                variant="primary"
                size="md"
                icon={<Send className="w-4 h-4 shrink-0" />}
                className="w-full max-w-full box-border flex items-center justify-center text-center px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold sm:w-auto"
              >
                Solicitar com este Template
              </Button>

              <span className="text-xs font-mono text-text-muted text-center sm:text-left">
                Envio com validação de link em tempo real
              </span>
            </div>
          </div>

          {/* Right Live Preview Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <div className="w-full flex items-center justify-center">
              <TemplatePreview
                template={currentTemplate}
                activeRatio={activeRatio}
              />
            </div>
            <p className="text-[10px] sm:text-[11px] font-mono text-text-muted mt-3 sm:mt-4 text-center">
              ▲ Exibição fiel em 9:16 com marcação de Safe Zone integrada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
