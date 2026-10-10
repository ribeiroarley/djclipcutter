import React from 'react';
import { Mail, Disc, Play, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { AudioWaveformVisualizer } from '../ui/AudioWaveformVisualizer';
import { VuMeter } from '../ui/VuMeter';
import { getSecureMailto } from '../../utils/security';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-36 pb-16 lg:pb-32 overflow-hidden bg-radial-booth">
      {/* Studio grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Ambient ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-accent-neon/15 blur-[120px] sm:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-cdj-cyan/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full box-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full box-border">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left w-full box-border">
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
              <Badge variant="orange" pulse size="md">
                Design Profissional
              </Badge>
              <Badge variant="cyan" size="md">
                Alta Fidelidade Visual
              </Badge>
            </div>

            {/* Impact Headline */}
            <h1 className="font-bebas text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.05] sm:leading-[0.92]">
              TRANSFORME SEUS SETS EM{' '}
              <span className="text-accent-neon text-glow-orange block sm:inline">
                VÍDEOS VERTICAIS.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Produção sob demanda para apresentações gravadas, sets completos e faixas autorais.
            </p>

            {/* Action Buttons */}
            <div className="w-full max-w-sm sm:max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-3.5 my-6 lg:mx-0 lg:max-w-none lg:justify-start box-border">
              <Button
                href={getSecureMailto()}
                variant="primary"
                icon={<Mail className="w-4 h-4 shrink-0" />}
                iconPosition="left"
                className="h-12 w-full sm:w-auto px-6 flex items-center justify-center gap-2.5 rounded-xl font-semibold text-sm transition-all shadow-neon-glow"
              >
                Solicitar Demonstração via E-mail
              </Button>

              <Button
                href="#video-youtube"
                variant="secondary"
                icon={<ArrowRight className="w-4 h-4 shrink-0" />}
                iconPosition="right"
                className="h-12 w-full sm:w-auto px-6 flex items-center justify-center gap-2.5 rounded-xl font-semibold text-sm transition-all"
              >
                Ver Demonstração de Vídeo
              </Button>
            </div>

            {/* Diretrizes de Produção */}
            <div className="pt-6 border-t border-border-official/70 flex flex-col gap-2.5 w-full max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-2.5 px-3 py-2 text-xs sm:text-sm text-text-secondary rounded-lg bg-bg-card/40 border border-border-official/40">
                <span className="w-4 h-4 rounded-full bg-accent-neon/15 border border-accent-neon/40 flex items-center justify-center shrink-0 mt-0.5 text-accent-neon font-bold text-[10px]">
                  ✓
                </span>
                <span>
                  <strong className="text-white font-medium">Sincronia no Drop:</strong> Detecção acústica do momento de maior impacto.
                </span>
              </div>

              <div className="flex items-start gap-2.5 px-3 py-2 text-xs sm:text-sm text-text-secondary rounded-lg bg-bg-card/40 border border-border-official/40">
                <span className="w-4 h-4 rounded-full bg-cdj-cyan/15 border border-cdj-cyan/40 flex items-center justify-center shrink-0 mt-0.5 text-cdj-cyan font-bold text-[10px]">
                  ✓
                </span>
                <span>
                  <strong className="text-white font-medium">Formatos Otimizados:</strong> Vídeos prontos para Reels (9:16), Feed Retrato (4:5) e Stories.
                </span>
              </div>

              <div className="flex items-start gap-2.5 px-3 py-2 text-xs sm:text-sm text-text-secondary rounded-lg bg-bg-card/40 border border-border-official/40">
                <span className="w-4 h-4 rounded-full bg-vu-green/15 border border-vu-green/40 flex items-center justify-center shrink-0 mt-0.5 text-vu-green font-bold text-[10px]">
                  ✓
                </span>
                <span>
                  <strong className="text-white font-medium">Safe Zones Blindadas:</strong> Visualização limpa sem cortes de interface na grade do perfil.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Player Mockup Preview */}
          <div className="lg:col-span-5 flex justify-center w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[340px] mx-auto">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-accent-neon/30 via-cdj-cyan/20 to-transparent blur-xl opacity-70 animate-pulse-slow pointer-events-none" />

              {/* Smartphone 9:16 Mockup Frame */}
              <div className="relative rounded-[2.2rem] sm:rounded-[2.5rem] bg-bg-secondary border-2 border-border-official shadow-2xl p-2.5 sm:p-3.5 backdrop-blur-xl">
                {/* Speaker & Sensor Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-3.5 sm:h-4 bg-bg-primary rounded-full z-20 flex items-center justify-center gap-2 border border-border-official/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-neon/80" />
                  <div className="w-8 h-1 rounded-full bg-text-muted/40" />
                </div>

                {/* Inner Screen (9:16 Ratio Showcase) */}
                <div className="relative rounded-[1.8rem] sm:rounded-[2rem] bg-gradient-to-b from-[#0c1424] via-[#070d17] to-[#040810] overflow-hidden border border-border-official pt-8 pb-3 sm:pb-4 px-3 sm:px-4 flex flex-col justify-between h-[480px] sm:h-[560px]">
                  {/* Top Overlay Bar */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-vu-red animate-ping" />
                      <span className="text-[8px] sm:text-[10px] font-mono font-bold text-white tracking-widest bg-black/60 px-1.5 sm:px-2 py-0.5 rounded border border-border-official">
                        ALTA DEFINIÇÃO • FLUIDEZ NATIVA
                      </span>
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-mono text-accent-neon font-bold tracking-wider">
                      LANCZOS RESAMPLE
                    </span>
                  </div>

                  {/* Central Simulated Content: Vinyl 3D / Waveform Booth */}
                  <div className="relative my-auto flex flex-col items-center justify-center text-center">
                    {/* Safe Zone 1:1 Square Visual Indicator */}
                    <div className="relative w-40 xs:w-44 sm:w-52 h-40 xs:h-44 sm:h-52 rounded-2xl bg-bg-primary/80 border border-dashed border-accent-neon/40 p-2.5 sm:p-4 flex flex-col items-center justify-center shadow-neon-sm">
                      {/* Vinyl Rotating Simulation */}
                      <div className="relative w-32 xs:w-36 sm:w-40 h-32 xs:h-36 sm:h-40 rounded-full bg-gradient-to-tr from-[#111] via-[#1a1a1a] to-[#0d0d0d] border border-border-subtle shadow-2xl flex items-center justify-center animate-spin-slow">
                        {/* Grooves */}
                        <div className="absolute inset-1.5 sm:inset-2 rounded-full border border-white/5" />
                        <div className="absolute inset-3 sm:inset-4 rounded-full border border-white/5" />
                        <div className="absolute inset-5 sm:inset-6 rounded-full border border-white/10" />
                        
                        {/* Center Label */}
                        <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-accent-neon/90 p-1 flex flex-col items-center justify-center text-center border-2 border-white/20 shadow-inner">
                          <Disc className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                          <span className="text-[6px] sm:text-[7px] font-mono font-bold text-black uppercase tracking-tighter">
                            33 RPM • HI-FI
                          </span>
                        </div>
                      </div>

                      {/* Safe Zone Label Tag */}
                      <div className="absolute -bottom-2.5 bg-bg-card/90 border border-accent-neon/60 px-2 py-0.5 rounded-full text-[7px] sm:text-[9px] font-mono text-accent-neon">
                        SAFE ZONE 1:1 INSTAGRAM
                      </div>
                    </div>

                    {/* Track Info Editorial */}
                    <div className="mt-5 space-y-1 w-full px-2">
                      <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                        <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-accent-neon/15 text-accent-neon border border-accent-neon/30">
                          128 BPM
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-cdj-cyan/15 text-cdj-cyan border border-cdj-cyan/30">
                          KEY 8A
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-text-secondary">
                          DROP PEAK
                        </span>
                      </div>
                      <h4 className="font-bebas text-xl sm:text-2xl text-white tracking-wider truncate">
                        AURA MATRIX (ORIGINAL MIX)
                      </h4>
                      <p className="text-[11px] sm:text-xs text-text-secondary font-mono truncate">
                        DJ CLIP CUTTER • AUDIO MASTER
                      </p>
                    </div>
                  </div>

                  {/* Bottom Console: Real-time Audio Reactive Waveform & VU Meter */}
                  <div className="bg-bg-primary/90 rounded-xl p-2.5 sm:p-3 border border-border-official space-y-2">
                    <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-text-muted">
                      <span className="text-white flex items-center gap-1">
                        <Play className="w-2.5 h-2.5 fill-current text-accent-neon" /> 03:24.12
                      </span>
                      <span className="text-cdj-cyan font-bold">STEREO MASTER</span>
                    </div>

                    <div className="flex items-center justify-between gap-2 sm:gap-3">
                      <div className="flex-1 overflow-hidden">
                        <AudioWaveformVisualizer barsCount={22} height={26} color="#FF5500" />
                      </div>
                      <VuMeter channels={2} compact />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
