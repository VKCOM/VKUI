import * as React from 'react';
import { Icon16Done } from '@vkontakte/icons';
import { classNamesString } from '../../lib/classNames';
import { hasReactNode } from '../../lib/utils';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import { Footnote } from '../Typography/Footnote/Footnote';
import { HasRootRef } from '../../types';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { warnOnce } from '../../lib/warnOnce';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import styles from './CustomSelectOption.module.css';

export interface CustomSelectOptionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * Вставляет основной контент.
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
  ...restProps
}: CustomSelectOptionProps) => {
  const title = typeof children === 'string' ? children : undefined;
  const { sizeY } = useAdaptivity();
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
    warn('Свойство option было добавлено по ошибке и будет удалено в 5.0.0.');
  }

  return (
    <Paragraph
      {...restProps}
      Component="div"
      role="option"
      title={title}
      aria-disabled={disabled}
      aria-selected={selected}
      className={classNamesString(
        styles['CustomSelectOption'],
        getSizeYClassName(styles['CustomSelectOption'], sizeY),
        hovered && !disabled && styles['CustomSelectOption--hover'],
        // Note: пустой класс
        selected && styles['CustomSelectOption--selected'],
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
        {hasReactNode(after) && (
          <div className={styles['CustomSelectOption__afterIn']}>{after}</div>
        )}
        {selected && <Icon16Done className={styles['CustomSelectOption__selectedIcon']} />}
      </div>
    </Paragraph>
  );
};
