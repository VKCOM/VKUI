import { MouseEvent, FC, useState, useRef, useEffect, useContext, Fragment } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import Touch, { TouchEvent } from '../Touch/Touch';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import { Icon24Reorder, Icon24ReorderIos, Icon24CheckCircleOn, Icon24CheckCircleOff } from '@vkontakte/icons';
import SimpleCell, { SimpleCellProps } from '../SimpleCell/SimpleCell';
import { HasPlatform } from '../../types';
import { Removable, RemovePlaceholderProps } from '../Removable/Removable';
import { usePlatform } from '../../hooks/usePlatform';
import { ListContext } from '../../components/List/ListContext';

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
  onRemove?: (e: MouseEvent, rootEl: HTMLElement) => void;
  /**
   * Коллбэк срабатывает при завершении перетаскивания.
   * **Важно:** режим перетаскивания не меняет порядок ячеек в DOM. В коллбэке есть объект с полями `from` и `to`.
   * Эти числа нужны для того, чтобы разработчик понимал, с какого индекса на какой произошел переход. В песочнице
   * есть рабочий пример с обработкой этих чисел и перерисовкой списка.
   */
  onDragFinish?: ({ from, to }: { from: number; to: number }) => void;
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
    getRootRef,
    ...restProps
  } = props;
  const rootElRef = useRef(null);
  const platform = usePlatform();

  const [dragging, setDragging] = useState<boolean>(false);

  const [siblings, setSiblings] = useState<HTMLElement[]>(undefined);
  const [dragStartIndex, setDragStartIndex] = useState<number>(undefined);
  const [dragEndIndex, setDragEndIndex] = useState<number>(undefined);
  const [dragShift, setDragShift] = useState<number>(0);
  const [dragDirection, setDragDirection] = useState<'down' | 'up'>(undefined);

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

  const { toggleDrag } = useContext(ListContext);
  useEffect(() => {
    if (dragging) {
      toggleDrag(true);
      return () => toggleDrag(false);
    }
    return undefined;
  }, [dragging]);

  const simpleCell = (
    <SimpleCell
      {...restProps}
      disabled={draggable || removable || disabled}
      Component={selectable ? 'label' : Component}
      htmlFor={selectable ? name : undefined}
      before={
        <Fragment>
          {(platform === ANDROID || platform === VKCOM) && draggable && (
            <Touch
              vkuiClass="Cell__dragger"
              onStart={onDragStart}
              onMoveY={onDragMove}
              onEnd={onDragEnd}
              onClick={onDragClick}
            ><Icon24Reorder /></Touch>
          )}
          {selectable && (
            <Fragment>
              <input
                type="checkbox"
                vkuiClass="Cell__checkbox"
                name={name}
                onChange={onChange}
                defaultChecked={defaultChecked}
                checked={checked}
                disabled={disabled}
              />
              <span vkuiClass="Cell__marker">
                <Icon24CheckCircleOff vkuiClass="Cell__marker-in" />
                <Icon24CheckCircleOn vkuiClass="Cell__marker-in Cell__marker-in--checked" />
              </span>
            </Fragment>
          )}
          {before}
        </Fragment>
      }
      after={
        <Fragment>
          {platform === IOS && draggable && (
            <Touch
              vkuiClass="Cell__dragger"
              onStart={onDragStart}
              onMoveY={onDragMove}
              onEnd={onDragEnd}
              onClick={onDragClick}
            ><Icon24ReorderIos /></Touch>
          )}
          {after}
        </Fragment>
      }
    />
  );

  return (
    <div
      vkuiClass={classNames(getClassName('Cell', platform), {
        'Cell--dragging': dragging,
        'Cell--removable': removable,
        'Cell--selectable': selectable,
        'Cell--disabled': disabled,
      })}
      className={className}
      style={style}
      ref={rootElRef}
    >
      {removable
        ? <Removable removePlaceholder={removePlaceholder} onRemove={(e) => onRemove(e, rootElRef?.current)}>{simpleCell}</Removable>
        : simpleCell
      }
    </div>
  );
};

Cell.defaultProps = {
  removePlaceholder: 'Удалить',
};
