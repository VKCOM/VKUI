import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { isToday, isYesterday } from 'date-fns';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { createCalendarDayRenderField } from '../../testing/presets/createCalendarDayRenderField';
import { createCalendarTimezoneField } from '../../testing/presets/createCalendarTimezoneField';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { FormItem } from '../FormItem/FormItem';
import { Group } from '../Group/Group';
import { DateInput, type DateInputProps } from './DateInput';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<DateInputProps> = {
  title: 'Forms/DateInput',
  component: DateInput,
  parameters: createStoryParameters('DateInput', CanvasFullLayout, DisableCartesianParam),
  args: { onChange: fn() },
  argTypes: {
    value: {
      control: { type: 'date' },
    },
    after: iconsPresets,
    before: iconsPresets,
    renderDayContent: createCalendarDayRenderField(),
    renderCustomValue: StringArg,
    timezone: createCalendarTimezoneField(),
  },
};

export default story;

type Story = StoryObj<Omit<DateInputProps, 'renderCustomValue'> & { renderCustomValue: string }>;

export const Playground: Story = {
  render: ({ value, renderCustomValue: renderCustomValueProp, ...args }) => {
    const parsedValue = value ? new Date(value) : value;
    const renderCustomValue = () => renderCustomValueProp;

    return <DateInput value={parsedValue} renderCustomValue={renderCustomValue} {...args} />;
  },
};

export const Example: Story = {
  render: () => {
    return (
      <Group>
        <Group header="Пример без accessible флага">
          <FormItem top="Дата рождения" htmlFor="no-accessible-flag">
            <DateInput id="no-accessible-flag" aria-label="Дата рождения" />
          </FormItem>
        </Group>

        <Group header="Пример c флагом accessible">
          <FormItem top="Дата свадьбы" htmlFor="with-accessible-flag">
            <DateInput accessible id="with-accessible-flag" aria-label="Дата свадьбы" />
          </FormItem>
        </Group>

        <Group header="Пример даты со временем">
          <FormItem top="Дата начала мероприятия" htmlFor="with-time">
            <DateInput accessible enableTime id="with-time" aria-label="Дата начала мероприятия" />
          </FormItem>
        </Group>

        <Group header="Со значением по умолчанию">
          <FormItem top="Начало рекламной кампании" htmlFor="with-default-value">
            <DateInput
              defaultValue={new Date()}
              accessible
              enableTime
              id="with-default-value"
              aria-label="Начало рекламной кампании"
            />
          </FormItem>
        </Group>

        <Group header="Будущие даты заблокированы">
          <FormItem top="Дата рождения" htmlFor="future-dates-disabled">
            <DateInput
              accessible
              enableTime
              disableFuture
              id="future-dates-disabled"
              aria-label="Дата рождения"
            />
          </FormItem>
        </Group>

        <Group header="С кастомным форматом отображаемой даты">
          <FormItem top="Дата выхода фильма" htmlFor="render-custom-value">
            <DateInput
              accessible
              defaultValue={new Date()}
              id="render-custom-value"
              aria-label="Дата выхода фильма"
              renderCustomValue={(date) => {
                if (!date) {
                  return undefined;
                }
                if (isToday(date)) {
                  return 'Сегодня';
                }
                if (isYesterday(date)) {
                  return 'Вчера';
                }
                return undefined;
              }}
            />
          </FormItem>
        </Group>

        <Group header="Без явного дублирования label">
          <FormItem top="Дата публикации" htmlFor="without-label-in-date-input">
            <DateInput accessible defaultValue={new Date()} id="without-label-in-date-input" />
          </FormItem>
        </Group>
      </Group>
    );
  },
};
