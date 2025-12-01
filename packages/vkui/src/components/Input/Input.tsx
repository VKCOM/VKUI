'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useMergeProps } from '../../hooks/useMergeProps';
import { warnOnce } from '../../lib/warnOnce';
import type { HasAlign, HasDataAttribute, HasRootRef } from '../../types';
import { FormField, type FormFieldProps } from '../FormField/FormField';
import { UnstyledTextField } from '../UnstyledTextField/UnstyledTextField';
import styles from './Input.module.css';

const warn = warnOnce('Input');

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface InputProps
  extends Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      | 'autoComplete'
      | 'disabled'
      | 'list'
      | 'maxLength'
      | 'minLength'
      | 'multiple'
      | 'name'
      | 'pattern'
      | 'placeholder'
      | 'readOnly'
      | 'required'
      | 'size'
      | 'step'
      | 'type'
      | 'value'
      | 'onChange'
      | 'onFocus'
      | 'onBlur'
    >,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onFocus' | 'onBlur'>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    Omit<FormFieldProps, 'maxHeight'> {
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ input: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLInputElement>;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `input`: свойства для прокидывания в поле ввода.
   */
  slotProps?: {
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
  // InputProps
  align = 'left',
  getRef,

  // FormFieldProps
  before,
  after,
  status,
  mode,

  // input props
  autoComplete,
  disabled,
  list,
  maxLength,
  minLength,
  multiple,
  name,
  pattern,
  placeholder,
  readOnly,
  required,
  size,
  step,
  type = 'text',
  value,
  onChange,
  onFocus,
  onBlur,
  id,
  inputMode,
  defaultValue,
  autoFocus,
  tabIndex,
  spellCheck,

  slotProps,
  ...restProps
}: InputProps): React.ReactNode => {
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ input: { getRootRef: ... } }`');
  }

  const { sizeY = 'none' } = useAdaptivity();

  const { className, ...rootProps } = useMergeProps(restProps, slotProps?.root);

  const inputRest = useMergeProps(
    {
      className: styles.el,
      getRootRef: getRef,
      autoComplete,
      disabled,
      list,
      maxLength,
      minLength,
      multiple,
      name,
      pattern,
      placeholder,
      readOnly,
      required,
      size,
      step,
      type,
      value,
      onChange,
      onFocus,
      onBlur,
      id,
      inputMode,
      defaultValue,
      autoFocus,
      tabIndex,
      spellCheck,
    },
    slotProps?.input,
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
      <UnstyledTextField as="input" {...inputRest} />
    </FormField>
  );
};
