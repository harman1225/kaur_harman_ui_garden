import React from 'react';
import { LabelProps } from './Label.types';

export const Label = ({ text, htmlFor }: LabelProps) => {
  return <label htmlFor={htmlFor}>{text}</label>;
};
