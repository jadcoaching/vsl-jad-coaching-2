import React from 'react';
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from 'remotion';
import { theme } from '../styles/theme';

interface AnimatedSymbolProps {
  symbol: string;
  x: number;
  y: number;
  delay: number;
  depth: 'far' | 'mid' | 'near';
  curvedEntry?: boolean;
}

// Easing functions
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

export const AnimatedSymbol: React.FC<AnimatedSymbolProps> = ({
  symbol,
  x,
  y,
  delay,
  depth,
  curvedEntry = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Depth configuration
  const depthConfig = {
    far: { size: 45, blur: 3, opacity: 0.35, glowIntensity: 0.15 },
    mid: { size: 65, blur: 0, opacity: 0.55, glowIntensity: 0.25 },
    near: { size: 85, blur: 0, opacity: 0.7, glowIntensity: 0.35 },
  };

  const config = depthConfig[depth];
  const animationDuration = 40; // frames
  const startFrame = delay;
  const endFrame = startFrame + animationDuration;

  // Progress with easing
  const rawProgress = interpolate(frame, [startFrame, endFrame], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const progress = easeOutCubic(rawProgress);

  // Opacity: 0 → target
  const opacity = interpolate(progress, [0, 1], [0, config.opacity]);

  // Blur: 12px → depth blur
  const blur = interpolate(progress, [0, 1], [12, config.blur]);

  // Scale: 0.96 → 1
  const scale = interpolate(progress, [0, 1], [0.96, 1]);

  // Soft glow appears after symbol (delayed)
  const glowProgress = interpolate(frame, [endFrame, endFrame + 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const glowOpacity = easeOutQuart(glowProgress) * config.glowIntensity;

  // Natural drift (random offset based on symbol)
  const seed = symbol.charCodeAt(0);
  const driftX = Math.sin(seed * 1.5) * 15;
  const driftY = Math.cos(seed * 2.3) * 10;

  // Entry position (starts offset, ends at final position)
  const entryOffsetX = interpolate(progress, [0, 1], [driftX + 30, 0]);
  const entryOffsetY = interpolate(progress, [0, 1], [driftY + 20, 0]);

  // Curved Bézier entry (optional)
  let curveOffsetX = 0;
  let curveOffsetY = 0;
  if (curvedEntry) {
    const t = progress;
    // Quadratic Bézier curve offset
    const controlX = (seed % 2 === 0 ? 1 : -1) * 40;
    const controlY = -30;
    curveOffsetX = 2 * (1 - t) * t * controlX;
    curveOffsetY = 2 * (1 - t) * t * controlY;
  }

  // Final floating animation (micro oscillation)
  const floatPhase = seed * 0.5;
  const floatX = Math.sin((frame + floatPhase * 100) / 25) * 4;
  const floatY = Math.cos((frame + floatPhase * 100) / 30) * 5;

  // Final position
  const finalX = x + entryOffsetX + curveOffsetX + floatX;
  const finalY = y + entryOffsetY + curveOffsetY + floatY;

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${finalX}px), calc(-50% + ${finalY}px)) scale(${scale})`,
        fontSize: config.size,
        fontWeight: 300,
        color: theme.colors.primary,
        opacity,
        filter: `blur(${blur}px)`,
        textShadow: `0 0 ${20 + glowOpacity * 30}px rgba(0, 207, 255, ${glowOpacity})`,
        fontFamily: 'serif',
        willChange: 'transform, opacity, filter',
      }}
    >
      {symbol}
    </div>
  );
};

// Stagger configuration helper
export const createSymbolStagger = (
  symbols: Array<{ symbol: string; x: number; y: number; depth: 'far' | 'mid' | 'near'; curvedEntry?: boolean }>,
  baseDelay: number = 25,
  staggerInterval: number = 6
) => {
  return symbols.map((s, index) => ({
    ...s,
    delay: baseDelay + index * staggerInterval,
  }));
};
