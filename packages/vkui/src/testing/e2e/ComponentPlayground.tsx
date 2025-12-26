import * as React from 'react';
import type { AdaptivityProps } from '../../components/AdaptivityProvider/AdaptivityContext';
import { AdaptivityProvider } from '../../components/AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../../components/ConfigProvider/ConfigProvider';
import { DirectionProvider } from '../../components/DirectionProvider/DirectionProvider';
import { BREAKPOINTS, ViewWidth } from '../../lib/adaptivity';
import type { ColorSchemeType } from '../../lib/colorScheme';
import { mapObject } from '../../lib/object';
import type { PlatformType } from '../../lib/platform';
import { AppDefaultWrapper, type AppDefaultWrapperProps } from './AppDefaultWrapper';
import { TEST_CLASS_NAMES } from './constants';
import { getAdaptivePxWidth, isCustomValueWithLabel, multiCartesian, prettyProps } from './utils';

// TODO [#9015]: Удалить sizeX и sizeY.
type DefaultProps<T extends React.ElementType> = Omit<
  React.ComponentProps<T>,
  'sizeX' | 'sizeY' | 'density' | 'dir' | 'componentStateHeight'
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
  adaptivityProviderProps = {},
  propSets = [],
  children: Children,
  AppWrapper = AppDefaultWrapper,
  componentStateHeight: globalComponentStateHeight,
  ...restProps
}: InternalComponentPlaygroundProps<Props>): React.ReactNode => {
  const isVKCOM = platform === 'vkcom';
  let {
    viewWidth: globalViewWidth,
    viewHeight: globalViewHeight,
    sizeX: globalSizeX,
    density: globalDensity,
    hasPointer: globalHasPointer,
  } = adaptivityProviderProps;

  const wrapperWidth = globalViewWidth
    ? getAdaptivePxWidth(globalViewWidth)
    : isVKCOM
      ? 'auto'
      : BREAKPOINTS.MOBILE;

  if (isVKCOM) {
    globalViewWidth = ViewWidth.SMALL_TABLET;
    if (globalDensity === undefined) {
      globalDensity = 'compact';
    }
  } else {
    // TODO [#9015]: заменить в `*.e2e.tsx` на `ViewWidth.SMALL_TABLET` вместо `sizeX="regular"` или на ViewWidth.MOBILE вместо `sizeX="compact"`.
    if (globalSizeX !== undefined) {
      globalViewWidth = globalSizeX === 'regular' ? ViewWidth.SMALL_TABLET : ViewWidth.MOBILE;
    }
  }

  return (
    <ConfigProvider colorScheme={colorScheme} platform={platform}>
      <AdaptivityProvider
        viewWidth={globalViewWidth}
        viewHeight={globalViewHeight}
        density={globalDensity}
        hasPointer={globalHasPointer}
      >
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
          {multiCartesian<Props>(propSets, { adaptive: !isVKCOM, platform }).map(
            ({ componentStateHeight, ...showedProps }, i) => {
              const {
                sizeX: localSizeX,
                sizeY: localSizeY,
                dir = 'ltr',
                ...componentProps
              } = showedProps;
              const adaptivityProps: AdaptivityProps = {
                viewWidth: globalViewWidth,
                viewHeight: globalViewHeight,
                density: globalDensity,
                hasPointer: globalHasPointer,
              };
              // TODO [#9015]: заменить на `localeViewWidth` после исправления в `./utils.tsx`
              if (localSizeX) {
                adaptivityProps.viewWidth =
                  localSizeX === 'regular' ? ViewWidth.SMALL_TABLET : ViewWidth.MOBILE;
              }
              // TODO [#9015]: заменить на `localDensity` после исправления в `./utils.tsx`
              if (localSizeY) {
                adaptivityProps.density = localSizeY;
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
                  <div dir={dir}>
                    <DirectionProvider value={dir}>
                      <AdaptivityProvider {...adaptivityProps}>
                        <Children {...mappedProps} />
                      </AdaptivityProvider>
                    </DirectionProvider>
                  </div>
                </div>
              );
            },
          )}
        </AppWrapper>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
