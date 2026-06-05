import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Counter } from '../Counter/Counter';
import { Button, type ButtonProps } from './Button';

const iconsPresets = createFieldWithPresets({
  requiredIcons: ['Icon12Add', 'Icon16Add', 'Icon24Add', 'Icon12Tag', 'Icon24ChevronCompactRight'],
  additionalPresets: {
    Counter: <Counter>16</Counter>,
  },
});

const story: Meta<ButtonProps> = {
  title: 'Buttons/Button',
  component: Button,
  parameters: createStoryParameters('Button', CanvasFullLayout),
  argTypes: {
    before: iconsPresets,
    after: iconsPresets,
  },
  decorators: [withCartesian],
  tags: ['Кнопки'],
};

export default story;

export const Playground: StoryFn<ButtonProps> = (props: ButtonProps) => <Button {...props} />;

Playground.args = {
  children: 'Button',
  size: 's',
};
