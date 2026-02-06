import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide10: React.FC = () => {
  const frame = useCurrentFrame();

  // Count from 0 to 10 over 20 frames starting at frame 25 (faster)
  const count = Math.floor(
    interpolate(frame, [25, 45], [0, 10], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

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
          <span style={{ color: theme.colors.primary, textShadow: theme.shadows.textGlow }}>Jad</span>, Diplômé{' '}
          <span style={{ color: theme.colors.primary, textShadow: theme.shadows.textGlow }}>EPFL</span>
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
            +{count} ans d'expérience
          </span>
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
