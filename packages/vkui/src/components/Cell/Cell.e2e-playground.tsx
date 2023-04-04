import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Avatar } from '../Avatar/Avatar';
import { Cell, type CellProps } from './Cell';

export const CellPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<CellProps>
      {...props}
      propSets={[
        {
          mode: ['selectable'],
          before: [<Avatar key="avatar" />],
          children: ['Мария Саломея Склодовская-Кюри', 'Михаил Лихачев'],
          $adaptivity: 'y',
          checked: [true, false],
          disabled: [true, false],
          multiline: [true, false],
        },
        {
          mode: ['removable'],
          $adaptivity: 'y',
          children: ['Мария Саломея Склодовская-Кюри', 'Евгения Полозова'],
          multiline: [true, false],
        },
        {
          draggable: [true],
          $adaptivity: 'y',
          children: ['Мария Саломея Склодовская-Кюри', 'Артур Стамбульцян'],
          multiline: [true, false],
        },
      ]}
    >
      {(props) => <Cell {...props} />}
    </ComponentPlayground>
  );
};
