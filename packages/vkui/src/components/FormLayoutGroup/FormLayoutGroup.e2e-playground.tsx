import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ChipsInput } from '../ChipsInput/ChipsInput';
import { ChipsSelect } from '../ChipsSelect/ChipsSelect';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { DatePicker } from '../DatePicker/DatePicker';
import { FormItem } from '../FormItem/FormItem';
import { Input } from '../Input/Input';
import { NativeSelect } from '../NativeSelect/NativeSelect';
import { Select } from '../Select/Select';
import { FormLayoutGroup, type FormLayoutGroupProps } from './FormLayoutGroup';

const chips = [
  {
    value: 'chip',
    label: 'chip',
  },
];

export const FormLayoutGroupPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['horizontal', 'vertical'],
          children: [
            <React.Fragment key="">
              <FormItem>
                <Input />
              </FormItem>
              <FormItem>
                <Input />
              </FormItem>
            </React.Fragment>,
          ],
        },
        {
          mode: ['vertical'],
          children: [
            <React.Fragment key="">
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
            </React.Fragment>,
          ],
        },
        {
          mode: ['horizontal'],
          removable: [true],
          children: [
            <React.Fragment key="">
              <FormItem>
                <Input />
              </FormItem>
              <FormItem>
                <Input />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="">
              <FormItem top="Сверху">
                <Input />
              </FormItem>
              <FormItem top="И у меня">
                <Input />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="">
              <FormItem top="Сверху очень длинная надпись аж распирает">
                <Input />
              </FormItem>
              <FormItem top="И у меня тоже не короче твоей">
                <Input />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="">
              <FormItem top="Сверху очень длинная надпись аж распирает">
                <Input />
              </FormItem>
              <FormItem bottom="А у меня надпись снизу">
                <Input />
              </FormItem>
            </React.Fragment>,
          ],
        },
        {
          mode: ['horizontal'],
          segmented: [true],
          children: [
            <React.Fragment key="kids">
              <FormItem>
                <Input defaultValue="Иванов" />
              </FormItem>
              <FormItem>
                <Input defaultValue="Иван" />
              </FormItem>
              <FormItem>
                <Input defaultValue="Иванович" />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="kids">
              <FormItem>
                <Input defaultValue="Иванов" />
              </FormItem>
              <FormItem status="error">
                <Input defaultValue="Иван" />
              </FormItem>
              <FormItem>
                <Input defaultValue="Иванович" />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="kids">
              <FormItem>
                <ChipsInput value={chips} />
              </FormItem>
              <FormItem>
                <ChipsInput value={chips} />
              </FormItem>
              <FormItem>
                <ChipsInput value={chips} />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="kids">
              <FormItem>
                <Select options={[]} placeholder="День" />
              </FormItem>
              <FormItem>
                <Select options={[]} placeholder="Месяц" />
              </FormItem>
              <FormItem>
                <Select options={[]} placeholder="Год" />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="kids">
              <FormItem>
                <NativeSelect placeholder="День" />
              </FormItem>
              <FormItem>
                <NativeSelect placeholder="Месяц" />
              </FormItem>
              <FormItem>
                <NativeSelect placeholder="Год" />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="kids">
              <FormItem>
                <CustomSelect options={[]} placeholder="День" />
              </FormItem>
              <FormItem>
                <CustomSelect options={[]} placeholder="Месяц" />
              </FormItem>
              <FormItem>
                <CustomSelect options={[]} placeholder="Год" />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="kids">
              <FormItem>
                <ChipsSelect value={chips} />
              </FormItem>
              <FormItem>
                <ChipsSelect value={chips} />
              </FormItem>
              <FormItem>
                <ChipsSelect value={chips} />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="kids">
              <FormItem>
                <ChipsSelect value={[]} placeholder="День" />
              </FormItem>
              <FormItem>
                <ChipsSelect value={[]} placeholder="Месяц" />
              </FormItem>
              <FormItem>
                <ChipsSelect value={[]} placeholder="Год" />
              </FormItem>
            </React.Fragment>,
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
        {
          mode: ['horizontal'],
          removable: ['indent'],
          children: [
            <React.Fragment key="">
              <FormItem top="Сверху очень длинная надпись аж распирает">
                <Input />
              </FormItem>
              <FormItem top="И у меня тоже не короче твоей">
                <Input />
              </FormItem>
            </React.Fragment>,
          ],
        },
      ]}
    >
      {(props: FormLayoutGroupProps) => <FormLayoutGroup {...props} />}
    </ComponentPlayground>
  );
};
