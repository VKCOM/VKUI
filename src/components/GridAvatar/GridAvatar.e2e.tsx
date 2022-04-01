import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { GridAvatarProps, GridAvatar } from "./GridAvatar";

const base64Image =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA+" +
  "0lEQVR4nO3cwQmAMBQFQSP2Ze1WFltwURFhpoBHWP45Y865cM369QP+RKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxge2" +
  "xpHI9NvWHu9zdcViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFYgViBWIFY" +
  "gViBWIFYgViBWIFYgViBWIFYgViBWIFYgVjB8RH2dywrECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxApOni4IwwZ+iSIAAAAA" +
  "SUVORK5CYII=";

describe("GridAvatar", () => {
  describeScreenshotFuzz(
    (props: GridAvatarProps) => <GridAvatar {...props} />,
    [
      {
        size: [96, 28],
        src: [
          undefined,
          [base64Image],
          [base64Image, base64Image],
          [base64Image, base64Image, base64Image],
          [base64Image, base64Image, base64Image, base64Image],
        ],
      },
    ]
  );
});
