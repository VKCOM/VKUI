import * as React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getRandomUsers, type UserExtendedInterface } from '../../testing/mock';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { Spinner } from '../Spinner/Spinner';
import { HorizontalScroll, type HorizontalScrollProps } from './HorizontalScroll';

const story: Meta<HorizontalScrollProps> = {
  title: 'Data Display/HorizontalScroll',
  component: HorizontalScroll,
  parameters: createStoryParameters('HorizontalScroll', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    showArrows: {
      options: ['None', 'Always', 'False', 'True'],
      mapping: {
        None: undefined,
        Always: 'always',
        False: false,
        True: true,
      },
      control: { type: 'inline-radio' },
    },
  },
  decorators: [withCartesian, withSinglePanel, withVKUILayout],
};

export default story;

type Story = StoryObj<HorizontalScrollProps>;

export const Playground: Story = {
  render: function Render(args) {
    const [commonFriends, setCommonFriends] = React.useState<UserExtendedInterface[]>([]);
    const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    React.useEffect(() => {
      // Эмуляция загрузки
      timer.current = setTimeout(() => {
        setCommonFriends(getRandomUsers(30));
      }, 2000);

      return () => {
        clearTimeout(timer.current);
      };
    }, []);

    return (
      <HorizontalScroll {...args}>
        {commonFriends.length === 0 && <Spinner size="m" style={{ height: 88 }} />}
        {commonFriends.length > 0 && (
          <React.Fragment>
            {commonFriends.map((item) => {
              return (
                <HorizontalCell key={item.id} title={item.first_name}>
                  <Avatar size={56} src={item.photo_200} />
                </HorizontalCell>
              );
            })}
          </React.Fragment>
        )}
      </HorizontalScroll>
    );
  },
  decorators: [
    (Component, context) => (
      <Group header={<Header size="s">Недавние</Header>}>
        <Component args={context.args} />
      </Group>
    ),
  ],
};
