import type { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { ModalDismissButton, type ModalDismissButtonProps } from './ModalDismissButton';

const story: Meta<ModalDismissButtonProps> = {
  title: 'Modals/ModalDismissButton',
  component: ModalDismissButton,
  parameters: createStoryParameters('ModalDismissButton', CanvasFullLayout, DisableCartesianParam),
  tags: ['Модальные окна'],
};

export default story;

type Story = StoryObj<ModalDismissButtonProps>;

export const Playground: Story = {
  decorators: [
    (Component) => (
      <div style={{ position: 'relative' }}>
        <Component onClick={noop} />
      </div>
    ),
  ],
};
