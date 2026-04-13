'use client';

import type * as React from 'react';
import { VisuallyHidden } from '../../components/VisuallyHidden/VisuallyHidden';

interface FocusGuardProps {
  onFocus?: ((event: React.FocusEvent<HTMLSpanElement>) => void) | undefined;
}

export const FocusGuard = ({ onFocus }: FocusGuardProps) => (
  <VisuallyHidden aria-hidden data-focus-guard tabIndex={0} onFocus={onFocus} />
);
