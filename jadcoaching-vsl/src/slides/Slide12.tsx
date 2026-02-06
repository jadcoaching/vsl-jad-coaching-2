import React from 'react';
import { TestimonialSlide } from '../components/TestimonialSlide';

export const Slide12: React.FC = () => {
  return (
    <TestimonialSlide
      quote="D'une note de 2/6 à mon premier examen de maths, à un incroyable 5.5/6 après l'accompagnement JadCoaching ! Il a su identifier mes difficultés et m'a préparé de manière optimale pour l'examen. Grâce à son soutien, j'ai non seulement acquis de solides connaissances, mais j'ai aussi retrouvé confiance en moi."
      name="Lou Zahnd"
      school="HEC Lausanne"
      beforeGrade="2/6"
      afterGrade="5.5/6"
      photo="lou-zahnd.jpg"
    />
  );
};
