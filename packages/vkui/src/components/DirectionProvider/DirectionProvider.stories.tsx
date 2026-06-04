import { type Meta, type StoryFn } from '@storybook/react';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Div } from '../Div/Div';
import { Flex } from '../Flex/Flex';
import { DirectionProvider, type DirectionProviderProps } from './DirectionProvider';

const story: Meta<DirectionProviderProps> = {
  title: 'Configuration/DirectionProvider',
  component: DirectionProvider,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  tags: ['Конфигурация'],
};

export default story;

const Fixture = () => {
  const dir = useConfigDirection();

  return (
    <Flex dir={dir}>
      <Div>1</Div>
      <Div>2</Div>
      <Div>3</Div>
    </Flex>
  );
};

export const Playground: StoryFn<DirectionProviderProps> = (args: DirectionProviderProps) => {
  return (
    <DirectionProvider {...args}>
      <Fixture />
    </DirectionProvider>
  );
};
