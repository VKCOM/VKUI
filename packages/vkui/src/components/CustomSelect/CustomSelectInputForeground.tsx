import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import { HasAlign, HTMLAttributesWithRootRef } from '../../types';
import { FormFieldProps } from '../FormField/FormField';
import { RootComponent } from '../RootComponent/RootComponent';
import type { SelectType } from '../Select/Select';
import { SelectTypography } from '../SelectTypography/SelectTypography';
import styles from '../Select/Select.module.css';

export interface CustomSelectInputForegroundProps
  extends HTMLAttributesWithRootRef<HTMLElement>,
    HasAlign,
    Pick<FormFieldProps, 'before' | 'after' | 'status'> {
  selectType?: SelectType;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CustomSelectInputForeground
 */
export const CustomSelectInputForeground = ({
  placeholder,
  children,
  getRootRef,
  selectType = 'default',
  className,
  ...restProps
}: CustomSelectInputForegroundProps) => {
  const title = children || placeholder;

  return (
    <RootComponent
      Component="div"
      className={classNames(styles['Select__container'], className)}
      {...restProps}
    >
      <SelectTypography selectType={selectType} className={styles['Select__title']}>
        {title}
      </SelectTypography>
    </RootComponent>
  );
};
