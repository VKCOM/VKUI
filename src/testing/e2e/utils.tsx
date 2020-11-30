import React, { ComponentType, Fragment, isValidElement } from 'react';
import { MatchImageSnapshotOptions } from 'jest-image-snapshot';
import { screenshot } from '@react-playwright';
import ConfigProvider from '../../components/ConfigProvider/ConfigProvider';
import Panel from '../../components/Panel/Panel';
import { Platform } from '../../lib/platform';
import { Scheme } from '../../components/ConfigProvider/ConfigProviderContext';

type PropDesc<Props> = { [K in keyof Props]?: Array<Props[K]> };
function cartesian<Props>(propDesc: PropDesc<Props>): Props[] {
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

function multiCartesian<Props>(propSets: Array<PropDesc<Props>>): Props[] {
  if (propSets.length === 0) {
    return [{} as any];
  }
  return propSets.reduce((acc, ortho) => acc.concat(cartesian(ortho)), []);
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
      const width = platform === 'vkcom' ? 'auto' : 320;
      schemes.forEach((scheme) => {
        it(scheme, async () => {
          expect(await screenshot((
            <ConfigProvider scheme={scheme} platform={platform}>
              <div style={{ width, position: 'absolute' }}>
                <Panel id="panel">
                  {multiCartesian(propSets).map((props, i) => (
                    <Fragment key={i}>
                      <div>{prettyProps(props)}</div>
                      <Component {...props} />
                    </Fragment>
                  ))}
                </Panel>
              </div>
            </ConfigProvider>
          ))).toMatchImageSnapshot(matchScreenshot);
        });
      });
    });
  });
};
