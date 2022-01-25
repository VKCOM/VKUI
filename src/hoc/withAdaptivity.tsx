import * as React from "react";
import {
  AdaptivityContext,
  SizeType,
  ViewHeight,
  ViewWidth,
  AdaptivityContextInterface,
  AdaptivityProps,
  SizeProps,
} from "../components/AdaptivityProvider/AdaptivityContext";

export { SizeType, ViewWidth, ViewHeight };
export type { AdaptivityProps };

interface Config {
  sizeX?: boolean;
  sizeY?: boolean;
  viewWidth?: boolean;
  viewHeight?: boolean;
  hasMouse?: boolean;
  deviceHasHover?: boolean;
}

export function withAdaptivity<T extends AdaptivityProps>(
  TargetComponent: React.ComponentType<T>,
  config: Config
): React.FC<Omit<T, keyof AdaptivityContextInterface> & SizeProps> {
  const AdaptivityConsumer: React.ComponentType<
    Omit<T, keyof AdaptivityContextInterface> & SizeProps
  > = (props: Omit<T, keyof AdaptivityContextInterface> & SizeProps) => {
    const context = React.useContext(AdaptivityContext);
    let update = false;

    if (props.sizeX || props.sizeY) {
      update = true;
    }

    const sizeX = props.sizeX || context.sizeX;
    const sizeY = props.sizeY || context.sizeY;
    const viewWidth = context.viewWidth;
    const viewHeight = context.viewHeight;
    const hasMouse = context.hasMouse;
    const deviceHasHover = context.deviceHasHover;

    const adaptivityProps: {
      sizeX?: SizeType;
      sizeY?: SizeType;
      viewWidth?: ViewWidth;
      viewHeight?: ViewHeight;
      hasMouse?: boolean;
      deviceHasHover?: boolean;
    } = {};

    config.sizeX ? (adaptivityProps.sizeX = sizeX) : undefined;
    config.sizeY ? (adaptivityProps.sizeY = sizeY) : undefined;
    config.viewWidth ? (adaptivityProps.viewWidth = viewWidth) : undefined;
    config.viewHeight ? (adaptivityProps.viewHeight = viewHeight) : undefined;
    config.hasMouse ? (adaptivityProps.hasMouse = hasMouse) : undefined;
    config.deviceHasHover
      ? (adaptivityProps.deviceHasHover = deviceHasHover)
      : undefined;

    const target = <TargetComponent {...(props as T)} {...adaptivityProps} />;

    if (update) {
      return (
        <AdaptivityContext.Provider
          value={{
            sizeX,
            sizeY,
            viewWidth,
            viewHeight,
            hasMouse,
            deviceHasHover,
          }}
        >
          {target}
        </AdaptivityContext.Provider>
      );
    }

    return target;
  };

  return AdaptivityConsumer;
}
