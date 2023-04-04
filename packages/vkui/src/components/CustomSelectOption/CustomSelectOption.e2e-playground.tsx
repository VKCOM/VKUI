import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Avatar } from '../Avatar/Avatar';
import { CustomSelectOption, type CustomSelectOptionProps } from './CustomSelectOption';

export const CustomSelectOptionPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<CustomSelectOptionProps>
      {...props}
      propSets={[
        {
          selected: [true],
          before: [<Avatar size={20} key="avatar" />],
          children: [
            'Мария Саломея Склодовская-Кюри Мария Саломея Склодовская-Кюри',
            'Мария Саломея',
          ],
          after: [undefined, 'Hello'],
        },
        {
          children: ['Мария Саломея'],
          hovered: [true],
        },
        {
          children: ['Мария Саломея'],
          description: ['город Санкт-Петербург, Ленинградская область, Россия'],
        },
        {
          children: ['Мария Саломея'],
          disabled: [true],
          hovered: [true, false],
        },
        {
          children: ['Иерархия'],
          hierarchy: [undefined, 1, 2],
        },
      ]}
    >
      {(props) => <CustomSelectOption {...props} />}
    </ComponentPlayground>
  );
};
