import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createCalendarDayRenderField } from '../../testing/presets/createCalendarDayRenderField';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { DateRangeInput, type DateRangeInputProps } from './DateRangeInput';
const iconsPresets = getFormFieldIconsPresets();

type StoryDateRangeInputProps = DateRangeInputProps & { startDate: number; endDate: number };

const story: Meta<StoryDateRangeInputProps> = {
  title: 'Dates/DateRangeInput',
  component: DateRangeInput,
  parameters: createStoryParameters('DateRangeInput', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    readOnly: {
      control: { type: 'boolean' },
    },
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
  tags: ['Работа с датами'],
};

export default story;

type Story = StoryFn<StoryDateRangeInputProps>;

export const Playground: Story = ({ startDate, endDate, ...args }: StoryDateRangeInputProps) => {
  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;
  return <DateRangeInput {...args} defaultValue={[parsedStartDate, parsedEndDate]} />;
};
