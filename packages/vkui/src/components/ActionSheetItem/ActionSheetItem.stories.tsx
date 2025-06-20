import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { ActionSheetItem, type ActionSheetItemProps } from './ActionSheetItem';

const story: Meta<ActionSheetItemProps> = {
  title: 'Modals/ActionSheet/ActionSheetItem',
  component: ActionSheetItem,
  parameters: createStoryParameters('ActionSheetItem', CanvasFullLayout, DisableCartesianParam),
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

type Story = StoryObj<ActionSheetItemProps>;

export const Playground: Story = {
  render: function Render({ ...args }) {
    return <ActionSheetItem style={{ border: '1px dashed red' }} {...args} />;
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
