import * as React from 'react';
import {
  Icon16MessageHeart,
  Icon16MoreVertical,
  Icon24MessageOutline,
  Icon28MessageOutline,
} from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { IconButton, type IconButtonProps } from './IconButton';

export const IconButtonPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: [
            <Icon28MessageOutline key="icon-w28" />,
            <Icon24MessageOutline key="icon-w24" />,
            <Icon16MessageHeart key="icon-w16" />,
            <Icon16MoreVertical key="icon-w08" />,
          ],
          $adaptivity: 'y',
        },
        {
          children: [<Icon28MessageOutline key="icon-w28" />],
          href: ['https://vk.ru'],
        },
      ]}
    >
      {(props: IconButtonProps) => (
        <IconButton
          label="Тест-кнопка"
          style={{ backgroundColor: 'var(--vkui--color_transparent--active)' }}
          {...props}
        />
      )}
    </ComponentPlayground>
  );
};
