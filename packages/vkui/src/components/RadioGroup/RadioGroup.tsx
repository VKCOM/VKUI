import type * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import stylesGlobal from './RadioGroup.global.module.css';
import styles from './RadioGroup.module.css';
import stylesFormItemGlobal from '../FormItem/FormItem.global.module.css';

export interface RadioGroupProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Режим расположения элементов.
   */
  mode?: 'vertical' | 'horizontal' | undefined;
}

/**
 * @see https://vkui.io/components/radio-group
 */
export const RadioGroup = ({
  mode = 'vertical',
  ...restProps
}: RadioGroupProps): React.ReactNode => {
  return (
    <RootComponent
      baseClassName={classNames(
        stylesFormItemGlobal.formItemChildHostNested,
        stylesFormItemGlobal.formItemChildHostContentBox,
        stylesGlobal.vkuiInternalRadioGroup,
        mode === 'horizontal' && styles.modeHorizontal,
      )}
      role="radiogroup"
      {...restProps}
    />
  );
};
