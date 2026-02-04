import React from 'react';
import { AbsoluteFill } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide02: React.FC = () => {
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
          <span style={{ color: theme.colors.primary }}>réussir</span>
          <br />
          ton prochain examen
        </AnimatedText>

        <AnimatedText
          delay={25}
          animation="scaleIn"
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: theme.colors.primary,
            textAlign: 'center',
          }}
        >
          Mathématiques et statistiques
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
