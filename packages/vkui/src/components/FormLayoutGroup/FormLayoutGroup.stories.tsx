import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { DateInput } from '../DateInput/DateInput';
import { FormItem } from '../FormItem/FormItem';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { FormLayoutGroup, type FormLayoutGroupProps } from './FormLayoutGroup';

const story: Meta<FormLayoutGroupProps> = {
  title: 'Forms/FormLayoutGroup',
  component: FormLayoutGroup,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<FormLayoutGroupProps>;

export const Playground: Story = {
  render: (args) => (
    <FormLayoutGroup {...args}>
      <FormItem htmlFor="name" top="Имя ящика">
        <Input id="name" />
      </FormItem>
      <FormItem>
        <Select
          options={['@mail.ru', '@internet.ru', '@bk.ru', '@inbox.ru', '@list.ru'].map((i) => ({
            label: i,
            value: i,
          }))}
          defaultValue="@mail.ru"
        />
      </FormItem>
    </FormLayoutGroup>
  ),
};

function Render(props: FormLayoutGroupProps) {
  const dateInputId = React.useId();
  const nicknameInputId = React.useId();
  const linkOrIdInputId = React.useId();
  const [dateValue, setDateValue] = React.useState<Date | undefined>();

  return (
    <FormLayoutGroup mode="horizontal" segmented {...props}>
      <VisuallyHidden Component="label" htmlFor={nicknameInputId}>
        Никнейм или имя
      </VisuallyHidden>
      <FormItem>
        <Input id={nicknameInputId} placeholder="Никнейм или имя" />
      </FormItem>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor={dateInputId}>
          Ссылка на ID
        </VisuallyHidden>
        <Input id={linkOrIdInputId} placeholder="Ссылка на ID" />
      </FormItem>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor={dateInputId}>
          Дата или диапазон
        </VisuallyHidden>
        <DateInput
          id={dateInputId}
          value={dateValue}
          onChange={(date) => setDateValue(date)}
          renderCustomValue={(date: Date | undefined) =>
            date ? undefined : (
              <span aria-hidden style={{ color: 'var(--vkui--color_text_secondary)' }}>
                Дата или диапазон
              </span>
            )
          }
        />
      </FormItem>
    </FormLayoutGroup>
  );
}

export const HorizontalSegmeted: Story = {
  render: (args) => <Render {...args} />,
};
