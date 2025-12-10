'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { callMultiple } from '../../lib/callMultiple';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { DropZoneGrid } from './components/DropZoneGrid';
import styles from './DropZone.module.css';

interface DropZonePropsChildrenProps {
  /**
   * Флаг активного состояния компонента.
   */
  active: boolean;
}

export interface DropZoneProps extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'children'> {
  /**
   * Содержимое компонента. Можно прокинуть функцию для отрисовки содержимого.
   */
  children?: React.ReactNode | ((renderProps: DropZonePropsChildrenProps) => React.ReactNode);
}

/**
 * Компонент позволяет пользователям загружать файлы, перетаскивая файлы в
 * область на странице.
 *
 * @since 6.1.0
 * @see https://vkui.io/components/drop-zone
 */
export const DropZone: React.FC<DropZoneProps> & {
  Grid: typeof DropZoneGrid;
} = ({ onDragOver, onDragLeave, onDrop, children, ...props }: DropZoneProps): React.ReactNode => {
  const [active, setActive] = React.useState(false);

  const onActive: React.DragEventHandler<HTMLDivElement> = (event) => {
    if (event.isPropagationStopped()) {
      return;
    }

    setActive(true);
  };

  const offActive: React.DragEventHandler<HTMLDivElement> = () => {
    setActive(false);
  };

  return (
    <RootComponent
      baseClassName={classNames(styles.host, active && styles.active)}
      onDragOver={callMultiple(onDragOver, onActive)}
      onDragLeave={callMultiple(onDragLeave, offActive)}
      onDrop={callMultiple(onDrop, offActive)}
      {...props}
    >
      {typeof children === 'function' ? children({ active }) : children}
    </RootComponent>
  );
};

DropZone.Grid = DropZoneGrid;

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(DropZone.Grid, 'DropZone.Grid');
}
