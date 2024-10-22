import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { FormStatus, type FormStatusProps } from './FormStatus';

const story: Meta<FormStatusProps> = {
  title: 'Forms/FormStatus',
  component: FormStatus,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<FormStatusProps>;

export const Playground: Story = {
  args: {
    mode: 'error',
    title: 'Некорректный мобильный номер',
    children: 'Необходимо корректно ввести номер в международном формате',
  },
};
