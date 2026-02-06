import React from 'react';
import { AbsoluteFill } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide24: React.FC = () => {
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
            fontSize: 58,
            fontWeight: 700,
            color: theme.colors.textWhite,
            textAlign: 'center',
            marginBottom: 50,
            lineHeight: 1.3,
          }}
        >
          Pourquoi l'accompagnement Jad
          <span
            style={{
              color: theme.colors.primary,
              textShadow: theme.shadows.textGlow,
            }}
          >
            Coaching
          </span>
          {' '}fonctionne vraiment
        </AnimatedText>

        <AnimatedText
          delay={25}
          animation="fadeIn"
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: theme.colors.textGray,
            textAlign: 'center',
            maxWidth: 1000,
            lineHeight: 1.5,
          }}
        >
          La différence entre être guidé… et savoir résoudre seul le jour de l'examen.
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
