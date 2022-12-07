import * as React from "react";
import { describeScreenshotFuzz } from "../../../testing/e2e/utils";
import { Headline, HeadlineProps } from "./Headline";

describe("Headline", () => {
  describeScreenshotFuzz(
    (props: HeadlineProps) => {
      let title = "Headline";
      if (props.level) {
        title += " level" + props.level;
      }
      if (props.weight) {
        title += " weight" + props.weight;
      }
      return (
        <Headline {...props} style={{ marginBottom: 16 }}>
          {title}
        </Headline>
      );
    },
    [
      {
        level: [undefined, "1", "2"],
        weight: [undefined, "1", "2", "3"],
        $adaptivity: "y",
      },
    ]
  );
});
