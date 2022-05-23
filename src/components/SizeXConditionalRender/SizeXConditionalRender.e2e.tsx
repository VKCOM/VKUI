import { SizeXConditionalRender } from "./SizeXConditionalRender";
import { describeScreenshotFuzz } from "../../testing/e2e";

describe("SizeXConditionalRender", () => {
  describeScreenshotFuzz(SizeXConditionalRender, [
    {
      $adaptivity: "x",
      compact: [undefined, "compact"],
      regular: [undefined, "regular"],
    },
  ]);
});
