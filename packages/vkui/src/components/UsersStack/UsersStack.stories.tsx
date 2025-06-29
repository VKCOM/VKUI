import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { getAvatarUrl, getRandomUser } from '../../testing/mock';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Tooltip } from '../Tooltip/Tooltip';
import {
  UsersStack,
  type UsersStackPhoto,
  type UsersStackProps,
  type UsersStackRenderWrapperProps,
} from './UsersStack';

const story: Meta<UsersStackProps> = {
  title: 'Data Display/UsersStack',
  component: UsersStack,
  parameters: createStoryParameters('UsersStack', CanvasFullLayout),
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<UsersStackProps>;

export const Playground: Story = {
  args: {
    children: 'Алексей, Илья, Михаил и ещё 1 человек',
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
    avatarsPosition: 'inline-start',
  },
};

const AvatarWrapper = (props: UsersStackRenderWrapperProps) => {
  const user = getRandomUser();

  return (
    <Tooltip description={`${user.first_name} ${user.last_name}`}>
      <div
        style={{
          cursor: 'pointer',
        }}
        // eslint-disable-next-line no-console
        onClick={() => console.log('click to avatar with url ' + props['data-src'])}
      >
        {props.children}
      </div>
    </Tooltip>
  );
};

export const WithCustomWrapper: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()].map(
      (photoUrl): UsersStackPhoto => ({
        src: photoUrl,
        renderWrapper: AvatarWrapper,
      }),
    ),
  },
};
