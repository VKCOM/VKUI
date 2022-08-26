import {
  ViewWidthConditionalRender,
  ViewWidthConditionalRenderProps,
} from "./ViewWidthConditionalRender";
import { ViewWidth } from "../../lib/adaptivity";
import { describeScreenshotFuzz } from "../../testing/e2e";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";

describe("ViewWidthConditionalRender", () => {
  describeScreenshotFuzz(
    ({
      viewWidth,
      ...props
    }: ViewWidthConditionalRenderProps & { viewWidth?: ViewWidth }) => (
      <AdaptivityProvider viewWidth={viewWidth}>
        <ViewWidthConditionalRender {...props} />
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
