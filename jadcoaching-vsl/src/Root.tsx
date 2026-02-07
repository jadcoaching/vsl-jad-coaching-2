import React from 'react';
import { Composition } from 'remotion';
import { JadCoachingVSL, TOTAL_DURATION } from './Video';
import { VIDEO_CONFIG } from './styles/theme';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="JadCoachingVSL"
        component={JadCoachingVSL}
        durationInFrames={TOTAL_DURATION}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
      />
    </>
  );
};
