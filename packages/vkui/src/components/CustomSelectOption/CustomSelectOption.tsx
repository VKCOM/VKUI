'use client';

import * as React from 'react';
import { Icon16Done } from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import type { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './CustomSelectOption.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  regular: styles.sizeYRegular,
};

export interface CustomSelectOptionProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Добавляет описание под основным блоком.
   */
  description?: React.ReactNode;
  /**
   * Вставляет элемент в начало блока перед основным контентом.
   * Например, можно передать компонент `Avatar`, `Icon<Name>` или другие изображения.
   */
  before?: React.ReactNode;
  /**
   * Вставляет элемент в конец блока после основного контента.
   * Например, можно передать компонент `Avatar`, `Icon<Name>` или другие изображения.
   */
  after?: React.ReactNode;
  /**
   * Позволяет создавать вложенность.
   */
  hierarchy?: number;
  /**
   * Включает состояние выбранного элемента списка.
   */
  selected?: boolean;
  /**
   * Включает состояние наведения.
   */
  hovered?: boolean;
  /**
   * Включает состояние фокуса.
   */
  focused?: boolean;
  /**
   * Блокирует весь блок.
   *
   * > ⚠️  Важно: если CustomSelectOption используется внутри [Select](https://vkui.io/components/select), [CustomSelect](https://vkui.io/components/custom-select) или [ChipsSelect](https://vkui.io/components/chips-select), то свойство явно должно выставляться только через структуру `options`.
   * > Запрещается выставлять `disabled` проп опциям в обход `options`, иначе [CustomSelect](https://vkui.io/components/custom-select) и [ChipsSelect](https://vkui.io/components/chips-select) не будут знать об актуальном состоянии
   * опции.
   */
  disabled?: boolean;
}

/**
 * @see https://vkui.io/components/custom-select#custom-select-option
 */
export const CustomSelectOption = ({
  children,
  hierarchy = 0,
  hovered: hoveredProp,
  selected,
  before,
  after,
  description,
  disabled,
  style: styleProp,
  className,
  onClick,
  ...restProps
}: CustomSelectOptionProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const style: (React.CSSProperties & CSSCustomProperties<number>) | undefined = React.useMemo(
    () =>
      hierarchy > 0
        ? {
            '--vkui_internal--custom_select_option_hierarchy_level': hierarchy,
          }
        : undefined,
    [hierarchy],
  );
  const hovered = hoveredProp && !disabled ? true : false;

  return (
    <Paragraph
      {...restProps}
      onClick={disabled ? undefined : onClick}
      Component="div"
      role="option"
      aria-disabled={disabled}
      aria-selected={selected}
      data-hovered={hovered}
      className={classNames(
        styles.host,
        sizeY !== 'compact' && sizeYClassNames[sizeY],
        hovered && styles.hover,
        disabled && styles.disabled,
        hierarchy > 0 && styles.hierarchy,
        className,
      )}
      style={mergeStyle(style, styleProp)}
    >
      {hasReactNode(before) && <div className={styles.before}>{before}</div>}
      <div className={styles.main}>
        <div className={styles.children}>{children}</div>
        {hasReactNode(description) && (
          <Footnote className={styles.description}>
            <VisuallyHidden>&nbsp;</VisuallyHidden>
            {description}
          </Footnote>
        )}
      </div>
      <div className={styles.after}>
        {hasReactNode(after) && <div>{after}</div>}
        {selected && <Icon16Done className={styles.selectedIcon} />}
      </div>
    </Paragraph>
  );
};
