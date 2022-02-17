import Button from "../Button/Button";
import ButtonGroup, { ButtonGroupProps } from "./ButtonGroup";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("ButtonGroup", () => {
  describeScreenshotFuzz(
    (props: ButtonGroupProps) => (
      <ButtonGroup {...props}>
        <Button size="l" appearance="accent">
          Разрешить
        </Button>
        <Button size="l" appearance="accent">
          Завершить
        </Button>
        <ButtonGroup mode="horizontal">
          <Button size="l" appearance="negative">
            Не сейчас
          </Button>
          <Button size="l" appearance="positive">
            Продолжить
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    ),
    [
      {
        mode: ["horizontal", "vertical"],
        padding: ["medium", "small"],
        stretched: [undefined, true],
      },
    ]
  );
});
