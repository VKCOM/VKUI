import * as React from 'react';
import { classNamesString } from '../../lib/classNames';
import { FormField, FormFieldProps } from '../FormField/FormField';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import styles from './Input.module.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    FormFieldProps {}

/**
 * @see https://vkcom.github.io/VKUI/#/Input
 */
export const Input = ({
  type = 'text',
  align,
  getRef,
  className,
  getRootRef,
  style,
  before,
  after,
  status,
  ...restProps
}: InputProps) => {
  const { sizeY } = useAdaptivity();

  return (
    <FormField
      style={style}
      className={classNamesString(
        styles['Input'],
        align && styles[`Input--align-${align}`],
        getSizeYClassName(styles['Input'], sizeY),
        before && styles['Input--hasBefore'],
        after && styles['Input--hasAfter'],
        className,
      )}
      getRootRef={getRootRef}
      before={before}
      after={after}
      disabled={restProps.disabled}
      status={status}
    >
      <input {...restProps} type={type} className={styles['Input__el']} ref={getRef} />
    </FormField>
  );
};
