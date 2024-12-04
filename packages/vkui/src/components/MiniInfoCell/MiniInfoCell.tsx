import * as React from 'react';
import { Icon16Chevron } from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import styles from './MiniInfoCell.module.css';

const stylesMode = {
  add: styles.modeAdd,
  accent: styles.modeAccent,
  more: styles.modeMore,
};

const stylesTextWrap = {
  nowrap: styles.textWrapNowrap,
  full: styles.textWrapFull,
  short: styles.textWrapShort,
};

export interface MiniInfoCellProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Иконка слева.<br />
   * Рекомендуется использовать иконки размера 20.
   */
  before?: React.ReactNode;

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
   * - `full` – текст отображается полностью. В дизайне это свойство `multiline`
   */
  textWrap?: 'nowrap' | 'short' | 'full';

  /**
   * Передавать `true`, если предполагается переход при клике по ячейке.
   */
  chevron?: boolean;
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
  chevron = false,
  ...restProps
}: MiniInfoCellProps): React.ReactNode => {
  const cellClasses = classNames(
    styles.host,
    stylesTextWrap[textWrap],
    mode !== 'base' && stylesMode[mode],
  );

  const cellContent = (
    <React.Fragment>
      {hasReactNode(before) && <span className={styles.before}>{before}</span>}
      <div className={styles.middle}>
        <Paragraph className={styles.content} weight={mode === 'more' ? '2' : undefined}>
          {children}
        </Paragraph>
        {chevron && <Icon16Chevron />}
      </div>
      {hasReactNode(after) && <span className={styles.after}>{after}</span>}
    </React.Fragment>
  );

  return restProps.onClick ? (
    <Tappable Component="div" role="button" {...restProps} baseClassName={cellClasses}>
      {cellContent}
    </Tappable>
  ) : (
    <RootComponent {...restProps} baseClassName={cellClasses}>
      {cellContent}
    </RootComponent>
  );
};
