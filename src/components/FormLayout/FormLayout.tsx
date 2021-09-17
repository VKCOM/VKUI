import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRef } from '../../types';
import './FormLayout.css';

const preventDefault = (e: React.FormEvent) => e.preventDefault();

export interface FormLayoutProps extends React.AllHTMLAttributes<HTMLElement>, HasRef<HTMLElement> {
  Component?: React.ElementType;
}

const FormLayout: React.FunctionComponent<FormLayoutProps> = (props: FormLayoutProps) => {
  const {
    children,
    Component,
    getRef,
    onSubmit,
    ...restProps
  } = props;

  const platform = usePlatform();
  return (
    <Component
      {...restProps}
      vkuiClass={getClassName('FormLayout', platform)}
      onSubmit={onSubmit}
      ref={getRef}
    >
      <div vkuiClass="FormLayout__container">
        {children}
      </div>
      {Component === 'form' &&
        <input type="submit" vkuiClass="FormLayout__submit" value="" />
      }
    </Component>
  );
};

FormLayout.defaultProps = {
  Component: 'form',
  onSubmit: preventDefault,
};

export default FormLayout;
