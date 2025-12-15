'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { warnOnce } from '../../lib/warnOnce';
import { Tappable, type TappableOmitProps } from '../Tappable/Tappable';
import { Subhead } from '../Typography/Subhead/Subhead';
import { RichCellIcon } from './RichCellIcon/RichCellIcon';
import styles from './RichCell.module.css';

const warn = warnOnce('RichCell');

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

const alignAfterClassNames = {
  start: styles.alignAfterStart,
  center: styles.alignAfterCenter,
  end: styles.alignAfterEnd,
};

const alignBeforeClassNames = {
  start: styles.alignBeforeStart,
  center: styles.alignBeforeCenter,
  end: styles.alignBeforeEnd,
};

const alignContentClassNames = {
  start: styles.contentAlignStart,
  center: styles.contentAlignCenter,
  end: styles.contentAlignEnd,
};

type Align = 'start' | 'center' | 'end';

export interface RichCellProps extends TappableOmitProps {
  /**
   * Контейнер для текста над `children`.
   */
  overTitle?: React.ReactNode;
  /**
   * Контейнер для текста под `children`.
   */
  subtitle?: React.ReactNode;
  /**
   * Контейнер для текста под `subtitle`.
   */
  extraSubtitle?: React.ReactNode;
  /**
   * Контейнер для контента под `caption`. Например `<UsersStack size="m" />`.
   */
  bottom?: React.ReactNode;
  /**
   * Кнопки-действия. Принимает [`Button`](https://vkui.io/components/button) с параметрами:
   *
   * - `mode="primary" size="s"`
   * - `mode="secondary" size="s"`.
   *
   * Для набора кнопок используйте [`ButtonGroup`](https://vkui.io/components/button-group) с параметрами:
   *
   * - `mode="horizontal" gap="s" stretched`.
   */
  actions?: React.ReactNode;
  /**
   * `<Avatar size={40|48|72} />`.
   */
  before?: React.ReactNode;
  /**
   * Иконка 28 или текст после центрального контента.
   */
  after?: React.ReactNode;
  /**
   * Текст под `after`.
   *
   * @deprecated Since 8.0.0 будет удален в `v10`
   * Используйте вместо этого свойства `submeta`.
   */
  afterCaption?: React.ReactNode;
  /**
   * Текст после основного контента.
   */
  meta?: React.ReactNode;
  /**
   * Текст под `meta`.
   */
  submeta?: React.ReactNode;
  /**
   * Выравнивание before компонента по вертикали.
   */
  beforeAlign?: Align;
  /**
   * Выравнивание центрального контента по вертикали.
   */
  contentAlign?: Align;
  /**
   * Выравнивание after компонента по вертикали.
   *
   * > Работает только для `after` и `afterCaption`.
   */
  afterAlign?: Align;
  /**
   * Блокировка взаимодействия с компонентом. Убирает анимацию нажатия.
   */
  disabled?: boolean;
  /**
   * Включает многострочный режим для `subhead`, `children`, `text` и `caption`.
   */
  multiline?: boolean;
}

/**
 * @see https://vkui.io/components/rich-cell
 */
export const RichCell: React.FC<RichCellProps> & {
  Icon: typeof RichCellIcon;
} = ({
  overTitle,
  children,
  subtitle,
  extraSubtitle,
  before,
  after,
  afterCaption,
  bottom,
  actions,
  multiline,
  beforeAlign = 'start',
  contentAlign = 'start',
  afterAlign = 'start',
  meta,
  submeta,
  ...restProps
}: RichCellProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development' && afterCaption) {
    warn('Свойство `afterCaption` устаревшее и будет удалено в `v10`, используйте `submeta`');
  }

  return (
    <Tappable
      {...restProps}
      baseClassName={classNames(
        styles.host,
        !multiline && styles.textEllipsis,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        alignAfterClassNames[afterAlign],
        (after || afterCaption) && alignAfterClassNames[afterAlign],
        before && alignBeforeClassNames[beforeAlign],
        alignContentClassNames[contentAlign],
      )}
    >
      {before && <div className={styles.before}>{before}</div>}
      <div className={styles.in}>
        <div className={styles.content}>
          <div className={styles.contentBefore}>
            {overTitle && (
              <Subhead Component="div" className={styles.overTitle}>
                {overTitle}
              </Subhead>
            )}
            <div className={styles.children}>{children}</div>
            {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
            {extraSubtitle && (
              <Subhead Component="div" className={styles.extraSubtitle}>
                {extraSubtitle}
              </Subhead>
            )}
          </div>
          {(meta || submeta) && (
            <div className={styles.contentMeta}>
              {meta && <div className={styles.afterChildren}>{meta}</div>}
              {submeta && <div className={styles.afterCaption}>{submeta}</div>}
            </div>
          )}
        </div>
        {bottom && <div className={styles.bottom}>{bottom}</div>}
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      {(after || afterCaption) && (
        <div className={styles.contentAfter}>
          {after && <div className={styles.afterChildren}>{after}</div>}
          {afterCaption && <div className={styles.afterCaption}>{afterCaption}</div>}
        </div>
      )}
    </Tappable>
  );
};

RichCell.Icon = RichCellIcon;
