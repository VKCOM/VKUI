import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import type { PartialStoryFn } from 'storybook/internal/types';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Div } from '../Div/Div';
import { CustomScrollView, type CustomScrollViewProps } from './CustomScrollView';

const Wrapper = (Story: PartialStoryFn<ReactRenderer>) => (
  <div
    style={{
      borderRadius: 10,
      border: '1px solid #000',
      height: '100%',
      width: '100%',
      maxWidth: '600px',
      maxHeight: '300px',
      boxSizing: 'content-box',
    }}
  >
    <Story />
  </div>
);

const story: Meta<CustomScrollViewProps> = {
  title: 'Utils/CustomScrollView',
  component: CustomScrollView,
  parameters: createStoryParameters('CustomScrollView', CanvasFullLayout, DisableCartesianParam),
  tags: ['Утилиты'],
};

export default story;

type Story = StoryObj<CustomScrollViewProps>;

export const Playground: Story = {
  args: {
    enableHorizontalScroll: true,
    children: (
      <Div
        style={{
          width: 1440,
          boxSizing: 'content-box',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin lectus, a
        commodo sapien. Vivamus a urna leo. Integer iaculis dignissim urna, sit amet vestibulum diam
        bibendum a. Donec eu arcu ut augue porttitor faucibus. Vestibulum nec pretium tortor, sit
        amet congue nunc. Aenean ullamcorper ex sem, sed interdum quam consequat et. Vestibulum a ex
        non diam fringilla feugiat. Nunc eu tellus sed leo elementum cursus. Mauris blandit porta
        egestas. Curabitur eget justo elementum, malesuada lacus ut, congue mauris. Integer orci
        nisi, convallis vitae dapibus sit amet, molestie a risus. Aenean ultricies lacus eros, sit
        amet condimentum urna malesuada et. Sed quis dolor tempus orci fringilla volutpat in sed
        velit. Aenean aliquet bibendum pretium.
        <br />
        <br />
        Cras pulvinar lobortis purus. Donec placerat suscipit leo vitae sodales. Phasellus convallis
        lorem vitae arcu finibus pellentesque. In imperdiet vel leo a euismod. Nam sed odio a neque
        venenatis suscipit a placerat magna. Mauris magna nisl, consequat nec augue vitae, ultricies
        scelerisque ante. Phasellus pharetra risus eget imperdiet sodales. Integer dignissim auctor
        semper. Nulla odio odio, euismod ut interdum in, bibendum sed massa. Proin rutrum molestie
        massa in ultrices. Donec eu euismod turpis, eget lobortis lorem. Nulla facilisi. Nam lacinia
        posuere turpis, sed laoreet turpis auctor nec.
        <br />
        <br />
        Curabitur eu fermentum mauris. Phasellus malesuada consectetur mollis. Pellentesque pulvinar
        mauris turpis. Integer neque dolor, semper quis neque et, gravida commodo eros. Duis
        efficitur ex a turpis blandit tincidunt. Mauris sem mi, imperdiet quis ligula sit amet,
        fermentum vulputate felis. Phasellus eu ullamcorper dolor, porttitor pulvinar diam. Aliquam
        euismod, mauris nec varius lacinia, ligula libero vulputate leo, ut tristique massa nisi
        vitae tortor. Phasellus purus elit, gravida sit amet neque id, aliquam rutrum dui. Maecenas
        luctus sem vitae molestie porttitor. Cras viverra mauris risus, at sollicitudin ipsum
        interdum eu. Sed sit amet tempor enim.
        <br />
        <br />
        In hac habitasse platea dictumst. Etiam luctus erat metus, quis efficitur quam vulputate
        quis. Duis ultricies non mauris condimentum molestie. Maecenas sollicitudin ex sem, quis
        ultrices libero blandit eu. Vivamus in turpis pulvinar, malesuada enim at, hendrerit magna.
        Proin eu nulla eget arcu pretium pharetra. Sed ullamcorper pulvinar est eu dapibus. Cras at
        varius justo. In ex odio, condimentum id pellentesque a, sodales ut diam.
        <br />
        <br />
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam
        aliquet tempor laoreet. Maecenas eu pulvinar diam. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Maecenas et elit eros. Quisque
        ullamcorper sodales nisi, eleifend aliquet metus venenatis in. Aliquam ornare a lacus in
        tincidunt. Cras vel tristique metus. Sed vitae nisl at nisl imperdiet sollicitudin. Sed sit
        amet enim in lectus imperdiet interdum condimentum et diam. Proin venenatis sit amet diam ac
        vulputate. Donec mauris orci, semper volutpat nunc ut, efficitur condimentum dolor. Vivamus
        in quam eget quam lacinia pharetra. Phasellus ipsum magna, aliquet id elit eget, cursus
        tincidunt ex. In rhoncus turpis turpis, et viverra ex malesuada vel. Donec nisi tellus,
        mollis et posuere vel, dictum eget neque.
      </Div>
    ),
  },
  decorators: [Wrapper],
};
