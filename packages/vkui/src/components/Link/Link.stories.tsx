import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Link, LinkProps } from './Link';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Icon24ExternalLinkOutline } from '@vkontakte/icons';

export default {
  title: 'Blocks/Link',
  component: Link,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
} as Meta<LinkProps>;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'О VKUI',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  href: 'https://google.com',
  target: '_blank',
  children: (
    <>
      https://google.com <Icon24ExternalLinkOutline width={16} height={16} />
    </>
  ),
};
