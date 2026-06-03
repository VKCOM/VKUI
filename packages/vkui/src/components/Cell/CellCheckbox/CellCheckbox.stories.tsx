import type { Meta, StoryFn } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { getAvatarUrl } from '../../../testing/mock';
import { Avatar } from '../../Avatar/Avatar';
import { Group } from '../../Group/Group';
import { Cell } from '../Cell';
import { CellCheckbox, type CellCheckboxProps } from './CellCheckbox';

const story: Meta<CellCheckboxProps> = {
  title: 'Buttons/Cell/Checkbox',
  component: CellCheckbox,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withSinglePanel, withVKUILayout],
};

export default story;

export const Playground: StoryFn<CellCheckboxProps> = (props: CellCheckboxProps) => (
  <Group>
    <Cell
      Component="label"
      before={<Avatar src={getAvatarUrl('user_xyz')} />}
      after={<CellCheckbox {...props} />}
    >
      Игорь Федоров
    </Cell>
  </Group>
);

Playground.args = {
  defaultChecked: true,
};
