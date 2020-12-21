import { useContext } from 'react';
import { AdaptivityContext } from '../components/AdaptivityProvider/AdaptivityContext';
import { AdaptivityProps } from '../hoc/withAdaptivity';

export const useAdaptivity = (): AdaptivityProps => {
  return useContext(AdaptivityContext);
};
