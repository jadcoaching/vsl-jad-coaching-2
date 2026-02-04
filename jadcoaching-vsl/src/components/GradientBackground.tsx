import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { theme } from '../styles/theme';

interface GradientBackgroundProps {
  variant?: 'default' | 'soft' | 'dark' | 'testimonial' | 'uniform';
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  variant = 'default'
}) => {
  const frame = useCurrentFrame();

  const pulseOpacity = interpolate(
    Math.sin(frame / 60),
    [-1, 1],
    [0.02, 0.04]
  );

  // All variants now use subtle light like slide 4 or less
  const getGradient = () => {
    switch (variant) {
      case 'soft':
      case 'dark':
      case 'testimonial':
      case 'uniform':
      default:
        // Very subtle white light for all slides
        return `
          radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, ${pulseOpacity}) 0%, transparent 60%),
          ${theme.colors.black}
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
        backgroundColor: theme.colors.black,
      }}
    />
  );
};
