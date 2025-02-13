import type { Meta, StoryObj } from '@storybook/react';
import { Icon56CameraOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Group } from '../Group/Group';
import { Placeholder } from '../Placeholder/Placeholder';
import { DropZone, type DropZoneProps } from './DropZone';

const story: Meta<DropZoneProps> = {
  title: 'Forms/DropZone',
  component: DropZone,
  parameters: createStoryParameters('DropZone', CanvasFullLayout, DisableCartesianParam),
};

export default story;

type Story = StoryObj<DropZoneProps>;

export const Playground: Story = {
  render: (args) => (
    <DropZone {...args}>
      <Placeholder.Container>
        <Placeholder.Icon>
          <Icon56CameraOutline />
        </Placeholder.Icon>
        <Placeholder.Title>Быстрая отправка</Placeholder.Title>
        <Placeholder.Description>
          Перенесите файл сюда для быстрой отправки. В таком случае изображения будут сжаты.
        </Placeholder.Description>
      </Placeholder.Container>
    </DropZone>
  ),
  decorators: [
    (Component) => (
      <Group>
        <Component />
      </Group>
    ),
  ],
};
