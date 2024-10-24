import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './RadioGroup.module.css';

export interface RadioGroupProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  mode?: 'vertical' | 'horizontal';
}

/**
 * @see https://vkcom.github.io/VKUI/#/RadioGroup
 */
export const RadioGroup = ({
  mode = 'vertical',
  ...restProps
}: RadioGroupProps): React.ReactNode => (
  <RootComponent
    baseClassName={classNames(
      styles.host,
      'vkuiInternalRadioGroup',
      mode === 'horizontal' && styles.modeHorizontal,
    )}
    role="radiogroup"
    {...restProps}
  />
);
