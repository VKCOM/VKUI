import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../lib/adaptivity';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { FormField, FormFieldProps } from '../FormField/FormField';
import styles from './Input.module.css';

const sizeYClassNames = {
  none: styles['Input--sizeY-none'],
  [SizeType.COMPACT]: styles['Input--sizeY-compact'],
  [SizeType.REGULAR]: null,
};

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
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <FormField
      style={style}
      className={classNames(
        styles['Input'],
        align && styles[`Input--align-${align}`],
        sizeYClassNames[sizeY],
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
