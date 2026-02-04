import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { SlideTransition } from './components/SlideTransition';
import {
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
} from './slides';
import { theme } from './styles/theme';

// Slide durations in frames (at 30fps)
// Short slides: 3 seconds = 90 frames
// Medium slides: 4 seconds = 120 frames
// Testimonial slides: 6 seconds = 180 frames
// CTA: 5 seconds = 150 frames

const SLIDE_CONFIG = [
  { component: Slide01, duration: 120 },    // Tu es étudiant en Suisse ?
  { component: Slide02, duration: 120 },    // Je veux te faire réussir
  { component: Slide03, duration: 100 },    // Comment ça fonctionne ?
  { component: Slide04, duration: 110 },    // #1 Débloque les concepts
  { component: Slide05, duration: 110 },    // #2 Développe une méthode
  { component: Slide06, duration: 110 },    // #3 Travaille sur ce qui tombe
  { component: Slide07, duration: 100 },    // Comment je peux te promettre
  { component: Slide08, duration: 120 },    // Jad, Diplômé EPFL
  { component: Slide09, duration: 150 },    // Plus de 1254 étudiants
  { component: Slide10, duration: 180 },    // Témoignage Lou
  { component: Slide11, duration: 180 },    // Témoignage Stan
  { component: Slide12, duration: 150 },    // Témoignage Alexis
  { component: Slide13, duration: 180 },    // Témoignage Elisa
  { component: Slide14, duration: 150 },    // Témoignage Val
  { component: Slide15, duration: 130 },    // Ce qui fait échouer
  { component: Slide16, duration: 150 },    // Réserve ton appel
];

export const JadCoachingVSL: React.FC = () => {
  let currentFrame = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.black }}>
      {SLIDE_CONFIG.map(({ component: SlideComponent, duration }, index) => {
        const startFrame = currentFrame;
        currentFrame += duration;

        return (
          <Sequence
            key={index}
            from={startFrame}
            durationInFrames={duration}
            name={`Slide ${index + 1}`}
          >
            <SlideTransition durationInFrames={duration}>
              <SlideComponent />
            </SlideTransition>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

// Calculate total duration
export const TOTAL_DURATION = SLIDE_CONFIG.reduce(
  (acc, slide) => acc + slide.duration,
  0
);
