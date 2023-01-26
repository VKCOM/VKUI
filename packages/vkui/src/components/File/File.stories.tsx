import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Story, Meta } from '@storybook/react';
import { File, FileProps } from './File';
import { CanvasFullLayout } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/File',
  component: File,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms') },
  decorators: [withCartesian],
} as Meta<FileProps>;

const Template: Story<FileProps> = (args) => <File {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
