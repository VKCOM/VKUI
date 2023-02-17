import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon24ExternalLinkOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Link, LinkProps } from './Link';

const story: Meta<LinkProps> = {
  title: 'Blocks/Link',
  component: Link,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

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
