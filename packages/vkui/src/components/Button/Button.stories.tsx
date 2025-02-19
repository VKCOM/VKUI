import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { Counter } from '../Counter/Counter';
import { Button, type ButtonProps } from './Button';

type StoryButtonProps = ButtonProps & { addBefore: boolean; addAfter: boolean };

const iconsPresets = createFieldWithPresets({
  requiredIcons: ['Icon12Add', 'Icon16Add', 'Icon24Add', 'Icon12Tag', 'Icon24ChevronCompactRight'],
  additionalPresets: {
    Counter: <Counter>16</Counter>,
  },
});

const story: Meta<StoryButtonProps> = {
  title: 'Blocks/Button',
  component: Button,
  parameters: CanvasFullLayout,
  argTypes: {
    before: iconsPresets,
    after: iconsPresets,
  },
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<StoryButtonProps>;

export const Playground: Story = {
  args: {
    children: 'Button',
    size: 's',
  },
};
