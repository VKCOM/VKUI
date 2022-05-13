import { SizeYConditionalRender } from "./SizeYConditionalRender";
import { describeScreenshotFuzz } from "../../testing/e2e";

describe("SizeYConditionalRender", () => {
  describeScreenshotFuzz(SizeYConditionalRender, [
    {
      $adaptivity: "y",
      compact: [undefined, "compact"],
      regular: [undefined, "regular"],
    },
  ]);
});
