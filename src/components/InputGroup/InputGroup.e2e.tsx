import { Fragment } from "react";
import { describeScreenshotFuzz } from "../../testing/e2e/utils";
import { InputGroup, InputGroupProps } from "./InputGroup";
import { FormItem } from "../FormItem/FormItem";
import { FormLayout } from "../FormLayout/FormLayout";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { DatePicker } from "../DatePicker/DatePicker";
import { ChipsSelect } from "../ChipsSelect/ChipsSelect";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { NativeSelect } from "../NativeSelect/NativeSelect";
import { ChipsInput } from "../ChipsInput/ChipsInput";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";

const chips = [
  {
    value: "chip",
    label: "chip",
  },
];

const InputGroupTest = ({ ...restProps }: InputGroupProps) => {
  return (
    <AdaptivityProvider hasMouse={false}>
      <FormLayout>
        <FormItem>
          <InputGroup {...restProps} />
        </FormItem>
      </FormLayout>
    </AdaptivityProvider>
  );
};

describe("InputGroup", () => {
  describeScreenshotFuzz(InputGroupTest, [
    {
      mode: [undefined, "horizontal"],
      children: [
        <Fragment key="kids">
          <Input defaultValue="Иванов" />
          <Input defaultValue="Иван" />
          <Input defaultValue="Иванович" />
        </Fragment>,
        <Fragment key="kids">
          <ChipsInput value={chips} />
          <ChipsInput value={chips} />
          <ChipsInput value={chips} />
        </Fragment>,
        <Fragment key="kids">
          <Select options={[]} placeholder="День" />
          <Select options={[]} placeholder="Месяц" />
          <Select options={[]} placeholder="Год" />
        </Fragment>,
        <Fragment key="kids">
          <NativeSelect placeholder="День" />
          <NativeSelect placeholder="Месяц" />
          <NativeSelect placeholder="Год" />
        </Fragment>,
        <Fragment key="kids">
          <CustomSelect options={[]} placeholder="День" />
          <CustomSelect options={[]} placeholder="Месяц" />
          <CustomSelect options={[]} placeholder="Год" />
        </Fragment>,
        <Fragment key="kids">
          <ChipsSelect value={chips} />
          <ChipsSelect value={chips} />
          <ChipsSelect value={chips} />
        </Fragment>,
        <Fragment key="kids">
          <ChipsSelect value={[]} placeholder="День" />
          <ChipsSelect value={[]} placeholder="Месяц" />
          <ChipsSelect value={[]} placeholder="Год" />
        </Fragment>,
        <Fragment key="kids">
          <Input defaultValue="Текст" />
          <DatePicker />
        </Fragment>,
      ],
    },
  ]);
});
