import * as React from 'react';
import type { Locator } from '@playwright/test';
import type {
  AdaptivityProps,
  SizeProps,
} from '../../components/AdaptivityProvider/AdaptivityContext';
import { BREAKPOINTS, ViewWidth, ViewWidthType } from '../../lib/adaptivity';

export function getAdaptivePxWidth(viewWidth: ViewWidthType) {
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

type AdaptivityFlag = boolean | 'x' | 'y';
type PropDesc<Props> = { [K in keyof Props]?: Array<Props[K]> } & {
  $adaptivity?: AdaptivityFlag;
};

function getAdaptivity(adaptivity?: AdaptivityFlag) {
  const extra: PropDesc<SizeProps> = {};
  if (adaptivity && adaptivity !== 'y') {
    extra.sizeX = ['compact', 'regular'];
  }
  if (adaptivity && adaptivity !== 'x') {
    extra.sizeY = ['compact', 'regular'];
  }
  return extra;
}

type TestProps<Props> = Array<Props & SizeProps>;
type CartesianOptions = { adaptive: boolean };

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

export function multiCartesian<Props>(
  propSets: Array<PropDesc<Props>>,
  ops: CartesianOptions,
): TestProps<Props> {
  if (propSets.length === 0) {
    return [{} as any];
  }
  return propSets.reduce((acc, ortho) => acc.concat(cartesian(ortho, ops) as any), []);
}

export function prettyProps(props: any) {
  return Object.entries(props)
    .sort(([key1], [key2]) => Number(key1 > key2))
    .map(([prop, value]: [string, any]) => {
      if (value === undefined) {
        return `${prop}=undefined`;
      }
      if (value === true) {
        return prop;
      }
      if (
        React.isValidElement(value) ||
        (Array.isArray(value) && value.every((node: any) => React.isValidElement(node)))
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

type GenerateCustomScreenshotNameOptions = {
  platform: string;
  browserName: string;
  appearance: string;
  adaptivityProviderProps?: Partial<AdaptivityProps>;
};

export function generateCustomScreenshotName(
  testTitlePath: string[],
  options: GenerateCustomScreenshotNameOptions,
  expectCallCount: number,
) {
  const { platform, browserName, appearance } = options;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_excludeFilePath, mainTestTitle, ...restTestTitles] = testTitlePath;

  return [
    mainTestTitle,

    ...restTestTitles,

    platform,

    browserName,

    appearance,

    expectCallCount,

    'snap.png',
  ]
    .join(' ')
    .toLocaleLowerCase();
}

export const getLocatorMouseCoords = async (locator: Locator): Promise<[number, number]> => {
  const boundingBox = await locator.boundingBox();
  return boundingBox
    ? [boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2]
    : [0, 0];
};
