import React from 'react';
import { AbsoluteFill } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { AnimatedSymbol, createSymbolStagger } from '../components/AnimatedSymbol';
import { theme } from '../styles/theme';

export const Slide02: React.FC = () => {
  // Symbol configuration with depth layers
  const symbolsConfig = [
    // Far layer (background, smaller, subtle blur)
    { symbol: '∂', x: -600, y: -280, depth: 'far' as const },
    { symbol: '≈', x: 580, y: -250, depth: 'far' as const },
    { symbol: '∝', x: -520, y: 320, depth: 'far' as const },
    { symbol: 'θ', x: 620, y: 280, depth: 'far' as const },

    // Mid layer (medium size, sharp)
    { symbol: '∑', x: -480, y: -180, depth: 'mid' as const, curvedEntry: true },
    { symbol: 'π', x: 450, y: -160, depth: 'mid' as const },
    { symbol: '√', x: -420, y: 220, depth: 'mid' as const },
    { symbol: 'μ', x: 500, y: 180, depth: 'mid' as const, curvedEntry: true },

    // Near layer (foreground, larger, prominent)
    { symbol: '∫', x: -350, y: 280, depth: 'near' as const, curvedEntry: true },
    { symbol: 'σ', x: 380, y: -220, depth: 'near' as const },
    { symbol: 'lim', x: -550, y: 60, depth: 'mid' as const },
    { symbol: 'λ', x: 520, y: 300, depth: 'near' as const, curvedEntry: true },
  ];

  // Create staggered animation with base delay and interval
  const symbols = createSymbolStagger(symbolsConfig, 30, 5);

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
        {/* Animated symbols with cinematic appearance */}
        {symbols.map((item, index) => (
          <AnimatedSymbol
            key={index}
            symbol={item.symbol}
            x={item.x}
            y={item.y}
            delay={item.delay}
            depth={item.depth}
            curvedEntry={item.curvedEntry}
          />
        ))}

        <AnimatedText
          delay={0}
          animation="fadeUp"
          style={{
            fontSize: 100,
            fontWeight: 600,
            color: theme.colors.textWhite,
            textAlign: 'center',
            lineHeight: 1.3,
            zIndex: 10,
          }}
        >
          Tu{' '}
          <span style={{ color: theme.colors.primary, textShadow: theme.shadows.textGlow }}>galères</span>
          <br />
          en maths ou en stats ?
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
