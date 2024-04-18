import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { callMultiple } from '../../lib/callMultiple';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { DropZoneGrid } from './components/DropZoneGrid';
import styles from './DropZone.module.css';

interface DropZonePropsChildrenProps {
  active: boolean;
}

export interface DropZoneProps extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'children'> {
  children?: React.ReactNode | ((renderProps: DropZonePropsChildrenProps) => React.ReactNode);
}

/**
 * Компонент позволяет пользователям загружать файлы, перетаскивая файлы в
 * область на странице.
 *
 * @see https://vkcom.github.io/VKUI/#/DropZone
 */
export const DropZone = ({
  onDragOver,
  onDragLeave,
  onDrop,
  children,
  ...props
}: DropZoneProps) => {
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
      baseClassName={classNames(styles['DropZone'], active && styles['DropZone--active'])}
      onDragOver={callMultiple(onDragOver, onActive)}
      onDragLeave={callMultiple(onDragLeave, offActive)}
      onDrop={callMultiple(onDrop, offActive)}
      {...props}
    >
      {typeof children === 'function' ? children({ active }) : children}
    </RootComponent>
  );
};

DropZone.displayName = 'DropZone';

DropZone.Grid = DropZoneGrid;
DropZone.Grid.displayName = 'DropZone.Grid';
