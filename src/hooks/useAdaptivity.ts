import { useContext } from 'react';
import { AdaptivityContext } from '../components/AdaptivityProvider/AdaptivityContext';
import type { AdaptivityProps } from '../components/AdaptivityProvider/AdaptivityContext';

export type { AdaptivityProps };

export const useAdaptivity = (): AdaptivityProps => {
  return useContext(AdaptivityContext);
};
