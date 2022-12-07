import React, { Fragment } from "react";
import { FormLayoutGroup } from "./FormLayoutGroup";
import { Input } from "../Input/Input";
import { FormItem } from "../FormItem/FormItem";
import { Select } from "../Select/Select";
import { DatePicker } from "../DatePicker/DatePicker";
import { ChipsSelect } from "../ChipsSelect/ChipsSelect";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { NativeSelect } from "../NativeSelect/NativeSelect";
import { ChipsInput } from "../ChipsInput/ChipsInput";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";

const chips = [
  {
    value: "chip",
    label: "chip",
  },
];

describe("FormLayoutGroup", () => {
  describeScreenshotFuzz(FormLayoutGroup, [
    {
      mode: ["horizontal", "vertical"],
      children: [
        <Fragment key="">
          <FormItem>
            <Input />
          </FormItem>
          <FormItem>
            <Input />
          </FormItem>
        </Fragment>,
      ],
    },
    {
      mode: ["vertical"],
      children: [
        <Fragment key="">
          <FormItem>
            <Input />
          </FormItem>
          <FormLayoutGroup mode="horizontal">
            <FormItem>
              <Input />
            </FormItem>
            <FormItem>
              <Input />
            </FormItem>
          </FormLayoutGroup>
        </Fragment>,
      ],
    },
    {
      mode: ["horizontal"],
      removable: [true],
      children: [
        <Fragment key="">
          <FormItem>
            <Input />
          </FormItem>
          <FormItem>
            <Input />
          </FormItem>
        </Fragment>,
        <Fragment key="">
          <FormItem top="Сверху">
            <Input />
          </FormItem>
          <FormItem top="И у меня">
            <Input />
          </FormItem>
        </Fragment>,
        <Fragment key="">
          <FormItem top="Сверху очень длинная надпись аж распирает">
            <Input />
          </FormItem>
          <FormItem top="И у меня тоже не короче твоей">
            <Input />
          </FormItem>
        </Fragment>,
        <Fragment key="">
          <FormItem top="Сверху очень длинная надпись аж распирает">
            <Input />
          </FormItem>
          <FormItem bottom="А у меня надпись снизу">
            <Input />
          </FormItem>
        </Fragment>,
      ],
    },
    {
      mode: ["horizontal"],
      segmented: [true],
      children: [
        <Fragment key="kids">
          <FormItem>
            <Input defaultValue="Иванов" />
          </FormItem>
          <FormItem>
            <Input defaultValue="Иван" />
          </FormItem>
          <FormItem>
            <Input defaultValue="Иванович" />
          </FormItem>
        </Fragment>,
        <Fragment key="kids">
          <FormItem>
            <Input defaultValue="Иванов" />
          </FormItem>
          <FormItem status="error">
            <Input defaultValue="Иван" />
          </FormItem>
          <FormItem>
            <Input defaultValue="Иванович" />
          </FormItem>
        </Fragment>,
        <Fragment key="kids">
          <FormItem>
            <ChipsInput value={chips} />
          </FormItem>
          <FormItem>
            <ChipsInput value={chips} />
          </FormItem>
          <FormItem>
            <ChipsInput value={chips} />
          </FormItem>
        </Fragment>,
        <Fragment key="kids">
          <FormItem>
            <Select options={[]} placeholder="День" />
          </FormItem>
          <FormItem>
            <Select options={[]} placeholder="Месяц" />
          </FormItem>
          <FormItem>
            <Select options={[]} placeholder="Год" />
          </FormItem>
        </Fragment>,
        <Fragment key="kids">
          <FormItem>
            <NativeSelect placeholder="День" />
          </FormItem>
          <FormItem>
            <NativeSelect placeholder="Месяц" />
          </FormItem>
          <FormItem>
            <NativeSelect placeholder="Год" />
          </FormItem>
        </Fragment>,
        <Fragment key="kids">
          <FormItem>
            <CustomSelect options={[]} placeholder="День" />
          </FormItem>
          <FormItem>
            <CustomSelect options={[]} placeholder="Месяц" />
          </FormItem>
          <FormItem>
            <CustomSelect options={[]} placeholder="Год" />
          </FormItem>
        </Fragment>,
        <Fragment key="kids">
          <FormItem>
            <ChipsSelect value={chips} />
          </FormItem>
          <FormItem>
            <ChipsSelect value={chips} />
          </FormItem>
          <FormItem>
            <ChipsSelect value={chips} />
          </FormItem>
        </Fragment>,
        <Fragment key="kids">
          <FormItem>
            <ChipsSelect value={[]} placeholder="День" />
          </FormItem>
          <FormItem>
            <ChipsSelect value={[]} placeholder="Месяц" />
          </FormItem>
          <FormItem>
            <ChipsSelect value={[]} placeholder="Год" />
          </FormItem>
        </Fragment>,
        <AdaptivityProvider hasPointer={false} key="kids">
          <FormItem>
            <Input defaultValue="Текст" />
          </FormItem>
          <FormItem>
            <DatePicker />
          </FormItem>
        </AdaptivityProvider>,
      ],
    },
  ]);
});
