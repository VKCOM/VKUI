import { SimpleCheckbox, SimpleCheckboxProps } from "./SimpleCheckbox";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("SimpleCheckbox", () => {
  describeScreenshotFuzz(
    (props: SimpleCheckboxProps) => <SimpleCheckbox {...props} />,
    [
      {
        checked: [false, true],
        disabled: [undefined, true],
      },
    ],
    {}
  );
});
