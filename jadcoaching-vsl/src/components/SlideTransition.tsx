import React from 'react';
import {
  useCurrentFrame,
  interpolate,
  Easing,
  AbsoluteFill,
} from 'remotion';

interface SlideTransitionProps {
  children: React.ReactNode;
  durationInFrames: number;
  transitionDuration?: number;
}

export const SlideTransition: React.FC<SlideTransitionProps> = ({
  children,
  durationInFrames,
  transitionDuration = 15,
}) => {
  const frame = useCurrentFrame();

  // Fade in at start
  const enterOpacity = interpolate(
    frame,
    [0, transitionDuration],
    [0, 1],
    {
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    }
  );

  // Fade out at end
  const exitOpacity = interpolate(
    frame,
    [durationInFrames - transitionDuration, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.in(Easing.cubic),
    }
  );

  const opacity = Math.min(enterOpacity, exitOpacity);

  // Scale effect
  const enterScale = interpolate(
    frame,
    [0, transitionDuration],
    [1.02, 1],
    {
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    }
  );

  const exitScale = interpolate(
    frame,
    [durationInFrames - transitionDuration, durationInFrames],
    [1, 0.98],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.in(Easing.cubic),
    }
  );

  const scale = frame < durationInFrames / 2 ? enterScale : exitScale;

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
