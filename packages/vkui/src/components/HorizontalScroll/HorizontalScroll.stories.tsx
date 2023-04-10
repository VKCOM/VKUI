import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getRandomUsers, UserExtendedInterface } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { PanelSpinner } from '../PanelSpinner/PanelSpinner';
import { HorizontalScroll, HorizontalScrollProps } from './HorizontalScroll';

const story: Meta<HorizontalScrollProps> = {
  title: 'Layout/HorizontalScroll',
  component: HorizontalScroll,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
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
    const timer = React.useRef<ReturnType<typeof setTimeout>>();

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
        <div style={{ display: 'flex' }}>
          {commonFriends.length === 0 && <PanelSpinner />}
          {commonFriends.length > 0 && (
            <React.Fragment>
              {commonFriends.map((item) => {
                return (
                  <HorizontalCell key={item.id} header={item.first_name}>
                    <Avatar size={56} src={item.photo_200} />
                  </HorizontalCell>
                );
              })}
            </React.Fragment>
          )}
        </div>
      </HorizontalScroll>
    );
  },
  decorators: [
    (Component, context) => (
      <Group header={<Header mode="secondary">Недавние</Header>}>
        <Component args={context.args} />
      </Group>
    ),
  ],
};
