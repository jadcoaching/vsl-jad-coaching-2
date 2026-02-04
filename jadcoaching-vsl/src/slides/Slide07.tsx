import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide07: React.FC = () => {
  const frame = useCurrentFrame();

  const questionMarkOpacity = interpolate(
    Math.sin(frame / 15),
    [-1, 1],
    [0.5, 1]
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
        <AnimatedText
          delay={0}
          animation="fadeUp"
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: theme.colors.textWhite,
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Comment je peux te promettre
          <br />
          <span
            style={{
              color: theme.colors.primary,
              textShadow: theme.shadows.textGlow,
            }}
          >
            que tu vas réussir ?
          </span>
        </AnimatedText>

        <div
          style={{
            position: 'absolute',
            right: 150,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 300,
            fontWeight: 800,
            color: theme.colors.primary,
            opacity: questionMarkOpacity * 0.15,
            textShadow: theme.shadows.textGlow,
          }}
        >
          ?
        </div>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
