import { Icon24Add } from "@vkontakte/icons";
import Button from "../Button/Button";
import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("ButtonGroup", () => {
  describeScreenshotFuzz(
    (props: ButtonGroupProps) => (
      <ButtonGroup {...props}>
        <ButtonGroup mode="horizontal">
          <Button size="l" appearance="accent">
            Button
          </Button>
          <Button size="l" appearance="accent" before={<Icon24Add />} />
        </ButtonGroup>
        <ButtonGroup mode="vertical">
          <Button size="l" appearance="accent">
            Button
          </Button>
          <Button size="l" appearance="accent" before={<Icon24Add />} />
          <ButtonGroup mode="horizontal">
            <Button size="l" appearance="accent" before={<Icon24Add />} />
            <Button size="l" appearance="accent">
              Button
            </Button>
          </ButtonGroup>
        </ButtonGroup>
        <Button size="l" appearance="accent">
          Button
        </Button>
        <ButtonGroup mode="horizontal">
          <Button size="l" appearance="accent">
            Button
          </Button>
          <Button size="l" appearance="accent">
            Button
          </Button>
          <Button size="l" appearance="accent">
            Button
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
