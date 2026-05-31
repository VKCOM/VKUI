import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Card, type CardProps } from './Card';

const story: Meta<CardProps> = {
  title: 'Data Display/Card',
  component: Card,
  parameters: createStoryParameters('Card', CanvasFullLayout, DisableCartesianParam),
  decorators: [withSinglePanel, withVKUILayout],
  excludeStories: ['playgroundArgs'],
  tags: ['Отображение данных'],
};

export default story;

export const Playground: StoryObj<CardProps> = (props: CardProps) => (
  <Card {...props}>
    <div
      style={{
        height: 96,
      }}
    >
      <VisuallyHidden>Контент для вашей карточки (визуальный компонент-обертка)</VisuallyHidden>
    </div>
  </Card>
);

Playground.args = {
  // переопределяем дефолтный `li` так как в примере нету `ul`.
  Component: 'div',
};
