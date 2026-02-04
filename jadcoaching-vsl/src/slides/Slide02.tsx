import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide02: React.FC = () => {
  const frame = useCurrentFrame();

  const glowIntensity = interpolate(
    Math.sin(frame / 20),
    [-1, 1],
    [0.4, 0.8]
  );

  return (
    <SlideWrapper variant="soft">
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 80,
        }}
      >
        <AnimatedText
          delay={0}
          animation="fadeUp"
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: theme.colors.textWhite,
            textAlign: 'center',
            marginBottom: 40,
            lineHeight: 1.3,
          }}
        >
          Je veux te faire réussir
          <br />
          ton prochain examen
        </AnimatedText>

        <AnimatedText
          delay={25}
          animation="scaleIn"
          glow
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: theme.colors.primary,
            textAlign: 'center',
            textShadow: `0 0 ${40 * glowIntensity}px rgba(0, 207, 255, ${glowIntensity}), 0 0 ${80 * glowIntensity}px rgba(0, 207, 255, ${glowIntensity * 0.5})`,
          }}
        >
          Mathématiques et statistiques
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
