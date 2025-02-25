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

export const AccessibleHorizontalSegmeted: Story = {
  render: (args) => (
    <FormLayoutGroup mode="horizontal" segmented {...args}>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor="nikname-id">
          Никнейм или имя
        </VisuallyHidden>
        <Input id="nickname-id" placeholder="Никнейм или имя" />
      </FormItem>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor="link-or-id-input-id">
          Ссылка на ID
        </VisuallyHidden>
        <Input id="link-or-id-input-id" placeholder="Ссылка на ID" />
      </FormItem>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor="date-id">
          Дата или диапазон
        </VisuallyHidden>
        <DateInput
          id="date-id"
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
  ),
};
