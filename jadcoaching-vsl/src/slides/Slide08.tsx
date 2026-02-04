import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Img, staticFile } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide08: React.FC = () => {
  const frame = useCurrentFrame();

  const ringScale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateRight: 'clamp',
  });

  const ringOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <SlideWrapper variant="uniform">
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 100,
          gap: 100,
        }}
      >
        {/* Profile circle - photo placeholder */}
        <div
          style={{
            position: 'relative',
            width: 350,
            height: 350,
            opacity: ringOpacity,
            transform: `scale(${ringScale})`,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: `4px solid ${theme.colors.primary}`,
              boxShadow: theme.shadows.boxGlow,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 15,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${theme.colors.mediumGray} 0%, ${theme.colors.darkGray} 100%)`,
              overflow: 'hidden',
            }}
          >
            {/* Photo placeholder - will show gradient if no photo */}
            <Img
              src={staticFile('images/jad-profile.jpg')}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onError={(e) => {
                // Hide image if not found
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
          }}
        >
          <AnimatedText
            delay={15}
            animation="slideRight"
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: theme.colors.textWhite,
            }}
          >
            <span style={{ color: theme.colors.primary }}>Jad</span>, Diplômé{' '}
            <span style={{ color: theme.colors.primary }}>EPFL</span>
          </AnimatedText>

          <AnimatedText
            delay={30}
            animation="fadeUp"
            style={{
              fontSize: 40,
              fontWeight: 400,
              color: theme.colors.textGray,
            }}
          >
            Mathématiques •{' '}
            <span style={{ color: theme.colors.primary, fontWeight: 600 }}>
              +10ans d'expérience
            </span>
          </AnimatedText>
        </div>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
