import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon24ExternalLinkOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Link, LinkProps } from './Link';

const story: Meta<LinkProps> = {
  title: 'Blocks/Link',
  component: Link,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<LinkProps>;

export const Playground: Story = {
  args: {
    children: 'О VKUI',
  },
};

export const WithIcon: Story = {
  ...Playground,
  args: {
    href: 'https://google.com',
    target: '_blank',
    children: (
      <>
        https://google.com <Icon24ExternalLinkOutline width={16} height={16} />
      </>
    ),
  },
};
