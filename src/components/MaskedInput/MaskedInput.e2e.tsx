import { MaskedInput, MaskedInputProps } from "./MaskedInput";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("MaskedInput", () => {
  describeScreenshotFuzz(
    (props: MaskedInputProps) => <MaskedInput {...props} />,
    [
      {
        format: ["+1 (###) ###-####", undefined],
        mask: ["_", undefined],
        value: ["9998887766", ""],
      },
    ]
  );
});
