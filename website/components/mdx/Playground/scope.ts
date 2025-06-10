import React from 'react';
import * as Icons from '@vkontakte/icons';
import {
  AdaptivityProvider,
  Badge,
  Button,
  ButtonGroup,
  Cell,
  CellButton,
  Counter,
  Flex,
  Tabs,
  TabsItem,
  VisuallyHidden,
} from '@vkontakte/vkui';

export const scope: Record<string, unknown> = {
  React,
  ...React,
  ...Icons,
  Button,
  Counter,
  VisuallyHidden,
  AdaptivityProvider,
  ButtonGroup,
  Cell,
  Badge,
  CellButton,
  Tabs,
  Flex,
  TabsItem,
};
