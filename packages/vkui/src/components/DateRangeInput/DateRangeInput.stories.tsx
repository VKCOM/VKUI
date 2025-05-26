import type { Meta, StoryObj } from '@storybook/react';
import { addDays, addMonths } from 'date-fns';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createCalendarDayRenderField } from '../../testing/presets/createCalendarDayRenderField';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { useCustomArgs } from '../../testing/useCustomArgs';
import { FormItem } from '../FormItem/FormItem';
import { Group } from '../Group/Group';
import { DateRangeInput, type DateRangeInputProps } from './DateRangeInput';

type StoryDateRangeInputProps = DateRangeInputProps & { startDate: number; endDate: number };

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<StoryDateRangeInputProps> = {
  title: 'Forms/DateRangeInput',
  component: DateRangeInput,
  parameters: createStoryParameters('DateRangeInput', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    value: {
      description: 'Используйте startDate и endDate для задания периода',
      control: false,
    },
    startDate: {
      description: 'Дата начала периода',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'date' },
    },
    endDate: {
      description: 'Дата окончания периода',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'date' },
    },
    before: iconsPresets,
    after: iconsPresets,
    renderDayContent: createCalendarDayRenderField(),
  },
};

export default story;

type Story = StoryObj<StoryDateRangeInputProps>;

export const Playground: Story = {
  render: function Render({ startDate, endDate, ...args }) {
    const [, updateArgs] = useCustomArgs();

    const handleDateRangeUpdate: DateRangeInputProps['onChange'] = (updatedValue) => {
      const [changedStartDate, changedEndDate] = updatedValue || [null, null];
      updateArgs({
        startDate: changedStartDate ? new Date(changedStartDate) : null,
        endDate: changedEndDate ? new Date(changedEndDate) : null,
      });
    };

    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;

    return (
      <DateRangeInput
        {...args}
        value={[parsedStartDate, parsedEndDate]}
        onChange={handleDateRangeUpdate}
      />
    );
  },
};

export const Example: Story = {
  render: () => {
    return (
      <Group>
        <Group header="Пример без accessible флага">
          <FormItem top="Период проживания" htmlFor="no-accessible-flag">
            <DateRangeInput id="no-accessible-flag" aria-label="Период проживания" />
          </FormItem>
        </Group>

        <Group header="Пример c флагом accessible">
          <FormItem top="Срок действия договора" htmlFor="with-accessible-flag">
            <DateRangeInput
              accessible
              id="with-accessible-flag"
              aria-label="Срок действия договора"
            />
          </FormItem>
        </Group>

        <Group header="Со значением по умолчанию">
          <FormItem top="Период бронирования" htmlFor="with-default-value">
            <DateRangeInput
              defaultValue={[new Date(), addMonths(new Date(), 1)]}
              accessible
              id="with-default-value"
              aria-label="Период бронирования"
            />
          </FormItem>
        </Group>

        <Group header="Будущие даты заблокированы">
          <FormItem top="Отпускной период" htmlFor="future-dates-disabled">
            <DateRangeInput
              accessible
              disableFuture
              id="future-dates-disabled"
              aria-label="Отпускной период"
            />
          </FormItem>
        </Group>

        <Group header="Без явного дублирования label">
          <FormItem top="Даты командировки" htmlFor="without-label-in-date-input">
            <DateRangeInput
              accessible
              defaultValue={[new Date(), addDays(new Date(), 7)]}
              id="without-label-in-date-input"
            />
          </FormItem>
        </Group>
      </Group>
    );
  },
};
