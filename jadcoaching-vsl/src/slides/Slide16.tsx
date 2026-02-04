import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { Logo } from '../components/Logo';
import { theme } from '../styles/theme';

export const Slide16: React.FC = () => {
  const frame = useCurrentFrame();

  const arrowBounce = interpolate(
    Math.sin(frame / 10),
    [-1, 1],
    [-8, 8]
  );

  return (
    <SlideWrapper variant="soft">
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 100,
        }}
      >
        <AnimatedText delay={0} animation="scaleIn">
          <Logo size="large" animated={false} />
        </AnimatedText>

        <AnimatedText
          delay={15}
          animation="fadeUp"
          glow
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: theme.colors.primary,
            textAlign: 'center',
            marginTop: 60,
            marginBottom: 50,
            textShadow: theme.shadows.textGlow,
          }}
        >
          Réserve ton appel gratuit
        </AnimatedText>

        <AnimatedText
          delay={35}
          animation="fadeIn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 15,
            fontSize: 32,
            fontWeight: 400,
            color: theme.colors.textGray,
            textAlign: 'center',
          }}
        >
          <span>Ça ne t'engage à rien • Lien en description</span>
          <span
            style={{
              fontSize: 40,
              color: theme.colors.primary,
              textShadow: theme.shadows.textGlow,
              transform: `translateY(${arrowBounce}px)`,
              display: 'inline-block',
            }}
          >
            ↓
          </span>
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
