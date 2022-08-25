import { ComponentType, Fragment, isValidElement } from "react";
import { MatchImageSnapshotOptions } from "jest-image-snapshot";
import { screenshot } from "@react-playwright";
// Импорты из отдельных модулей помогают jest отслеживать зависимости
import { ConfigProvider } from "../../components/ConfigProvider/ConfigProvider";
import { Panel } from "../../components/Panel/Panel";
import { Platform } from "../../lib/platform";
import { BREAKPOINTS, SizeType, ViewWidth } from "../../lib/adaptivity";
import { AdaptivityProvider } from "../../components/AdaptivityProvider/AdaptivityProvider";
import { type AdaptivityProps } from "../../components/AdaptivityProvider/AdaptivityContext";
import { View } from "../../components/View/View";
import { AppRoot } from "../../components/AppRoot/AppRoot";
import { Group } from "../../components/Group/Group";
import { AppearanceType } from "@vkontakte/vk-bridge";
import { HasChildren } from "../../types";

type AdaptivityFlag = boolean | "x" | "y";
type PropDesc<Props> = { [K in keyof Props]?: Array<Props[K]> } & {
  $adaptivity?: AdaptivityFlag;
};
type SizeProps = Pick<AdaptivityProps, "sizeX" | "sizeY">;
type TestProps<Props> = Array<Props & SizeProps>;
type CartesianOptions = { adaptive: boolean };

function getAdaptivity(adaptivity?: AdaptivityFlag) {
  const extra: PropDesc<SizeProps> = {};
  if (adaptivity && adaptivity !== "y") {
    extra.sizeX = Object.values(SizeType);
  }
  if (adaptivity && adaptivity !== "x") {
    extra.sizeY = Object.values(SizeType);
  }
  return extra;
}

function cartesian<Props>(
  { $adaptivity, ...propDesc }: PropDesc<Props>,
  ops: CartesianOptions
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
    [{}] as TestProps<Props>
  );
}

function multiCartesian<Props>(
  propSets: Array<PropDesc<Props>>,
  ops: CartesianOptions
): TestProps<Props> {
  if (propSets.length === 0) {
    return [{} as any];
  }
  return propSets.reduce(
    (acc, ortho) => acc.concat(cartesian(ortho, ops) as any),
    []
  );
}

function prettyProps(props: any) {
  return Object.entries(props)
    .sort(([key1], [key2]) => Number(key1 > key2))
    .map(([prop, value]: [string, any]) => {
      if (value === undefined) {
        return "";
      }
      if (value === true) {
        return prop;
      }
      if (
        isValidElement(value) ||
        (Array.isArray(value) &&
          value.every((node: any) => isValidElement(node)))
      ) {
        return `${prop}=<jsx>`;
      }
      if (prop === "style" || prop === "src" || prop === "photos") {
        const _value = JSON.stringify(value);

        return `${prop}=${_value.replace(/"\\?data:.+?"+?/gi, "{base64}")}`;
      }
      return `${prop}=${JSON.stringify(value)}`;
    })
    .join(" ");
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
  options: ScreenshotOptions = {}
) {
  const {
    matchScreenshot,
    platforms = [Platform.ANDROID, Platform.IOS, Platform.VKCOM],
    appearance = "light",
    adaptivity = {},
    Wrapper = AppWrapper,
  } = options;
  platforms.forEach((platform) => {
    describe(platform, () => {
      const isVKCOM = platform === Platform.VKCOM;

      let width: number | "auto" = isVKCOM ? "auto" : BREAKPOINTS.MOBILE;
      if (adaptivity.viewWidth) {
        width = getAdaptivePxWidth(adaptivity.viewWidth);
      }

      const adaptivityProps: AdaptivityProps = Object.assign(
        isVKCOM ? { sizeX: SizeType.COMPACT, sizeY: SizeType.COMPACT } : {},
        adaptivity
      );

      it(`light${
        adaptivityProps.viewWidth ? ` w_${adaptivityProps.viewWidth}` : ""
      }`, async () => {
        expect(
          await screenshot(
            <ConfigProvider appearance={appearance} platform={platform}>
              <AdaptivityProvider {...adaptivityProps}>
                <div
                  style={{
                    width,
                    maxWidth: BREAKPOINTS.DESKTOP,
                    position: "absolute",
                    height: "auto",
                  }}
                >
                  <Wrapper>
                    {multiCartesian(propSets, { adaptive: !isVKCOM }).map(
                      (props, i) => {
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
                            <div>{prettyProps(props)}</div>
                            <div>
                              <AdaptivityProvider {...adaptivityProviderProps}>
                                <Component {...props} />
                              </AdaptivityProvider>
                            </div>
                          </Fragment>
                        );
                      }
                    )}
                  </Wrapper>
                </div>
              </AdaptivityProvider>
            </ConfigProvider>
          )
        ).toMatchImageSnapshot(matchScreenshot);
      });
    });
  });
}
