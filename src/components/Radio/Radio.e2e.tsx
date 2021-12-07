import Radio, { RadioProps } from "./Radio";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { SizeType } from "../AdaptivityProvider/AdaptivityContext";

describe("Radio", () => {
  describeScreenshotFuzz(
    (props: RadioProps) => <Radio {...props}>label</Radio>,
    [
      {
        checked: [false, true],
        disabled: [undefined, true],
      },
    ]
  );

  describeScreenshotFuzz(
    (props: RadioProps) => <Radio {...props}>label</Radio>,
    [
      {
        description: [undefined, "Description"],
        sizeY: [SizeType.REGULAR, SizeType.COMPACT],
      },
    ]
  );
});
