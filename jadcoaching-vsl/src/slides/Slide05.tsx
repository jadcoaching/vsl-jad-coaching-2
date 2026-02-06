import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { Logo } from '../components/Logo';
import { theme } from '../styles/theme';

export const Slide05: React.FC = () => {
  const frame = useCurrentFrame();

  const glowOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const glowPulse = Math.sin(frame / 20) * 0.15 + 0.85;

  return (
    <SlideWrapper variant="dark">
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 80,
        }}
      >
        {/* Subtle white glow background */}
        <div
          style={{
            position: 'absolute',
            width: 800,
            height: 400,
            background: `radial-gradient(ellipse at center, rgba(255, 255, 255, ${0.08 * glowPulse}) 0%, transparent 70%)`,
            opacity: glowOpacity,
            pointerEvents: 'none',
          }}
        />

        <AnimatedText delay={0} animation="fadeIn">
          <div
            style={{
              fontSize: 56,
              fontWeight: 400,
              color: theme.colors.textGray,
              textAlign: 'center',
              marginBottom: 30,
              textTransform: 'uppercase',
              letterSpacing: 4,
            }}
          >
            Accompagnement
          </div>
        </AnimatedText>

        <AnimatedText delay={10} animation="scaleIn">
          <div
            style={{
              filter: `drop-shadow(0 0 40px rgba(255, 255, 255, ${0.3 * glowPulse}))`,
            }}
          >
            <Logo size="xlarge" animated={false} />
          </div>
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
