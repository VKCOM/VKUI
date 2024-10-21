'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HasRootRef } from '../../../types';
import { Subhead } from '../../Typography/Subhead/Subhead';
import { FormItemContext } from '../context';
import styles from '../FormItem.module.css';

export interface FormItemTopLabelProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {}

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
  ...restProps
}: FormItemTopLabelProps) => {
  const component = componentProp || (htmlFor && 'label') || 'span';
  const { required, topMultiline } = React.useContext(FormItemContext);

  return (
    <Subhead
      className={classNames(styles.label, topMultiline && styles.labelMultiline)}
      Component={component}
      htmlFor={htmlFor}
      {...restProps}
    >
      {children}
      {required && (
        <span className={styles.labelRequired} aria-hidden>
          *
        </span>
      )}
    </Subhead>
  );
};

FormItemTopLabel.displayName = 'FormItemTopLabel';
