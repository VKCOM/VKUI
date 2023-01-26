import React from 'react';
import { Story, Meta } from '@storybook/react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Button, ButtonProps } from './Button';
import { CanvasFullLayout } from '../../storybook/constants';
import { Counter } from '../Counter/Counter';
import {
  Icon12Add,
  Icon12Tag,
  Icon16Add,
  Icon24Add,
  Icon24ChevronCompactRight,
} from '@vkontakte/icons';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Button',
  component: Button,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Button') },
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
} as Meta<ButtonProps>;

const Template: Story<
  Omit<ButtonProps, 'before' | 'after'> & { addBefore: boolean; addAfter: boolean }
> = ({ addBefore, addAfter, ...args }) => {
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
};

export const Playground = Template.bind({});
Playground.args = {
  children: 'Button',
  size: 's',
};
