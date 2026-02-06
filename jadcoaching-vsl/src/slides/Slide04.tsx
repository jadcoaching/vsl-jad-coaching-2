import React from 'react';
import { AbsoluteFill } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide04: React.FC = () => {
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
            fontSize: 90,
            fontWeight: 600,
            color: theme.colors.textWhite,
            textAlign: 'center',
            marginBottom: 40,
            lineHeight: 1.3,
          }}
        >
          Je vais te faire{' '}
          <span style={{ color: theme.colors.primary, textShadow: theme.shadows.textGlow }}>réussir</span>
          <br />
          ton prochain examen
        </AnimatedText>

        <AnimatedText
          delay={25}
          animation="scaleIn"
          style={{
            fontSize: 48,
            fontWeight: 400,
            color: theme.colors.textGray,
            textAlign: 'center',
          }}
        >
          Mathématiques et statistiques
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
