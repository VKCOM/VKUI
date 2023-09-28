import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon28Notifications, Icon28SlidersOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Div } from '../Div/Div';
import { Group } from '../Group/Group';
import { Link } from '../Link/Link';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Spacing } from '../Spacing/Spacing';
import { Separator, SeparatorProps } from './Separator';

const story: Meta<SeparatorProps> = {
  title: 'Blocks/Separator',
  component: Separator,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<SeparatorProps>;

export const Playground: Story = {
  render: (props) => (
    <div style={{ display: props.mode === 'vertical' ? 'flex' : undefined, height: 50 }}>
      Before Separator
      <Separator {...props} />
      After Separator
    </div>
  ),
};

export const Default: Story = {
  render: () => (
    <Group>
      <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
      <Spacing>
        <Separator />
      </Spacing>
      <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
    </Group>
  ),
};

export const VerticalMode: Story = {
  render: () => (
    <Group>
      <Div style={{ display: 'flex' }}>
        <Link href="#">Before</Link>
        <Spacing mode="vertical">
          <Separator wide mode="vertical" />
        </Spacing>
        <Link href="#">After</Link>
      </Div>
    </Group>
  ),
};
