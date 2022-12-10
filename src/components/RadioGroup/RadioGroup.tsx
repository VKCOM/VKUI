import * as React from 'react';
import { classNamesString } from '../../lib/classNames';
import styles from './RadioGroup.module.css';

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'vertical' | 'horizontal';
}

/**
 * @see https://vkcom.github.io/VKUI/#/RadioGroup
 */
export const RadioGroup = ({
  mode = 'vertical',
  children,
  className,
  ...restProps
}: RadioGroupProps) => (
  <div
    className={classNamesString(
      styles['RadioGroup'],
      styles[`RadioGroup--mode-${mode}`],
      className,
    )}
    {...restProps}
  >
    {children}
  </div>
);
