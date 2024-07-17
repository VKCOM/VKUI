import { Meta, StoryObj } from '@storybook/react';
import { Icon56CameraOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { Placeholder } from '../Placeholder/Placeholder';
import { DropZone, DropZoneProps } from './DropZone';

const story: Meta<DropZoneProps> = {
  title: 'Forms/DropZone',
  component: DropZone,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
        <Placeholder.Header>Быстрая отправка</Placeholder.Header>
        <Placeholder.Text>
          Перенесите файл сюда для быстрой отправки. В таком случае изображения будут сжаты.
        </Placeholder.Text>
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
