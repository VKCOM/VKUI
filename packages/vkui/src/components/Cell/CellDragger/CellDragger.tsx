import * as React from 'react';
import { Icon24Reorder, Icon24ReorderIos } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../../hooks/usePlatform';
import { Platform } from '../../../lib/platform';
import { Touch } from '../../Touch/Touch';
import { DraggableProps } from '../useDraggable';
import styles from './CellDragger.module.css';

type CellDraggerProps = DraggableProps &
  Omit<React.HTMLAttributes<HTMLElement>, keyof DraggableProps>;

export const CellDragger = ({
  onDragStart,
  onDragMove,
  onDragEnd,
  onClick,
  className,
  ...restProps
}: CellDraggerProps) => {
  const platform = usePlatform();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Touch
      className={classNames(styles['CellDragger'], className)}
      onStart={onDragStart}
      onMoveY={onDragMove}
      onEnd={onDragEnd}
      onClick={handleClick}
      {...restProps}
    >
      {platform === Platform.IOS ? <Icon24ReorderIos /> : <Icon24Reorder />}
    </Touch>
  );
};
