import * as React from "react";
import {
  ViewWidthConditionalRender,
  ViewWidthConditionalRenderProps,
} from "./ViewWidthConditionalRender";
import { ViewWidth } from "../../lib/adaptivity";
import { describeScreenshotFuzz } from "../../testing/e2e";
import type { ExpectedConditionalRenderComponentProps } from "../../types";
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
