import Radio, { RadioProps } from "./Radio";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("Checkbox", () => {
  describeScreenshotFuzz(
    (props: RadioProps) => <Radio {...props}>label</Radio>,
    [
      {
        checked: [false, true],
        disabled: [undefined, true],
        description: ["", "Description"],
      },
    ]
  );
});
