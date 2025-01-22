import * as React from 'react';
import type {
  AdaptivityProps,
  SizeProps,
} from '../../components/AdaptivityProvider/AdaptivityContext';
import { getValueByKey } from '../../helpers/getValueByKey';
import { BREAKPOINTS, ViewWidth, type ViewWidthType } from '../../lib/adaptivity';
import { type PlatformType } from '../../lib/platform';

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

class CustomValueWithLabel<T> {
  public constructor(
    public value: T,
    public label: string,
  ) {}
}

type DecoratedPropValue<T> = T | CustomValueWithLabel<T>;

type AdaptivityFlag = boolean | 'x' | 'y';
type PropDesc<Props> = { [K in keyof Props]?: Array<DecoratedPropValue<Props[K]>> } & {
  $adaptivity?: AdaptivityFlag;
  $platformToHeight?: Partial<Record<PlatformType, number>>;
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

type TestProps<Props> = Array<
  Props & SizeProps & { $platformToHeight?: Partial<Record<PlatformType, number>> }
>;
type CartesianOptions = { adaptive: boolean };

function cartesian<Props>(
  { $adaptivity, $platformToHeight, ...propDesc }: PropDesc<Props>,
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
          res.push({ ...props, [prop]: value, $platformToHeight });
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

export function isCustomValueWithLabel<T>(value: any): value is CustomValueWithLabel<T> {
  return value instanceof CustomValueWithLabel;
}

export function withLabel<T>(value: T, label: string) {
  return new CustomValueWithLabel(value, label);
}

function defaultFormatFunction(key: string, valueString: string): string {
  return `${key}=${valueString}`;
}

function stringify(prop: string, value: any): string {
  if (value === true) {
    return prop;
  }
  if (typeof value === 'undefined') {
    return `${prop}?`;
  }
  const valueMapper = getValueByKey(
    typeof value,
    {
      function: () => '[function]',
      object: () => {
        if (isCustomValueWithLabel(value)) {
          return `[${value.label}]`;
        }
        if (value instanceof Date) {
          return new Intl.DateTimeFormat('ru').format(value);
        }
        if (value === null) {
          return 'null';
        }
        if (
          React.isValidElement(value) ||
          (Array.isArray(value) && value.every((node: any) => React.isValidElement(node)))
        ) {
          return '<jsx>';
        }
        if (Array.isArray(value)) {
          return '[array]';
        }
        return '[object]';
      },
      string: () => `"${value}"`,
      symbol: () => `[${value.toString().toLowerCase()}]`,
    },
    () => value.toString(),
  );

  return defaultFormatFunction(prop, valueMapper());
}

export function prettyProps(props: any) {
  return Object.entries(props)
    .sort(([key1], [key2]) => Number(key1 > key2))
    .map(([prop, value]: [string, any]) => stringify(prop, value))
    .join(' ');
}

type GenerateCustomScreenshotNameOptions = {
  platform: string;
  browserName: string;
  colorSchemeType: string;
  adaptivityProviderProps?: Partial<AdaptivityProps>;
};

export function generateCustomScreenshotName(
  testTitlePath: string[],
  options: GenerateCustomScreenshotNameOptions,
  expectCallCount: number,
) {
  const { platform, browserName, colorSchemeType } = options;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_excludeFilePath, mainTestTitle, ...restTestTitles] = testTitlePath;

  return [
    mainTestTitle,

    ...restTestTitles,

    platform,

    browserName,

    colorSchemeType,

    expectCallCount,

    'snap.png',
  ]
    .join(' ')
    .toLocaleLowerCase();
}
