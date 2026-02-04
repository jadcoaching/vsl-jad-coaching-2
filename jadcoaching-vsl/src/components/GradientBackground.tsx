import React from 'react';
import { theme } from '../styles/theme';

interface GradientBackgroundProps {
  variant?: 'default' | 'soft' | 'dark' | 'testimonial' | 'uniform';
}

export const GradientBackground: React.FC<GradientBackgroundProps> = () => {
  // Solid black background #080a0f - no light effects
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.black,
      }}
    />
  );
};
