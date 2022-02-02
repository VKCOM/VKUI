import { describeScreenshotFuzz } from "../../testing/e2e";
import Card, { CardProps } from "./Card";

describe("CardScroll", () => {
  describeScreenshotFuzz(
    (props: CardProps) => <Card {...props}>Карточка</Card>,
    [
      {
        mode: ["tint"],
      },
      {
        mode: ["shadow"],
      },
      {
        mode: ["outline"],
      },
    ]
  );
});
