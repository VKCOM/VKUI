import React, { ComponentType, Fragment, isValidElement } from 'react';
import { MatchImageSnapshotOptions } from 'jest-image-snapshot';
import { screenshot } from '@react-playwright';
import ConfigProvider from '../../components/ConfigProvider/ConfigProvider';
import Panel from '../../components/Panel/Panel';
import { Platform } from '../../lib/platform';
import { Scheme } from '../../components/ConfigProvider/ConfigProviderContext';
import AdaptivityProvider, { AdaptivityProviderProps } from '../../components/AdaptivityProvider/AdaptivityProvider';
import { SizeType } from '../../components/AdaptivityProvider/AdaptivityContext';

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
  schemes?: Scheme[];
};
const CompactProvider: React.ComponentType = ({ children }) => (
  <AdaptivityProvider sizeX={SizeType.COMPACT} sizeY={SizeType.COMPACT}>{children}</AdaptivityProvider>
);
export function describeScreenshotFuzz<Props>(
  Component: ComponentType<Props>,
  propSets: Array<PropDesc<Props>> = [],
  options: ScreenshotOptions = {},
) {
  const {
    matchScreenshot,
    platforms = Object.values(Platform),
    schemes = [Scheme.BRIGHT_LIGHT, Scheme.SPACE_GRAY],
  } = options;
  platforms.forEach((platform) => {
    describe(platform, () => {
      const isVkCom = platform === 'vkcom';
      const width = isVkCom ? 'auto' : 320;
      const ForceAdaptivity = isVkCom ? CompactProvider : Fragment;
      schemes.forEach((scheme) => {
        it(scheme, async () => {
          expect(await screenshot((
            <ConfigProvider scheme={scheme} platform={platform}>
              <div style={{ width, position: 'absolute' }}>
                <ForceAdaptivity>
                  <Panel id="panel">
                    {multiCartesian(propSets, { adaptive: !isVkCom }).map((props, i) => (
                      <Fragment key={i}>
                        <div>{prettyProps(props)}</div>
                        <div><Component {...props as any} /></div>
                      </Fragment>
                    ))}
                  </Panel>
                </ForceAdaptivity>
              </div>
            </ConfigProvider>
          ))).toMatchImageSnapshot(matchScreenshot);
        });
      });
    });
  });
};
