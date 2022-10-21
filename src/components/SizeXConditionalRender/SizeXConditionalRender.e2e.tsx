import * as React from "react";
import { SizeXConditionalRender } from "./SizeXConditionalRender";
import { describeScreenshotFuzz } from "../../testing/e2e";
import type { ExpectedConditionalRenderComponentProps } from "../../types";

describe("SizeXConditionalRender", () => {
  describeScreenshotFuzz(SizeXConditionalRender, [
    {
      $adaptivity: "x",
      Compact: [
        undefined,
        ({ className }: ExpectedConditionalRenderComponentProps) => (
          <div className={className}>compact</div>
        ),
      ],
      Regular: [
        undefined,
        ({ className }: ExpectedConditionalRenderComponentProps) => (
          <div className={className}>regular</div>
        ),
      ],
    },
  ]);
});
