import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Counter, type CounterProps } from './Counter';

const story: Meta<CounterProps> = {
  title: 'Data Display/Counter',
  component: Counter,
  parameters: createStoryParameters('Counter', CanvasFullLayout),
  decorators: [withCartesian],
  tags: ['Отображение данных'],
};

export default story;

export const Playground: StoryFn<CounterProps> = (props: CounterProps) => <Counter {...props} />;

Playground.args = {
  children: (
    <>
      <VisuallyHidden>Обновлений:</VisuallyHidden> 5
    </>
  ),
};
