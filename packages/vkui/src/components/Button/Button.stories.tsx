import * as React from 'react';
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
import { Counter } from '../Counter/Counter';
import { Button, ButtonProps } from './Button';

type StoryButtonProps = ButtonProps & { addBefore: boolean; addAfter: boolean };

const story: Meta<StoryButtonProps> = {
  title: 'Blocks/Button',
  component: Button,
  parameters: CanvasFullLayout,
  argTypes: {
    before: { control: false },
    after: { control: false },
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

type Story = StoryObj<Omit<StoryButtonProps, 'before' | 'after'>>;

export const Playground: Story = {
  render: ({ addBefore, addAfter, ...args }) => {
    const buttonBefore =
      addBefore &&
      (args.size === 's' ? <Icon12Add /> : args.size === 'm' ? <Icon16Add /> : <Icon24Add />);
    const buttonAfter =
      addAfter &&
      (args.size === 's' ? (
        <Icon12Tag />
      ) : args.size === 'm' ? (
        <Icon24ChevronCompactRight />
      ) : (
        <Counter>16</Counter>
      ));

    return <Button {...args} before={buttonBefore} after={buttonAfter} />;
  },
  args: {
    children: 'Button',
    size: 's',
  },
};
