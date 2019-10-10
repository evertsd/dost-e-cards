import React from 'react';
import { StarPointed } from '../../../assets/icons';
import './styles.css';

export const Stars = () => (
  <>
    {Array.from({ length: 9 }).map((_, i) => (
      <StarPointed key={i} className={`star star-pointed-${i}`} />
    ))}
  </>
);
