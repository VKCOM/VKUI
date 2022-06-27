import { Icon24Add, Icon28AddOutline } from "@vkontakte/icons";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { CellButton } from "./CellButton";
import { Avatar } from "../Avatar/Avatar";

describe("CellButton", () => {
  describeScreenshotFuzz(CellButton, [
    {
      centered: [true],
      children: ["Создать что-нибудь"],
    },
    {
      mode: [undefined, "danger"],
      children: ["Создать что-нибудь"],
    },
    {
      mode: [undefined, "danger"],
      before: [<Icon28AddOutline key="icon" />],
      children: ["Создать что-нибудь"],
    },
    {
      before: [
        <Avatar key={40} shadow={false} size={40}>
          <Icon24Add />
        </Avatar>,
        <Avatar key={48} shadow={false} size={48}>
          <Icon28AddOutline />
        </Avatar>,
        <Avatar key={72} shadow={false} size={72} mode="image">
          <Icon28AddOutline />
        </Avatar>,
      ],
      children: ["Создать что-нибудь"],
    },
  ]);
});
