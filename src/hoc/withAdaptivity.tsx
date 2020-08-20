import React, { useContext } from 'react';
import { AdaptivityContext, SizeType, ViewWidth } from '../components/AdaptivityProvider/AdaptivityContext';

interface Config {
  sizeX?: boolean;
  sizeY?: boolean;
  viewWidth?: boolean;
}

export { SizeType, ViewWidth };

export default function withAdaptivity<T>(TargetComponent: T, config: Config): T {
  function AdaptivityConsumer(props: AdaptivityProps) {
    const context = useContext(AdaptivityContext);
    let update = false;

    if (props.sizeX || props.sizeY) {
      update = true;
    }

    const sizeX = props.sizeX || context.sizeX;
    const sizeY = props.sizeY || context.sizeY;
    const viewWidth = context.viewWidth;

    const adaptivityProps: {
      sizeX?: SizeType;
      sizeY?: SizeType;
      viewWidth?: ViewWidth;
    } = {};
    config.sizeX ? adaptivityProps.sizeX = sizeX : undefined;
    config.sizeY ? adaptivityProps.sizeY = sizeY : undefined;
    config.viewWidth ? adaptivityProps.viewWidth = viewWidth : undefined;

    // @ts-ignore
    const target = <TargetComponent {...props} {...adaptivityProps} />;

    if (update) {
      return <AdaptivityContext.Provider value={{ sizeX, sizeY, viewWidth }}>
        {target}
      </AdaptivityContext.Provider>;
    }

    return target;
  }
  
  const displayName = Component.displayName || Component.name || 'Component';
  AdaptivityConsumer.displayName = `withAdaptivity{displayName})`;

  return AdaptivityConsumer as unknown as T;
}

export interface AdaptivityProps {
  sizeX?: SizeType;
  sizeY?: SizeType;
  viewWidth?: ViewWidth;
}
