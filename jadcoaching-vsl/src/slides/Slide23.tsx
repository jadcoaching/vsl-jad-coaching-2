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

  const iconScale = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const iconOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const glowPulse = Math.sin(frame / 20) * 0.2 + 0.8;

  // Checkmark animation
  const checkProgress = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: 'clamp',
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
        {/* Document with Checkmark Icon */}
        <div
          style={{
            transform: `scale(${iconScale})`,
            opacity: iconOpacity,
            marginBottom: 40,
            filter: `drop-shadow(0 0 ${25 * glowPulse}px rgba(0, 207, 255, 0.6))`,
          }}
        >
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
            {/* Document */}
            <path
              d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
              stroke={theme.colors.primary}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Folded corner */}
            <path
              d="M14 2v6h6"
              stroke={theme.colors.primary}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Checkmark */}
            <path
              d="M9 15l2 2 4-4"
              stroke={theme.colors.primary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={10}
              strokeDashoffset={10 * (1 - checkProgress)}
            />
          </svg>
        </div>

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
