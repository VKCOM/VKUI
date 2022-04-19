import { Icon24Attach, Icon24Add } from "@vkontakte/icons";
import { Button } from "../Button/Button";
import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("ButtonGroup", () => {
  describeScreenshotFuzz(
    ({ mode, gap, stretched }: ButtonGroupProps) => (
      <ButtonGroup mode="vertical" gap={gap} stretched={stretched}>
        <Button size="l" appearance="accent" stretched>
          Разрешить
        </Button>
        <Button size="l" appearance="accent" stretched>
          Завершить
        </Button>
        <ButtonGroup mode="vertical" gap={gap} stretched>
          <ButtonGroup mode={mode} gap={gap} stretched>
            <Button size="l" appearance="negative" stretched>
              Не сейчас
            </Button>
            <Button size="l" appearance="positive" stretched>
              Продолжить
            </Button>
          </ButtonGroup>
          <ButtonGroup mode="horizontal" gap="space" stretched={stretched}>
            <Button
              size="l"
              appearance="accent"
              mode="tertiary"
              before={<Icon24Attach />}
              stretched
            >
              Прикрепить файл
            </Button>
            <Button size="l" appearance="accent" before={<Icon24Add />} />
          </ButtonGroup>
        </ButtonGroup>
      </ButtonGroup>
    ),
    [
      {
        gap: ["none", "space", "s", "m"],
      },
      {
        mode: ["vertical"],
      },
      {
        stretched: [true],
      },
    ]
  );
});
