import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { Avatar } from "../Avatar/Avatar";
import { Banner, BannerProps } from "./Banner";
import { Button } from "../Button/Button";
import { describeScreenshotFuzz } from "../../testing/e2e";

describe("Banner", () => {
  describeScreenshotFuzz(
    (props: BannerProps) => (
      <Banner
        before={<Avatar size={96} mode="image" src="" />}
        header="Баста в Ледовом"
        subheader="Большой концерт"
        asideMode="dismiss"
        actions={<Button>Подробнее</Button>}
        {...props}
      />
    ),
    [
      {
        asideMode: [undefined, "dismiss", "expand"],
        size: ["s", "m"],
        actions: [undefined],
      },
      {
        size: ["s", "m"],
        before: [undefined],
        actions: [
          undefined,
          <ButtonGroup mode="vertical" gap="m" key="fragment">
            <Button mode="primary">Попробовать сейчас</Button>
            <Button mode="secondary">Напомнить позже</Button>
          </ButtonGroup>,
        ],
      },
      {
        mode: ["image"],
        imageTheme: ["dark"],
        header: ["Мои достижения"],
        subheader: ["Разблокировано 9 из 36"],
        background: [
          <div key="img-bg" style={{ backgroundColor: "#222222" }} />,
        ],
        before: [undefined],
        asideMode: [undefined],
        actions: [
          <Button key="btn" appearance="overlay">
            Подробнее
          </Button>,
        ],
      },
    ]
  );
});
