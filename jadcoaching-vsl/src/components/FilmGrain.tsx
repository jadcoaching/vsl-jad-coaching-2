import React from 'react';
import { useCurrentFrame, random, interpolate } from 'remotion';

interface FilmGrainProps {
  intensity?: number;
  speed?: number;
}

export const FilmGrain: React.FC<FilmGrainProps> = ({
  intensity = 0.15,
  speed = 1,
}) => {
  const frame = useCurrentFrame();
  const grainSeed = Math.floor(frame * speed);

  // Dynamic opacity for organic feel
  const opacity = interpolate(
    random(`opacity-${grainSeed}`),
    [0, 1],
    [intensity * 0.7, intensity * 1.3]
  );

  // Generate noise using SVG filter with random seed
  const turbulenceFrequency = 0.7 + random(`freq-${grainSeed}`) * 0.3;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    >
      <svg
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
        }}
      >
        <defs>
          <filter id={`noise-${grainSeed}`} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={turbulenceFrequency}
              numOctaves={4}
              seed={grainSeed}
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" result="monoNoise" />
          </filter>
        </defs>
      </svg>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          filter: `url(#noise-${grainSeed})`,
          opacity,
          mixBlendMode: 'overlay',
        }}
      />
      {/* Vignette effect for cinematic look */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0, 0, 0, ${intensity * 0.4}) 100%)`,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
