import React, {
  Children,
  FunctionComponent,
  HTMLAttributes,
  ReactElement,
  FormEvent,
  ElementType,
} from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasChildren, HasRef } from '../../types';

const preventDefault = (e: FormEvent) => e.preventDefault();

export interface FormLayoutProps extends HTMLAttributes<HTMLElement>, HasRef<HTMLElement>, HasChildren {
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
        {Children.toArray(children).map((field: ReactElement, i: number) => {
          if (field) {
            const { status, top, bottom } = field.props;

            return (
              <div
                className={classNames('FormLayout__row', { [`FormLayout__row--s-${status}`]: !!status })}
                key={field.key || `row-${i}`}
              >
                {top && <div className="FormLayout__row-top">{top}</div>}
                {field}
                {bottom && <div className="FormLayout__row-bottom">{bottom}</div>}
              </div>
            );
          } else {
            return null;
          }
        })}
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
