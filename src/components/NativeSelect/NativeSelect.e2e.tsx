import * as React from "react";
import { NativeSelect, NativeSelectProps } from "../NativeSelect/NativeSelect";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

describe("NativeSelect", () => {
  describeScreenshotFuzz(
    (props: NativeSelectProps) => (
      <NativeSelect placeholder="Не выбран" {...props}>
        <option value="m">Мужской</option>
        <option value="f">Женский</option>
        <option value="th">
          Вершина холма, где Таматеа, мужчина с большими коленями, который
          скатывался, забирался и проглатывал горы, известный как поедатель
          земли, играл на своей флейте для своей возлюбленной
        </option>
      </NativeSelect>
    ),
    [
      {
        value: [undefined, "m"],
        disabled: [undefined, true],
        align: [undefined, "center", "right"],
      },
      {
        $adaptivity: "y",
      },
      {
        placeholder: [undefined, "placeholder"],
        value: ["", "m"],
      },
      {
        // самый длинный в мире топоним из одного слова
        // https://ru.wikipedia.org/wiki/Тауматафакатангихангакоауауотаматеатурипукакапикимаунгахоронукупокаифенуакитанатаху
        value: ["th"],
        multiline: [undefined, true],
      },
      {
        status: ["error", "valid"],
      },
    ]
  );
});
