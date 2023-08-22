import * as React from 'react';
import { Icon16Done } from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../lib/adaptivity';
import { warnOnce } from '../../lib/warnOnce';
import { HTMLAttributesWithRootRef } from '../../types';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import styles from './CustomSelectOption.module.css';

const sizeYClassNames = {
  none: styles['CustomSelectOption--sizeY-none'],
  [SizeType.REGULAR]: styles['CustomSelectOption--sizeY-regular'],
};

export interface CustomSelectOptionProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Вставляет основной контент.
   * @deprecated since v6.0.0
   */
  option?: any;
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
   * > ⚠️  Важно: если CustomSelectOption используется внутри [Select](https://vkcom.github.io/VKUI/#/Select) или [CustomSelect](https://vkcom.github.io/VKUI/#/CustomSelect), то свойство явно должно выставляться только через структуру `options`.
   * > Запрещается выставлять `disabled` проп опциям в обход `options`, иначе селект не будет знать об актуальном состоянии
   * опции.
   */
  disabled?: boolean;
}

const warn = warnOnce('CustomSelectOption');

/**
 * @see https://vkcom.github.io/VKUI/#/CustomSelectOption
 */
export const CustomSelectOption = ({
  children,
  hierarchy = 0,
  hovered,
  selected,
  before,
  after,
  option,
  description,
  disabled,
  style: styleProp,
  className,
  onClick,
  ...restProps
}: CustomSelectOptionProps) => {
  const title = typeof children === 'string' ? children : undefined;
  const { sizeY = 'none' } = useAdaptivity();
  const style = React.useMemo(
    () =>
      hierarchy > 0
        ? {
            '--vkui_internal--custom_select_option_hierarchy_level': hierarchy,
            ...styleProp,
          }
        : styleProp,
    [hierarchy, styleProp],
  );

  if (!!option && process.env.NODE_ENV === 'development') {
    // TODO [>=6]: Удалить св-во `option`
    warn('Свойство option было добавлено по ошибке и будет удалено в v6.0.0.');
  }

  return (
    <Paragraph
      {...restProps}
      onClick={disabled ? undefined : onClick}
      Component="div"
      role="option"
      title={title}
      aria-disabled={disabled}
      aria-selected={selected}
      className={classNames(
        styles['CustomSelectOption'],
        sizeY !== SizeType.COMPACT && sizeYClassNames[sizeY],
        hovered && !disabled && styles['CustomSelectOption--hover'],
        disabled && styles['CustomSelectOption--disabled'],
        hierarchy > 0 && styles['CustomSelectOption--hierarchy'],
        className,
      )}
      style={style}
    >
      {hasReactNode(before) && <div className={styles['CustomSelectOption__before']}>{before}</div>}
      <div className={styles['CustomSelectOption__main']}>
        <div className={styles['CustomSelectOption__children']}>{children}</div>
        {hasReactNode(description) && (
          <Footnote className={styles['CustomSelectOption__description']}>{description}</Footnote>
        )}
      </div>
      <div className={styles['CustomSelectOption__after']}>
        {hasReactNode(after) && <div>{after}</div>}
        {selected && <Icon16Done className={styles['CustomSelectOption__selectedIcon']} />}
      </div>
    </Paragraph>
  );
};
