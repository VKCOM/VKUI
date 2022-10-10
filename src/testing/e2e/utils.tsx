import { ComponentType, Fragment, isValidElement } from "react";
import { MatchImageSnapshotOptions } from "jest-image-snapshot";
import { screenshot } from "@react-playwright";
// Импорты из отдельных модулей помогают jest отслеживать зависимости
import { ConfigProvider } from "../../components/ConfigProvider/ConfigProvider";
import { Panel } from "../../components/Panel/Panel";
import { Platform } from "../../lib/platform";
import { Appearance } from "../../helpers/scheme";
import {
  AdaptivityProvider,
  DESKTOP_SIZE,
  MOBILE_SIZE,
  SMALL_TABLET_SIZE,
  TABLET_SIZE,
} from "../../components/AdaptivityProvider/AdaptivityProvider";
import {
  SizeType,
  ViewWidth,
} from "../../components/AdaptivityProvider/AdaptivityContext";
import { AdaptivityProps, withAdaptivity } from "../../hoc/withAdaptivity";
import { View } from "../../components/View/View";
import { AppRoot } from "../../components/AppRoot/AppRoot";
import { Group } from "../../components/Group/Group";
import { HasChildren } from "../../types";
import { BrowserType } from "jest-playwright-preset";

type AdaptivityFlag = boolean | "x" | "y";
type PropDesc<Props> = { [K in keyof Props]?: Array<Props[K]> } & {
  $adaptivity?: AdaptivityFlag;
};
type SizeProps = Pick<AdaptivityProps, "sizeX" | "sizeY">;
type TestProps<Props> = Array<Props & SizeProps>;
type CartesianOptions = { adaptive: boolean };

export const APPEARANCE = (process.env.APPEARANCE ??
  Appearance.LIGHT) as Appearance;
export const BROWSER = (process.env.BROWSER ?? "chromium") as BrowserType;
export const PLATFORM = (process.env.PLATFORM ?? "vkcom") as Platform;

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
  adaptivity?: Partial<AdaptivityProps>;
  Wrapper?: ComponentType;
};

function getAdaptivePxWidth(viewWidth: ViewWidth) {
  switch (viewWidth) {
    case ViewWidth.SMALL_MOBILE:
      return MOBILE_SIZE - 10;
    case ViewWidth.MOBILE:
      return MOBILE_SIZE;
    case ViewWidth.SMALL_TABLET:
      return SMALL_TABLET_SIZE;
    case ViewWidth.TABLET:
      return TABLET_SIZE;
    case ViewWidth.DESKTOP:
      return DESKTOP_SIZE;
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
    platforms,
    adaptivity = {},
    Wrapper = AppWrapper,
  } = options;

  const describeConditional =
    platforms && !platforms.includes(PLATFORM) ? describe.skip : describe;

  describeConditional(PLATFORM, () => {
    jest.setTimeout(40000);

    const isVKCOM = PLATFORM === Platform.VKCOM;

    let width: ViewWidth | "auto" = isVKCOM ? "auto" : MOBILE_SIZE;
    if (adaptivity.viewWidth) {
      width = getAdaptivePxWidth(adaptivity.viewWidth);
    }

    const adaptivityProps: AdaptivityProps = Object.assign(
      isVKCOM ? { sizeX: SizeType.COMPACT, sizeY: SizeType.COMPACT } : {},
      adaptivity
    );

    const viewWidth = adaptivityProps.viewWidth
      ? ` w_${adaptivityProps.viewWidth}`
      : "";

    const AdaptiveComponent = withAdaptivity(Component, {
      sizeX: true,
      sizeY: true,
    });

    it(`${BROWSER}-${APPEARANCE}${viewWidth}`, async () => {
      expect(
        await screenshot(
          <ConfigProvider appearance={APPEARANCE} platform={PLATFORM}>
            <AdaptivityProvider {...adaptivityProps}>
              <div
                style={{
                  width,
                  maxWidth: DESKTOP_SIZE,
                  position: "absolute",
                  height: "auto",
                }}
              >
                <Wrapper>
                  {multiCartesian(propSets, { adaptive: !isVKCOM }).map(
                    (props, i) => (
                      <Fragment key={i}>
                        <div>{prettyProps(props)}</div>
                        <div>
                          <AdaptiveComponent {...props} />
                        </div>
                      </Fragment>
                    )
                  )}
                </Wrapper>
              </div>
            </AdaptivityProvider>
          </ConfigProvider>
        )
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
