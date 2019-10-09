import React from 'react';
import { Diamond } from '../../../assets/icons';
import './styles.css';

export const Sparkles = () => (
  <>
    {Array.from({ length: 10 }).map((_, i) => (
      <Diamond key={i} className={`sparkle sparkle-${i}`} />
    ))}
  </>
);
