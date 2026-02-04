import React from 'react';
import { AbsoluteFill } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide01: React.FC = () => {
  const universities = ['EPFL', 'HEC', 'EHL', 'HEG', 'HEIG', 'HSG', 'UNIVERSITÉ'];

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
          animation="fadeUp"
          style={{
            fontSize: 100,
            fontWeight: 600,
            color: theme.colors.textWhite,
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Tu es étudiant en Suisse ?
        </AnimatedText>

        <AnimatedText
          delay={15}
          animation="fadeIn"
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: theme.colors.primary,
            textAlign: 'center',
            marginBottom: 40,
          }}
        >
          Universités & Hautes Écoles suisses
        </AnimatedText>

        <AnimatedText
          delay={25}
          animation="fadeIn"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 20,
            marginTop: 20,
          }}
        >
          {universities.map((uni, index) => (
            <AnimatedText
              key={uni}
              delay={35 + index * 5}
              animation="scaleIn"
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: theme.colors.primary,
                padding: '8px 16px',
              }}
            >
              {uni}
            </AnimatedText>
          ))}
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
