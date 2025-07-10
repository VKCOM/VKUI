import type { Meta, StoryObj } from '@storybook/react';
import { Icon24Play } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Banner } from '../Banner/Banner';
import { Button } from '../Button/Button';
import { Image } from '../Image/Image';
import { Flex, type FlexProps } from './Flex';

type StoryProps = FlexProps & {
  /**
   * Отступ между строками.
   */
  rowGap?: number;
  /**
   * Отступ между столбцами.
   */
  columnGap?: number;
  /**
   * Количество элементов.
   */
  itemsCount?: number;
};

const story: Meta<StoryProps> = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: createStoryParameters('Flex', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    rowGap: {
      control: 'number',
    },
    columnGap: {
      control: 'number',
    },
    itemsCount: {
      control: 'number',
    },
  },
  tags: ['Раскладка'],
};

export default story;

type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  args: {
    gap: 'm',
    itemsCount: 2,
  },
  render: ({ itemsCount = 2, rowGap, columnGap, gap, ...args }) => (
    <Flex
      gap={rowGap !== undefined || columnGap !== undefined ? [rowGap || 0, columnGap || 0] : gap}
      {...args}
    >
      {Array.from({ length: itemsCount }, (_, index) => {
        return (
          <Banner
            key={index}
            before={
              <Image
                size={96}
                src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
              />
            }
            title="Для Вас"
            subtitle="Обновлено сегодня"
            actions={
              <Button before={<Icon24Play />} onClick={noop}>
                Слушать
              </Button>
            }
          />
        );
      })}
    </Flex>
  ),
  decorators: [
    (Component) => (
      <div style={{ width: '80%', height: 500, border: '1px dotted red' }}>
        <Component />
      </div>
    ),
  ],
};
