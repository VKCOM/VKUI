import { Icon24Add } from "@vkontakte/icons";
import Button from "../Button/Button";
import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("ButtonGroup", () => {
  const buttonText = "Button";
  const strechedButtonText = "Button (stretched)";

  describeScreenshotFuzz(
    (props: ButtonGroupProps) => (
      <ButtonGroup {...props}>
        <ButtonGroup mode="horizontal" gap="m" stretched>
          <Button size="l" appearance="accent">
            {buttonText}
          </Button>
          <Button size="l" appearance="accent" before={<Icon24Add />} />
        </ButtonGroup>

        <ButtonGroup mode="horizontal" gap="m" stretched={false}>
          <Button size="l" appearance="accent">
            {buttonText}
          </Button>
          <Button size="l" appearance="accent" before={<Icon24Add />} />
        </ButtonGroup>

        <ButtonGroup mode="vertical" gap="m" stretched={false}>
          <Button size="l" appearance="accent" stretched>
            {strechedButtonText}
          </Button>
          <Button
            size="l"
            appearance="accent"
            before={<Icon24Add />}
            stretched
          />
          <ButtonGroup mode="horizontal" stretched>
            <Button size="l" appearance="accent" before={<Icon24Add />} />
            <Button size="l" appearance="accent" stretched>
              {strechedButtonText}
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </ButtonGroup>
    ),
    [
      {
        mode: ["horizontal", "vertical"],
        gap: ["none", "space", "s", "m"],
        stretched: [undefined, true],
      },
    ]
  );
});
