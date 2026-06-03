import * as React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
import { useConfigDirection as useDirection } from '../../hooks/useConfigDirection';
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

export const Playground: StoryFn<DirectionProviderProps> = (args: DirectionProviderProps) => {
  const Fixture = React.useCallback(function Render() {
    const dir = useDirection();
    return (
      <Flex dir={dir}>
        <Div>1</Div>
        <Div>2</Div>
        <Div>3</Div>
      </Flex>
    );
  }, []);
  return (
    <DirectionProvider {...args}>
      {/* eslint-disable-next-line react-hooks/static-components */}
      <Fixture />
    </DirectionProvider>
  );
};
