import { ComponentType, Fragment, isValidElement, FC } from 'react';
import { MatchImageSnapshotOptions } from 'jest-image-snapshot';
import { screenshot } from '@react-playwright';
// Импорты из отдельных модулей помогают jest отслеживать зависимости
import ConfigProvider from '../../components/ConfigProvider/ConfigProvider';
import { Panel } from '../../components/Panel/Panel';
import { Platform } from '../../lib/platform';
import { Scheme } from '../../components/ConfigProvider/ConfigProviderContext';
import AdaptivityProvider, {
  AdaptivityProviderProps,
  DESKTOP_SIZE,
  TABLET_SIZE,
  SMALL_TABLET_SIZE,
  MOBILE_SIZE,
} from '../../components/AdaptivityProvider/AdaptivityProvider';
import { SizeType, ViewWidth } from '../../components/AdaptivityProvider/AdaptivityContext';
import { AdaptivityProps } from '../../hoc/withAdaptivity';
import View from '../../components/View/View';
import AppRoot from '../../components/AppRoot/AppRoot';
import Group from '../../components/Group/Group';

type AdaptivityFlag = boolean | 'x' | 'y';
type PropDesc<Props> = { [K in keyof Props]?: Array<Props[K]> } & { $adaptivity?: AdaptivityFlag };
type SizeProps = Pick<AdaptivityProviderProps, 'sizeX' | 'sizeY'>;
type TestProps<Props> = Array<Props & SizeProps>;
type CartesianOptions = { adaptive: boolean };

function getAdaptivity(adaptivity?: AdaptivityFlag) {
  const extra: PropDesc<SizeProps> = {};
  if (adaptivity && adaptivity !== 'y') {
    extra.sizeX = Object.values(SizeType);
  }
  if (adaptivity && adaptivity !== 'x') {
    extra.sizeY = Object.values(SizeType);
  }
  return extra;
};

function cartesian<Props>({ $adaptivity, ...propDesc }: PropDesc<Props>, ops: CartesianOptions): TestProps<Props> {
  propDesc = { ...propDesc, ...getAdaptivity(ops.adaptive ? $adaptivity : false) };
  return Object.entries(propDesc).reduce((acc, [prop, values]: [string, any[]]) => {
    const res: any[] = [];
    acc.forEach((props) => {
      values.forEach((value) => {
        res.push({ ...props, [prop]: value });
      });
    });
    return res;
  }, [{}]);
}

function multiCartesian<Props>(propSets: Array<PropDesc<Props>>, ops: CartesianOptions): TestProps<Props> {
  if (propSets.length === 0) {
    return [{} as any];
  }
  return propSets.reduce((acc, ortho) => acc.concat(cartesian(ortho, ops)), []);
}

function prettyProps(props: any) {
  return Object.entries(props).sort(([key1], [key2]) => Number(key1 > key2)).map(([prop, value]) => {
    if (value === undefined) {
      return '';
    }
    if (value === true) {
      return prop;
    }
    if (isValidElement(value) || Array.isArray(value) && value.every((node: any) => isValidElement(node))) {
      return `${prop}=<jsx>`;
    }
    return `${prop}=${JSON.stringify(value)}`;
  }).join(' ');
}

type ScreenshotOptions = {
  matchScreenshot?: MatchImageSnapshotOptions;
  platforms?: Platform[];
  mobileSchemes?: Scheme[];
  adaptivity?: AdaptivityProps;
  Wrapper?: ComponentType;
};

function getAdaptivePxWidth(viewWidth: ViewWidth) {
  switch (viewWidth) {
    case ViewWidth.SMALL_MOBILE: return MOBILE_SIZE - 10;
    case ViewWidth.MOBILE: return MOBILE_SIZE;
    case ViewWidth.SMALL_TABLET: return SMALL_TABLET_SIZE;
    case ViewWidth.TABLET: return TABLET_SIZE;
    case ViewWidth.DESKTOP: return DESKTOP_SIZE;
  }
}

const AppWrapper: FC = (props) => (
  <AppRoot embedded>
    <View activePanel="panel">
      <Panel id="panel">
        <Group>
          {props.children}
        </Group>
      </Panel>
    </View>
  </AppRoot>
);

export function describeScreenshotFuzz<Props>(
  Component: ComponentType<Props>,
  propSets: Array<PropDesc<Props>> = [],
  options: ScreenshotOptions = {},
) {
  const {
    matchScreenshot,
    platforms = Object.values(Platform),
    mobileSchemes = [Scheme.BRIGHT_LIGHT, Scheme.SPACE_GRAY],
    adaptivity = {},
    Wrapper = AppWrapper,
  } = options;
  platforms.forEach((platform) => {
    describe(platform, () => {
      const isVkCom = platform === 'vkcom';
      const width: number | 'auto' = adaptivity.viewWidth
        ? getAdaptivePxWidth(adaptivity.viewWidth)
        : isVkCom ? 'auto' : 320;
      const adaptivityProps = Object.assign(
        isVkCom ? { sizeX: SizeType.COMPACT, sizeY: SizeType.COMPACT } : {},
        adaptivity);
      (isVkCom ? [Scheme.VKCOM] : mobileSchemes).forEach((scheme) => {
        it(`${scheme}${adaptivityProps.viewWidth ? ` w_${adaptivityProps.viewWidth}` : ''}`, async () => {
          expect(await screenshot((
            <ConfigProvider scheme={scheme} platform={platform}>
              <AdaptivityProvider {...adaptivityProps}>
                <div style={{ width, position: 'absolute', height: 'auto' }}>
                  <Wrapper>
                    {multiCartesian(propSets, { adaptive: !isVkCom }).map((props, i) => (
                      <Fragment key={i}>
                        <div>{prettyProps(props)}</div>
                        <div><Component {...props as any} /></div>
                      </Fragment>
                    ))}
                  </Wrapper>
                </div>
              </AdaptivityProvider>
            </ConfigProvider>
          ))).toMatchImageSnapshot(matchScreenshot);
        });
      });
    });
  });
};
