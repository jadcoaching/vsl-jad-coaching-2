import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide02: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Floating animation for math symbols
  const float1 = Math.sin(frame / 15) * 8;
  const float2 = Math.sin(frame / 12 + 1) * 10;
  const float3 = Math.sin(frame / 18 + 2) * 6;
  const float4 = Math.sin(frame / 14 + 3) * 9;
  const float5 = Math.sin(frame / 16 + 4) * 7;

  // Staggered appearance for each symbol
  const getSymbolOpacity = (delay: number) => {
    return interpolate(frame, [30 + delay, 50 + delay], [0, 0.7], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  };

  const getSymbolScale = (delay: number) => {
    return spring({
      frame: frame - (30 + delay),
      fps,
      config: { damping: 12, stiffness: 100 },
    });
  };

  const mathSymbols = [
    { symbol: '∑', x: -520, y: -220, size: 75, float: float1, delay: 0 },
    { symbol: 'π', x: 500, y: -180, size: 60, float: float2, delay: 3 },
    { symbol: '√', x: -480, y: 250, size: 65, float: float3, delay: 6 },
    { symbol: 'μ', x: 530, y: 200, size: 70, float: float4, delay: 9 },
    { symbol: '∫', x: -300, y: 300, size: 85, float: float2, delay: 12 },
    { symbol: 'σ', x: 380, y: -280, size: 65, float: float1, delay: 15 },
    { symbol: 'lim', x: -550, y: 50, size: 45, float: float5, delay: 18 },
    { symbol: 'λ', x: 480, y: 320, size: 60, float: float3, delay: 21 },
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
        {/* Math symbols background */}
        {mathSymbols.map((item, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${item.x}px), calc(-50% + ${item.y + item.float}px)) scale(${getSymbolScale(item.delay)})`,
              fontSize: item.size,
              fontWeight: 300,
              color: theme.colors.primary,
              opacity: getSymbolOpacity(item.delay),
              textShadow: theme.shadows.textGlow,
              fontFamily: 'serif',
            }}
          >
            {item.symbol}
          </div>
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
