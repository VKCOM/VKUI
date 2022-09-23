import * as React from "react";
import { Radio, RadioProps } from "./Radio";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { SizeType } from "../../lib/adaptivity";

describe("Radio", () => {
  describeScreenshotFuzz(
    (props: RadioProps) => <Radio {...props}>label</Radio>,
    [
      {
        checked: [false, true],
        disabled: [undefined, true],
      },
    ],
    { adaptivity: { sizeY: SizeType.REGULAR } }
  );
});

describe("Radio sizes and description", () => {
  describeScreenshotFuzz(
    (props: RadioProps) => <Radio {...props}>label</Radio>,
    [
      {
        description: [undefined, "Description"],
        $adaptivity: "y",
      },
    ]
  );
});
