import React, { useContext } from 'react';
import type { FC, ComponentType } from 'react';
import { AdaptivityContext, SizeType, ViewWidth } from '../components/AdaptivityProvider/AdaptivityContext';
import getDisplayName from '../helpers/getDisplayName';

interface Config {
  sizeX?: boolean;
  sizeY?: boolean;
  viewWidth?: boolean;
}

export { SizeType, ViewWidth };
  
export interface AdaptivityProps {
  sizeX?: SizeType;
  sizeY?: SizeType;
  viewWidth?: ViewWidth;
}

export default function withAdaptivity<P extends AdaptivityProps>(Component: ComponentType<P>, config: Config): ComponentType<P> {
  const AdaptivityConsumer: FC<P> = (props: P) => {
    const context = useContext(AdaptivityContext);
    let update = false;

    if (props.sizeX || props.sizeY) {
      update = true;
    }

    const sizeX = props.sizeX || context.sizeX;
    const sizeY = props.sizeY || context.sizeY;
    const viewWidth = context.viewWidth;

    const adaptivityProps: AdaptivityProps = {};
    config.sizeX ? adaptivityProps.sizeX = sizeX : undefined;
    config.sizeY ? adaptivityProps.sizeY = sizeY : undefined;
    config.viewWidth ? adaptivityProps.viewWidth = viewWidth : undefined;

    const target = <Component {...props} {...adaptivityProps} />;

    if (update) {
      return <AdaptivityContext.Provider value={{ sizeX, sizeY, viewWidth }}>
        {target}
      </AdaptivityContext.Provider>;
    }

    return target;
  }
  
  AdaptivityConsumer.displayName = `withAdaptivity(${getDisplayName(Component)})`;

  return AdaptivityConsumer;
}
