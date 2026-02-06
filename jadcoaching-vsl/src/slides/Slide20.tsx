import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide20: React.FC = () => {
  const frame = useCurrentFrame();

  const iconScale = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const iconOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const glowPulse = Math.sin(frame / 20) * 0.2 + 0.8;

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
        {/* Premium Student with Professor Icon */}
        <div
          style={{
            transform: `scale(${iconScale})`,
            opacity: iconOpacity,
            marginBottom: 40,
            filter: `drop-shadow(0 0 ${20 * glowPulse}px rgba(0, 207, 255, 0.5))`,
          }}
        >
          <svg width="140" height="100" viewBox="0 0 28 24" fill="none">
            {/* Professor (left, larger) */}
            <circle cx="7" cy="4" r="3" stroke={theme.colors.primary} strokeWidth="1.5" />
            <path
              d="M1 20c0-3.314 2.686-6 6-6s6 2.686 6 6"
              stroke={theme.colors.primary}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Student (right, smaller) */}
            <circle cx="20" cy="7" r="2" stroke={theme.colors.primary} strokeWidth="1.5" />
            <path
              d="M15.5 20c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5"
              stroke={theme.colors.primary}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <AnimatedText
          delay={10}
          animation="fadeUp"
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: theme.colors.primary,
            textTransform: 'uppercase',
            letterSpacing: 4,
            marginBottom: 20,
            textShadow: theme.shadows.textGlow,
          }}
        >
          Étape 3
        </AnimatedText>

        <AnimatedText
          delay={20}
          animation="fadeUp"
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: theme.colors.textWhite,
            textAlign: 'center',
            marginBottom: 40,
          }}
        >
          On travaille ensemble jusqu'à la réussite
        </AnimatedText>

        <AnimatedText
          delay={35}
          animation="fadeIn"
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: theme.colors.textGray,
            textAlign: 'center',
            lineHeight: 1.6,
            maxWidth: 1000,
          }}
        >
          Séances + outils : WhatsApp 24/7, fiches, vidéos,
          <br />
          examens blancs personnalisés.
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
