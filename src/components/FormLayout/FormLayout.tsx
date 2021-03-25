import {
  FunctionComponent,
  AllHTMLAttributes,
  FormEvent,
  ElementType,
} from 'react';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRef } from '../../types';

const preventDefault = (e: FormEvent) => e.preventDefault();

export interface FormLayoutProps extends AllHTMLAttributes<HTMLElement>, HasRef<HTMLElement> {
  Component?: ElementType;
}

const FormLayout: FunctionComponent<FormLayoutProps> = (props: FormLayoutProps) => {
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
