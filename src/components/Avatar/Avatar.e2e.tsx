import { Icon20GiftCircleFillRed } from "@vkontakte/icons";
import { Avatar } from "./Avatar";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

const base64Image =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+" +
  "0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2" +
  "xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY" +
  "gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA" +
  "SUVORK5CYII=";

describe("Avatar", () => {
  describeScreenshotFuzz(Avatar, [
    {
      src: [undefined, base64Image],
      children: [undefined, "AB"],
      FallbackIcon: [undefined, null],
    },
    {
      size: [96, 16],
      gradientColor: [1],
      children: ["AB"],
    },
    {
      withBorder: [undefined, false],
    },
    {
      gradientColor: [1, 2, 3, 5, 6, "blue"],
    },
    {
      gradientColor: ["custom"],
      style: [{ backgroundImage: "linear-gradient(#e66465, #9198e5)" }],
    },
    {
      size: [96, 24],
      badge: [
        "online",
        "online-mobile",
        Icon20GiftCircleFillRed,
        { background: "stroke", Icon: Icon20GiftCircleFillRed },
      ],
    },
    {
      size: [72],
      badge: [{ background: "stroke", Icon: Icon20GiftCircleFillRed }],
      overlay: [
        true,
        { theme: "dark", visibility: "always", Icon: Icon20GiftCircleFillRed },
      ],
    },
  ]);
});
