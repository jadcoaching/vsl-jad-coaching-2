import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, staticFile, Img } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide08: React.FC = () => {
  const frame = useCurrentFrame();

  const photoScale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateRight: 'clamp',
  });

  const photoOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <SlideWrapper variant="uniform">
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 100,
          gap: 50,
        }}
      >
        {/* Profile photo - no circle border */}
        <div
          style={{
            width: 280,
            height: 280,
            opacity: photoOpacity,
            transform: `scale(${photoScale})`,
            overflow: 'hidden',
            borderRadius: '50%',
          }}
        >
          <Img
            src={staticFile('images/jad-profile.jpg')}
            alt="Jad"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 25,
          }}
        >
          <AnimatedText
            delay={15}
            animation="fadeUp"
            style={{
              fontSize: 90,
              fontWeight: 700,
              color: theme.colors.textWhite,
              textAlign: 'center',
            }}
          >
            <span style={{ color: theme.colors.primary }}>Jad</span>, Diplômé{' '}
            <span style={{ color: theme.colors.primary }}>EPFL</span>
          </AnimatedText>

          <AnimatedText
            delay={30}
            animation="fadeUp"
            style={{
              fontSize: 44,
              fontWeight: 400,
              color: theme.colors.textGray,
              textAlign: 'center',
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
