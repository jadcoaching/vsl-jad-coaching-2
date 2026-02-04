import React from 'react';
import { AbsoluteFill } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide08: React.FC = () => {
  return (
    <SlideWrapper variant="uniform">
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AnimatedText
          delay={0}
          animation="fadeUp"
          style={{
            fontSize: 110,
            fontWeight: 700,
            color: theme.colors.textWhite,
            textAlign: 'center',
            textShadow: '0 0 30px rgba(0, 207, 255, 0.4)',
          }}
        >
          <span style={{ color: theme.colors.primary }}>Jad</span>, Diplômé{' '}
          <span style={{ color: theme.colors.primary }}>EPFL</span>
        </AnimatedText>

        <AnimatedText
          delay={20}
          animation="fadeUp"
          style={{
            fontSize: 48,
            fontWeight: 400,
            color: theme.colors.textGray,
            textAlign: 'center',
            marginTop: 30,
          }}
        >
          Mathématiques •{' '}
          <span style={{ color: theme.colors.primary, fontWeight: 600 }}>
            +10ans d'expérience
          </span>
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
