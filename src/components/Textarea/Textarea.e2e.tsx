import { Textarea } from "./Textarea";
import { screenshot, mount, describeScreenshotFuzz } from "../../testing/e2e";
import { AppRoot } from "../AppRoot/AppRoot";

describe("Textarea", () => {
  describeScreenshotFuzz(Textarea, [
    {
      value: ["", "text"],
      placeholder: ["placeholder"],
      disabled: [undefined, true],
    },
    {
      value: ["text", "1\n2\n3\n4\n5"],
      $adaptivity: "y",
    },
    {
      grow: [false],
      value: ["1\n2\n3\n4\n5"],
    },
    {
      cols: [4],
      defaultValue: [
        "Музыка\nСпорт\nФотография\nПлавание\nПрограммирование\nПутешествия\nКниги\nСериалы\nФильмы\nНастольные игры",
      ],
    },
    {
      status: ["error", "valid"],
    },
  ]);
  it("fits size to content", async () => {
    await mount(
      <AppRoot embedded>
        <Textarea id="textarea" />
      </AppRoot>
    );
    await page.type("#textarea", "1\n2\n3\n4\n5\n6\n7\n8");
    expect(await screenshot()).toMatchImageSnapshot();
    for (let i = 0; i < 12; i++) {
      await page.press("#textarea", "Backspace");
    }
    expect(await screenshot()).toMatchImageSnapshot();
  });
});
