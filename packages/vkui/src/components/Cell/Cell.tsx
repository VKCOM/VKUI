import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import type { SwappedItemRange } from '../../hooks/useDraggableWithDomApi';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import type { HasRootRef } from '../../types';
import { Removable, type RemovableProps } from '../Removable/Removable';
import { SimpleCell, type SimpleCellProps } from '../SimpleCell/SimpleCell';
import { CellCheckbox, type CellCheckboxProps } from './CellCheckbox/CellCheckbox';
import { CellDragger } from './CellDragger/CellDragger';
import { DEFAULT_DRAGGABLE_LABEL } from './constants';
import styles from './Cell.module.css';

export interface CellProps
  extends Omit<SimpleCellProps, 'getRootRef'>,
    RemovableProps,
    HasRootRef<HTMLDivElement> {
  mode?: 'removable' | 'selectable';
  /**
   * В режиме перетаскивания ячейка перестает быть кликабельной, то есть при клике переданный onClick вызываться не будет
   */
  draggable?: boolean;
  /**
   * Имя для input в режиме selectable
   */
  name?: string;
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
  onDragFinish?(swappedItemRange: SwappedItemRange): void;
  /**
   * aria-label для кнопки перетаскивания ячейки
   */
  draggerLabel?: string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Cell
 */
export const Cell = ({
  mode,
  onRemove = noop,
  removePlaceholder = 'Удалить',
  onDragFinish,
  before,
  after,
  disabled,
  draggable,
  Component: ComponentProps,
  onChange,
  name,
  value,
  checked,
  defaultChecked,
  getRootRef,
  draggerLabel = DEFAULT_DRAGGABLE_LABEL,
  className,
  style,
  ...restProps
}: CellProps) => {
  const [dragging, setDragging] = React.useState(false);
  const selectable = mode === 'selectable';
  const removable = mode === 'removable';
  const Component = selectable ? 'label' : ComponentProps;

  const platform = usePlatform();

  const rootElRef = useExternRef(getRootRef);

  const dragger = draggable ? (
    <CellDragger
      elRef={rootElRef}
      className={styles['Cell__dragger']}
      aria-label={draggerLabel}
      disabled={disabled}
      onDragStateChange={setDragging}
      onDragFinish={onDragFinish}
    />
  ) : null;

  let checkbox;
  if (selectable) {
    const checkboxProps: CellCheckboxProps = {
      name,
      value,
      defaultChecked,
      checked,
      disabled,
      onChange,
    };
    checkbox = <CellCheckbox className={styles['Cell__checkbox']} {...checkboxProps} />;
  }

  const simpleCellDisabled =
    (draggable && !selectable) || (removable && !restProps.onClick) || disabled;
  const hasActive = !simpleCellDisabled && !dragging;

  const cellClasses = classNames(
    styles['Cell'],
    dragging && styles['Cell--dragging'],
    platform === Platform.IOS && styles['Cell--ios'],
    removable && styles['Cell--removable'],
    Component === 'label' && styles['Cell--selectable'],
    disabled && styles['Cell--disabled'],
  );

  const simpleCellProps = {
    hasActive: hasActive,
    hasHover: hasActive && !removable,
    ...restProps,
    className: styles['Cell__content'],
    disabled: simpleCellDisabled,
    Component: Component,
    before: (
      <React.Fragment>
        {draggable && platform !== Platform.IOS && dragger}
        {selectable && checkbox}
        {before}
      </React.Fragment>
    ),
    after: (
      <React.Fragment>
        {draggable && platform === Platform.IOS && dragger}
        {after}
      </React.Fragment>
    ),
  };

  if (removable) {
    return (
      <Removable
        className={classNames(cellClasses, className)}
        style={style}
        getRootRef={rootElRef}
        removePlaceholder={removePlaceholder}
        onRemove={(e) => onRemove(e, rootElRef.current)}
      >
        {platform === Platform.IOS ? (
          ({ isRemoving }) => (
            <SimpleCell {...simpleCellProps} disabled={simpleCellProps.disabled || isRemoving} />
          )
        ) : (
          <SimpleCell {...simpleCellProps} />
        )}
      </Removable>
    );
  }

  return (
    <div className={classNames(cellClasses, className)} style={style} ref={rootElRef}>
      <SimpleCell {...simpleCellProps} />
    </div>
  );
};

Cell.Checkbox = CellCheckbox;
