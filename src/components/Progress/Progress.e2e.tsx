import { Progress } from "./Progress";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("Progress", () => {
  describeScreenshotFuzz(Progress, [
    {
      value: [0, 40, 100],
    },
  ]);
});
