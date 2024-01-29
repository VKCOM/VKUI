import { Tooltip } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Tooltip isShown cornerOffset={0}>target</Tooltip>

      <Tooltip cornerAbsoluteOffset={15}>target</Tooltip>

      <Tooltip cornerOffset={0} cornerAbsoluteOffset={10}>target</Tooltip>

      <Tooltip alignX="left">target</Tooltip>

      <Tooltip alignY="top">target</Tooltip>

      <Tooltip alignX="left" placement="top">target</Tooltip>

      <Tooltip alignY="top" placement="left-start">target</Tooltip>

      <Tooltip alignX="right" alignY="top">target</Tooltip>

      <Tooltip alignX="right" alignY="top" placement="auto">target</Tooltip>

      <Tooltip arrow></Tooltip>

      <Tooltip arrow={false}>target</Tooltip>
    </React.Fragment>
  );
};
