import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Flex } from '../Flex/Flex';
import { Box, type BoxProps } from './Box';

const story: Meta<BoxProps> = {
  title: 'Layout/Box',
  component: Box,
  parameters: createStoryParameters('Box', CanvasFullLayout),
  tags: ['Раскладка'],
};

export default story;

type Story = StoryFn<BoxProps>;

export const Playground: Story = (args: BoxProps) => (
  <div
    style={{
      background: 'pink',
      width: '80%',
      height: 500,
      border: '1px dotted red',
    }}
  >
    <Box
      padding="system"
      {...args}
      style={{
        background: 'grey',
      }}
    >
      {Array.from(
        {
          length: 5,
        },
        (_, index) => {
          return <Avatar key={index} />;
        },
      )}
    </Box>
  </div>
);

export const MultipleBoxes: Story = () => (
  <div
    style={{
      width: '80%',
      height: 500,
      border: '1px dotted red',
    }}
  >
    <Flex>
      <Box flexGrow={1}>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Flex>
  </div>
);

export const AbsoluteBox: Story = () => (
  <div
    style={{
      width: '80%',
      height: 500,
      border: '1px dotted red',
    }}
  >
    <Box position="relative" blockSize={400}>
      <Box position="absolute" insetInlineEnd={0} inlineSize={50} padding="4xl">
        TEXT TEXT TEXT
      </Box>
    </Box>
  </div>
);
