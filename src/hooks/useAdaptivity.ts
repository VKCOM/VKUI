import { useContext } from 'react';
import {
  AdaptivityContext,
  AdaptivityContextInterface,
  AdaptivityProps,
  SizeProps,
} from '../components/AdaptivityProvider/AdaptivityContext';

export type { AdaptivityProps };

export const useAdaptivity = (props?: SizeProps): AdaptivityContextInterface => {
  const contextProps = useContext(AdaptivityContext);

  return {
    ...contextProps,
    sizeX: props?.sizeX || contextProps.sizeX,
    sizeY: props?.sizeY || contextProps.sizeY,
  };
};
