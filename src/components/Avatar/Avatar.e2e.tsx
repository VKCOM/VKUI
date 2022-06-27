import {
  Icon16Add,
  Icon20GiftCircleFillRed,
  Icon28AddOutline,
} from "@vkontakte/icons";
import { Avatar, AvatarProps } from "./Avatar";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

const base64Image =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+" +
  "0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2" +
  "xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY" +
  "gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA" +
  "SUVORK5CYII=";

describe("Avatar", () => {
  describeScreenshotFuzz(
    (props: AvatarProps) => <Avatar {...props} />,
    [
      {
        mode: ["default", "app", "image"],
      },
      {
        size: [72],
        shadow: [undefined, false],
      },
      {
        style: [{ background: "var(--accent)" }],
        size: [28],
        shadow: [false],
        children: [<Icon16Add key="icon-add" fill="var(--white)" />],
      },
      {
        src: [base64Image],
      },
      {
        style: [{ backgroundImage: `url("${base64Image}")` }],
      },
      {
        size: [24, 96],
        badge: [
          <Icon20GiftCircleFillRed key="icon" />,
          "online",
          "online-mobile",
        ],
      },
      {
        size: [72],
        badge: [
          <Icon20GiftCircleFillRed key="icon" />,
          "online",
          "online-mobile",
        ],
        overlayIcon: [
          <Icon28AddOutline key="icon" style={{ color: "#FFF" }} />,
          undefined,
        ],
        overlayMode: ["dark", "light"],
        overlayAction: ["always"],
      },
    ]
  );
});
