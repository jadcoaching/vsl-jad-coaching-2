import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from '../components/SlideWrapper';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../styles/theme';

export const Slide02: React.FC = () => {
  const frame = useCurrentFrame();

  // Floating animations
  const float1 = Math.sin(frame / 15) * 8;
  const float2 = Math.sin(frame / 12 + 1) * 10;
  const float3 = Math.sin(frame / 18 + 2) * 6;
  const float4 = Math.sin(frame / 14 + 3) * 9;
  const float5 = Math.sin(frame / 16 + 4) * 7;
  const float6 = Math.sin(frame / 13 + 5) * 11;

  const symbolOpacity = interpolate(frame, [40, 70], [0, 0.5], {
    extrapolateRight: 'clamp',
  });

  // Math symbols - bottom left
  const mathSymbols = [
    { symbol: '∑', x: -520, y: 180, size: 70, float: float1 },
    { symbol: '∫', x: -580, y: 250, size: 80, float: float2 },
    { symbol: '∬', x: -450, y: 300, size: 60, float: float3 },
    { symbol: 'π', x: -380, y: 220, size: 55, float: float4 },
    { symbol: '√', x: -620, y: 320, size: 65, float: float5 },
    { symbol: '∞', x: -500, y: 350, size: 50, float: float6 },
    { symbol: '±', x: -350, y: 280, size: 45, float: float1 },
    { symbol: '×', x: -420, y: 380, size: 40, float: float2 },
    { symbol: '÷', x: -550, y: 400, size: 42, float: float3 },
    { symbol: 'f(x)', x: -650, y: 200, size: 35, float: float4 },
    { symbol: 'dx', x: -300, y: 350, size: 38, float: float5 },
    { symbol: 'lim', x: -480, y: 420, size: 32, float: float6 },
    { symbol: '∂', x: -600, y: 380, size: 48, float: float1 },
    { symbol: 'Δ', x: -330, y: 400, size: 44, float: float2 },
    { symbol: '≠', x: -400, y: 450, size: 36, float: float3 },
    { symbol: '≈', x: -550, y: 480, size: 34, float: float4 },
    { symbol: '∝', x: -680, y: 280, size: 40, float: float5 },
    { symbol: '∈', x: -280, y: 420, size: 38, float: float6 },
  ];

  // Stats symbols - bottom right
  const statsSymbols = [
    { symbol: 'σ', x: 520, y: 180, size: 70, float: float2 },
    { symbol: 'μ', x: 580, y: 250, size: 65, float: float1 },
    { symbol: 'χ²', x: 450, y: 300, size: 55, float: float4 },
    { symbol: 'x̄', x: 380, y: 220, size: 60, float: float3 },
    { symbol: 'σ²', x: 620, y: 320, size: 50, float: float6 },
    { symbol: 'P', x: 500, y: 350, size: 55, float: float5 },
    { symbol: 'n', x: 350, y: 280, size: 48, float: float2 },
    { symbol: 'H₀', x: 420, y: 380, size: 40, float: float1 },
    { symbol: 'H₁', x: 550, y: 400, size: 40, float: float4 },
    { symbol: 'α', x: 650, y: 200, size: 52, float: float3 },
    { symbol: 'β', x: 300, y: 350, size: 50, float: float6 },
    { symbol: 'ρ', x: 480, y: 420, size: 45, float: float5 },
    { symbol: 'λ', x: 600, y: 380, size: 48, float: float2 },
    { symbol: 'Σ', x: 330, y: 400, size: 44, float: float1 },
    { symbol: '∼', x: 400, y: 450, size: 36, float: float4 },
    { symbol: 'E[X]', x: 550, y: 480, size: 30, float: float3 },
    { symbol: 'Var', x: 680, y: 280, size: 32, float: float6 },
    { symbol: 'N', x: 280, y: 420, size: 42, float: float5 },
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
        {/* Math symbols - bottom left */}
        {mathSymbols.map((item, index) => (
          <div
            key={`math-${index}`}
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
              fontFamily: 'serif',
            }}
          >
            {item.symbol}
          </div>
        ))}

        {/* Stats symbols - bottom right */}
        {statsSymbols.map((item, index) => (
          <div
            key={`stats-${index}`}
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
