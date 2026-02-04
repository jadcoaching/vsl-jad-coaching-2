import React from 'react';
import {
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Easing,
} from 'remotion';
import { theme } from '../styles/theme';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  animation?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideRight' | 'typewriter';
  glow?: boolean;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  delay = 0,
  style = {},
  animation = 'fadeUp',
  glow = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delayedFrame = Math.max(0, frame - delay);

  const getAnimation = () => {
    switch (animation) {
      case 'fadeUp': {
        const opacity = interpolate(delayedFrame, [0, 20], [0, 1], {
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.cubic),
        });
        const translateY = interpolate(delayedFrame, [0, 25], [50, 0], {
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.cubic),
        });
        return {
          opacity,
          transform: `translateY(${translateY}px)`,
        };
      }
      case 'fadeIn': {
        const opacity = interpolate(delayedFrame, [0, 25], [0, 1], {
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.cubic),
        });
        return { opacity };
      }
      case 'scaleIn': {
        const scale = spring({
          frame: delayedFrame,
          fps,
          config: { damping: 12, stiffness: 100 },
        });
        const opacity = interpolate(delayedFrame, [0, 15], [0, 1], {
          extrapolateRight: 'clamp',
        });
        return {
          opacity,
          transform: `scale(${scale})`,
        };
      }
      case 'slideRight': {
        const opacity = interpolate(delayedFrame, [0, 20], [0, 1], {
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.cubic),
        });
        const translateX = interpolate(delayedFrame, [0, 25], [-100, 0], {
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.cubic),
        });
        return {
          opacity,
          transform: `translateX(${translateX}px)`,
        };
      }
      default:
        return { opacity: 1 };
    }
  };

  const animationStyle = getAnimation();

  return (
    <div
      style={{
        ...animationStyle,
        ...(glow && {
          textShadow: theme.shadows.textGlow,
        }),
        ...style,
      }}
    >
      {children}
    </div>
  );
};
