import * as React from 'react';
import type { AdaptivityProps } from '../../components/AdaptivityProvider/AdaptivityContext';
import { AdaptivityProvider } from '../../components/AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../../components/ConfigProvider/ConfigProvider';
import { BREAKPOINTS } from '../../lib/adaptivity';
import type { AppearanceType } from '../../lib/appearance';
import type { PlatformType } from '../../lib/platform';
import { AppDefaultWrapper, type AppWrapperProps } from './AppDefaultWrapper';
import { TEST_CLASS_NAMES } from './constants';
import { getAdaptivePxWidth, multiCartesian, prettyProps } from './utils';

export interface InternalComponentPlaygroundProps<Props = React.ComponentProps<'div'>> {
  isFixedComponent?: boolean;
  platform: PlatformType;
  appearance: AppearanceType;
  adaptivityProviderProps?: Partial<AdaptivityProps>;
  propSets?: Parameters<typeof multiCartesian<Props>>[0];
  children: (props: Props) => React.ReactNode;
  AppWrapper?: React.ComponentType<AppWrapperProps>;
}

export type ComponentPlaygroundProps = Pick<
  InternalComponentPlaygroundProps,
  'platform' | 'appearance' | 'adaptivityProviderProps'
>;

/**
 * Рендерит переданный в `children` компонент с разными параметрами (`propSets`).
 */
export const ComponentPlayground = <
  Props extends React.ComponentProps<any> = React.ComponentProps<'div'>,
>({
  isFixedComponent = false,
  appearance,
  platform,
  adaptivityProviderProps: adaptivityProviderPropsProp,
  propSets = [],
  children,
  AppWrapper = AppDefaultWrapper,
  ...restProps
}: InternalComponentPlaygroundProps<Props>): React.ReactNode => {
  const isVKCOM = platform === 'vkcom';
  const adaptivityProviderProps: AdaptivityProps = Object.assign(
    isVKCOM ? { sizeX: 'regular', sizeY: 'compact' } : {},
    adaptivityProviderPropsProp,
  );

  const wrapperWidth = adaptivityProviderProps.viewWidth
    ? getAdaptivePxWidth(adaptivityProviderProps.viewWidth)
    : isVKCOM
      ? 'auto'
      : BREAKPOINTS.MOBILE;

  return (
    <ConfigProvider appearance={appearance} platform={platform}>
      <AdaptivityProvider {...adaptivityProviderProps}>
        <AppWrapper
          mode={isFixedComponent ? 'full' : undefined}
          style={
            isFixedComponent
              ? undefined
              : {
                  position: 'absolute',
                  width: wrapperWidth,
                  height: 'auto',
                  maxWidth: BREAKPOINTS.DESKTOP,
                }
          }
          {...restProps}
        >
          {multiCartesian(propSets, { adaptive: !isVKCOM }).map((props, i) => {
            const clonedAdaptivityProviderProps = { ...adaptivityProviderProps };

            if (props.sizeX) {
              clonedAdaptivityProviderProps.sizeX = props.sizeX;
            }

            if (props.sizeY) {
              clonedAdaptivityProviderProps.sizeY = props.sizeY;
            }

            return (
              <React.Fragment key={i}>
                {isFixedComponent ? null : (
                  <div className={TEST_CLASS_NAMES.CONTENT}>{prettyProps(props)}</div>
                )}
                <div>
                  <AdaptivityProvider {...clonedAdaptivityProviderProps}>
                    {children(props)}
                  </AdaptivityProvider>
                </div>
              </React.Fragment>
            );
          })}
        </AppWrapper>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
