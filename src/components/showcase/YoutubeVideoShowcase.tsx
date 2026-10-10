import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { AudioWaveformVisualizer } from '../ui/AudioWaveformVisualizer';
import {
  Play,
  Pause,
  Sparkles,
  Maximize2,
  Radio,
  ShieldCheck,
} from 'lucide-react';

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const YoutubeVideoShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const chips = [
    { label: 'Nitidez e Cores de Palco Preservadas', color: 'orange' },
    { label: 'Enquadramento Vertical Sem Barras Pretas', color: 'cyan' },
    { label: 'Safe Zone Imune a Botões do Reels', color: 'green' },
  ];

  return (
    <section id="video-youtube" className="py-20 lg:py-32 bg-bg-secondary relative border-b border-border-official overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-accent-neon/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cdj-cyan/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="orange" pulse size="md">
              Sets Gravados do YouTube
            </Badge>
            <Badge variant="cyan" size="md">
              Formato Vertical Otimizado
            </Badge>
          </div>

          <h2 className="font-bebas text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-wide leading-[0.95]">
            DO VÍDEO COMPLETO NO YOUTUBE AO{' '}
            <span className="text-accent-neon text-glow-orange block sm:inline">
              CORTE VERTICAL
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-text-secondary font-sans leading-relaxed">
            Aceitamos seu set gravado ou gravação completa no YouTube e adaptamos para o formato vertical preenchendo a tela do celular sem barras pretas, com resolução máxima preservada e cores vibrantes de palco.
          </p>

          {/* Feature Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 max-w-2xl mx-auto">
            {chips.map((chip, idx) => (
              <Badge
                key={idx}
                variant={chip.color as 'orange' | 'cyan' | 'green'}
                size="sm"
                className="py-1 px-2.5 sm:px-3 text-xs"
              >
                {chip.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Interactive Video Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-bg-primary/80 rounded-3xl border border-border-official p-3.5 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl overflow-hidden w-full max-w-full box-border">
          {/* Left Column: Interactive Smartphone Player Mockup */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[340px] mx-auto relative">
              {/* Phone Frame */}
              <div className="relative rounded-[2.2rem] sm:rounded-[2.5rem] bg-bg-card border-2 border-border-official p-2.5 sm:p-3 shadow-2xl overflow-hidden backdrop-blur-2xl">
                {/* Speaker Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-3.5 sm:h-4 bg-bg-primary rounded-full z-30 flex items-center justify-center gap-2 border border-border-official/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-neon/80" />
                  <div className="w-8 h-1 rounded-full bg-text-muted/40" />
                </div>

                {/* Vertical 9:16 Video Display Canvas */}
                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-black flex flex-col justify-between border border-border-subtle select-none">
                  {/* SIMULATED LIVE FESTIVAL STAGE VIDEO BACKGROUND */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#02050c] via-[#091326] to-[#040810]">
                    {/* Pulsing Stage Lights / Lasers */}
                    <div
                      className={`absolute top-0 left-1/4 w-32 h-72 bg-gradient-to-b from-accent-neon/40 via-accent-neon/10 to-transparent transform -rotate-12 blur-md transition-opacity duration-500 ${
                        isPlaying ? 'opacity-90 animate-pulse' : 'opacity-30'
                      }`}
                    />
                    <div
                      className={`absolute top-0 right-1/4 w-32 h-72 bg-gradient-to-b from-cdj-cyan/40 via-cdj-cyan/10 to-transparent transform rotate-12 blur-md transition-opacity duration-500 ${
                        isPlaying ? 'opacity-90 animate-pulse' : 'opacity-30'
                      }`}
                    />

                    {/* Laser Beams criss-cross */}
                    <div
                      className={`absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-neon to-transparent transform -rotate-6 shadow-neon-sm transition-opacity duration-300 ${
                        isPlaying ? 'opacity-90' : 'opacity-20'
                      }`}
                    />
                    <div
                      className={`absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cdj-cyan to-transparent transform rotate-6 shadow-cyan-sm transition-opacity duration-300 ${
                        isPlaying ? 'opacity-90' : 'opacity-20'
                      }`}
                    />

                    {/* Crowd Silhouette */}
                    <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end justify-around px-2 pb-2 opacity-85">
                      <div className="w-4 h-12 bg-black/90 rounded-t-full transform -rotate-6" />
                      <div className="w-5 h-16 bg-black/90 rounded-t-full" />
                      <div className="w-6 h-20 bg-black/90 rounded-t-full transform rotate-3" />
                      <div className="w-5 h-14 bg-black/90 rounded-t-full transform -rotate-2" />
                      <div className="w-6 h-18 bg-black/90 rounded-t-full transform rotate-6" />
                    </div>

                    {/* Live Festival Pyro Spark particles */}
                    {isPlaying && (
                      <div className="absolute inset-0 bg-[radial-gradient(#ff5500_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
                    )}
                  </div>

                  {/* Isolated Top Live Video HUD */}
                  <div className="relative z-20 h-8 px-2.5 sm:px-3.5 bg-black/60 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-vu-red animate-ping" />
                      <span className="text-[8px] sm:text-[9px] font-mono font-bold text-white tracking-widest uppercase">
                        HD / FULL HD PRESERVE
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-black/70 px-1.5 sm:px-2 py-0.5 rounded border border-border-official text-[8px] sm:text-[9px] font-mono text-accent-neon font-bold">
                      FORMATO VERTICAL 9:16
                    </div>
                  </div>

                  {/* Center Action: Play/Pause interactive overlay */}
                  <div className="relative z-20 my-auto flex flex-col items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 backdrop-blur-md border border-accent-neon/60 flex items-center justify-center text-white shadow-neon-glow hover:scale-105 active:scale-95 transition-all group"
                      aria-label={isPlaying ? 'Pausar simulação' : 'Reproduzir simulação'}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-accent-neon group-hover:text-white" />
                      ) : (
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 text-accent-neon fill-current ml-0.5" />
                      )}
                    </button>
                    <span className="text-[8px] sm:text-[9px] font-mono text-text-muted mt-2 bg-black/60 px-2 py-0.5 rounded">
                      {isPlaying ? 'Preview de Palco Ativo' : 'Pausado'}
                    </span>
                  </div>

                  {/* Simulated Reels UI Overlay Right-Side */}
                  <div className="absolute right-2.5 bottom-24 z-20 flex flex-col items-center gap-2.5 select-none pointer-events-none opacity-60">
                    <div className="w-6 h-6 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-[9px] text-white">
                      ❤
                    </div>
                    <div className="w-6 h-6 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-[9px] text-white">
                      💬
                    </div>
                    <div className="w-6 h-6 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-[9px] text-white">
                      ✈
                    </div>
                  </div>

                  {/* LOWER-THIRD EDITORIAL DE PALCO (In the Safe Zone Base) */}
                  <div className="relative z-20 p-2.5 sm:p-4 pb-3 sm:pb-5">
                    <div className="rounded-xl bg-gradient-to-r from-black/95 via-black/85 to-transparent border-l-4 border-accent-neon p-2.5 sm:p-3 backdrop-blur-md space-y-1 max-w-[88%] shadow-2xl">
                      <div className="flex items-center gap-1.5 text-[8px] font-mono text-accent-neon font-bold tracking-widest uppercase">
                        <Radio className="w-2.5 h-2.5 text-accent-neon animate-pulse" />
                        MAIN STAGE FESTIVAL • STAGE CUT
                      </div>
                      <h4 className="font-bebas text-base sm:text-lg text-white leading-tight tracking-wider truncate font-bold">
                        VORTEX OVERDRIVE
                      </h4>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-mono text-text-secondary truncate">
                        <span className="text-white font-medium">132 BPM</span>
                        <span>•</span>
                        <span className="text-cdj-cyan truncate">ÁUDIO MASTER</span>
                      </div>
                    </div>

                    {/* Bottom audio waveform in neon orange */}
                    <div className="mt-2 pt-1.5 sm:pt-2 border-t border-white/10 flex items-center justify-between">
                      <div className="w-2/3">
                        <AudioWaveformVisualizer barsCount={16} height={16} color="#FF5500" isPlaying={isPlaying} />
                      </div>
                      <span className="text-[7px] sm:text-[8px] font-mono text-text-muted">
                        0.00ms DELAY
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption below phone */}
              <p className="text-[11px] font-mono text-text-muted text-center mt-3">
                ▲ Renderização vertical 9:16 nativa sem barras pretas e com Lower-Third na safe zone.
              </p>
            </div>
          </div>

          {/* Right Column: Technical Details & Production Flow */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-950/60 border border-red-500/40 flex items-center justify-center">
                <YoutubeIcon className="w-4 h-4 text-red-500" />
              </div>
              <span className="font-mono text-xs uppercase text-red-400 font-bold tracking-wider">
                Vídeos & Sets do YouTube
              </span>
            </div>

            <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide leading-tight">
              ENQUADRAMENTO DINÂMICO{' '}
              <span className="text-accent-neon text-glow-orange">VERTICAL 9:16</span>{' '}
              SEM DEFORMAÇÃO
            </h3>

            <p className="text-sm sm:text-base text-text-secondary font-sans leading-relaxed">
              Vídeos de sets no YouTube geralmente são gravados em 16:9 widescreen tradicional. Em vez de simplesmente dar zoom tosco ou colocar barras pretas estáticas, realizamos reenquadramento inteligente com tracking da cabine do DJ e do palco.
            </p>

            {/* 3 Production Feature Cards */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-xl bg-bg-card border border-border-official hover:border-accent-neon/40 transition-colors">
                <div className="flex items-center gap-2.5">
                  <Maximize2 className="w-4 h-4 text-accent-neon shrink-0" />
                  <span className="font-semibold text-sm text-white">
                    Enquadramento Vertical 9:16
                  </span>
                </div>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed font-sans">
                  Preenchimento total da tela vertical sem perda de proporção e sem barras pretas. O foco permanece fixo nas mãos do DJ, nas CDJs e na explosão visual do palco.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg-card border border-border-official hover:border-cdj-cyan/40 transition-colors">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-cdj-cyan shrink-0" />
                  <span className="font-semibold text-sm text-white">
                    Nitidez e Cores de Palco Preservadas
                  </span>
                </div>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed font-sans">
                  Ajuste fino de contraste e nitidez nativa para valorizar feixes de laser, iluminação de palco e movimentos na cabine, sem distorção e sem ruído artificial.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg-card border border-border-official hover:border-vu-green/40 transition-colors">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-vu-green shrink-0" />
                  <span className="font-semibold text-sm text-white">
                    Lower-Third Editorial Blindado
                  </span>
                </div>
                <p className="text-xs text-text-secondary mt-1.5 leading-relaxed font-sans">
                  Créditos oficiais do DJ, nome da track e do evento gravados exclusivamente na base protegida da tela — imune aos ícones de engajamento do Instagram Reels e TikTok.
                </p>
              </div>
            </div>

            {/* Direct Action Link to Email */}
            <div className="pt-4 flex flex-col items-center justify-center gap-3 w-full max-w-md mx-auto lg:mx-0 box-border text-center">
              <Button
                href="#contato"
                variant="primary"
                icon={<YoutubeIcon className="w-4 h-4 text-white shrink-0" />}
                className="w-full max-w-md mx-auto py-3.5 px-6 flex items-center justify-center gap-2.5 rounded-xl text-center text-sm font-semibold leading-tight shadow-neon-glow"
              >
                Enviar Link do YouTube para Corte
              </Button>

              <span className="text-xs font-mono text-text-muted text-center">
                Fluidez nativa e otimizado para Reels e Stories
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
