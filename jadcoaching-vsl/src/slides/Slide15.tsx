import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide15: React.FC = () => {
  const frame = useCurrentFrame();

  const arrowX = interpolate(frame, [60, 80], [-50, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const arrowOpacity = interpolate(frame, [55, 65], [0, 1], {
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
            fontSize: 56,
            fontWeight: 600,
            color: theme.colors.textWhite,
            textAlign: 'center',
            marginBottom: 60,
          }}
        >
          Ce qui fait échouer la majorité des étudiants
        </AnimatedText>

        <AnimatedText
          delay={20}
          animation="fadeIn"
          style={{
            fontSize: 42,
            fontWeight: 400,
            color: theme.colors.textGray,
            textAlign: 'center',
            marginBottom: 50,
          }}
        >
          Ce n'est pas le manque de travail.
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
              fontSize: 52,
              fontWeight: 700,
              color: theme.colors.primary,
              textShadow: theme.shadows.textGlow,
            }}
          >
            C'est le manque de stratégie.
          </div>
        </div>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
