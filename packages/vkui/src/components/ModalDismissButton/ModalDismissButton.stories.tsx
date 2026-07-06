import type { Meta, StoryFn } from '@storybook/react';
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

export const Playground: StoryFn<ModalDismissButtonProps> = (props: ModalDismissButtonProps) => (
  <ModalDismissButton {...props} />
);

Playground.decorators = [
  (Component) => (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Component onClick={noop} />
    </div>
  ),
];
