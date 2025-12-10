import * as React from 'react';
import {
  AdaptivityContext,
  type AdaptivityProps,
} from '../components/AdaptivityProvider/AdaptivityContext';

export type { AdaptivityProps };

/**
 * Хук из контекста возвращает свойства, переданные в `AdaptivityProvider`.
 */
export const useAdaptivity = (): AdaptivityProps => {
  return React.useContext(AdaptivityContext);
};
