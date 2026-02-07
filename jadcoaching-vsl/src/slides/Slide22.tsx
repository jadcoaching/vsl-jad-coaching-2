import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide22: React.FC = () => {
  const frame = useCurrentFrame();

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

  const arrowBounce = interpolate(
    Math.sin(frame / 10),
    [-1, 1],
    [-8, 8]
  );

  return (
    <SlideWrapper variant="soft">
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
          delay={15}
          animation="fadeUp"
          glow
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: theme.colors.primary,
            textAlign: 'center',
            marginTop: 60,
            marginBottom: 50,
            textShadow: theme.shadows.textGlow,
          }}
        >
          Réserve ton appel gratuit
        </AnimatedText>

        <AnimatedText
          delay={35}
          animation="fadeIn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 15,
            fontSize: 32,
            fontWeight: 400,
            color: theme.colors.textGray,
            textAlign: 'center',
          }}
        >
          <span>Ça ne t'engage à rien • Lien en description</span>
          <span
            style={{
              fontSize: 40,
              color: theme.colors.primary,
              textShadow: theme.shadows.textGlow,
              transform: `translateY(${arrowBounce}px)`,
              display: 'inline-block',
            }}
          >
            ↓
          </span>
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
