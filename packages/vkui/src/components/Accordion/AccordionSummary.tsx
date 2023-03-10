import React from 'react';
import { Icon24ChevronDown, Icon24ChevronUp } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { SimpleCell, SimpleCellProps } from '../SimpleCell/SimpleCell';
import styles from './AccordionSummary.module.css';

export interface AccordionSummaryProps extends Omit<SimpleCellProps, 'expandable'> {
  /**
   * Иконка для раскрытия контента.
   */
  ExpandIcon?: React.ElementType;
  /**
   * Иконка для сворачивания контента.
   */
  CollapseIcon?: React.ElementType;
  /**
   * Позиция иконки.
   */
  iconPosition?: 'before' | 'after';
}

/**
 * Обертка над summary.
 *
 * @version 5.3.0
 * @see  https://vkcom.github.io/VKUI/#/Accordion
 */
export const AccordionSummary = ({
  className,
  after,
  before,
  ExpandIcon = Icon24ChevronDown,
  CollapseIcon = Icon24ChevronUp,
  iconPosition = 'after',
  children,
  ...restProps
}: AccordionSummaryProps) => {
  const accordionIcon = (
    <span className="vkuiIcon">
      <ExpandIcon className={styles['AccordionSummary__expandIcon']} />
      <CollapseIcon className={styles['AccordionSummary__collapseIcon']} />
    </span>
  );

  return (
    <SimpleCell
      className={classNames(styles['AccordionSummary'], className)}
      Component="summary"
      before={
        <>
          {iconPosition === 'before' && accordionIcon}
          {before}
        </>
      }
      after={
        <>
          {after}
          {iconPosition === 'after' && accordionIcon}
        </>
      }
      {...restProps}
    >
      {children}
    </SimpleCell>
  );
};
