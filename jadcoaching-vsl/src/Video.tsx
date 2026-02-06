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
  Slide17,
  Slide18,
  Slide19,
  Slide20,
  Slide21,
  Slide22,
  Slide23,
} from './slides';
import { theme } from './styles/theme';

// Slide durations in frames (at 30fps)
// 20 seconds per slide = 600 frames

const SLIDE_DURATION = 600; // 20 seconds at 30fps

const SLIDE_CONFIG = [
  { component: Slide01, duration: SLIDE_DURATION },    // Tu es étudiant en Suisse ?
  { component: Slide02, duration: SLIDE_DURATION },    // Tu GALÈRES en maths ou en stats ?
  { component: Slide03, duration: SLIDE_DURATION },    // Le problème ce n'est pas ton niveau
  { component: Slide04, duration: SLIDE_DURATION },    // Je vais te faire réussir
  { component: Slide10, duration: SLIDE_DURATION },    // Jad, Diplômé EPFL
  { component: Slide11, duration: SLIDE_DURATION },    // Plus de 1254 étudiants
  { component: Slide05, duration: SLIDE_DURATION },    // Accompagnement JadCoaching
  { component: Slide06, duration: SLIDE_DURATION },    // #1 Débloque les concepts
  { component: Slide07, duration: SLIDE_DURATION },    // #2 Développe une méthode
  { component: Slide08, duration: SLIDE_DURATION },    // #3 Travaille sur ce qui tombe
  { component: Slide09, duration: SLIDE_DURATION },    // Résultat ?
  { component: Slide12, duration: SLIDE_DURATION },    // Témoignage Lou
  { component: Slide13, duration: SLIDE_DURATION },    // Témoignage Stan
  { component: Slide14, duration: SLIDE_DURATION },    // Témoignage Elisa
  { component: Slide15, duration: SLIDE_DURATION },    // Témoignage Alexis
  { component: Slide16, duration: SLIDE_DURATION },    // Témoignage Val
  { component: Slide23, duration: SLIDE_DURATION },    // Ce qui fait échouer la majorité
  { component: Slide17, duration: SLIDE_DURATION },    // Accompagnement + Comment ça fonctionne ?
  { component: Slide18, duration: SLIDE_DURATION },    // Étape 1 - Appel découverte
  { component: Slide19, duration: SLIDE_DURATION },    // Étape 2 - Accompagnement personnalisé
  { component: Slide20, duration: SLIDE_DURATION },    // Étape 3 - On travaille ensemble
  { component: Slide21, duration: SLIDE_DURATION },    // Étape 4 - Tu réussis
  { component: Slide22, duration: SLIDE_DURATION },    // Réserve ton appel
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
