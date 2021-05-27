import { useContext } from 'react';
import { AdaptivityContext, SizeType, ViewHeight, ViewWidth } from '../components/AdaptivityProvider/AdaptivityContext';

interface Config {
  isDesktop?: boolean;
  sizeX?: boolean;
  sizeY?: boolean;
  viewWidth?: boolean;
  viewHeight?: boolean;
  hasMouse?: boolean;
}

export { SizeType, ViewWidth, ViewHeight };

export function withAdaptivity<T>(TargetComponent: T, config: Config): T {
  function AdaptivityConsumer(props: AdaptivityProps) {
    const context = useContext(AdaptivityContext);
    let update = false;

    if (props.sizeX || props.sizeY || typeof props.isDesktop === 'boolean') {
      update = true;
    }

    const isDesktop = typeof props.isDesktop === 'boolean' ? props.isDesktop : context.isDesktop;
    const sizeX = props.sizeX || context.sizeX;
    const sizeY = props.sizeY || context.sizeY;
    const viewWidth = context.viewWidth;
    const viewHeight = context.viewHeight;
    const hasMouse = context.hasMouse;

    const adaptivityProps: {
      isDesktop?: boolean;
      sizeX?: SizeType;
      sizeY?: SizeType;
      viewWidth?: ViewWidth;
      viewHeight?: ViewHeight;
      hasMouse?: boolean;
    } = {};
    config.isDesktop ? adaptivityProps.isDesktop = isDesktop : undefined;
    config.sizeX ? adaptivityProps.sizeX = sizeX : undefined;
    config.sizeY ? adaptivityProps.sizeY = sizeY : undefined;
    config.viewWidth ? adaptivityProps.viewWidth = viewWidth : undefined;
    config.viewHeight ? adaptivityProps.viewHeight = viewHeight : undefined;
    config.hasMouse ? adaptivityProps.hasMouse = hasMouse : undefined;

    // @ts-ignore
    const target = <TargetComponent {...props} {...adaptivityProps} />;

    if (update) {
      return <AdaptivityContext.Provider value={{ isDesktop, sizeX, sizeY, viewWidth, viewHeight, hasMouse }}>
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
  isDesktop?: boolean;
  /**
   * @ignore
   */
  viewWidth?: ViewWidth;
  /**
   * @ignore
   */
  viewHeight?: ViewHeight;
  /**
   * @ignore
   */
  hasMouse?: boolean;
}
