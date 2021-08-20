import { useContext } from 'react';
import { AdaptivityContext } from '../components/AdaptivityProvider/AdaptivityContext';
import { AdaptivityProps } from '../hoc/withAdaptivity';

export const useAdaptivity = (props?: { [key: string]: any }): AdaptivityProps => {
  const contextAdaptivityProps = useContext(AdaptivityContext);

  if (props?.sizeX || props?.sizeY) {
    const {
      sizeX = contextAdaptivityProps.sizeX,
      sizeY = contextAdaptivityProps.sizeY,
    } = props;

    return Object.assign(
      {},
      contextAdaptivityProps,
      {
        sizeX,
        sizeY,
      });
  }

  return contextAdaptivityProps;
};
