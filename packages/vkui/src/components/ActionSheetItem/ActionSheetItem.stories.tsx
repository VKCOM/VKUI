import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ActionSheetItem, ActionSheetItemProps } from './ActionSheetItem';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { getIconArgBySize, getIconComponent, IconArgType, IconName } from '../../storybook/Icons';
import { getFigmaPage } from '../../storybook/helpers';

const CheckIconArg = getIconArgBySize(/^Icon2[04]Check/);

export default {
  title: 'Popouts/ActionSheetItem',
  component: ActionSheetItem,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('ActionSheetItem'),
    ...DisableCartesianParam,
  },
  argTypes: {
    before: IconArgType,
    iconChecked: CheckIconArg,
    meta: StringArg,
    subtitle: StringArg,
  },
} as Meta<ActionSheetItemProps>;

const Template: Story<
  Omit<ActionSheetItemProps, 'before' | 'iconChecked'> & {
    before?: IconName;
    iconChecked?: IconName;
  }
> = ({ before, iconChecked, ...args }) => {
  const Icon = getIconComponent(before);
  const CheckIcon = getIconComponent(iconChecked);
  return (
    <ActionSheetItem
      style={{ border: '1px dashed red' }}
      before={Icon}
      iconChecked={CheckIcon}
      {...args}
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  children: 'Сохранить в закладках',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Редактировать профиль',
  before: 'Icon28EditOutline',
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  children: 'Качество',
  subtitle: 'Авто',
};

export const WithChecked = Template.bind({});
WithChecked.args = {
  children: 'Друзья по школе',
  selectable: true,
  defaultChecked: true,
};
