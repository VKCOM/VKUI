import { useAdaptivity } from '../hooks/useAdaptivity';
import { AdaptivityContext, SizeType, ViewHeight, ViewWidth } from '../components/AdaptivityProvider/AdaptivityContext';
import { useObjectMemo } from '../hooks/useObjectMemo';

type Config = { [K in keyof AdaptivityProps]?: boolean };

export { SizeType, ViewWidth, ViewHeight };

export function withAdaptivity<T>(TargetComponent: T, config: Config): T {
  function AdaptivityConsumer(props: AdaptivityProps) {
    const context = useAdaptivity();
    const { sizeX = context.sizeX, sizeY = context.sizeY } = props;
    const adaptivityProps = useObjectMemo({ ...context, sizeX, sizeY });

    const inject: AdaptivityProps = {};
    Object.keys(config).forEach((k: keyof AdaptivityProps) => {
      config[k] && ((inject as any)[k] = adaptivityProps[k]);
    });

    // @ts-ignore
    const target = <TargetComponent {...inject} {...props} />;

    if (props.sizeX || props.sizeY) {
      return <AdaptivityContext.Provider value={adaptivityProps}>
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
