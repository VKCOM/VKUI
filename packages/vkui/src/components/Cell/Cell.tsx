'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { SwappedItemRange } from '../../hooks/useDraggableWithDomApi';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
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
  /**
   * Режим отображения ячейки:
   *
   * - "removable": добавляется кнопка для удаления
   * - "selectable": добавляется чекбокс для выбора.
   */
  mode?: 'removable' | 'selectable';
  /**
   * В режиме перетаскивания ячейка перестает реагировать на нажатие, то есть при нажатии переданный `onClick` вызываться не будет.
   */
  draggable?: boolean;
  /**
   * Имя для `input` в режиме `selectable`.
   */
  name?: string;
  /**
   * В режиме `selectable` реагирует на входящие значения пропса `cheсked`, как зависящий напрямую от входящего значения.
   */
  checked?: boolean;
  /**
   * В режиме `selectable` реагирует на входящие значения пропса `defaultChecked` как неконтролируемый компонент.
   */
  defaultChecked?: boolean;
  /**
   * Обработчик, срабатывающий при завершении перетаскивания.
   * **Важно:** режим перетаскивания не меняет порядок ячеек в DOM. В обработчике есть объект с полями `from` и `to`.
   * Эти числа нужны для того, чтобы разработчик понимал, с какого индекса на какой произошел переход. В песочнице
   * есть рабочий пример с обработкой этих чисел и перерисовкой списка.
   */
  onDragFinish?: (swappedItemRange: SwappedItemRange) => void;
  /**
   * Текст для кнопки перетаскивания ячейки.
   */
  draggerLabel?: string;
}

/**
 * @see https://vkui.io/components/cell
 */
export const Cell: React.FC<CellProps> & {
  Checkbox: typeof CellCheckbox;
} = ({
  mode,
  onRemove,
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
  toggleButtonTestId,
  removeButtonTestId,
  href: hrefProp,
  ...restProps
}: CellProps) => {
  const [dragging, setDragging] = React.useState(false);
  const selectable = mode === 'selectable';
  const removable = mode === 'removable';
  const Component = selectable ? 'label' : ComponentProps;
  const href = selectable ? undefined : hrefProp;

  const platform = usePlatform();

  const rootElRef = useExternRef(getRootRef);

  const dragger = draggable ? (
    <CellDragger
      elRef={rootElRef}
      className={classNames(styles.dragger, !before && !selectable && styles.controlNoBefore)}
      onDragStateChange={setDragging}
      onDragFinish={onDragFinish}
    >
      {draggerLabel}
    </CellDragger>
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
    checkbox = (
      <CellCheckbox
        className={classNames(styles.checkbox, !before && styles.controlNoBefore)}
        {...checkboxProps}
      />
    );
  }

  const hasActive = !disabled && !dragging;

  const cellClasses = classNames(
    styles.host,
    dragging && styles.dragging,
    platform === 'ios' && styles.ios,
    removable && styles.removable,
  );

  const simpleCellProps: SimpleCellProps = {
    hasActive: hasActive,
    hasHover: hasActive && !removable,
    disabled,
    href,
    ...restProps,
    className: styles.content,
    // чтобы свойство, если не определено, не присутствовало в
    // restProps явно как {'Component': undefined} и ниже не переопределяло
    // возможное значение commonProps.Component = 'a' при слиянии двух объектов, как
    // {...commonProps, ...restProps}
    ...(Component && { Component }),
    before: (
      <React.Fragment>
        {draggable && platform !== 'ios' && dragger}
        {selectable && checkbox}
        {before}
      </React.Fragment>
    ),
    after: (
      <React.Fragment>
        {draggable && platform === 'ios' && dragger}
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
        onRemove={(e) => onRemove?.(e, rootElRef.current)}
        toggleButtonTestId={toggleButtonTestId}
        removeButtonTestId={removeButtonTestId}
        disabled={disabled}
      >
        {platform === 'ios' ? (
          ({ isRemoving }) => {
            return (
              <SimpleCell {...simpleCellProps} {...(isRemoving ? { onClick: undefined } : {})} />
            );
          }
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
