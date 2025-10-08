'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useMergeProps } from '../../hooks/useMergeProps';
import type { HasAlign, HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { FormField, type FormFieldProps } from '../FormField/FormField';
import { UnstyledTextField } from '../UnstyledTextField/UnstyledTextField';
import styles from './Input.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    Omit<FormFieldProps, 'maxHeight'> {
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `input`: свойства для прокидывания в поле ввода.
   */
  slotsProps?: {
    root?: React.HTMLAttributes<HTMLDivElement> & HasRootRef<HTMLDivElement> & HasDataAttribute;
    input?: React.InputHTMLAttributes<HTMLInputElement> &
      HasRootRef<HTMLInputElement> &
      HasDataAttribute;
  };
}

/**
 * @see https://vkui.io/components/input
 */
export const Input = ({
  type = 'text',
  align = 'left',
  getRef,
  className: rootClassName,
  getRootRef,
  style,
  before,
  after,
  status,
  mode,

  slotsProps,
  ...restProps
}: InputProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  const { className, ...rootProps } = useMergeProps(
    {
      className: rootClassName,
      getRootRef,
      style,
    },
    slotsProps?.root,
  );

  const inputRest = useMergeProps(
    {
      className: styles.el,
      getRootRef: getRef,
      ...restProps,
    },
    slotsProps?.input,
  );

  return (
    <FormField
      className={classNames(
        styles.host,
        align === 'right' && styles.alignRight,
        align === 'center' && styles.alignCenter,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        before && styles.hasBefore,
        after && styles.hasAfter,
        className,
      )}
      before={before}
      after={after}
      disabled={inputRest.disabled}
      mode={mode}
      status={status}
      {...rootProps}
    >
      <UnstyledTextField as="input" type={type} {...inputRest} />
    </FormField>
  );
};
