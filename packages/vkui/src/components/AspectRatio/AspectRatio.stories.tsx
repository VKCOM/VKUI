import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout } from '../../storybook/constants';
import { Div } from '../Div/Div';
import { Group } from '../Group/Group';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const story: Meta<AspectRatioProps> = {
  title: 'Layout/AspectRatio',
  component: AspectRatio,
  parameters: CanvasFullLayout,
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
};

export default story;

type Story = StoryObj<AspectRatioProps>;

export const Playground: Story = {
  args: {
    children: (
      <img
        loading="lazy"
        alt="Лаунж зона в розовом неоне"
        src="https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg"
      />
    ),
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Div>
          <Component {...context.args} />
        </Div>
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};

export const WithModeNone: Story = {
  ...Playground,
  args: {
    ratio: 16 / 9,
    mode: 'none',
    children: (
      <img
        loading="lazy"
        style={{ height: '100%' }}
        alt="Лаунж зона в розовом неоне"
        src="https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg"
      />
    ),
  },
};
