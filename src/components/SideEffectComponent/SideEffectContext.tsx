import { createContext } from 'react';
import { canUseDOM } from '../../lib/dom';

export interface SideEffect {
  window: Partial<Window>;
  document: Partial<Document>;
}

export const defaultSideEffectContext: SideEffect = canUseDOM ? {
  window: window,
  document: document,
} : {
  window: {},
  document: {},
};

export const SideEffectContext = createContext<SideEffect>(defaultSideEffectContext);
