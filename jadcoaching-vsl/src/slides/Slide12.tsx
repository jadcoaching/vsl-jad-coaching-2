import React from 'react';
import { TestimonialSlide } from '../components/TestimonialSlide';

export const Slide12: React.FC = () => {
  return (
    <TestimonialSlide
      quote="Grâce à son soutien, j'ai non seulement acquis de solides connaissances, mais j'ai aussi retrouvé confiance en moi."
      name="Lou Zahnd"
      school="HEC Lausanne"
      beforeGrade="2/6"
      afterGrade="5.5/6"
      photo="lou-zahnd.jpg"
    />
  );
};
