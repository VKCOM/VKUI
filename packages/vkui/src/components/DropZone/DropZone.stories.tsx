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
  tags: ['Формы и поля ввода'],
};

export default story;

export const Playground: StoryObj<DropZoneProps> = (args: DropZoneProps) => (
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
);

Playground.decorators = [
  (Component) => (
    <Group>
      <Component />
    </Group>
  ),
];
