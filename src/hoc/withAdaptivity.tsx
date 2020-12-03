import React, { useContext } from 'react';
import { AdaptivityContext, SizeType, ViewHeight, ViewWidth } from '../components/AdaptivityProvider/AdaptivityContext';

interface Config {
  sizeX?: boolean;
  sizeY?: boolean;
  viewWidth?: boolean;
  viewHeight?: boolean;
  hasMouse?: boolean;
  embedded?: boolean;
  modalRoot?: boolean;
}

export { SizeType, ViewWidth, ViewHeight };

export default function withAdaptivity<T>(TargetComponent: T, config: Config): T {
  function AdaptivityConsumer(props: AdaptivityProps) {
    const context = useContext(AdaptivityContext);
    let update = false;

    if (props.sizeX || props.sizeY || props.modalRoot) {
      update = true;
    }

    const sizeX = props.sizeX || context.sizeX;
    const sizeY = props.sizeY || context.sizeY;
    const viewWidth = context.viewWidth;
    const viewHeight = context.viewHeight;
    const hasMouse = context.hasMouse;
    const embedded = context.embedded;
    const modalRoot = context.modalRoot;

    const adaptivityProps: {
      sizeX?: SizeType;
      sizeY?: SizeType;
      viewWidth?: ViewWidth;
      viewHeight?: ViewHeight;
      hasMouse?: boolean;
      embedded?: boolean;
      modalRoot?: HTMLElement;
    } = {};
    config.sizeX ? adaptivityProps.sizeX = sizeX : undefined;
    config.sizeY ? adaptivityProps.sizeY = sizeY : undefined;
    config.viewWidth ? adaptivityProps.viewWidth = viewWidth : undefined;
    config.viewHeight ? adaptivityProps.viewHeight = viewHeight : undefined;
    config.hasMouse ? adaptivityProps.hasMouse = hasMouse : undefined;
    config.embedded ? adaptivityProps.embedded = embedded : undefined;
    config.modalRoot ? adaptivityProps.modalRoot = modalRoot : undefined;

    // @ts-ignore
    const target = <TargetComponent {...props} {...adaptivityProps} />;

    if (update) {
      return <AdaptivityContext.Provider value={{ sizeX, sizeY, viewWidth, viewHeight, hasMouse, embedded, modalRoot }}>
        {target}
      </AdaptivityContext.Provider>;
    }

    return target;
  }

  return AdaptivityConsumer as unknown as T;
}

export interface AdaptivityProps {
  sizeX?: SizeType;
  sizeY?: SizeType;
  viewWidth?: ViewWidth;
  viewHeight?: ViewHeight;
  hasMouse?: boolean;
  embedded?: boolean;
  modalRoot?: HTMLElement;
}
