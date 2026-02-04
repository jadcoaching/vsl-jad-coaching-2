import React from 'react';
import { GradientBackground } from './GradientBackground';
import { FilmGrain } from './FilmGrain';
import { VIDEO_CONFIG } from '../styles/theme';

interface SlideWrapperProps {
  children: React.ReactNode;
  variant?: 'default' | 'soft' | 'dark' | 'testimonial' | 'uniform';
  grainIntensity?: number;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({
  children,
  variant = 'default',
  grainIntensity = 0.12,
}) => {
  return (
    <div
      style={{
        width: VIDEO_CONFIG.width,
        height: VIDEO_CONFIG.height,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <GradientBackground variant={variant} />
      {children}
      <FilmGrain intensity={grainIntensity} />
    </div>
  );
};
