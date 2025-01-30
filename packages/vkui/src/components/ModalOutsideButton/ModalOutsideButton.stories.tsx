import type { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { ModalOutsideButton, type ModalOutsideButtonProps } from './ModalOutsideButton';

const iconsPresets = createFieldWithPresets({
  requiredIcons: ['Icon20More'],
  iconSizes: ['20'],
});

const story: Meta<ModalOutsideButtonProps> = {
  title: 'Modals/ModalOutsideButton',
  component: ModalOutsideButton,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    children: iconsPresets,
  },
};

export default story;

type Story = StoryObj<ModalOutsideButtonProps>;

export const Playground: Story = {
  args: {
    'children': 'Icon20More',
    'onClick': noop,
    'aria-label': 'More',
  },
};
