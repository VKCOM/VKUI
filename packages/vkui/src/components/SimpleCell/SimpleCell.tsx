import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { HasComponent } from '../../types';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Headline } from '../Typography/Headline/Headline';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Chevron } from './Chevron/Chevron';
import styles from './SimpleCell.module.css';

const sizeYClassNames = {
  none: styles['SimpleCell--sizeY-none'],
  ['compact']: styles['SimpleCell--sizeY-compact'],
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
  subhead?: React.ReactNode;
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
   * Убирает анимацию нажатия
   */
  disabled?: boolean;
  /**
   * В режиме `auto` в iOS добавляет chevron справа.
   * Передавать `always`, если предполагается переход при клике по ячейке.
   */
  expandable?: 'auto' | 'always';
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
  expandable,
  multiline,
  subhead,
  subtitle,
  extraSubtitle,
  className,
  chevronSize = 'm',
  ...restProps
}: SimpleCellProps) => {
  const platform = usePlatform();

  const hasChevron = expandable === 'always' || (expandable === 'auto' && platform === 'ios');

  const hasAfter = hasReactNode(after) || hasChevron;
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Tappable
      {...restProps}
      className={classNames(
        styles['SimpleCell'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        multiline && styles['SimpleCell--mult'],
        className,
      )}
    >
      <div className={styles['SimpleCell__before']}>{before}</div>
      <div className={styles['SimpleCell__middle']}>
        {subhead && (
          <Subhead
            Component="span"
            className={classNames(styles['SimpleCell__text'], styles['SimpleCell__subhead'])}
          >
            {subhead}
          </Subhead>
        )}
        <div className={styles['SimpleCell__content']}>
          {badgeBeforeTitle && (
            <span className={styles['SimpleCell__badge']}>{badgeBeforeTitle}</span>
          )}
          <Headline Component="span" className={styles['SimpleCell__children']} weight="3">
            {children}
          </Headline>
          {hasReactNode(badgeAfterTitle) && (
            <span className={styles['SimpleCell__badge']}>{badgeAfterTitle}</span>
          )}
        </div>
        {subtitle && (
          <div className={styles['SimpleCell__content']}>
            {badgeBeforeSubtitle && (
              <span className={styles['SimpleCell__badge']}>{badgeBeforeSubtitle}</span>
            )}
            <Footnote
              normalize={false}
              className={classNames(styles['SimpleCell__text'], styles['SimpleCell__subtitle'])}
            >
              {subtitle}
            </Footnote>
            {badgeAfterSubtitle && (
              <span className={styles['SimpleCell__badge']}>{badgeAfterSubtitle}</span>
            )}
          </div>
        )}
        {extraSubtitle && (
          <Footnote
            className={classNames(styles['SimpleCell__text'], styles['SimpleCell__extraSubtitle'])}
          >
            {extraSubtitle}
          </Footnote>
        )}
      </div>
      {hasReactNode(indicator) && (
        <Headline Component="span" weight="3" className={styles['SimpleCell__indicator']}>
          {indicator}
        </Headline>
      )}
      {hasAfter && (
        <div className={classNames(styles['SimpleCell__after'], 'vkuiInternalSimpleCell__after')}>
          {after}
          {hasChevron && (
            <Chevron size={chevronSize} className={styles['SimpleCell__chevronIcon']} />
          )}
        </div>
      )}
    </Tappable>
  );
};
