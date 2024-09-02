import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import type { PartialStoryFn } from '@storybook/types';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { Avatar } from '../Avatar/Avatar';
import { CustomSelectOption, type CustomSelectOptionProps } from './CustomSelectOption';

const withListBox = (Story: PartialStoryFn<ReactRenderer>) => (
  <div role="listbox" aria-label="Список администраторов">
    <Story />
  </div>
);

const iconsPresets = createFieldWithPresets({
  iconSizes: ['12', '16', '20', '24', '28', '32', '36', '44'],
  sizeIconsCount: 3,
  additionalPresets: {
    Avatar20: <Avatar size={20} src={getAvatarUrl('user_xyz')} />,
    Avatar28: <Avatar size={28} src={getAvatarUrl('user_xyz')} />,
    Avatar40: <Avatar size={40} src={getAvatarUrl('user_xyz')} />,
  },
});

const story: Meta<CustomSelectOptionProps> = {
  title: 'Forms/CustomSelectOption',
  component: CustomSelectOption,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    before: iconsPresets,
    after: iconsPresets,
  },
};

export default story;

type Story = StoryObj<CustomSelectOptionProps>;

export const Playground: Story = {
  args: {
    style: { width: 300 },
    children: 'Игорь Федоров',
    description: 'Россия, Санкт-Петербург',
  },
  decorators: [withListBox],
};
