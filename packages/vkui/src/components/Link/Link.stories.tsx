import type { Meta, StoryObj } from '@storybook/react';
import { Icon16ChainOutline, Icon24ExternalLinkOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Link, type LinkProps } from './Link';

const story: Meta<LinkProps> = {
  title: 'Typography/Link',
  component: Link,
  parameters: createStoryParameters('Link', CanvasFullLayout, DisableCartesianParam),
};

export default story;

type Story = StoryObj<LinkProps>;

export const Playground: Story = {
  args: {
    href: 'https://vkui.io/overview/about',
    children: 'О VKUI',
    after: <Icon24ExternalLinkOutline width={16} height={16} />,
  },
};

export const WithIcon: Story = {
  render: function Render() {
    return (
      <>
        <Link
          href="https://google.com"
          target="_blank"
          after={<Icon24ExternalLinkOutline width={16} height={16} />}
        >
          https://google.com
        </Link>
        <br />
        <Link href="/" before={<Icon16ChainOutline />}>
          Главная
        </Link>
        <br />
        <Link
          href="https://vk.com/video807566_169118280"
          target="_blank"
          before={<Icon16ChainOutline />}
          after={<Icon24ExternalLinkOutline width={16} height={16} />}
        >
          Главная в новом окне
        </Link>
      </>
    );
  },
};
