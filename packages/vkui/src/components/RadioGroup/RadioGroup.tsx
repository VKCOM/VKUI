import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { resolveLayoutProps } from '../../lib/layouts';
import type { LayoutProps } from '../../lib/layouts/types';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './RadioGroup.module.css';

export interface RadioGroupProps extends HTMLAttributesWithRootRef<HTMLDivElement>, LayoutProps {
  /**
   * Режим расположения элементов.
   */
  mode?: 'vertical' | 'horizontal';
}

/**
 * @see https://vkui.io/components/radio-group
 */
export const RadioGroup = ({
  mode = 'vertical',
  ...restProps
}: RadioGroupProps): React.ReactNode => {
  const resolvedProps = resolveLayoutProps(restProps);

  return (
    <RootComponent
      baseClassName={classNames(
        styles.host,
        'vkuiInternalRadioGroup',
        mode === 'horizontal' && styles.modeHorizontal,
      )}
      role="radiogroup"
      {...resolvedProps}
    />
  );
};
