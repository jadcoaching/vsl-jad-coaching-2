import React from 'react';

interface FilmGrainProps {
  intensity?: number;
  speed?: number;
}

// Film grain disabled - pure black background
export const FilmGrain: React.FC<FilmGrainProps> = () => {
  return null;
};
