import * as React from 'react';
import { Icon16Chevron } from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import styles from './MiniInfoCell.module.css';

const stylesMode = {
  add: styles['MiniInfoCell--mode-add'],
  accent: styles['MiniInfoCell--mode-accent'],
  more: styles['MiniInfoCell--mode-more'],
};

const stylesTextWrap = {
  nowrap: styles['MiniInfoCell--textWrap-nowrap'],
  full: styles['MiniInfoCell--textWrap-full'],
  short: styles['MiniInfoCell--textWrap-short'],
};

export interface MiniInfoCellProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Иконка слева.<br />
   * Рекомендуется использовать иконки размера 20.
   */
  before: React.ReactNode;

  /**
   * Содержимое справа.<br />
   * `<UsersStack size="s" />` или `<Avatar size={24} />`
   */
  after?: React.ReactNode;

  /**
   * Тип ячейки:
   *
   * - `base` – базовая ячейка с серой иконкой и серым текстом.<br />
   * В компонент можно передать `Link`, чтобы визуально сделать часть текста ссылкой.
   * - `add` – тип ячейки, который показывает, что взаимодействие с ней должно вызывать действие добавления чего-то.
   * - `more` – взаимодействие с такой ячейкой должно открывать какую-то подробную информацию.
   */
  mode?: 'base' | 'accent' | 'add' | 'more';

  /**
   * Тип отображения текста:
   *
   * - `nowrap` – в одну строку, текст не переносится и обрезается.
   * - `short` – максимально отображается 3 строки, остальное обрезается.
   * - `full` – текст отображается полностью.
   */
  textWrap?: 'nowrap' | 'short' | 'full';

  /**
   * Передавать `true`, если предполагается переход при клике по ячейке.
   */
  expandable?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/MiniInfoCell
 */
export const MiniInfoCell = ({
  before,
  after,
  children,
  mode = 'base',
  textWrap = 'nowrap',
  expandable = false,
  className,
  ...restProps
}: MiniInfoCellProps) => {
  const cellClasses = classNames(
    styles['MiniInfoCell'],
    stylesTextWrap[textWrap],
    mode !== 'base' && stylesMode[mode],
    className,
  );

  const cellContent = (
    <React.Fragment>
      {hasReactNode(before) && <span className={styles['MiniInfoCell__before']}>{before}</span>}
      <div className={styles['MiniInfoCell__middle']}>
        <Paragraph
          className={styles['MiniInfoCell__content']}
          weight={mode === 'more' ? '2' : undefined}
        >
          {children}
        </Paragraph>
        {expandable && <Icon16Chevron />}
      </div>
      {hasReactNode(after) && <span className={styles['MiniInfoCell__after']}>{after}</span>}
    </React.Fragment>
  );

  return restProps.onClick ? (
    <Tappable Component="div" role="button" {...restProps} className={cellClasses}>
      {cellContent}
    </Tappable>
  ) : (
    <RootComponent {...restProps} baseClassName={cellClasses}>
      {cellContent}
    </RootComponent>
  );
};
