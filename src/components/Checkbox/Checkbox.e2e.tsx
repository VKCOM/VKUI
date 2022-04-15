import { Checkbox, CheckboxProps } from "./Checkbox";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { SizeType } from "../AdaptivityProvider/AdaptivityContext";

describe("Checkbox", () => {
  describeScreenshotFuzz(
    (props: CheckboxProps) => <Checkbox {...props}>label</Checkbox>,
    [
      {
        checked: [false, true],
        disabled: [undefined, true],
      },
    ],
    { adaptivity: { sizeY: SizeType.REGULAR } }
  );
});

describe("Checkbox sizes and description", () => {
  describeScreenshotFuzz(
    (props: CheckboxProps) => <Checkbox {...props}>label</Checkbox>,
    [
      {
        description: [undefined, "Description"],
        $adaptivity: "y",
      },
    ]
  );
});
