import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide09: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const countTo = 1254;
  const countDuration = 45;

  const count = Math.floor(
    interpolate(frame, [15, 15 + countDuration], [0, countTo], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  const universities = ['EPFL', 'HEC', 'EHL', 'HEG', 'HEIG', 'UNIL', 'UNIGE', 'etc.'];

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
          animation="fadeIn"
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: theme.colors.textGray,
            textAlign: 'center',
            marginBottom: 20,
            textTransform: 'uppercase',
            letterSpacing: 4,
          }}
        >
          Plus de
        </AnimatedText>

        <div
          style={{
            fontSize: 140,
            fontWeight: 800,
            color: theme.colors.primary,
            textShadow: theme.shadows.textGlow,
            marginBottom: 20,
          }}
        >
          {count.toLocaleString('fr-CH')}
        </div>

        <AnimatedText
          delay={50}
          animation="fadeUp"
          style={{
            fontSize: 48,
            fontWeight: 600,
            color: theme.colors.textWhite,
            textAlign: 'center',
            marginBottom: 60,
          }}
        >
          étudiants accompagnés à la réussite
        </AnimatedText>

        <AnimatedText
          delay={60}
          animation="fadeIn"
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: theme.colors.textGray,
            marginBottom: 30,
          }}
        >
          Universités & Hautes Écoles suisses
        </AnimatedText>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 15,
          }}
        >
          {universities.map((uni, index) => (
            <AnimatedText
              key={uni}
              delay={70 + index * 4}
              animation="scaleIn"
              style={{
                fontSize: 22,
                fontWeight: 500,
                color: theme.colors.primary,
                padding: '8px 20px',
                border: `1px solid ${theme.colors.primary}`,
                borderRadius: 30,
                background: 'rgba(0, 207, 255, 0.1)',
              }}
            >
              {uni}
            </AnimatedText>
          ))}
        </div>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
