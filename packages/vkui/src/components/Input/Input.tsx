'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import type { HasAlign, HasRef, HasRootRef } from '../../types';
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
    Omit<FormFieldProps, 'maxHeight'> {}

/**
 * @see https://vkcom.github.io/VKUI/#/Input
 */
export const Input = ({
  type = 'text',
  align = 'left',
  getRef,
  className,
  getRootRef,
  style,
  before,
  after,
  status,
  mode,
  ...restProps
}: InputProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <FormField
      style={style}
      className={classNames(
        styles.host,
        align === 'right' && styles.alignRight,
        align === 'center' && styles.alignCenter,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        before && styles.hasBefore,
        after && styles.hasAfter,
        className,
      )}
      getRootRef={getRootRef}
      before={before}
      after={after}
      disabled={restProps.disabled}
      mode={mode}
      status={status}
    >
      <UnstyledTextField
        {...restProps}
        as="input"
        type={type}
        className={styles.el}
        getRootRef={getRef}
      />
    </FormField>
  );
};
