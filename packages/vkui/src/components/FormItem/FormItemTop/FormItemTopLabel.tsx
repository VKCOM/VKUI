import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent, HasRootRef } from '../../../types';
import { Subhead } from '../../Typography/Subhead/Subhead';
import styles from '../FormItem.module.css';

export interface FormItemTopLabelProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Многострочный вывод заголовка.
   */
  multiline?: boolean;
}

/**
 * Отвечает за отрисовку заголовка поля. По умолчанию компонент представлен тегом `label`, если передано свойство `htmlFor`.
 * Можно переопределить через свойство `Component`.
 *
 * @since 6.1.0
 *
 */
export const FormItemTopLabel = ({
  children,
  Component: componentProp,
  htmlFor,
  multiline = false,
  ...restProps
}: FormItemTopLabelProps) => {
  const component = componentProp || (htmlFor && 'label') || 'span';
  return (
    <Subhead
      className={classNames(
        styles['FormItemTop__label'],
        multiline && styles['FormItemTop__label--multiline'],
      )}
      Component={component}
      htmlFor={htmlFor}
      {...restProps}
    >
      {children}
    </Subhead>
  );
};
