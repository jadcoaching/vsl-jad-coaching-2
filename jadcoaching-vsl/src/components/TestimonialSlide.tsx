import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { SlideWrapper } from './SlideWrapper';
import { AnimatedText } from './AnimatedText';
import { theme } from '../styles/theme';

interface TestimonialSlideProps {
  quote: string;
  name: string;
  school: string;
  beforeGrade?: string;
  afterGrade?: string;
}

export const TestimonialSlide: React.FC<TestimonialSlideProps> = ({
  quote,
  name,
  school,
  beforeGrade,
  afterGrade,
}) => {
  const frame = useCurrentFrame();

  const quoteMarkOpacity = interpolate(frame, [0, 30], [0, 0.1], {
    extrapolateRight: 'clamp',
  });

  return (
    <SlideWrapper variant="testimonial">
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 120,
        }}
      >
        {/* Quote marks background */}
        <div
          style={{
            position: 'absolute',
            left: 100,
            top: 150,
            fontSize: 400,
            fontWeight: 800,
            color: theme.colors.primary,
            opacity: quoteMarkOpacity,
            fontFamily: 'Georgia, serif',
          }}
        >
          "
        </div>

        {/* Grades display */}
        {beforeGrade && afterGrade && (
          <AnimatedText
            delay={0}
            animation="fadeIn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 30,
              marginBottom: 50,
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 600,
                color: theme.colors.textGray,
                textDecoration: 'line-through',
                opacity: 0.6,
              }}
            >
              {beforeGrade}
            </div>
            <div
              style={{
                fontSize: 36,
                color: theme.colors.primary,
              }}
            >
              →
            </div>
            <div
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: theme.colors.primary,
                textShadow: theme.shadows.textGlow,
              }}
            >
              {afterGrade}
            </div>
          </AnimatedText>
        )}

        {/* Quote */}
        <AnimatedText
          delay={15}
          animation="fadeUp"
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: theme.colors.textWhite,
            textAlign: 'center',
            lineHeight: 1.6,
            maxWidth: 1200,
            fontStyle: 'italic',
            marginBottom: 60,
          }}
        >
          "{quote}"
        </AnimatedText>

        {/* Author */}
        <AnimatedText
          delay={50}
          animation="fadeIn"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              fontWeight: 700,
              color: theme.colors.black,
              marginBottom: 10,
            }}
          >
            {name.charAt(0)}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: theme.colors.textWhite,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: theme.colors.primary,
            }}
          >
            {school}
          </div>
        </AnimatedText>
      </AbsoluteFill>
    </SlideWrapper>
  );
};
