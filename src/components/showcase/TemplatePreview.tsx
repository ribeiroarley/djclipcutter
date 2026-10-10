import React from 'react';
import type { TemplateItem, AspectRatioType } from '../../types';
import { Disc, Play, HardDrive, Music } from 'lucide-react';
import { AudioWaveformVisualizer } from '../ui/AudioWaveformVisualizer';
import { VuMeter } from '../ui/VuMeter';

interface TemplatePreviewProps {
  template: TemplateItem;
  activeRatio: AspectRatioType | 'all';
}

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({
  template,
  activeRatio,
}) => {
  const { mockTrack, id } = template;

  // Custom visual component renderer based on template ID
  const renderTemplateArt = () => {
    switch (id) {
      case 'vinil-3d':
        return (
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
            {/* Vinyl record disc */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] shadow-2xl border border-zinc-800 flex items-center justify-center animate-spin-slow relative">
              {/* Vinyl grooves */}
              <div className="absolute inset-1.5 sm:inset-2 rounded-full border border-white/5" />
              <div className="absolute inset-3 sm:inset-4 rounded-full border border-white/5" />
              <div className="absolute inset-5 sm:inset-6 rounded-full border border-white/10" />
              <div className="absolute inset-7 sm:inset-8 rounded-full border border-white/5" />
              {/* Glossy reflection sweep */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none transform -rotate-45" />
              {/* Center label */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent-neon flex flex-col items-center justify-center text-center border-2 border-white/30 shadow-inner">
                <Disc className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
                <span className="text-[6px] sm:text-[7px] font-mono font-bold text-black uppercase tracking-tight">
                  33 RPM
                </span>
              </div>
            </div>
            {/* Tone arm indication */}
            <div className="absolute -top-1 -right-1 w-12 sm:w-16 h-1 bg-gradient-to-r from-zinc-400 to-zinc-600 rounded transform rotate-45 shadow-lg border border-black/50" />
          </div>
        );

      case 'cd-jewel-case':
        return (
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-xl bg-white/5 border border-white/30 p-2 shadow-2xl backdrop-blur-md flex items-center justify-center overflow-hidden">
            {/* Holographic shine gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cdj-cyan/20 via-accent-neon/20 to-purple-500/20 opacity-70 pointer-events-none" />
            {/* Acrylic spine */}
            <div className="absolute left-1 top-0 bottom-0 w-2.5 sm:w-3 bg-zinc-800/80 border-r border-white/20 flex flex-col justify-between py-2 items-center">
              <span className="text-[5px] sm:text-[6px] font-mono text-zinc-400 rotate-90 whitespace-nowrap">DJCC-2026</span>
            </div>
            {/* Compact Disc */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-zinc-300 via-zinc-100 to-zinc-400 border border-white/40 shadow-inner flex items-center justify-center relative animate-spin-slow">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/80 border border-white/30 flex items-center justify-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-transparent border-2 border-white/50" />
              </div>
            </div>
          </div>
        );

      case 'pendrive-pro-usb':
        return (
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex flex-col items-center justify-center">
            {/* USB Body */}
            <div className="w-20 sm:w-24 h-32 sm:h-40 rounded-xl bg-gradient-to-b from-zinc-700 via-zinc-900 to-black border border-cdj-cyan/40 p-2.5 sm:p-3 shadow-cyan-glow flex flex-col justify-between items-center relative">
              <div className="w-10 sm:w-12 h-5 sm:h-6 bg-zinc-400/80 rounded-t-sm border border-zinc-200 flex justify-center items-center">
                <div className="w-5 sm:w-6 h-1.5 sm:h-2 bg-zinc-900 rounded-sm" />
              </div>
              <div className="text-center">
                <HardDrive className="w-5 h-5 sm:w-7 sm:h-7 text-cdj-cyan mx-auto mb-1 animate-pulse" />
                <span className="text-[7px] sm:text-[8px] font-mono font-bold text-white tracking-widest uppercase block">
                  PRO USB 3.2
                </span>
                <span className="text-[6px] sm:text-[7px] font-mono text-cdj-cyan block">
                  LOSSLESS MASTER
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/60 px-2 py-0.5 rounded-full border border-cdj-cyan/30">
                <span className="w-1.5 h-1.5 rounded-full bg-cdj-cyan animate-ping" />
                <span className="text-[6px] sm:text-[7px] font-mono text-cdj-cyan font-bold">ACT LED</span>
              </div>
            </div>
          </div>
        );

      case 'now-playing-player':
        return (
          <div className="w-full max-w-[190px] sm:max-w-[220px] rounded-2xl bg-bg-card/90 border border-border-official p-3 sm:p-4 shadow-xl space-y-2.5 sm:space-y-3">
            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-accent-neon/30 to-cdj-cyan/20 border border-border-subtle flex items-center justify-center">
              <Music className="w-9 h-9 sm:w-12 sm:h-12 text-accent-neon" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-full bg-bg-subtle rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-accent-neon rounded-full" />
              </div>
              <div className="flex justify-between text-[7px] sm:text-[8px] font-mono text-text-muted">
                <span>02:18</span>
                <span>06:42</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent-neon flex items-center justify-center text-white shadow-neon-sm">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
            </div>
          </div>
        );

      case 'fita-cassete-k7':
        return (
          <div className="w-40 sm:w-48 h-28 sm:h-32 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 border-2 border-zinc-700 p-2 shadow-2xl flex flex-col justify-between relative">
            <div className="flex justify-between items-center px-1 text-[7px] sm:text-[8px] font-mono text-accent-neon font-bold">
              <span>SIDE A</span>
              <span>CHROME 90</span>
            </div>
            {/* Center cassette window */}
            <div className="h-12 sm:h-14 bg-zinc-900/90 rounded border border-zinc-700/80 flex items-center justify-around px-2 sm:px-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-dashed border-zinc-500 flex items-center justify-center animate-spin-slow">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-zinc-400" />
              </div>
              <div className="w-10 sm:w-14 h-5 sm:h-6 bg-red-950/60 rounded flex items-center justify-center border border-red-900/40">
                <span className="text-[6px] sm:text-[7px] font-mono text-red-400 font-bold">MAGNETIC</span>
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-dashed border-zinc-500 flex items-center justify-center animate-spin-slow">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-zinc-400" />
              </div>
            </div>
            <div className="text-center text-[6px] sm:text-[7px] font-mono text-zinc-400 uppercase tracking-widest">
              BERLIN UNDERGROUND REC.
            </div>
          </div>
        );

      case 'mixer-dj-pro-vu':
        return (
          <div className="w-40 sm:w-48 rounded-xl bg-gradient-to-b from-zinc-900 to-black border border-border-official p-2.5 sm:p-3 shadow-2xl space-y-2 sm:space-y-3">
            <div className="flex justify-around items-center">
              <VuMeter channels={2} compact />
              <VuMeter channels={2} compact />
            </div>
            <div className="pt-1.5 border-t border-zinc-800 flex justify-between items-center px-1">
              <span className="text-[7px] sm:text-[8px] font-mono text-text-muted">MASTER CH</span>
              <span className="text-[7px] sm:text-[8px] font-mono text-vu-red font-bold">+6dB PEAK</span>
            </div>
          </div>
        );

      case 'fone-cabine-dj':
        return (
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
            {/* Headphones icon stylized illustration */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-zinc-700/80 flex items-center justify-between px-1 shadow-2xl">
              <div className="w-8 sm:w-10 h-12 sm:h-16 rounded-xl bg-gradient-to-b from-zinc-800 to-black border-2 border-cdj-cyan shadow-cyan-glow flex items-center justify-center">
                <span className="text-[6px] sm:text-[7px] font-mono text-cdj-cyan font-bold rotate-90">CUE L</span>
              </div>
              <div className="w-8 sm:w-10 h-12 sm:h-16 rounded-xl bg-gradient-to-b from-zinc-800 to-black border-2 border-accent-neon shadow-neon-sm flex items-center justify-center">
                <span className="text-[6px] sm:text-[7px] font-mono text-accent-neon font-bold -rotate-90">CUE R</span>
              </div>
            </div>
            <div className="absolute -bottom-1 w-20 sm:w-24 h-4 sm:h-5 border-b-2 border-accent-neon/50 rounded-full" />
          </div>
        );

      case 'cdj-jog-wheel-pro':
        return (
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
            {/* Platter Outer Ring */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-b from-zinc-800 via-black to-zinc-900 border-4 border-zinc-700 shadow-2xl flex items-center justify-center p-1.5 sm:p-2">
              {/* Outer LED ring */}
              <div className="w-26 h-26 sm:w-34 sm:h-34 rounded-full border-2 border-cdj-cyan/60 shadow-cyan-glow flex items-center justify-center relative">
                {/* Rotating cue needle */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-4 sm:h-5 bg-accent-neon rounded-full shadow-neon-glow" />
                {/* Center LCD display */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black border-2 border-zinc-800 flex flex-col items-center justify-center text-center p-1">
                  <span className="text-[6px] sm:text-[7px] font-mono text-cdj-cyan font-bold tracking-tighter">
                    CDJ-3000 MODE
                  </span>
                  <span className="text-xs sm:text-sm font-bebas text-white tracking-widest">
                    {mockTrack.bpm}
                  </span>
                  <span className="text-[6px] sm:text-[7px] font-mono text-accent-neon">
                    {mockTrack.key}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'editorial-waveform':
      default:
        return (
          <div className="w-full max-w-[200px] sm:max-w-[230px] rounded-xl bg-bg-card border border-accent-neon/40 p-3 sm:p-4 shadow-neon-sm space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between text-[7px] sm:text-[8px] font-mono text-text-secondary border-b border-border-official pb-1.5">
              <span className="text-accent-neon font-bold">EDITORIAL GRID</span>
              <span>ÁUDIO MASTER</span>
            </div>
            <div className="space-y-1">
              <span className="text-[8px] sm:text-[9px] font-mono text-cdj-cyan block tracking-wider uppercase">
                {mockTrack.genre}
              </span>
              <h5 className="font-bebas text-base sm:text-lg text-white leading-none">
                {mockTrack.title}
              </h5>
              <p className="text-[9px] sm:text-[10px] text-text-muted font-mono truncate">
                {mockTrack.artist}
              </p>
            </div>
            <AudioWaveformVisualizer barsCount={18} height={28} color="#FF5500" />
          </div>
        );
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] max-h-[500px] sm:max-h-[580px] rounded-[1.8rem] sm:rounded-[2rem] bg-gradient-to-b from-[#0c1424] via-[#070d17] to-[#040810] border-2 border-border-official shadow-2xl p-3 sm:p-4 flex flex-col justify-between overflow-hidden select-none">
      {/* 1. ISOLATED TOP STATUS BAR (h-8 with clean padding, completely separated from headers) */}
      <div className="relative z-20 h-8 -mx-3 -mt-3 sm:-mx-4 sm:-mt-4 px-3 sm:px-4 bg-black/60 border-b border-border-official/60 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-neon animate-ping" />
          <span className="text-[8px] sm:text-[9px] font-mono font-bold text-white tracking-wider">
            ALTA DEFINIÇÃO • 60FPS
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {activeRatio !== 'all' && (
            <span className="text-[7px] sm:text-[8px] font-mono text-cdj-cyan font-bold bg-cdj-cyan/15 px-1.5 py-0.5 rounded border border-cdj-cyan/30">
              {activeRatio === '1:1' ? '1:1 GRADE' : activeRatio === '4:5' ? '4:5 FEED' : '9:16 REELS'}
            </span>
          )}
          <span className="text-[7px] sm:text-[8px] font-mono text-text-muted">
            MASTER
          </span>
        </div>
      </div>

      {/* 2. SAFE ZONE OVERLAYS (Positioned without overlapping top headers) */}
      {(activeRatio === 'all' || activeRatio === '9:16') && (
        <div className="absolute top-9 bottom-2 inset-x-2 rounded-2xl border border-blue-500/25 pointer-events-none z-10">
          <span className="absolute bottom-1 right-2 text-[7px] font-mono text-blue-400 bg-black/75 px-1 rounded">
            9:16 CANVAS
          </span>
        </div>
      )}

      {(activeRatio === 'all' || activeRatio === '4:5') && (
        <div className="absolute top-[16%] bottom-[12%] inset-x-2 border-2 border-dashed border-cdj-cyan/40 pointer-events-none z-10 rounded-lg">
          <span className="absolute bottom-1 right-2 text-[7px] font-mono text-cdj-cyan bg-black/80 px-1 rounded">
            4:5 FEED SAFE
          </span>
        </div>
      )}

      {(activeRatio === 'all' || activeRatio === '1:1') && (
        <div className="absolute top-[23%] bottom-[20%] inset-x-2 border-2 border-accent-neon/70 pointer-events-none z-10 rounded-xl shadow-[0_0_15px_rgba(255,85,0,0.25)]">
          <span className="absolute top-1 left-2 text-[7px] sm:text-[8px] font-mono font-bold text-accent-neon bg-black/85 px-1.5 py-0.5 rounded border border-accent-neon/40">
            ★ 1:1 SAFE ZONE GRADE
          </span>
        </div>
      )}

      {/* 3. TEMPLATE TITLE HEADER (With safe top margin, mt-3, no overlap) */}
      <div className="relative z-20 mt-3 text-center px-1">
        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-accent-neon uppercase tracking-wider block">
          {template.name}
        </span>
        <span className="text-[8px] font-mono text-text-muted uppercase tracking-widest">
          {template.category}
        </span>
      </div>

      {/* 4. CENTRAL SCREEN BODY (Rendered Template Element) */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center text-center py-1 sm:py-2">
        {renderTemplateArt()}

        {/* Track Title and Badges */}
        <div className="mt-3 sm:mt-4 space-y-1 w-full px-2">
          <div className="flex items-center justify-center gap-1 sm:gap-1.5">
            <span className="text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded bg-accent-neon/15 text-accent-neon border border-accent-neon/30">
              {mockTrack.bpm} BPM
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded bg-cdj-cyan/15 text-cdj-cyan border border-cdj-cyan/30">
              KEY {mockTrack.key}
            </span>
          </div>
          <h4 className="font-bebas text-base sm:text-xl text-white tracking-wide truncate">
            {mockTrack.title}
          </h4>
          <p className="text-[9px] sm:text-[11px] font-mono text-text-secondary truncate">
            {mockTrack.artist}
          </p>
        </div>
      </div>

      {/* 5. BOTTOM SCREEN CONSOLE */}
      <div className="relative z-20 bg-bg-primary/95 rounded-xl p-2 sm:p-2.5 border border-border-official space-y-1 sm:space-y-1.5">
        <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono">
          <span className="text-white flex items-center gap-1">
            <Play className="w-2 h-2 fill-current text-accent-neon" /> {mockTrack.timecode}
          </span>
          <span className="text-accent-neon font-bold">DJ CLIP CUTTER</span>
        </div>
        <div className="flex items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex-1 overflow-hidden">
            <AudioWaveformVisualizer barsCount={16} height={18} color={template.accentColor} />
          </div>
          <VuMeter channels={1} compact />
        </div>
      </div>
    </div>
  );
};
