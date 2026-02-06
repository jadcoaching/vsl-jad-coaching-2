import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide02: React.FC = () => {
  const frame = useCurrentFrame();

  // Floating animation for math symbols
  const float1 = Math.sin(frame / 15) * 8;
  const float2 = Math.sin(frame / 12 + 1) * 10;
  const float3 = Math.sin(frame / 18 + 2) * 6;
  const float4 = Math.sin(frame / 14 + 3) * 9;

  const symbolOpacity = interpolate(frame, [40, 60], [0, 0.6], {
    extrapolateRight: 'clamp',
  });

  const mathSymbols = [
    { symbol: '∑', x: -400, y: -150, size: 80, float: float1 },
    { symbol: 'π', x: 380, y: -120, size: 60, float: float2 },
    { symbol: '√', x: -350, y: 180, size: 65, float: float3 },
    { symbol: 'μ', x: 400, y: 150, size: 75, float: float4 },
    { symbol: '∫', x: -200, y: 220, size: 90, float: float2 },
    { symbol: 'σ', x: 280, y: -200, size: 70, float: float1 },
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
              transform: `translate(calc(-50% + ${item.x}px), calc(-50% + ${item.y + item.float}px))`,
              fontSize: item.size,
              fontWeight: 300,
              color: theme.colors.primary,
              opacity: symbolOpacity,
              textShadow: theme.shadows.textGlow,
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
