import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import { Subhead } from '../Typography/Subhead/Subhead';
import { RichCellIcon } from './RichCellIcon/RichCellIcon';
import styles from './RichCell.module.css';

const sizeYClassNames = {
  none: styles.hostSizeYNone,
  ['compact']: styles.hostSizeYCompact,
};

export interface RichCellProps extends TappableProps {
  /**
   * Контейнер для текста над `children`.
   */
  subhead?: React.ReactNode;
  /**
   * Контейнер для текста под `children`.
   */
  text?: React.ReactNode;
  /**
   * Контейнер для текста под `text`.
   */
  caption?: React.ReactNode;
  /**
   * Контейнер для контента под `caption`. Например `<UsersStack size="m" />`.
   */
  bottom?: React.ReactNode;
  /**
   * Кнопки-действия. Принимает [`Button`](https://vkcom.github.io/VKUI/#/Button) с параметрами:
   *
   * - `mode="primary" size="s"`
   * - `mode="secondary" size="s"`
   *
   * Для набора кнопок используйте [`ButtonGroup`](https://vkcom.github.io/VKUI/#/ButtonGroup) с параметрами:
   *
   * - `mode="horizontal" gap="s" stretched`
   */
  actions?: React.ReactNode;
  /**
   * `<Avatar size={40|48|72} />`.
   */
  before?: React.ReactNode;
  /**
   * Иконка 28 или текст.
   */
  after?: React.ReactNode;
  /**
   * Текст под `after`.
   */
  afterCaption?: React.ReactNode;
  /**
   * Убирает анимацию нажатия.
   */
  disabled?: boolean;
  /**
   * Включает многострочный режим для `subhead`, `children`, `text` и `caption`.
   */
  multiline?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/RichCell
 */
export const RichCell = ({
  subhead,
  children,
  text,
  caption,
  before,
  after,
  afterCaption,
  bottom,
  actions,
  multiline,
  className,
  ...restProps
}: RichCellProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Tappable
      {...restProps}
      className={classNames(
        styles.host,
        !multiline && styles.hostTextEllipsis,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        className,
      )}
    >
      {before && <div className={styles.before}>{before}</div>}
      <div className={styles.in}>
        <div className={styles.content}>
          <div className={styles.contentBefore}>
            {subhead && (
              <Subhead Component="div" className={styles.subhead}>
                {subhead}
              </Subhead>
            )}
            <div className={styles.children}>{children}</div>
            {text && <div className={styles.text}>{text}</div>}
            {caption && (
              <Subhead Component="div" className={styles.caption}>
                {caption}
              </Subhead>
            )}
          </div>
          {(after || afterCaption) && (
            <div className={styles.contentAfter}>
              {after && <div className={styles.afterChildren}>{after}</div>}
              {afterCaption && <div className={styles.afterCaption}>{afterCaption}</div>}
            </div>
          )}
        </div>
        {bottom && <div className={styles.bottom}>{bottom}</div>}
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </Tappable>
  );
};

RichCell.Icon = RichCellIcon;
