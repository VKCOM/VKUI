import * as React from 'react';
import { ComponentType, Fragment, isValidElement } from 'react';
import { MatchImageSnapshotOptions } from 'jest-image-snapshot';
import { screenshot } from '@project-e2e/helpers';
// Импорты из отдельных модулей помогают jest отслеживать зависимости
import { ConfigProvider } from '../../components/ConfigProvider/ConfigProvider';
import { Panel } from '../../components/Panel/Panel';
import { Platform } from '../../lib/platform';
import { BREAKPOINTS, SizeType, ViewWidth } from '../../lib/adaptivity';
import { AdaptivityProvider } from '../../components/AdaptivityProvider/AdaptivityProvider';
import { type AdaptivityProps } from '../../components/AdaptivityProvider/AdaptivityContext';
import { View } from '../../components/View/View';
import { AppRoot } from '../../components/AppRoot/AppRoot';
import { Group } from '../../components/Group/Group';
import { AppearanceType } from '@vkontakte/vk-bridge';
import { HasChildren } from '../../types';
import { BrowserType } from 'jest-playwright-preset';
import { Appearance } from '../../helpers/appearance';

type AdaptivityFlag = boolean | 'x' | 'y';
type PropDesc<Props> = { [K in keyof Props]?: Array<Props[K]> } & {
  $adaptivity?: AdaptivityFlag;
};
type SizeProps = Pick<AdaptivityProps, 'sizeX' | 'sizeY'>;
type TestProps<Props> = Array<Props & SizeProps>;
type CartesianOptions = { adaptive: boolean };

export const APPEARANCE = (process.env.APPEARANCE ?? Appearance.LIGHT) as Appearance;
export const BROWSER = (process.env.BROWSER ?? 'chromium') as BrowserType;
export const PLATFORM = (process.env.PLATFORM ?? 'vkcom') as Platform;

function getAdaptivity(adaptivity?: AdaptivityFlag) {
  const extra: PropDesc<SizeProps> = {};
  if (adaptivity && adaptivity !== 'y') {
    extra.sizeX = Object.values(SizeType);
  }
  if (adaptivity && adaptivity !== 'x') {
    extra.sizeY = Object.values(SizeType);
  }
  return extra;
}

function cartesian<Props>(
  { $adaptivity, ...propDesc }: PropDesc<Props>,
  ops: CartesianOptions,
): TestProps<Props> {
  propDesc = {
    ...propDesc,
    ...getAdaptivity(ops.adaptive ? $adaptivity : false),
  };
  return Object.entries(propDesc).reduce<TestProps<Props>>(
    (acc, [prop, values]: [string, any]) => {
      const res: any[] = [];
      acc.forEach((props) => {
        values.forEach((value: any) => {
          res.push({ ...props, [prop]: value });
        });
      });
      return res;
    },
    // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
    [{}] as TestProps<Props>,
  );
}

function multiCartesian<Props>(
  propSets: Array<PropDesc<Props>>,
  ops: CartesianOptions,
): TestProps<Props> {
  if (propSets.length === 0) {
    return [{} as any];
  }
  return propSets.reduce((acc, ortho) => acc.concat(cartesian(ortho, ops) as any), []);
}

function prettyProps(props: any) {
  return Object.entries(props)
    .sort(([key1], [key2]) => Number(key1 > key2))
    .map(([prop, value]: [string, any]) => {
      if (value === undefined) {
        return '';
      }
      if (value === true) {
        return prop;
      }
      if (
        isValidElement(value) ||
        (Array.isArray(value) && value.every((node: any) => isValidElement(node)))
      ) {
        return `${prop}=<jsx>`;
      }
      if (prop === 'style' || prop === 'src' || prop === 'photos') {
        const _value = JSON.stringify(value);

        return `${prop}=${_value.replace(/"\\?data:.+?"+?/gi, '{base64}')}`;
      }
      return `${prop}=${JSON.stringify(value)}`;
    })
    .join(' ');
}

type ScreenshotOptions = {
  matchScreenshot?: MatchImageSnapshotOptions;
  platforms?: Platform[];
  appearance?: AppearanceType;
  adaptivity?: Partial<AdaptivityProps>;
  Wrapper?: ComponentType;
};

function getAdaptivePxWidth(viewWidth: ViewWidth) {
  switch (viewWidth) {
    case ViewWidth.SMALL_MOBILE:
      return BREAKPOINTS.MOBILE - 10;
    case ViewWidth.MOBILE:
      return BREAKPOINTS.MOBILE;
    case ViewWidth.SMALL_TABLET:
      return BREAKPOINTS.SMALL_TABLET;
    case ViewWidth.TABLET:
      return BREAKPOINTS.TABLET;
    case ViewWidth.DESKTOP:
      return BREAKPOINTS.DESKTOP;
  }
}

const AppWrapper = (props: HasChildren) => (
  <AppRoot mode="embedded">
    <View activePanel="panel">
      <Panel id="panel">
        <Group>{props.children}</Group>
      </Panel>
    </View>
  </AppRoot>
);

export function describeScreenshotFuzz<Props>(
  Component: ComponentType<Props>,
  propSets: Array<PropDesc<Props>> = [],
  options: ScreenshotOptions = {},
) {
  const { matchScreenshot, platforms, adaptivity = {}, Wrapper = AppWrapper } = options;

  const describeConditional = platforms && !platforms.includes(PLATFORM) ? describe.skip : describe;

  describeConditional(PLATFORM, () => {
    jest.setTimeout(40000);

    const isVKCOM = PLATFORM === Platform.VKCOM;

    let width: number | 'auto' = isVKCOM ? 'auto' : BREAKPOINTS.MOBILE;
    if (adaptivity.viewWidth) {
      width = getAdaptivePxWidth(adaptivity.viewWidth);
    }

    const adaptivityProps: AdaptivityProps = Object.assign(
      isVKCOM ? { sizeX: SizeType.COMPACT, sizeY: SizeType.COMPACT } : {},
      adaptivity,
    );

    const viewWidth = adaptivityProps.viewWidth ? ` w_${adaptivityProps.viewWidth}` : '';

    it(`${BROWSER}-${APPEARANCE}${viewWidth}`, async () => {
      expect(
        await screenshot(
          <ConfigProvider appearance={APPEARANCE} platform={PLATFORM}>
            <AdaptivityProvider {...adaptivityProps}>
              <div
                className="vkuiTestWrapper"
                style={{
                  width,
                  maxWidth: BREAKPOINTS.DESKTOP,
                  position: 'absolute',
                  height: 'auto',
                }}
              >
                <Wrapper>
                  {multiCartesian(propSets, { adaptive: !isVKCOM }).map((props, i) => {
                    const adaptivityProviderProps = {
                      ...adaptivityProps,
                    };
                    if (props.sizeX) {
                      adaptivityProviderProps.sizeX = props.sizeX;
                    }
                    if (props.sizeY) {
                      adaptivityProviderProps.sizeY = props.sizeY;
                    }

                    return (
                      <Fragment key={i}>
                        <div className="vkuiProps">{prettyProps(props)}</div>
                        <div>
                          <AdaptivityProvider {...adaptivityProviderProps}>
                            <Component {...props} />
                          </AdaptivityProvider>
                        </div>
                      </Fragment>
                    );
                  })}
                </Wrapper>
              </div>
            </AdaptivityProvider>
          </ConfigProvider>,
        ),
      ).toMatchImageSnapshot(matchScreenshot);
    });
  });
}

export function customSnapshotIdentifier({
  defaultIdentifier,
}: {
  defaultIdentifier: string;
}): string {
  return `${BROWSER}-${APPEARANCE}-${PLATFORM}-${defaultIdentifier}`;
}
