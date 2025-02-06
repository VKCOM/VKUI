import * as React from 'react';
import type { AdaptivityProps } from '../../components/AdaptivityProvider/AdaptivityContext';
import { AdaptivityProvider } from '../../components/AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../../components/ConfigProvider/ConfigProvider';
import { BREAKPOINTS } from '../../lib/adaptivity';
import type { ColorSchemeType } from '../../lib/colorScheme';
import { mapObject } from '../../lib/object';
import type { PlatformType } from '../../lib/platform';
import { AppDefaultWrapper, type AppDefaultWrapperProps } from './AppDefaultWrapper';
import { TEST_CLASS_NAMES } from './constants';
import { getAdaptivePxWidth, isCustomValueWithLabel, multiCartesian, prettyProps } from './utils';

type DefaultProps<T extends React.ElementType> = Omit<
  React.ComponentProps<T>,
  'sizeX' | 'sizeY' | 'componentStateHeight'
>;

export interface InternalComponentPlaygroundProps<Props = DefaultProps<'div'>> {
  isFixedComponent?: boolean;
  platform: PlatformType;
  colorScheme: ColorSchemeType;
  adaptivityProviderProps?: Partial<AdaptivityProps>;
  propSets?: Parameters<typeof multiCartesian<Props>>[0];
  children: React.FC<Props>;
  AppWrapper?: React.ComponentType<AppDefaultWrapperProps>;
  componentStateHeight?: Partial<Record<PlatformType, number>>;
}

export type ComponentPlaygroundProps = Pick<
  InternalComponentPlaygroundProps,
  'platform' | 'colorScheme' | 'adaptivityProviderProps'
>;

/**
 * Рендерит переданный в `children` компонент с разными параметрами (`propSets`).
 */
export const ComponentPlayground = <Props extends DefaultProps<any> = DefaultProps<'div'>>({
  isFixedComponent = false,
  colorScheme,
  platform,
  adaptivityProviderProps: adaptivityProviderPropsProp,
  propSets = [],
  children: Children,
  AppWrapper = AppDefaultWrapper,
  componentStateHeight: globalComponentStateHeight,
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
    <ConfigProvider colorScheme={colorScheme} platform={platform}>
      <AdaptivityProvider {...adaptivityProviderProps}>
        <AppWrapper
          className={TEST_CLASS_NAMES.APP_ROOT}
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
          {multiCartesian<Props>(propSets, { adaptive: !isVKCOM, platform }).map((props, i) => {
            const clonedAdaptivityProviderProps = { ...adaptivityProviderProps };
            const { componentStateHeight, ...showedProps } = props;
            const { sizeX, sizeY, ...componentProps } = showedProps;

            if (sizeX) {
              clonedAdaptivityProviderProps.sizeX = sizeX;
            }

            if (sizeY) {
              clonedAdaptivityProviderProps.sizeY = sizeY;
            }

            const mappedProps: Props = mapObject(componentProps, (v) =>
              isCustomValueWithLabel(v) ? v.value : v,
            );
            const height = componentStateHeight || globalComponentStateHeight?.[platform];

            return (
              <div key={i} style={{ height }}>
                {isFixedComponent ? null : (
                  <div className={TEST_CLASS_NAMES.CONTENT}>{prettyProps(showedProps)}</div>
                )}
                <div>
                  <AdaptivityProvider {...clonedAdaptivityProviderProps}>
                    <Children {...mappedProps} />
                  </AdaptivityProvider>
                </div>
              </div>
            );
          })}
        </AppWrapper>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
