import { FC, useEffect, useContext, Fragment } from 'react';
import { HasPlatform } from '../../types';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { classNames } from '../../lib/classNames';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import SimpleCell, { SimpleCellProps } from '../SimpleCell/SimpleCell';
import { Removable, RemovableProps } from '../Removable/Removable';
import { ListContext } from '..//List/ListContext';
import { CellDragger } from '../CellDragger/CellDragger';
import { CellCheckbox, CellCheckboxProps } from '../CellCheckbox/CellCheckbox';
import { useDraggable } from './useDraggable';
import './Cell.css';

export interface CellProps extends SimpleCellProps, HasPlatform, RemovableProps {
  mode?: 'removable' | 'selectable';
  /**
   * В режиме перетаскивания ячейка будет кликабельной, только если одновременно передан mode="selectable".
   *
   * В остальных случаях при клике `onClick` вызываться не будет.
   */
  draggable?: boolean;
  /**
   * @deprecated Будет удалено в 5.0.0. Используйте `mode="removable"`
   */
  removable?: boolean;
  /**
   * `mode="selectable"`
   *
   * Имя для `input`
   */
  name?: string;
  /**
   * @deprecated Будет удалено в 5.0.0. Используйте `mode="selectable"`
   */
  selectable?: boolean;
  /**
   * `mode="selectable"`
   *
   * При переданном пропсе `cheсked` ведет себя как контролируемый чекбокс (зависит от входящего значения)
   */
  checked?: boolean;
  /**
   * `mode="selectable"`
   *
   * При переданном пропсе `defaultChecked` ведет себя как неконтролируемый чекбокс
   */
  defaultChecked?: boolean;
  /**
   * `draggable`
   *
   * Коллбэк срабатывает при завершении перетаскивания.
   * **Важно:** режим перетаскивания не меняет порядок ячеек в DOM. В коллбэке есть объект с полями `from` и `to`.
   * Эти числа нужны для того, чтобы разработчик понимал, с какого индекса на какой произошел переход. В песочнице
   * есть рабочий пример с обработкой этих чисел и перерисовкой списка.
   */
  onDragFinish?: ({ from, to }: { from: number; to: number }) => void;
  /**
   * `draggable`
   *
   * `aria-label` для кнопки перетаскивания ячейки
   */
  draggerLabel?: string;
}

export const Cell: FC<CellProps> = ({
  mode: propsMode, // TODO: убрать переименование перед 5.0.0
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
  draggerLabel = 'Перенести ячейку',
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

  const { toggleDrag } = useContext(ListContext);
  useEffect(() => {
    if (dragging) {
      toggleDrag(true);
      return () => toggleDrag(false);
    }
    return undefined;
  }, [dragging]);

  let dragger;
  if (draggable) {
    dragger = <CellDragger aria-label={draggerLabel} {...draggableProps} />;
  }

  let checkbox;
  if (selectable) {
    const checkboxProps: CellCheckboxProps = { name, onChange, defaultChecked, checked, disabled };
    checkbox = <CellCheckbox {...checkboxProps} />;
  }

  const simpleCellDisabled = draggable && !selectable || removable || disabled;
  const hasActive = !simpleCellDisabled && !dragging;

  const simpleCell = (
    <SimpleCell
      hasActive={hasActive}
      hasHover={hasActive}
      {...restProps}
      disabled={simpleCellDisabled}
      Component={selectable ? 'label' : Component}
      htmlFor={selectable ? name : undefined}
      before={
        <Fragment>
          {draggable && (platform === ANDROID || platform === VKCOM) && dragger}
          {selectable && checkbox}
          {before}
        </Fragment>
      }
      after={
        <Fragment>
          {draggable && platform === IOS && dragger}
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
