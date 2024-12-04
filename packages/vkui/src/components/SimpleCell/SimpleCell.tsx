'use client';

import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import type { HasComponent } from '../../types';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Headline } from '../Typography/Headline/Headline';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Chevron } from './Chevron/Chevron';
import styles from './SimpleCell.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface SimpleCellOwnProps extends HasComponent {
  /**
   * Иконка 28 или `<Avatar size={28|32|40|48|72} />`
   */
  before?: React.ReactNode;
  /**
   * Иконка 12 или `<Badge />`. Добавится слева от текста `children`.
   */
  badgeBeforeTitle?: React.ReactNode;
  /**
   * Иконка 12 или `<Badge />`. Добавится справа от текста `children`.
   */
  badgeAfterTitle?: React.ReactNode;
  /**
   * Иконка 12. Добавится слева от текста `subtitle`.
   */
  badgeBeforeSubtitle?: React.ReactNode;
  /**
   * Иконка 12. Добавится справа от текста `subtitle`.
   */
  badgeAfterSubtitle?: React.ReactNode;
  /**
   * Контейнер для текста справа от `children`.
   */
  indicator?: React.ReactNode;
  /**
   * Дополнительная строка текста над `children`.
   */
  overTitle?: React.ReactNode;
  /**
   * Дополнительная строка текста под `children`.
   */
  subtitle?: React.ReactNode;
  /**
   * Дополнительная строка текста под `children` и `subtitle`.
   */
  extraSubtitle?: React.ReactNode;
  /**
   * Иконка 24|28 или `<Switch />`. Располагается справа от `indicator`.
   */
  after?: React.ReactNode;
  /**
   * Помечает ячейку неактивной
   */
  disabled?: boolean;
  /**
   * Управляет видимостью иконки шеврона `›`
   *
   * - `auto` - добавляет шеврон справа только для платформы `ios`;
   * - `always` - всегда показывает шеврон.
   */
  chevron?: 'auto' | 'always';
  /**
   * Размер chevron
   */
  chevronSize?: 's' | 'm';
  /**
   * Включает многострочный режим для отображения текста
   */
  multiline?: boolean;
}

export interface SimpleCellProps extends SimpleCellOwnProps, TappableProps {}

/**
 * @see https://vkcom.github.io/VKUI/#/SimpleCell
 */
export const SimpleCell = ({
  badgeBeforeTitle,
  badgeAfterTitle,
  badgeBeforeSubtitle,
  badgeAfterSubtitle,
  before,
  indicator,
  children,
  after,
  chevron,
  multiline,
  overTitle,
  subtitle,
  extraSubtitle,
  chevronSize = 'm',
  ...restProps
}: SimpleCellProps): React.ReactNode => {
  const platform = usePlatform();

  const hasChevron = chevron === 'always' || (chevron === 'auto' && platform === 'ios');

  const hasAfter = hasReactNode(after) || hasChevron;
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Tappable
      {...restProps}
      baseClassName={classNames(
        styles.host,
        restProps.disabled && styles.disabled,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        multiline && styles.mult,
      )}
    >
      <div className={classNames(styles.before, platform === 'ios' && styles.beforeIos)}>
        {before}
      </div>
      <div className={styles.middle}>
        {overTitle && (
          <Subhead Component="span" className={classNames(styles.text, styles.overTitle)}>
            {overTitle}
          </Subhead>
        )}
        <div className={styles.content}>
          {badgeBeforeTitle && <span className={styles.badge}>{badgeBeforeTitle}</span>}
          <Headline Component="span" className={styles.children} weight="3">
            {children}
          </Headline>
          {hasReactNode(badgeAfterTitle) && <span className={styles.badge}>{badgeAfterTitle}</span>}
        </div>
        {subtitle && (
          <div className={styles.content}>
            {badgeBeforeSubtitle && <span className={styles.badge}>{badgeBeforeSubtitle}</span>}
            <Footnote normalize={false} className={classNames(styles.text, styles.subtitle)}>
              {subtitle}
            </Footnote>
            {badgeAfterSubtitle && <span className={styles.badge}>{badgeAfterSubtitle}</span>}
          </div>
        )}
        {extraSubtitle && (
          <Footnote className={classNames(styles.text, styles.extraSubtitle)}>
            {extraSubtitle}
          </Footnote>
        )}
      </div>
      {hasReactNode(indicator) && (
        <Headline Component="span" weight="3" className={styles.indicator}>
          {indicator}
        </Headline>
      )}
      {hasAfter && (
        <div className={classNames(styles.after, 'vkuiInternalSimpleCell__after')}>
          {after}
          {hasChevron && <Chevron size={chevronSize} className={styles.chevronIcon} />}
        </div>
      )}
    </Tappable>
  );
};
