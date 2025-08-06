import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../types';
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
  /**
   * Тег используемый в компоненте.
   */
  as: 'input';
}

export interface UnstyledTextFieldAsTextareaProps
  extends UnstyledTextFieldBaseProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HasRootRef<HTMLTextAreaElement> {
  /**
   * Тег используемый в компоненте.
   */
  as: 'textarea';
}

export type UnstyledTextFieldProps =
  | UnstyledTextFieldAsInputProps
  | UnstyledTextFieldAsTextareaProps;

/**
 * Компонент сбрасывает [User-agent stylesheets](https://www.geeksforgeeks.org/what-is-a-user-agent-stylesheet/)
 * полей ввода.
 *
 * Используется в <a href="?path=/story/forms-input--playground" data-prod-href="https://vkui.io/playground/?path=/story/forms-input--playground">Input</a> и <a href="?path=/story/forms-textarea--playground" data-prod-href="https://vkui.io/playground/?path=/story/forms-textarea--playground">Textarea</a>.
 *
 * @since 6.1.0
 *
 * @see https://vkui.io/components/unstyled-text-field
 *
 */
export const UnstyledTextField = ({
  as,
  noPadding = false,
  className,
  ...restProps
}: UnstyledTextFieldProps): React.ReactNode => (
  <Text
    Component={as}
    normalize={false}
    className={classNames(styles.host, noPadding && styles.noPadding, className)}
    {...restProps}
  />
);
