import React, { Children, FunctionComponent, HTMLAttributes, ReactElement, Fragment } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasChildren, HasRef } from '../../types/props';

const preventDefault = e => e.preventDefault();

export interface FormLayoutProps extends HTMLAttributes<HTMLElement>, HasRef<HTMLElement>, HasChildren {
  TagName?: string;
}

const FormLayout: FunctionComponent<FormLayoutProps> = (props: FormLayoutProps) => {
  const {
    children,
    TagName,
    className,
    getRef,
    onSubmit,
    ...restProps
  } = props;

  const platform = usePlatform();

  // Не используем тут JSX из-за этой проблемы: https://github.com/Microsoft/TypeScript/issues/28892
  return React.createElement(TagName, {
    ...restProps,
    className: classNames(getClassName('FormLayout', platform), className),
    onSubmit,
    ref: getRef
  },
  <Fragment>
    <div className="FormLayout__container">
      {Children.toArray(children).map((field: ReactElement, i) => {
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
    {TagName === 'form' && (
      <input type="submit" className="FormLayout__submit" value="" />
    )}
  </Fragment>);
};

FormLayout.defaultProps = {
  TagName: 'form',
  onSubmit: preventDefault
};

export default FormLayout;
