import * as React from 'react';
import { Icon24ChevronDown, Icon24ChevronUp } from '@vkontakte/icons';
import { callMultiple } from '../../lib/callMultiple';
import { SimpleCell, SimpleCellProps } from '../SimpleCell/SimpleCell';
import { AccordionContext } from './AccordionContext';
import styles from './Accordion.module.css';

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

export const AccordionSummary = ({
  after,
  before,
  ExpandIcon = Icon24ChevronDown,
  CollapseIcon = Icon24ChevronUp,
  iconPosition = 'after',
  onClick,
  children,
  ...restProps
}: AccordionSummaryProps) => {
  const { expanded, labelId, contentId, onChange } = React.useContext(AccordionContext);

  const Icon = expanded ? CollapseIcon : ExpandIcon;

  const icon = (
    // Обертка нужна для правильной работы с отступами в SimpleCell
    <span className="vkuiIcon">
      <Icon className={styles['AccordionSummary__icon']} />
    </span>
  );

  const toggle = () => onChange(!expanded);

  return (
    <SimpleCell
      id={labelId}
      aria-expanded={expanded}
      aria-controls={contentId}
      onClick={callMultiple(toggle, onClick)}
      before={
        <>
          {iconPosition === 'before' && icon}
          {before}
        </>
      }
      after={
        <>
          {after}
          {iconPosition === 'after' && icon}
        </>
      }
      {...restProps}
    >
      {children}
    </SimpleCell>
  );
};
