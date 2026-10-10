import React from 'react';
import { TECHNICAL_PILLARS, SAFE_ZONE_SPECS } from '../../data/differentials';
import { Badge } from '../ui/Badge';
import { GlowCard } from '../ui/GlowCard';
import { Cpu, Activity, Waves, Disc3 } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="engenharia" className="py-16 sm:py-20 lg:py-32 bg-bg-primary relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-1/4 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-accent-neon/10 blur-[140px] sm:blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-4 sm:left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-cdj-cyan/10 blur-[140px] sm:blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">
        {/* SECTION 1: 3 PILARES TÉCNICOS */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 flex-wrap justify-center">
              <Badge variant="orange" size="md">
                Engenharia de Ponta
              </Badge>
              <Badge variant="cyan" size="md">
                Audio Intelligence
              </Badge>
            </div>
            <h2 className="font-bebas text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-tight">
              A CIÊNCIA POR TRÁS DO{' '}
              <span className="text-accent-neon text-glow-orange block sm:inline">PADRÃO STUDIO BROADCAST</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary font-sans leading-relaxed">
              Enquanto ferramentas automatizadas geram cortes sem contexto musical, combinamos curadoria de estúdio com renderização de alta fidelidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TECHNICAL_PILLARS.map((pillar, idx) => {
              const renderPillarIcon = () => {
                if (idx === 0) return <Activity className="w-6 h-6 text-accent-neon" />;
                if (idx === 1) return <Cpu className="w-6 h-6 text-cdj-cyan" />;
                return <Waves className="w-6 h-6 text-accent-neon" />;
              };

              return (
                <GlowCard
                  key={pillar.id}
                  glowColor={idx === 1 ? 'cyan' : 'orange'}
                  className="flex flex-col justify-between p-5 sm:p-6"
                >
                  <div className="space-y-4">
                    {/* Header with Icon and Kicker */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-bg-subtle border border-border-official flex items-center justify-center">
                        {renderPillarIcon()}
                      </div>
                      <span className="text-[11px] font-mono text-text-muted font-bold tracking-wider">
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-accent-neon uppercase tracking-wider block">
                        {pillar.kicker}
                      </span>
                      <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide mt-1">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Metric & Tags */}
                  <div className="pt-5 mt-5 border-t border-border-official/60 space-y-3.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide">
                        {pillar.metric}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono text-text-muted text-right">
                        {pillar.metricLabel}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-primary border border-border-official text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: SAFE ZONES DA GRADE EXPLICADAS */}
        <div id="safezones" className="bg-bg-secondary/90 rounded-3xl border border-border-official p-4 sm:p-8 lg:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 flex-wrap">
                <Badge variant="cyan" size="md">
                  Arquitetura de Enquadramento
                </Badge>
                <Badge variant="orange" size="md">
                  Zero Elemento Oculto
                </Badge>
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide leading-tight">
                A MATEMÁTICA DAS <span className="text-cdj-cyan text-glow-cyan">SAFE ZONES</span> PARA REDES SOCIAIS
              </h3>

              <p className="text-sm sm:text-base text-text-secondary font-sans leading-relaxed">
                Um dos maiores erros em cortes amadores é posicionar títulos e artes nas bordas da tela, onde são cobertos pelos botões de curtir, comentários e descrição do app. No DJ Clip Cutter, cada frame obedece ao padrão triplo de sobreposição.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-1">
                {SAFE_ZONE_SPECS.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3.5 sm:p-4 rounded-xl bg-bg-primary/80 border border-border-official flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 hover:border-accent-neon/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bebas text-lg sm:text-xl text-accent-neon">
                          {spec.ratio}
                        </span>
                        <span className="font-semibold text-xs sm:text-sm text-white">
                          {spec.title}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary mt-1">
                        {spec.description}
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-xs font-mono font-bold text-cdj-cyan block">
                        {spec.resolution}
                      </span>
                      <span className="text-[10px] font-mono text-vu-green">
                        {spec.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Diagram of Safe Zones Layering */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <div className="relative w-full max-w-[270px] sm:max-w-[320px] mx-auto aspect-[9/16] rounded-3xl bg-bg-primary border-2 border-border-official p-3.5 sm:p-4 shadow-2xl flex flex-col justify-between overflow-hidden">
                {/* 9:16 Full Boundary */}
                <div className="absolute top-2 left-2 right-2 flex justify-between items-center text-[9px] sm:text-[10px] font-mono text-blue-400 border-b border-blue-500/30 pb-1">
                  <span>9:16 TOTAL CANVAS</span>
                  <span>1080 × 1920 (9:16)</span>
                </div>

                {/* 4:5 Feed Frame */}
                <div className="my-auto h-[78%] w-full rounded-2xl border-2 border-dashed border-cdj-cyan/60 p-2.5 sm:p-3 flex flex-col justify-between relative bg-cdj-cyan/5">
                  <div className="flex justify-between items-center text-[8px] sm:text-[9px] font-mono text-cdj-cyan font-bold">
                    <span>4:5 FEED PORTRAIT</span>
                    <span>1080 × 1350</span>
                  </div>

                  {/* 1:1 Feed Central Square Safe Zone */}
                  <div className="my-auto h-[62%] w-full rounded-xl border-2 border-accent-neon p-2 sm:p-3 flex flex-col items-center justify-center text-center bg-accent-neon/10 shadow-neon-sm relative">
                    <div className="absolute -top-2.5 bg-bg-primary px-2 rounded-full border border-accent-neon text-[7px] sm:text-[8px] font-mono text-accent-neon font-bold uppercase truncate max-w-[90%]">
                      ★ 1:1 SAFE ZONE GRADE
                    </div>

                    <Disc3 className="w-8 sm:w-10 h-8 sm:h-10 text-accent-neon animate-spin-slow mb-1" />
                    <span className="text-xs font-bebas text-white tracking-wider">
                      DISCO • ARTISTA • DROP
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-mono text-text-muted">
                      1080 × 1080 QUADRADO
                    </span>
                  </div>

                  <div className="text-center text-[8px] sm:text-[9px] font-mono text-text-muted">
                    Área livre de obstruções de botões
                  </div>
                </div>

                {/* Bottom App Simulation */}
                <div className="pt-2 border-t border-border-official flex justify-between text-[9px] sm:text-[10px] font-mono text-text-muted">
                  <span>Padrão Studio Broadcast</span>
                  <span className="text-accent-neon">100% Protegido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
