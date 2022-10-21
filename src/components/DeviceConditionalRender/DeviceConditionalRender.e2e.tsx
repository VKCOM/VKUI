import * as React from "react";
import {
  DeviceConditionalRender,
  DeviceConditionalRenderProps,
} from "./DeviceConditionalRender";
import { ViewWidth } from "../../lib/adaptivity";
import { describeScreenshotFuzz } from "../../testing/e2e";
import type { ExpectedConditionalRenderComponentProps } from "../../types";
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
        Desktop: [
          undefined,
          ({ className }: ExpectedConditionalRenderComponentProps) => (
            <div className={className}>desktop</div>
          ),
        ],
        Mobile: [
          undefined,
          ({ className }: ExpectedConditionalRenderComponentProps) => (
            <div className={className}>mobile</div>
          ),
        ],
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
