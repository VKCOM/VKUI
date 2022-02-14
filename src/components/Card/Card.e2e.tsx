import { describeScreenshotFuzz } from "../../testing/e2e";
import { Card, CardProps } from "./Card";

describe("Card", () => {
  describeScreenshotFuzz(
    (props: CardProps) => <Card {...props}>Карточка</Card>,
    [
      {
        mode: ["tint", "shadow", "outline"],
      },
    ]
  );
});
