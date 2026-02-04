import React from 'react';
import { TestimonialSlide } from '../components/TestimonialSlide';

export const Slide13: React.FC = () => {
  return (
    <TestimonialSlide
      quote="Premier examen de stats : 2.5/6. Deuxième examen de stats après les cours de Jad : 5.5/6 ! Avec le soutien de Jad, tu réaliseras que les statistiques sont accessibles et pas impossibles. Merci, Jad !!!"
      name="Elisa Pucci"
      school="Unidistance"
      beforeGrade="2.5/6"
      afterGrade="5.5/6"
    />
  );
};
