import { Icon28UserAddOutline } from "@vkontakte/icons";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { Avatar } from "../Avatar/Avatar";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { Button } from "../Button/Button";
import { UsersStack } from "../UsersStack/UsersStack";
import { RichCell } from "./RichCell";

describe("RichCell", () => {
  describeScreenshotFuzz(RichCell, [
    {
      before: [<Avatar size={72} key="72" />],
      children: ["Тарас Иванов"],
      caption: ["Вчера в 20:30", "Команда ВКонтакте, Санкт-Петербург"],
      after: [
        "1500 руб.",
        <Icon28UserAddOutline key="icon" />,
        <div key="div" style={{ display: "flex" }}>
          +1500 руб.
        </div>,
      ],
      bottom: [
        <UsersStack key="stack" photos={["", "", ""]}>
          73 общих друга
        </UsersStack>,
      ],
      actions: [
        <ButtonGroup key="actions" gap="s" stretched>
          <Button>Окей</Button>
          <Button mode="secondary">Отменить</Button>
        </ButtonGroup>,
      ],
    },
    {
      before: [<Avatar size={72} key="72" />],
      children: ["Тарас Иванов"],
      bottom: [
        undefined,
        <UsersStack key="stack" photos={["", "", ""]}>
          73 общих друга
        </UsersStack>,
      ],
      actions: [
        <ButtonGroup key="actions" gap="s" stretched>
          <Button>Окей</Button>
          <Button mode="secondary">Отменить</Button>
        </ButtonGroup>,
      ],
      $adaptivity: "y",
    },
    {
      before: [<Avatar size={48} key="48" />],
      children: ["Михаил Лихачев"],
      multiline: [true],
      text: [undefined, "Возврат по договору займа за поездку в Лиссабон"],
      caption: ["Команда ВКонтакте, Санкт-Петербург"],
      after: ["- 700 руб.", <Icon28UserAddOutline key="icon" />],
    },
  ]);
});
