import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { theme } from '../styles/theme';

interface GradientBackgroundProps {
  variant?: 'default' | 'blue' | 'dark' | 'testimonial';
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  variant = 'default'
}) => {
  const frame = useCurrentFrame();

  const pulseOpacity = interpolate(
    Math.sin(frame / 60),
    [-1, 1],
    [0.3, 0.5]
  );

  const getGradient = () => {
    switch (variant) {
      case 'blue':
        return `
          radial-gradient(ellipse at 50% 0%, rgba(0, 207, 255, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(0, 207, 255, 0.1) 0%, transparent 40%),
          radial-gradient(ellipse at 20% 90%, rgba(0, 163, 204, 0.08) 0%, transparent 40%),
          linear-gradient(180deg, ${theme.colors.darkGray} 0%, ${theme.colors.black} 100%)
        `;
      case 'dark':
        return `
          radial-gradient(ellipse at 50% 50%, rgba(0, 207, 255, 0.05) 0%, transparent 60%),
          linear-gradient(180deg, ${theme.colors.black} 0%, ${theme.colors.darkGray} 50%, ${theme.colors.black} 100%)
        `;
      case 'testimonial':
        return `
          radial-gradient(ellipse at 30% 20%, rgba(0, 207, 255, 0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 80%, rgba(0, 207, 255, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, ${theme.colors.black} 0%, ${theme.colors.darkGray} 50%, ${theme.colors.black} 100%)
        `;
      default:
        return `
          radial-gradient(ellipse at 50% 30%, rgba(0, 207, 255, ${pulseOpacity}) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(0, 207, 255, 0.1) 0%, transparent 40%),
          radial-gradient(ellipse at 20% 80%, rgba(0, 163, 204, 0.08) 0%, transparent 40%),
          linear-gradient(180deg, ${theme.colors.darkGray} 0%, ${theme.colors.black} 100%)
        `;
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: getGradient(),
      }}
    />
  );
};
