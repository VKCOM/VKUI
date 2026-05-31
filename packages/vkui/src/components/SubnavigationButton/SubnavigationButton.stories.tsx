import type { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { SubnavigationButton, type SubnavigationButtonProps } from './SubnavigationButton';

const story: Meta<SubnavigationButtonProps> = {
  title: 'Navigation/SubnavigationBar/SubnavigationButton',
  component: SubnavigationButton,
  parameters: createStoryParameters('SubnavigationButton', CanvasFullLayout, DisableCartesianParam),
  args: {
    onClick: noop,
  },
  argTypes: {
    before: createFieldWithPresets({
      iconSizes: ['24'],
      requiredIcons: ['Icon24FavoriteOutline'],
      sizeIconsCount: 10,
    }),
    after: createFieldWithPresets({
      additionalPresets: {
        Counter: <Counter size="s">3</Counter>,
        Badge: <Badge />,
      },
    }),
  },
};

export default story;

type Story = StoryObj<SubnavigationButtonProps>;
export const Playground: Story = (props: SubnavigationButtonProps) => (
  <SubnavigationButton {...props} />
);
Playground.args = {
  children: 'Размер',
};

export const WithIcon: Story = (props: SubnavigationButtonProps) => (
  <SubnavigationButton {...props} />
);
WithIcon.args = {
  before: 'Icon24FavoriteOutline',
  children: 'Избранное',
  chevron: true,
};

export const WithCounter: Story = (props: SubnavigationButtonProps) => (
  <SubnavigationButton {...props} />
);
WithCounter.args = {
  children: 'Фильтры',
  after: 'Counter',
};
