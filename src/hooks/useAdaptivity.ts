import { useContext } from 'react';
import {
  AdaptivityContext,
  AdaptivityContextInterface,
  AdaptivityProps,
  SizeProps,
} from '../components/AdaptivityProvider/AdaptivityContext';

export type { AdaptivityProps };

export const useAdaptivity = (props?: SizeProps): AdaptivityContextInterface => {
  return {
    ...useContext(AdaptivityContext),
    ...props,
  };
};
