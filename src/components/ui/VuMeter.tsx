import React, { useEffect, useState } from 'react';

interface VuMeterProps {
  channels?: 1 | 2;
  compact?: boolean;
  className?: string;
}

export const VuMeter: React.FC<VuMeterProps> = ({
  channels = 2,
  compact = false,
  className = '',
}) => {
  const [levelL, setLevelL] = useState(8);
  const [levelR, setLevelR] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live master DJ mixer levels bouncing to the groove
      const nextL = Math.floor(Math.random() * 5) + 6; // range 6 to 11
      const nextR = Math.max(3, nextL + (Math.floor(Math.random() * 3) - 1));
      setLevelL(nextL);
      setLevelR(nextR);
    }, 140);

    return () => clearInterval(interval);
  }, []);

  const totalSegments = 12;

  const renderChannel = (activeCount: number, channelName: string) => {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="flex flex-col-reverse gap-[2.5px] p-1 bg-black/60 rounded border border-border-official">
          {Array.from({ length: totalSegments }).map((_, i) => {
            const isActive = i < activeCount;
            // 0-7: Green, 8-9: Yellow, 10-11: Red (Peak)
            let colorClass = 'bg-vu-green/30';
            let activeColorClass = 'bg-vu-green shadow-[0_0_6px_#00E676]';

            if (i >= 10) {
              colorClass = 'bg-vu-red/25';
              activeColorClass = 'bg-vu-red shadow-[0_0_6px_#FF1744]';
            } else if (i >= 8) {
              colorClass = 'bg-vu-yellow/25';
              activeColorClass = 'bg-vu-yellow shadow-[0_0_6px_#FFEA00]';
            }

            return (
              <div
                key={i}
                className={`w-3.5 h-1.5 rounded-[1px] transition-colors duration-75 ${
                  isActive ? activeColorClass : colorClass
                }`}
              />
            );
          })}
        </div>
        {!compact && (
          <span className="text-[9px] font-mono font-bold text-text-secondary tracking-wider">
            {channelName}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {renderChannel(levelL, 'CH-L')}
      {channels === 2 && renderChannel(levelR, 'CH-R')}
    </div>
  );
};
