import * as React from "react";
import { Counter, CounterProps } from "./Counter";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("Counter", () => {
  describeScreenshotFuzz(
    (props: CounterProps) => (
      <div>
        <Counter {...props} />
      </div>
    ),
    [
      {
        children: ["3"],
        mode: ["secondary", "primary", "prominent", "contrast"],
        size: ["m", "s"],
        $adaptivity: "y",
      },
    ]
  );
});
