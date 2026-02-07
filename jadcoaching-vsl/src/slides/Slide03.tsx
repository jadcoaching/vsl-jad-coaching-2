import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide03: React.FC = () => {
  const frame = useCurrentFrame();

  const arrowX = interpolate(frame, [40, 60], [-50, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const arrowOpacity = interpolate(frame, [35, 45], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <SlideWrapper variant="dark">
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 100,
        }}
      >
        <AnimatedText
          delay={0}
          animation="fadeUp"
          style={{
            fontSize: 100,
            fontWeight: 600,
            color: theme.colors.textWhite,
            textAlign: 'center',
            lineHeight: 1.3,
            marginBottom: 50,
          }}
        >
          Le problème ce n'est pas
          <br />
          ton niveau.
        </AnimatedText>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            opacity: arrowOpacity,
            transform: `translateX(${arrowX}px)`,
          }}
        >
          <div
            style={{
              fontSize: 60,
              color: theme.colors.primary,
              textShadow: theme.shadows.textGlow,
            }}
          >
            →
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: theme.colors.primary,
              textShadow: theme.shadows.textGlow,
            }}
          >
            C'est ta façon de travailler.
          </div>
        </div>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
