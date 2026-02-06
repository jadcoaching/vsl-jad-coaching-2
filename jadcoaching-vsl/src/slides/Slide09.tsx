import React from 'react';
import { AbsoluteFill } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide09: React.FC = () => {
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
        <AnimatedText
          delay={0}
          animation="fadeUp"
          style={{
            fontSize: 90,
            fontWeight: 700,
            color: theme.colors.textWhite,
            textAlign: 'center',
            marginBottom: 50,
          }}
        >
          Résultat ?
        </AnimatedText>

        <AnimatedText
          delay={20}
          animation="fadeUp"
          style={{
            fontSize: 52,
            fontWeight: 500,
            color: theme.colors.textWhite,
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Tu arrives le jour J avec confiance
          <br />
          et tu{' '}
          <span style={{ color: theme.colors.primary, textShadow: theme.shadows.textGlow }}>réussis</span>
          {' '}sans stress.
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
