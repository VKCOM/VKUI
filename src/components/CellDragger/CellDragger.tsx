import { HTMLAttributes } from 'react';
import { Icon24Reorder, Icon24ReorderIos } from '@vkontakte/icons';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { classNames } from '../../lib/classNames';
import { IOS } from '../../lib/platform';
import Touch from '../Touch/Touch';
import { DraggableProps } from '../Cell/useDraggable';
import './CellDragger.css';

type CellDraggerProps = DraggableProps & HTMLAttributes<HTMLElement>;

export const CellDragger = ({
  onDragStart,
  onDragMove,
  onDragEnd,
  onDragClick,
  ...restProps
}: CellDraggerProps) => {
  const platform = usePlatform();

  return (
    <Touch
      vkuiClass={classNames(getClassName('CellDragger', platform))}
      onStart={onDragStart}
      onMoveY={onDragMove}
      onEnd={onDragEnd}
      onClick={onDragClick}
      {...restProps}
    >
      {platform === IOS
        ? <Icon24ReorderIos />
        : <Icon24Reorder />
      }
    </Touch>
  );
};
