import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './RichCell.module.css';

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
   * Иконка 24 или текст.
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
  const { sizeY } = useAdaptivity();

  return (
    <Tappable
      {...restProps}
      className={classNames(
        styles['RichCell'],
        !multiline && styles['RichCell--text-ellipsis'],
        getSizeYClassName(styles['RichCell'], sizeY),
        className,
      )}
    >
      {before && <div className={styles['RichCell__before']}>{before}</div>}
      <div className={styles['RichCell__in']}>
        <div className={styles['RichCell__content']}>
          <div className={styles['RichCell__content-before']}>
            {subhead && (
              <Subhead Component="div" className={styles['RichCell__subhead']}>
                {subhead}
              </Subhead>
            )}
            <div className={styles['RichCell__children']}>{children}</div>
            {text && <div className={styles['RichCell__text']}>{text}</div>}
            {caption && (
              <Subhead Component="div" className={styles['RichCell__caption']}>
                {caption}
              </Subhead>
            )}
          </div>
          {(after || afterCaption) && (
            <div className={styles['RichCell__content-after']}>
              {after && <div className={styles['RichCell__after-children']}>{after}</div>}
              {afterCaption && (
                <div className={styles['RichCell__after-caption']}>{afterCaption}</div>
              )}
            </div>
          )}
        </div>
        {bottom && <div className={styles['RichCell__bottom']}>{bottom}</div>}
        {actions && <div className={styles['RichCell__actions']}>{actions}</div>}
      </div>
    </Tappable>
  );
};
