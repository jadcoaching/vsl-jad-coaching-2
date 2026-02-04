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
    [0.06, 0.10]
  );

  const getGradient = () => {
    switch (variant) {
      case 'soft':
        // Very soft white light - used for most slides
        return `
          radial-gradient(ellipse at 50% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, ${theme.colors.darkGray} 0%, ${theme.colors.black} 100%)
        `;
      case 'dark':
        // Subtle white light like slides 4,5,6 - slightly reduced
        return `
          radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.035) 0%, transparent 60%),
          linear-gradient(180deg, ${theme.colors.black} 0%, ${theme.colors.darkGray} 50%, ${theme.colors.black} 100%)
        `;
      case 'testimonial':
        // Soft white for testimonials
        return `
          radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 0.04) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 80%, rgba(255, 255, 255, 0.025) 0%, transparent 50%),
          linear-gradient(135deg, ${theme.colors.black} 0%, ${theme.colors.darkGray} 50%, ${theme.colors.black} 100%)
        `;
      case 'uniform':
        // Uniform white light for slide 8
        return `
          radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.04) 0%, transparent 70%),
          linear-gradient(180deg, ${theme.colors.black} 0%, ${theme.colors.darkGray} 100%)
        `;
      default:
        // Default with subtle white pulse
        return `
          radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, ${pulseOpacity}) 0%, transparent 50%),
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
