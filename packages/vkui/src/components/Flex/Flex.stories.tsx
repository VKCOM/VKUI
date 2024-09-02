import type { Meta, StoryObj } from '@storybook/react';
import { Icon24Play } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Banner } from '../Banner/Banner';
import { Button } from '../Button/Button';
import { Image } from '../Image/Image';
import { Flex, type FlexProps } from './Flex';

const story: Meta<FlexProps> = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<FlexProps>;

export const Playground: Story = {
  args: {
    gap: 'm',
    style: { height: '100%' },
  },
  render: (args) => (
    <Flex {...args}>
      {Array.from({ length: 2 }, (_, index) => {
        return (
          <Banner
            key={index}
            before={
              <Image
                size={96}
                src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
              />
            }
            header="Для Вас"
            subheader="Обновлено сегодня"
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
