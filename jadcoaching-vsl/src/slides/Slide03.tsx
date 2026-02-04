import React from 'react';
import { AbsoluteFill } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { Logo } from '../components/Logo';
import { theme } from '../styles/theme';

export const Slide03: React.FC = () => {
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
        <AnimatedText delay={0} animation="fadeIn">
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: theme.colors.textGray,
              textAlign: 'center',
              marginBottom: 20,
              textTransform: 'uppercase',
              letterSpacing: 4,
            }}
          >
            Accompagnement
          </div>
        </AnimatedText>

        <AnimatedText delay={10} animation="scaleIn">
          <Logo size="large" animated={false} />
        </AnimatedText>

        <AnimatedText
          delay={30}
          animation="fadeUp"
          glow
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: theme.colors.primary,
            textAlign: 'center',
            marginTop: 60,
          }}
        >
          Comment ça fonctionne ?
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
