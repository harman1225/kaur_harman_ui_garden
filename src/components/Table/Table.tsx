import React from 'react';
import { TableProps } from './Table.types';

export const Table = ({ children }: TableProps) => {
  return <table border={1}>{children}</table>;
};
