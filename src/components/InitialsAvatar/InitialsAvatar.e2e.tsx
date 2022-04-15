import { describeScreenshotFuzz } from "../../testing/e2e";
import { InitialsAvatarProps, InitialsAvatar } from "./InitialsAvatar";

describe("InitialsAvatar", () => {
  describeScreenshotFuzz(
    (props: InitialsAvatarProps) => <InitialsAvatar {...props} />,
    [
      {
        size: [200, 160, 96, 16],
        gradientColor: [1],
        children: ["A", "AB"],
      },
      {
        gradientColor: [1, 2, 3, 5, 6, "blue", undefined],
      },
    ]
  );
});
