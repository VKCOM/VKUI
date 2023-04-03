import * as React from 'react';
import { HasComponent } from '../../types';

export interface TypographyProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
  /**
   * Задаёт начертание шрифта, отличное от стандартного.
   */
  weight?: '1' | '2' | '3';
}

export interface HasCaps {
  caps?: boolean;
}
