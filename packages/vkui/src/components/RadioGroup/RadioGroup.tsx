import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
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
    className={classNames(styles['RadioGroup'], styles[`RadioGroup--mode-${mode}`], className)}
    {...restProps}
  >
    {children}
  </div>
);
