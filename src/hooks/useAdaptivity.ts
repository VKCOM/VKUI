import * as React from 'react';
import { AdaptivityContext, AdaptivityProps } from '../components/AdaptivityProvider/AdaptivityContext';

export type { AdaptivityProps };

export const useAdaptivity = (): AdaptivityProps => {
  return React.useContext(AdaptivityContext);
};
