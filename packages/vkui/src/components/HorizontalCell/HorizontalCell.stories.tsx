import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HorizontalCell, HorizontalCellProps } from './HorizontalCell';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { Image } from '../Image/Image';
import { usePlatform } from '../../hooks/usePlatform';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/HorizontalCell',
  component: HorizontalCell,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('HorizontalCell'), ...DisableCartesianParam },
} as Meta<HorizontalCellProps>;

interface HorizontalCellItemProps {
  id: number;
  title: string;
  icon_139: string;
}

const Template: Story<HorizontalCellProps & { values: HorizontalCellItemProps[] }> = ({
  values,
  ...args
}) => {
  const platform = usePlatform();

  return (
    <>
      {values.map((value) => {
        return (
          <HorizontalCell key={value.id} header={value.title} {...args}>
            <Image size={platform === 'ios' ? 64 : 56} borderRadius="l" src={value.icon_139} />
          </HorizontalCell>
        );
      })}
    </>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  values: [
    {
      id: 1,
      title: 'Промокот',
      icon_139: 'https://sun9-54.userapi.com/c850536/v850536134/15096d/6806J7q6YwM.jpg',
    },
    {
      id: 2,
      title: 'Разделите счёт',
      icon_139: 'https://sun9-20.userapi.com/c857416/v857416681/fc6d0/06XQvs4SyiE.jpg',
    },
    {
      id: 3,
      title: 'Рассылки',
      icon_139: 'https://sun9-50.userapi.com/c850536/v850536397/129313/qdVJ7A7xd70.jpg',
    },
    {
      id: 4,
      title: 'Тексты песен',
      icon_139:
        'https://sun9-41.userapi.com/Zf2HluZJZDYjTbxhnSfeYnHtttBYsYbdjJ3QJQ/aDcJQrVVnbQ.jpg',
    },
  ],
};

Playground.decorators = [
  (Component, context) => (
    <Group>
      <div style={{ display: 'flex' }}>
        <Component {...context.args} />
      </div>
    </Group>
  ),
  withSinglePanel,
  withVKUILayout,
];
