import type { Meta, StoryFn } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { CellButton } from '../CellButton/CellButton';
import { CellButtonGroup, type CellButtonGroupProps } from './CellButtonGroup';

const story: Meta<CellButtonGroupProps> = {
  title: 'Layout/CellButtonGroup',
  component: CellButtonGroup,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  tags: ['Раскладка'],
};

export default story;

export const Playground: StoryFn<CellButtonGroupProps> = (args: CellButtonGroupProps) => (
  <CellButtonGroup {...args}>
    <CellButton onClick={noop} appearance="negative" centered>
      Пожаловаться
    </CellButton>
    <CellButtonGroup.Separator />
    <CellButton onClick={noop} centered>
      Отмена
    </CellButton>
  </CellButtonGroup>
);
