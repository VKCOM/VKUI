import type { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { CellButton } from '../CellButton/CellButton';
import { CellButtonGroup, type CellButtonGroupProps } from './CellButtonGroup';

const story: Meta<CellButtonGroupProps> = {
  title: 'Layout/CellButtonGroup',
  component: CellButtonGroup,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<CellButtonGroupProps>;

export const Playground: Story = {
  render: (args) => (
    <CellButtonGroup {...args}>
      <CellButton onClick={noop} appearance="negative" centered>
        Пожаловаться
      </CellButton>
      <CellButtonGroup.Separator />
      <CellButton onClick={noop} centered>
        Отмена
      </CellButton>
    </CellButtonGroup>
  ),
};
