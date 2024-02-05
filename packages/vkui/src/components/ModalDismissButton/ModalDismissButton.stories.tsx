import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ModalDismissButton, ModalDismissButtonProps } from './ModalDismissButton';

const story: Meta<ModalDismissButtonProps> = {
  title: 'Modals/ModalDismissButton',
  component: ModalDismissButton,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
