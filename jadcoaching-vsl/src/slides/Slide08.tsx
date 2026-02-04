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
        }}
      >
        {/* Profile photo */}
        <div
          style={{
            width: 240,
            height: 240,
            opacity: photoOpacity,
            transform: `scale(${photoScale})`,
            overflow: 'hidden',
            borderRadius: '50%',
            marginBottom: 40,
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

        <AnimatedText
          delay={15}
          animation="fadeUp"
          style={{
            fontSize: 110,
            fontWeight: 700,
            color: theme.colors.textWhite,
            textAlign: 'center',
            textShadow: '0 0 30px rgba(0, 207, 255, 0.4)',
          }}
        >
          <span style={{ color: theme.colors.primary }}>Jad</span>, Diplômé{' '}
          <span style={{ color: theme.colors.primary }}>EPFL</span>
        </AnimatedText>

        <AnimatedText
          delay={30}
          animation="fadeUp"
          style={{
            fontSize: 48,
            fontWeight: 400,
            color: theme.colors.textGray,
            textAlign: 'center',
            marginTop: 25,
          }}
        >
          Mathématiques •{' '}
          <span style={{ color: theme.colors.primary, fontWeight: 600 }}>
            +10ans d'expérience
          </span>
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
