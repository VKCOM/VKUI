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
              <FormItem htmlFor="inputOne">
                <Input id="inputOne" />
              </FormItem>
              <FormItem htmlFor="inputTwo">
                <Input id="inputTwo" />
              </FormItem>
            </React.Fragment>,
          ],
        },
        {
          mode: ['vertical'],
          children: [
            <React.Fragment key="">
              <FormItem htmlFor="inputOne">
                <Input id="inputOne" />
              </FormItem>
              <FormLayoutGroup mode="horizontal">
                <FormItem htmlFor="inputTwo">
                  <Input id="inputTwo" />
                </FormItem>
                <FormItem htmlFor="inputThree">
                  <Input id="inputThree" />
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
              <FormItem htmlFor="inputOne">
                <Input id="inputOne" />
              </FormItem>
              <FormItem htmlFor="inputTwo">
                <Input id="inputTwo" />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="">
              <FormItem htmlFor="top" top="Сверху">
                <Input id="top" />
              </FormItem>
              <FormItem htmlFor="topToo" top="И у меня">
                <Input id="topToo" />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="">
              <FormItem htmlFor="tooLongTop" top="Сверху очень длинная надпись аж распирает">
                <Input id="tooLongTop" />
              </FormItem>
              <FormItem htmlFor="theSameLongTop" top="И у меня тоже не короче твоей">
                <Input id="theSameLongTop" />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="">
              <FormItem htmlFor="tooLong" top="Сверху очень длинная надпись аж распирает">
                <Input id="tooLong" />
              </FormItem>
              <FormItem htmlFor="theSameLongBottom" bottom="А у меня надпись снизу">
                <Input id="theSameLongBottom" />
              </FormItem>
            </React.Fragment>,
          ],
        },
        {
          mode: ['horizontal'],
          segmented: [true],
          children: [
            <React.Fragment key="kids">
              <FormItem htmlFor="lastName">
                <Input id="lastName" defaultValue="Иванов" />
              </FormItem>
              <FormItem htmlFor="firstName">
                <Input id="firstName" defaultValue="Иван" />
              </FormItem>
              <FormItem htmlFor="middleName">
                <Input id="middleName" defaultValue="Иванович" />
              </FormItem>
            </React.Fragment>,
            <React.Fragment key="kids">
              <FormItem htmlFor="secondLastName">
                <Input id="secondLastName" defaultValue="Иванов" />
              </FormItem>
              <FormItem htmlFor="firstNameError" status="error">
                <Input id="firstNameError" defaultValue="Иван" />
              </FormItem>
              <FormItem htmlFor="secondMiddleName">
                <Input id="secondMiddleName" defaultValue="Иванович" />
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
              <FormItem htmlFor="text">
                <Input id="text" defaultValue="Текст" />
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
              <FormItem htmlFor="tooLongTop" top="Сверху очень длинная надпись аж распирает">
                <Input id="tooLongTop" />
              </FormItem>
              <FormItem htmlFor="theSameLongTop" top="И у меня тоже не короче твоей">
                <Input id="theSameLongTop" />
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
