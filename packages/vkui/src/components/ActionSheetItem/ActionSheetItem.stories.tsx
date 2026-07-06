import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { ActionSheetItem, type ActionSheetItemProps } from './ActionSheetItem';

const commonStyles = {
  border: '1px dashed red',
};

const story: Meta<ActionSheetItemProps> = {
  title: 'Modals/ActionSheet/ActionSheetItem',
  component: ActionSheetItem,
  parameters: createStoryParameters('ActionSheetItem', CanvasFullLayout, DisableCartesianParam, {
    liveCodeEditor: {
      scope: { commonStyles },
    },
  }),
  argTypes: {
    before: createFieldWithPresets({
      iconSizes: ['16', '20', '24', '28'],
      requiredIcons: ['Icon28EditOutline'],
    }),
    iconChecked: createFieldWithPresets({
      requiredIcons: ['Icon20CheckCircleOn', 'Icon24CheckCircleOn'],
    }),
    after: createFieldWithPresets({
      iconSizes: ['16', '20', '24', '28'],
      requiredIcons: ['Icon28EditOutline'],
    }),
    meta: StringArg,
    subtitle: StringArg,
  },
};

export default story;

type Story = StoryFn<ActionSheetItemProps>;

export const Playground: Story = (args: ActionSheetItemProps) => {
  return <ActionSheetItem style={commonStyles} {...args} />;
};

Playground.args = {
  children: 'Сохранить в закладках',
};

export const WithIcon: Story = (args: ActionSheetItemProps) => {
  return <ActionSheetItem style={commonStyles} {...args} />;
};

WithIcon.args = {
  children: 'Редактировать профиль',
  before: 'Icon28EditOutline',
};

export const WithSubtitle: Story = (args: ActionSheetItemProps) => {
  return <ActionSheetItem style={commonStyles} {...args} />;
};

WithSubtitle.args = {
  children: 'Качество',
  subtitle: 'Авто',
};

export const WithChecked: Story = (args: ActionSheetItemProps) => {
  return <ActionSheetItem style={commonStyles} {...args} />;
};

WithChecked.args = {
  children: 'Друзья по школе',
  selectable: true,
  defaultChecked: true,
};
