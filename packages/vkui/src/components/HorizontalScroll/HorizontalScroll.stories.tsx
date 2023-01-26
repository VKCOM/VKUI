import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HorizontalScroll, HorizontalScrollProps } from './HorizontalScroll';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { PanelSpinner } from '../PanelSpinner/PanelSpinner';
import { Avatar } from '../Avatar/Avatar';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { getRandomUsers, UserExtendedInterface } from '../../testing/mock';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { getFigmaPage } from '../../storybook/helpers';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';

export default {
  title: 'Layout/HorizontalScroll',
  component: HorizontalScroll,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('HorizontalCell'),
    ...DisableCartesianParam,
  },
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
} as Meta<HorizontalScrollProps>;

const Template: Story<HorizontalScrollProps> = (args) => {
  const [commonFriends, setCommonFriends] = React.useState<UserExtendedInterface[]>([]);
  const timer = React.useRef<ReturnType<typeof setTimeout>>();

  React.useEffect(() => {
    let abort = false;
    // Эмуляция загрузки
    timer.current = setTimeout(() => {
      if (!abort) {
        setCommonFriends(getRandomUsers(30));
      }
    }, 2000);

    return () => {
      abort = true;
    };
  }, []);

  React.useEffect(() => () => clearTimeout(timer.current));

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
};

export const Playground = Template.bind({});
Playground.args = {};
Playground.decorators = [
  (Component, context) => (
    <Group header={<Header mode="secondary">Недавние</Header>}>
      <Component args={context.args} />
    </Group>
  ),
];
