import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide08: React.FC = () => {
  const frame = useCurrentFrame();

  const numberScale = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 60,
            maxWidth: 1400,
          }}
        >
          <div
            style={{
              fontSize: 180,
              fontWeight: 800,
              color: theme.colors.primary,
              lineHeight: 1,
              textShadow: theme.shadows.textGlow,
              transform: `scale(${numberScale})`,
            }}
          >
            #3
          </div>

          <AnimatedText
            delay={15}
            animation="fadeUp"
            style={{
              fontSize: 62,
              fontWeight: 500,
              color: theme.colors.textWhite,
              lineHeight: 1.4,
              marginTop: -20,
            }}
          >
            Travaille exactement sur
            <br />
            <span style={{ color: theme.colors.primary }}>
              ce qui tombe aux examens
            </span>
          </AnimatedText>
        </div>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
