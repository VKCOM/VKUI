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
    ]
  );

  describeScreenshotFuzz(
    (props: CheckboxProps) => <Checkbox {...props}>label</Checkbox>,
    [
      {
        description: [undefined, "Description"],
        sizeY: [SizeType.REGULAR, SizeType.COMPACT],
      },
    ]
  );
});
