import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { Logo } from '../components/Logo';
import { theme } from '../styles/theme';

export const Slide16: React.FC = () => {
  const frame = useCurrentFrame();

  const buttonScale = interpolate(
    Math.sin(frame / 15),
    [-1, 1],
    [1, 1.05]
  );

  const arrowBounce = interpolate(
    Math.sin(frame / 10),
    [-1, 1],
    [-5, 5]
  );

  return (
    <SlideWrapper variant="blue">
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
          <Logo size="medium" animated={false} />
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
            fontSize: 32,
            fontWeight: 400,
            color: theme.colors.textGray,
            textAlign: 'center',
            marginBottom: 60,
          }}
        >
          Ça ne t'engage à rien • Lien en description
        </AnimatedText>

        <AnimatedText
          delay={50}
          animation="scaleIn"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              padding: '24px 60px',
              background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
              borderRadius: 60,
              transform: `scale(${buttonScale})`,
              boxShadow: `0 0 40px rgba(0, 207, 255, 0.6), 0 10px 40px rgba(0, 0, 0, 0.4)`,
            }}
          >
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: theme.colors.black,
              }}
            >
              RÉSERVER MAINTENANT
            </span>
            <span
              style={{
                fontSize: 36,
                transform: `translateX(${arrowBounce}px)`,
              }}
            >
              ↓
            </span>
          </div>
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
