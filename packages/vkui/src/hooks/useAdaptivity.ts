import { useContext } from 'react';
import {
  AdaptivityContext,
  type AdaptivityProps,
} from '../components/AdaptivityProvider/AdaptivityContext';

export type { AdaptivityProps };

/**
 * Возвращает сырые данные из AdaptivityProvider.
 */
export const useAdaptivity = (): AdaptivityProps => {
  return useContext(AdaptivityContext);
};
