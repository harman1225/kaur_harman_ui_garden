import React from 'react';
import './Card.css';

export interface CardProps {
  title: string;
  description: string;
  shadow?: boolean;
}

export const Card = ({ title, description, shadow }: CardProps) => {
  return (
    <div className={`card ${shadow ? 'shadow' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
