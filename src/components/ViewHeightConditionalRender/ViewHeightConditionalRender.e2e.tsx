import {
  ViewHeightConditionalRender,
  ViewHeightConditionalRenderProps,
} from "./ViewHeightConditionalRender";
import { ViewHeight } from "../AdaptivityProvider/AdaptivityContext";
import { describeScreenshotFuzz } from "../../testing/e2e";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";

describe("ViewHeightConditionalRender", () => {
  describeScreenshotFuzz(
    ({
      viewHeight,
      ...props
    }: ViewHeightConditionalRenderProps & { viewHeight?: ViewHeight }) => (
      <AdaptivityProvider viewHeight={viewHeight}>
        <ViewHeightConditionalRender {...props} />
      </AdaptivityProvider>
    ),
    [
      {
        desktop: [undefined, "desktop"],
        mobile: [undefined, "mobile"],
        viewHeight: [
          ViewHeight.EXTRA_SMALL,
          ViewHeight.SMALL,
          ViewHeight.MEDIUM,
          undefined,
        ],
      },
    ]
  );
});
