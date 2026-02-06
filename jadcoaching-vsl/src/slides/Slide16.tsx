import React from 'react';
import { TestimonialSlide } from '../components/TestimonialSlide';

export const Slide16: React.FC = () => {
  return (
    <TestimonialSlide
      quote="Jad est un coach à la fois bienveillant et exigeant, toujours déterminé à te faire progresser et à te préparer au mieux pour tes examens. Grâce à son accompagnement, sa rigueur et une méthode structurée, j'ai obtenu la note de 6/6 en maths."
      name="Val Garnier"
      school="ESC UNIL"
      afterGrade="6/6"
      photo="val-garnier.jpg"
    />
  );
};
