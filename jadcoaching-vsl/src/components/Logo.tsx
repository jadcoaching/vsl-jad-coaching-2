import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { theme } from '../styles/theme';

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  animated?: boolean;
  delay?: number;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  animated = true,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delayedFrame = Math.max(0, frame - delay);

  const scale = animated
    ? spring({
        frame: delayedFrame,
        fps,
        config: { damping: 15, stiffness: 80 },
      })
    : 1;

  const opacity = animated
    ? interpolate(delayedFrame, [0, 15], [0, 1], {
        extrapolateRight: 'clamp',
      })
    : 1;

  const sizeMap = {
    small: { fontSize: 24, padding: '8px 16px' },
    medium: { fontSize: 48, padding: '12px 24px' },
    large: { fontSize: 72, padding: '16px 32px' },
    xlarge: { fontSize: 100, padding: '20px 40px' },
  };

  const { fontSize, padding } = sizeMap[size];

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <div
        style={{
          fontFamily: theme.fonts.heading,
          fontSize,
          fontWeight: 700,
          color: theme.colors.textWhite,
          letterSpacing: '-0.02em',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span style={{ color: theme.colors.primary }}>Jad</span>
        <span>Coaching</span>
      </div>
    </div>
  );
};
