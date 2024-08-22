import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HasRootRef } from '../../../types';
import { Subhead } from '../../Typography/Subhead/Subhead';
import { FormItemContext } from '../context';
import styles from '../FormItem.module.css';

export interface FormItemTopLabelProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Многострочный вывод заголовка.
   * TODO [>=7]: удалить и вседа брать из контекста
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
export const FormItemTopLabel: React.FC<FormItemTopLabelProps> = ({
  children,
  Component: componentProp,
  htmlFor,
  multiline,
  ...restProps
}: FormItemTopLabelProps) => {
  const component = componentProp || (htmlFor && 'label') || 'span';
  const { required, topMultiline: multilineContext } = React.useContext(FormItemContext);

  return (
    <Subhead
      className={classNames(
        styles['FormItemTop__label'],
        (multiline ?? multilineContext) && styles['FormItemTop__label--multiline'],
      )}
      Component={component}
      htmlFor={htmlFor}
      {...restProps}
    >
      {children}
      {required && (
        <span className={styles['FormItemTop__label--required']} aria-hidden>
          *
        </span>
      )}
    </Subhead>
  );
};

FormItemTopLabel.displayName = 'FormItemTopLabel';
