import { useContext } from 'react';
import {
  AdaptivityContext,
  AdaptivityContextInterface,
  AdaptivityProps,
  SizeProps,
  SizeType,
} from '../components/AdaptivityProvider/AdaptivityContext';

type UseAdaptivityProps = { [K in keyof SizeProps]: SizeType };

export type { AdaptivityProps };

export const useAdaptivity = (props?: UseAdaptivityProps): AdaptivityContextInterface => {
  return {
    ...useContext(AdaptivityContext),
    ...props,
  };
};
