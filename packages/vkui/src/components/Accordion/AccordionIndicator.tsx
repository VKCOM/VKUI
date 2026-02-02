'use client';

import * as React from 'react';
import { Icon24ChevronDown, Icon24ChevronUp } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { AccordionContext } from './AccordionContext';
import styles from './Accordion.module.css';

export interface AccordionIndicatorProps extends React.ComponentProps<typeof Icon24ChevronUp> {
  /**
   * Иконка для раскрытия контента.
   */
  ExpandIcon?: React.ElementType;
  /**
   * Иконка для сворачивания контента.
   */
  CollapseIcon?: React.ElementType;
}

export const AccordionIndicator = ({
  ExpandIcon = Icon24ChevronDown,
  CollapseIcon = Icon24ChevronUp,
  className,
  ...restProps
}: AccordionIndicatorProps) => {
  const { expanded } = React.useContext(AccordionContext);

  const Icon = expanded ? CollapseIcon : ExpandIcon;

  return <Icon className={classNames(className, 'vkuiIcon', styles.icon)} {...restProps} />;
};
