import React from 'react';
import { StarPointed } from '../../assets/icons';
import './stars.css';

export const Stars = () => (
  <>
    {Array.from({ length: 10 }).map((_, i) => (
      <StarPointed key={i} className={`star star-pointed-${i}`} />
    ))}
  </>
);
