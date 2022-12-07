import * as React from "react";
import { Slider, SliderProps } from "./Slider";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("Slider", () => {
  describeScreenshotFuzz(
    (props: SliderProps) => (
      <Slider style={{ minWidth: "320px" }} value={50} {...props} />
    ),
    [
      {
        disabled: [true],
      },
      {
        $adaptivity: "y",
      },
    ]
  );
});
