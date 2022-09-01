import { Icon28Users, Icon20GiftCircleFillRed } from "@vkontakte/icons";
import { Image } from "./Image";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

const base64Image =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+" +
  "0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2" +
  "xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY" +
  "gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA" +
  "SUVORK5CYII=";

describe("Image", () => {
  describeScreenshotFuzz(Image, [
    {
      src: [undefined, base64Image],
      children: [undefined, "AB"],
      FallbackIcon: [undefined, Icon28Users],
    },
    {
      size: [96, 24],
      badge: [
        Icon20GiftCircleFillRed,
        { background: "stroke", Icon: Icon20GiftCircleFillRed },
      ],
    },
    {
      size: [72],
      badge: [{ background: "stroke", Icon: Icon20GiftCircleFillRed }],
      overlay: [
        undefined,
        true,
        { theme: "dark", visibility: "always", Icon: Icon20GiftCircleFillRed },
      ],
    },
  ]);
});
