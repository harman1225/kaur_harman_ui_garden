import React from 'react';
import { TextProps } from './Text.types';

export const Text = ({ content }: TextProps) => {
  return <p>{content}</p>;
};
