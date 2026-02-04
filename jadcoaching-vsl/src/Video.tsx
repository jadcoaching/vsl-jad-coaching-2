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
// 20 seconds per slide = 600 frames

const SLIDE_DURATION = 600; // 20 seconds at 30fps

const SLIDE_CONFIG = [
  { component: Slide01, duration: SLIDE_DURATION },    // Tu es étudiant en Suisse ?
  { component: Slide02, duration: SLIDE_DURATION },    // Je veux te faire réussir
  { component: Slide03, duration: SLIDE_DURATION },    // Comment ça fonctionne ?
  { component: Slide04, duration: SLIDE_DURATION },    // #1 Débloque les concepts
  { component: Slide05, duration: SLIDE_DURATION },    // #2 Développe une méthode
  { component: Slide06, duration: SLIDE_DURATION },    // #3 Travaille sur ce qui tombe
  { component: Slide07, duration: SLIDE_DURATION },    // Comment je peux te promettre
  { component: Slide08, duration: SLIDE_DURATION },    // Jad, Diplômé EPFL
  { component: Slide09, duration: SLIDE_DURATION },    // Plus de 1254 étudiants
  { component: Slide10, duration: SLIDE_DURATION },    // Témoignage Lou
  { component: Slide11, duration: SLIDE_DURATION },    // Témoignage Stan
  { component: Slide12, duration: SLIDE_DURATION },    // Témoignage Alexis
  { component: Slide13, duration: SLIDE_DURATION },    // Témoignage Elisa
  { component: Slide14, duration: SLIDE_DURATION },    // Témoignage Val
  { component: Slide15, duration: SLIDE_DURATION },    // Ce qui fait échouer
  { component: Slide16, duration: SLIDE_DURATION },    // Réserve ton appel
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
