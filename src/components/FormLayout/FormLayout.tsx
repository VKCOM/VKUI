import {
  FunctionComponent,
  AllHTMLAttributes,
  FormEvent,
  ElementType,
} from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
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
    className,
    getRef,
    onSubmit,
    ...restProps
  } = props;

  const platform = usePlatform();
  return (
    <Component
      {...restProps}
      className={classNames(getClassName('FormLayout', platform), className)}
      onSubmit={onSubmit}
      ref={getRef}
    >
      <div className="FormLayout__container">
        {children}
      </div>
      {Component === 'form' &&
        <input type="submit" className="FormLayout__submit" value="" />
      }
    </Component>
  );
};

FormLayout.defaultProps = {
  Component: 'form',
  onSubmit: preventDefault,
};

export default FormLayout;
