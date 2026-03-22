import React from 'react';
import { HeroImageProps } from './HeroImage.types';

export const HeroImage = ({ src, title }: HeroImageProps) => {
  return (
    <div>
      <img src={src} alt={title} width="100%" />
      <h2>{title}</h2>
    </div>
  );
};
