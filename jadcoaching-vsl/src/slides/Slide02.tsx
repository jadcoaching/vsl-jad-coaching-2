import React from 'react';
import { AbsoluteFill } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide02: React.FC = () => {
  const items = [
    { text: 'Tu écoutes en cours mais tu ne ', highlight: 'COMPRENDS', end: ' pas vraiment' },
    { text: 'Tu apprends les formules mais tu ne sais pas quand ni comment les ', highlight: 'UTILISER', end: '' },
    { text: "Tu fais beaucoup d'exercices mais à l'examen tu ", highlight: 'BLOQUES', end: '' },
  ];

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
            fontSize: 72,
            fontWeight: 600,
            color: theme.colors.textWhite,
            textAlign: 'center',
            marginBottom: 60,
          }}
        >
          Tu{' '}
          <span style={{ color: theme.colors.primary }}>GALÈRES</span>
          {' '}en maths ou en stats ?
        </AnimatedText>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
          {items.map((item, index) => (
            <AnimatedText
              key={index}
              delay={20 + index * 15}
              animation="fadeUp"
              style={{
                fontSize: 36,
                fontWeight: 400,
                color: theme.colors.textWhite,
                display: 'flex',
                alignItems: 'center',
                gap: 20,
              }}
            >
              <span style={{ color: theme.colors.primary, fontSize: 48, fontWeight: 700 }}>✕</span>
              <span>
                {item.text}
                <span style={{ color: theme.colors.primary, fontWeight: 600 }}>{item.highlight}</span>
                {item.end}
              </span>
            </AnimatedText>
          ))}
        </div>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
