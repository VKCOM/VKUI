import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import {
  Icon12Add,
  Icon12Tag,
  Icon16Add,
  Icon24Add,
  Icon24ChevronCompactRight,
} from '@vkontakte/icons';
import { CanvasFullLayout } from '../../storybook/constants';
import { createFieldWithPresets } from '../../storybook/createFieldWithPressets';
import { Counter } from '../Counter/Counter';
import { Button, ButtonProps } from './Button';

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
    addBefore: {
      control: { type: 'boolean' },
    },
    addAfter: {
      control: { type: 'boolean' },
    },
  },
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<StoryButtonProps>;

export const Playground: Story = {
  render: ({ addBefore, addAfter, ...args }) => {
    const buttonBefore =
      args.before ||
      (addBefore &&
        (args.size === 's' ? <Icon12Add /> : args.size === 'm' ? <Icon16Add /> : <Icon24Add />));
    const buttonAfter =
      args.after ||
      (addAfter &&
        (args.size === 's' ? (
          <Icon12Tag />
        ) : args.size === 'm' ? (
          <Icon24ChevronCompactRight />
        ) : (
          <Counter>16</Counter>
        )));

    return <Button {...args} before={buttonBefore} after={buttonAfter} />;
  },
  args: {
    children: 'Button',
    size: 's',
  },
};
