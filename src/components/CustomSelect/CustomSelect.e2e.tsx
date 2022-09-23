import * as React from "react";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { CustomSelect, SelectProps } from "../CustomSelect/CustomSelect";

describe("CustomSelect", () => {
  describeScreenshotFuzz(
    (props: SelectProps) => (
      <CustomSelect
        placeholder="Не выбрана"
        {...props}
        options={[
          { value: 1, label: "Россия" },
          { value: 2, label: "Украина" },
          {
            value: 3,
            label: "Соединенное королевство Великобритании и Северной Ирландии",
          },
        ]}
      />
    ),
    [
      {
        value: [undefined, 1],
        disabled: [undefined, true],
        align: [undefined, "center", "right"],
      },
      {
        value: [3],
      },
      {
        selectType: ["plain", "accent"],
        $adaptivity: "y",
      },
      {
        status: ["error", "valid"],
      },
    ]
  );
});
