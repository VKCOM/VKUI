import { FC, useEffect, useContext, Fragment } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import SimpleCell, { SimpleCellProps } from '../SimpleCell/SimpleCell';
import { HasPlatform } from '../../types';
import { Removable, RemovableProps } from '../Removable/Removable';
import { usePlatform } from '../../hooks/usePlatform';
import { useDraggable } from './useDraggable';
import { ListContext } from '../../components/List/ListContext';
import { CellDragger } from '../CellDragger/CellDragger';
import { CellCheckbox } from '../CellCheckbox/CellCheckbox';
import './Cell.css';

export interface CellProps extends SimpleCellProps, HasPlatform, RemovableProps {
  mode?: 'removable' | 'selectable';
  /**
   * В режиме перетаскивания ячейка перестает быть кликабельной, то есть при клике переданный onClick вызываться не будет
   */
  draggable?: boolean;
  /**
   * @deprecated Будет удалено в 5.0.0. Используйте mode="removable"
   */
  removable?: boolean;
  /**
   * Имя для input в режиме selectable
   */
  name?: string;
  /**
   * @deprecated Будет удалено в 5.0.0. Используйте mode="selectable"
   */
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
   * Коллбэк срабатывает при завершении перетаскивания.
   * **Важно:** режим перетаскивания не меняет порядок ячеек в DOM. В коллбэке есть объект с полями `from` и `to`.
   * Эти числа нужны для того, чтобы разработчик понимал, с какого индекса на какой произошел переход. В песочнице
   * есть рабочий пример с обработкой этих чисел и перерисовкой списка.
   */
  onDragFinish?: ({ from, to }: { from: number; to: number }) => void;
}

export const Cell: FC<CellProps> = ({
  mode: propsMode, // TODO: убрать переименование в propsMode перед 5.0.0
  onRemove,
  removePlaceholder = 'Удалить',
  onDragFinish,
  className,
  style,
  before,
  after,
  disabled,
  removable: deprecatedRemovable, // TODO: удалить перед 5.0.0
  draggable,
  selectable: deprecatedSelectable, // TODO: удалить перед 5.0.0
  Component,
  onChange,
  name,
  checked,
  defaultChecked,
  getRootRef,
  ...restProps
}: CellProps) => {
  // TODO: удалить эту и следующие 7 строк перед 5.0.0
  let mode: CellProps['mode'] = propsMode;

  if (!propsMode && (deprecatedSelectable || deprecatedRemovable)) {
    mode = deprecatedSelectable
      ? 'selectable'
      : 'removable';
  }

  const selectable = mode === 'selectable';
  const removable = mode === 'removable';

  const platform = usePlatform();

  const { dragging, rootElRef, ...draggableProps } = useDraggable({ onDragFinish });
  const selectableProps = { name, onChange, defaultChecked, checked, disabled };

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
          {draggable && (platform === ANDROID || platform === VKCOM) && <CellDragger {...draggableProps} />}
          {selectable && <CellCheckbox {...selectableProps} />}
          {before}
        </Fragment>
      }
      after={
        <Fragment>
          {draggable && platform === IOS && <CellDragger {...draggableProps} />}
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
