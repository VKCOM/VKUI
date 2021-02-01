import React, { MouseEvent, FC, useState, useRef, useEffect } from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Touch, { TouchEvent } from '../Touch/Touch';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import { Icon24Reorder, Icon24ReorderIos, Icon16Done } from '@vkontakte/icons';
import SimpleCell, { SimpleCellProps } from '../SimpleCell/SimpleCell';
import { HasPlatform } from '../../types';
import { Removable, RemovePlaceholderProps } from '../Removable/Removable';
import usePlatform from '../../hooks/usePlatform';

export interface CellProps extends SimpleCellProps, HasPlatform, RemovePlaceholderProps {
  /**
   * В режиме перетаскивания ячейка перестает быть кликабельной, то есть при клике переданный onClick вызываться не будет
   */
  draggable?: boolean;
  removable?: boolean;
  /**
   * Имя для input в режиме selectable
   */
  name?: string;
  selectable?: boolean;
  /**
   * В режиме selectable реагирует на входящие значения пропса cheсked, как зависящий напрямую от входящего значения
   */
  checked?: boolean;
  /**
   * В режиме selectable реагирует на входящие значения пропса defaultChecked как неконтролируемый компонент
   */
  defaultChecked?: boolean;
  /**
   * Коллбэк срабатывает при клике на контрол удаления.
   */
  onRemove?(e: MouseEvent, rootEl: HTMLElement): void;
  /**
   * Коллбэк срабатывает при завершении перетаскивания.
   * **Важно:** режим перетаскивания не меняет порядок ячеек в DOM. В коллбэке есть объект с полями `from` и `to`.
   * Эти числа нужны для того, чтобы разработчик понимал, с какого индекса на какой произошел переход. В песочнице
   * есть рабочий пример с обработкой этих чисел и перерисовкой списка.
   */
  onDragFinish?({ from, to }: { from: number; to: number }): void;
}

export const Cell: FC<CellProps> = (props: CellProps) => {
  const {
    onRemove,
    removePlaceholder,
    onDragFinish,
    className,
    style,
    before,
    after,
    disabled,
    removable,
    draggable,
    selectable,
    Component,
    onChange,
    name,
    checked,
    defaultChecked,
    ...restProps
  } = props;
  const rootElRef = useRef(null);
  const platform = usePlatform();

  const [dragging, setDragging] = useState<boolean>(undefined);

  const [siblings, setSiblings] = useState<HTMLElement[]>(undefined);
  const [dragStartIndex, setDragStartIndex] = useState<number>(undefined);
  const [dragEndIndex, setDragEndIndex] = useState<number>(undefined);
  const [dragShift, setDragShift] = useState<number>(0);
  const [dragDirection, setDragDirection] = useState<'down' | 'up'>(undefined);

  const draggingClass = 'List--dragging';

  const onDragStart = () => {
    const rootEl = rootElRef?.current;

    setDragging(true);

    const _siblings: HTMLElement[] = Array.from(rootEl.parentElement.childNodes);

    setDragStartIndex(_siblings.indexOf(rootEl));
    setSiblings(_siblings);
    setDragShift(0);
  };

  const onDragMove = (e: TouchEvent) => {
    e.originalEvent.preventDefault();

    const rootEl = rootElRef?.current;

    rootEl.style.transform = `translateY(${e.shiftY}px)`;
    setDragDirection(dragShift - e.shiftY < 0 ? 'down' : 'up');
    setDragShift(e.shiftY);
    setDragEndIndex(dragStartIndex);

    siblings.forEach((sibling: HTMLElement, siblingIndex: number) => {
      const rootGesture = rootEl.getBoundingClientRect();

      const siblingGesture = sibling.getBoundingClientRect();

      if (dragStartIndex < siblingIndex) {
        if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2) {
          if (dragDirection === 'down') {
            sibling.style.transform = 'translateY(-100%)';
          }

          setDragEndIndex((dragEndIndex) => dragEndIndex + 1);
        }
        if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2 && dragDirection === 'up') {
          sibling.style.transform = 'translateY(0)';
        }
      } else if (dragStartIndex > siblingIndex) {
        if (rootGesture.top < siblingGesture.bottom - siblingGesture.height / 2) {
          if (dragDirection === 'up') {
            sibling.style.transform = 'translateY(100%)';
          }

          setDragEndIndex((dragEndIndex) => dragEndIndex - 1);
        }
        if (rootGesture.bottom > siblingGesture.top + siblingGesture.height / 2 && dragDirection === 'down') {
          sibling.style.transform = 'translateY(0)';
        }
      }
    });
  };

  const onDragEnd = () => {
    const [from, to] = [dragStartIndex, dragEndIndex];

    siblings.forEach((sibling: HTMLElement) => {
      sibling.style.transform = null;
    });

    setSiblings(undefined);
    setDragEndIndex(undefined);
    setDragStartIndex(undefined);
    setDragDirection(undefined);
    setDragShift(undefined);

    setDragging(false);

    props.onDragFinish && props.onDragFinish({ from, to });
  };

  const onDragClick = (e: MouseEvent) => {
    e.nativeEvent.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    if (dragging != null) {
      const listEl = rootElRef?.current?.closest('.List');

      if (listEl) {
        const hasDraggingClass = listEl?.classList.contains(draggingClass);

        if (dragging && !hasDraggingClass) {
          listEl.classList.add(draggingClass);
        }

        if (!dragging && hasDraggingClass) {
          listEl.classList.remove(draggingClass);
        }
      }
    }
  }, [dragging]);

  return (
    <div
      className={classNames(getClassName('Cell', platform), {
        'Cell--dragging': dragging,
        'Cell--removable': removable,
      }, className)}
      style={style}
      ref={rootElRef}
    >
      {removable
        ? (
          <Removable removePlaceholder={removePlaceholder} onRemove={(e) => onRemove(e, rootElRef?.current)}>
            <SimpleCell
              {...restProps}
              disabled={true}
              Component={Component}
              before={before}
              after={after}
            />
          </Removable>
        ) : (
          <SimpleCell
            {...restProps}
            disabled={draggable || disabled}
            Component={selectable ? 'label' : Component}
            before={
              <>
                {(platform === ANDROID || platform === VKCOM) && draggable && (
                  <Touch
                    className="Cell__dragger"
                    onStart={onDragStart}
                    onMoveY={onDragMove}
                    onEnd={onDragEnd}
                    onClick={onDragClick}
                  ><Icon24Reorder /></Touch>
                )}
                {selectable && (
                  <>
                    <input type="checkbox" className="Cell__checkbox" name={name} onChange={onChange} defaultChecked={defaultChecked} checked={checked} />
                    <div className="Cell__marker"><Icon16Done /></div>
                  </>
                )}
                {before}
              </>
            }
            after={
              <>
                {platform === IOS && draggable && (
                  <Touch
                    className="Cell__dragger"
                    onStart={onDragStart}
                    onMoveY={onDragMove}
                    onEnd={onDragEnd}
                    onClick={onDragClick}
                  ><Icon24ReorderIos /></Touch>
                )}
                {after}
              </>
            }
          />
        )}
    </div>
  );
};

Cell.defaultProps = {
  removePlaceholder: 'Удалить',
};
