import {
  DeviceConditionalRender,
  DeviceConditionalRenderProps,
} from "./DeviceConditionalRender";
import { ViewWidth } from "../../lib/adaptivity";
import { describeScreenshotFuzz } from "../../testing/e2e";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";

describe("DeviceConditionalRender", () => {
  describeScreenshotFuzz(
    ({
      viewWidth,
      ...props
    }: DeviceConditionalRenderProps & { viewWidth?: ViewWidth }) => (
      <AdaptivityProvider viewWidth={viewWidth}>
        <DeviceConditionalRender {...props} />
      </AdaptivityProvider>
    ),
    [
      {
        desktop: [undefined, "desktop"],
        mobile: [undefined, "mobile"],
        viewWidth: [
          ViewWidth.DESKTOP,
          ViewWidth.MOBILE,
          ViewWidth.SMALL_MOBILE,
          ViewWidth.SMALL_TABLET,
          ViewWidth.TABLET,
          undefined,
        ],
      },
    ]
  );
});
