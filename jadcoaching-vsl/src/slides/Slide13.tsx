import React from 'react';
import { TestimonialSlide } from '../components/TestimonialSlide';

export const Slide13: React.FC = () => {
  return (
    <TestimonialSlide
      quote="Le changement a été immédiat : Jad expliquait chaque notion avec une clarté et une rapidité incroyables. Ce qui était flou en classe devenait limpide avec lui."
      name="Stan Stelcher"
      school="HEIG-Vaud"
      beforeGrade="1.7/6"
      afterGrade="5/6"
      photo="stan-stelcher.jpg"
    />
  );
};
