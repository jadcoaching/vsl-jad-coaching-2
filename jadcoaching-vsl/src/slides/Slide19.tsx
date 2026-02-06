import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide19: React.FC = () => {
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
        {/* Premium Target Icon */}
        <div
          style={{
            transform: `scale(${iconScale})`,
            opacity: iconOpacity,
            marginBottom: 40,
            filter: `drop-shadow(0 0 ${20 * glowPulse}px rgba(0, 207, 255, 0.5))`,
          }}
        >
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke={theme.colors.primary} strokeWidth="1.5" />
            <circle cx="12" cy="12" r="6" stroke={theme.colors.primary} strokeWidth="1.5" />
            <circle cx="12" cy="12" r="2" fill={theme.colors.primary} />
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
          Étape 2
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
          Accompagnement personnalisé
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
          Si je peux t'aider, je te propose un accompagnement sur-mesure
          <br />
          adapté à ton cours et ton examen.
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
