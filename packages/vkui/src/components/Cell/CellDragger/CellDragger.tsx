import * as React from 'react';
import { Icon24Reorder, Icon24ReorderIos } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { getPlatformClassName } from '../../../helpers/getPlatformClassName';
import { usePlatform } from '../../../hooks/usePlatform';
import { Platform } from '../../../lib/platform';
import { Touch } from '../../Touch/Touch';
import { DraggableProps } from '../useDraggable';
import styles from './CellDragger.module.css';

type CellDraggerProps = DraggableProps & React.HTMLAttributes<HTMLElement>;

export const CellDragger = ({
  onDragStart,
  onDragMove,
  onDragEnd,
  className,
  ...restProps
}: CellDraggerProps) => {
  const platform = usePlatform();

  const onClick = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <Touch
      className={classNames(
        styles['CellDragger'],
        getPlatformClassName(styles['CellDragger'], platform),
        className,
      )}
      onStart={onDragStart}
      onMoveY={onDragMove}
      onEnd={onDragEnd}
      onClick={onClick}
      {...restProps}
    >
      {platform === Platform.IOS ? <Icon24ReorderIos /> : <Icon24Reorder />}
    </Touch>
  );
};
