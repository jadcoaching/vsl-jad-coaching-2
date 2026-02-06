import React from 'react';
import { AbsoluteFill } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { Logo } from '../components/Logo';
import { theme } from '../styles/theme';

export const Slide05: React.FC = () => {
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
              fontSize: 56,
              fontWeight: 400,
              color: theme.colors.textGray,
              textAlign: 'center',
              marginBottom: 30,
              textTransform: 'uppercase',
              letterSpacing: 4,
            }}
          >
            Accompagnement
          </div>
        </AnimatedText>

        <AnimatedText delay={10} animation="scaleIn">
          <Logo size="xlarge" animated={false} />
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
