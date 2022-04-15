import { DateRangeInput, DateRangeInputProps } from "./DateRangeInput";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("DateRangeInput", () => {
  describeScreenshotFuzz(
    (props: DateRangeInputProps) => <DateRangeInput {...props} />,
    [
      {
        value: [
          [new Date("1970-05-05"), new Date("1970-06-05")],
          undefined,
          [new Date("1970-05-05"), null],
          [null, new Date("1970-06-05")],
          [null, null],
        ],
      },
    ]
  );
});
