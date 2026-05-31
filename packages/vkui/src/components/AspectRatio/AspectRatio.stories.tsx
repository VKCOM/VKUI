import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Box } from '../Box/Box';
import { Group } from '../Group/Group';
import { AspectRatio, type AspectRatioProps } from './AspectRatio';

const story: Meta<AspectRatioProps> = {
  title: 'Utils/AspectRatio',
  component: AspectRatio,
  parameters: createStoryParameters('AspectRatio', CanvasFullLayout),
  argTypes: {
    ratio: {
      control: { type: 'select' },
      options: ['16/9', '1/1', '3/4', 'None'],
      mapping: {
        'None': 16 / 9,
        '1/1': 1 / 1,
        '3/4': 3 / 4,
        '16/9': 16 / 9,
      },
    },
  },
  tags: ['Утилиты'],
};

export default story;

type Story = StoryObj<Omit<AspectRatioProps, 'ratio'> & { ratio: '16/9' | '1/1' | '3/4' | 'None' }>;

export const Playground: Story = (props: AspectRatioProps) => (
  <Group>
    <Box padding="system">
      <AspectRatio {...props}>
        <img
          loading="lazy"
          alt="Лаунж зона в розовом неоне"
          src="https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg"
        />
      </AspectRatio>
    </Box>
  </Group>
);
Playground.args = {
  ratio: '16/9',
};
Playground.decorators = [withSinglePanel, withVKUILayout];

export const WithModeNone: Story = (props: AspectRatioProps) => (
  <Group>
    <Box padding="system">
      <AspectRatio {...props}>
        <img
          loading="lazy"
          style={{
            height: '100%',
          }}
          alt="Лаунж зона в розовом неоне"
          src="https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg"
        />
      </AspectRatio>
    </Box>
  </Group>
);
WithModeNone.args = {
  ratio: '16/9',
  mode: 'none',
};
WithModeNone.decorators = Playground.decorators;
