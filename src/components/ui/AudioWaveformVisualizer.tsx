import React from 'react';

interface WaveformVisualizerProps {
  barsCount?: number;
  height?: number;
  isPlaying?: boolean;
  color?: string;
  className?: string;
}

export const AudioWaveformVisualizer: React.FC<WaveformVisualizerProps> = ({
  barsCount = 36,
  height = 48,
  isPlaying = true,
  color = '#FF5500',
  className = '',
}) => {
  // Pre-calculated representative waveform heights (normalized between 0.15 and 1.0)
  const baseHeights = [
    0.2, 0.4, 0.35, 0.6, 0.75, 0.45, 0.85, 0.95, 0.7, 0.5, 0.3, 0.65,
    0.8, 1.0, 0.9, 0.6, 0.4, 0.7, 0.85, 0.55, 0.3, 0.45, 0.8, 0.95,
    0.6, 0.35, 0.5, 0.75, 0.9, 0.65, 0.4, 0.25, 0.55, 0.7, 0.45, 0.2
  ];

  return (
    <div
      className={`flex items-center gap-[3px] h-[${height}px] ${className}`}
      style={{ height: `${height}px` }}
    >
      {Array.from({ length: barsCount }).map((_, idx) => {
        const heightFactor = baseHeights[idx % baseHeights.length];
        const barHeight = Math.max(height * 0.15, height * heightFactor);
        const animDelay = (idx % 8) * 0.12;

        return (
          <span
            key={idx}
            className="w-[3px] rounded-full transition-all duration-300"
            style={{
              height: `${barHeight}px`,
              backgroundColor: color,
              boxShadow: isPlaying ? `0 0 6px ${color}88` : 'none',
              animation: isPlaying
                ? `waveAnim 1.2s ease-in-out ${animDelay}s infinite alternate`
                : 'none',
            }}
          />
        );
      })}
    </div>
  );
};
