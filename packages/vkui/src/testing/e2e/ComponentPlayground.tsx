import * as React from 'react';
import type { AdaptivityProps } from '../../components/AdaptivityProvider/AdaptivityContext';
import { AdaptivityProvider } from '../../components/AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../../components/ConfigProvider/ConfigProvider';
import { DirectionProvider } from '../../components/DirectionProvider/DirectionProvider';
import { BREAKPOINTS } from '../../lib/adaptivity';
import type { ColorSchemeType } from '../../lib/colorScheme';
import { mapObject } from '../../lib/object';
import type { PlatformType } from '../../lib/platform';
import { AppDefaultWrapper, type AppDefaultWrapperProps } from './AppDefaultWrapper';
import { TEST_CLASS_NAMES } from './constants';
import { getAdaptivePxWidth, isCustomValueWithLabel, multiCartesian, prettyProps } from './utils';

type DefaultProps<T extends React.ElementType> = Omit<
  React.ComponentProps<T>,
  'sizeX' | 'sizeY' | 'dir'
>;

export interface InternalComponentPlaygroundProps<Props = DefaultProps<'div'>> {
  isFixedComponent?: boolean;
  platform: PlatformType;
  colorScheme: ColorSchemeType;
  adaptivityProviderProps?: Partial<AdaptivityProps>;
  propSets?: Parameters<typeof multiCartesian<Props>>[0];
  children: (props: Props) => React.ReactNode;
  AppWrapper?: React.ComponentType<AppDefaultWrapperProps>;
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
          {multiCartesian<Props>(propSets, { adaptive: !isVKCOM }).map((props, i) => {
            const clonedAdaptivityProviderProps = { ...adaptivityProviderProps };

            const { sizeX, sizeY, dir = 'ltr', ...componentProps } = props;

            if (sizeX) {
              clonedAdaptivityProviderProps.sizeX = sizeX;
            }

            if (sizeY) {
              clonedAdaptivityProviderProps.sizeY = sizeY;
            }

            const mappedProps: Props = mapObject(componentProps, (v) =>
              isCustomValueWithLabel(v) ? v.value : v,
            );

            return (
              <React.Fragment key={i}>
                {isFixedComponent ? null : (
                  <div className={TEST_CLASS_NAMES.CONTENT}>{prettyProps(props)}</div>
                )}
                <div dir={dir}>
                  <DirectionProvider value={dir}>
                    <AdaptivityProvider {...clonedAdaptivityProviderProps}>
                      {children(mappedProps)}
                    </AdaptivityProvider>
                  </DirectionProvider>
                </div>
              </React.Fragment>
            );
          })}
        </AppWrapper>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
