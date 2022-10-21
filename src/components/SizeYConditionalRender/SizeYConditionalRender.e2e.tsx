import * as React from "react";
import { SizeYConditionalRender } from "./SizeYConditionalRender";
import { describeScreenshotFuzz } from "../../testing/e2e";
import type { ExpectedConditionalRenderComponentProps } from "../../types";

describe("SizeYConditionalRender", () => {
  describeScreenshotFuzz(SizeYConditionalRender, [
    {
      $adaptivity: "y",
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
