import CardScroll, { CardScrollProps } from "./CardScroll";
import { describeScreenshotFuzz } from "../../testing/e2e";
import Card from "../Card/Card";

describe("CardScroll", () => {
  const items = new Array(20).fill(0).map((_, index) => (
    <Card key={index}>
      <div style={{ paddingBottom: "66%" }} />
    </Card>
  ));

  describeScreenshotFuzz(
    (props: CardScrollProps) => <CardScroll {...props}>{items}</CardScroll>,
    [
      {
        size: ["s"],
        showArrows: [true],
      },
      {
        size: ["m"],
        showArrows: [false],
        withSpaces: [false],
      },
      {
        size: ["l"],
        showArrows: ["always"],
        withSpaces: [false],
      },
      {
        size: ["false"],
        showArrows: ["always"],
        withSpaces: [true],
      },
    ]
  );
});
