import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './RadioGroup.module.css';

export interface RadioGroupProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  mode?: 'vertical' | 'horizontal';
}

/**
 * @see https://vkcom.github.io/VKUI/#/RadioGroup
 */
export const RadioGroup = ({ mode = 'vertical', ...restProps }: RadioGroupProps) => (
  <RootComponent
    baseClassNames={[
      styles['RadioGroup'],
      'vkuiInternalRadioGroup',
      mode === 'horizontal' && styles['RadioGroup--mode-horizontal'],
    ]}
    {...restProps}
  />
);
