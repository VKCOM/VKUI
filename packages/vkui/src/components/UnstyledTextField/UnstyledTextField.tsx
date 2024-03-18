import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import { Text } from '../Typography/Text/Text';
import styles from './UnstyledTextField.module.css';

export interface UnstyledTextFieldBaseProps {
  /**
   * Задаёт какой из DOM-элементов для ввода текста использовать.
   */
  as: 'input' | 'textarea';
  /**
   * По умолчанию отключено во избежание проблем из-за очередности загрузки стилей.
   */
  noPadding?: boolean;
}

export interface UnstyledTextFieldAsInputProps
  extends UnstyledTextFieldBaseProps,
    React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLInputElement> {
  as: 'input';
}

export interface UnstyledTextFieldAsTextareaProps
  extends UnstyledTextFieldBaseProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HasRootRef<HTMLTextAreaElement> {
  as: 'textarea';
}

export type UnstyledTextFieldProps =
  | UnstyledTextFieldAsInputProps
  | UnstyledTextFieldAsTextareaProps;

/**
 * Компонент сбрасывает [User-agent stylesheets](https://www.geeksforgeeks.org/what-is-a-user-agent-stylesheet/)
 * полей ввода.
 *
 * Используется в [Input](?path=/story/forms-input--playground) и [Textarea](?path=/story/forms-textarea--playground).
 *
 * @since 6.1.0
 */
export const UnstyledTextField = ({
  as,
  noPadding = false,
  className,
  ...restProps
}: UnstyledTextFieldProps) => (
  <Text
    Component={as}
    normalize={false}
    className={classNames(
      styles.UnstyledTextField,
      noPadding && styles['UnstyledTextField--noPadding'],
      className,
    )}
    {...restProps}
  />
);
