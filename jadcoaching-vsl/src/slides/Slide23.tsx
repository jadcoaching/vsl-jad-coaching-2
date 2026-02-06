import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide23: React.FC = () => {
  const frame = useCurrentFrame();

  const arrowOpacity = interpolate(frame, [40, 55], [0, 1], {
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
        <AnimatedText
          delay={0}
          animation="fadeUp"
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: theme.colors.textWhite,
            textAlign: 'center',
            marginBottom: 50,
          }}
        >
          Ce qui fait échouer
          <br />
          la majorité des étudiants
        </AnimatedText>

        <AnimatedText
          delay={20}
          animation="fadeIn"
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: theme.colors.textGray,
            textAlign: 'center',
            marginBottom: 40,
          }}
        >
          Les profs ne testent pas ce que tu sais.
        </AnimatedText>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 15,
            opacity: arrowOpacity,
          }}
        >
          <span
            style={{
              fontSize: 36,
              color: theme.colors.primary,
            }}
          >
            →
          </span>
          <span
            style={{
              fontSize: 42,
              fontWeight: 600,
              color: theme.colors.primary,
              textShadow: theme.shadows.textGlow,
            }}
          >
            Ils testent comment tu l'appliques.
          </span>
        </div>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
