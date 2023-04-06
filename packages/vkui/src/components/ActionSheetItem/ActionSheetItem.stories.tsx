import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { getIconArgBySize, getIconComponent, IconArgType, IconName } from '../../storybook/Icons';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { ActionSheetItem, ActionSheetItemProps } from './ActionSheetItem';

const CheckIconArg = getIconArgBySize(/^Icon2[04]Check/);

const story: Meta<ActionSheetItemProps> = {
  title: 'Popouts/ActionSheetItem',
  component: ActionSheetItem,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    before: IconArgType,
    iconChecked: CheckIconArg,
    meta: StringArg,
    subtitle: StringArg,
  },
};

export default story;

type Story = StoryObj<
  Omit<ActionSheetItemProps, 'before' | 'iconChecked'> & {
    before?: IconName;
    iconChecked?: IconName;
  }
>;

export const Playground: Story = {
  render: function Render({ before, iconChecked, ...args }) {
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
  },
  args: {
    children: 'Сохранить в закладках',
  },
};

export const WithIcon: Story = {
  ...Playground,
  args: {
    children: 'Редактировать профиль',
    before: 'Icon28EditOutline',
  },
};

export const WithSubtitle: Story = {
  ...Playground,
  args: {
    children: 'Качество',
    subtitle: 'Авто',
  },
};

export const WithChecked: Story = {
  ...Playground,
  args: {
    children: 'Друзья по школе',
    selectable: true,
    defaultChecked: true,
  },
};
