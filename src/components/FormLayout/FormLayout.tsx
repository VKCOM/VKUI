import React, { Children } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren, HasClassName, StatusTypes } from '../../types/props';

const baseClassName = getClassName('FormLayout');

const preventDefault = e => e.preventDefault();

export interface FormLayoutProps extends HasChildren, HasClassName {
  TagName?: string;
  getRef?: (instance: HTMLElement) => void;
  onSubmit?: () => void;
  status?: StatusTypes;
}

const FormLayout = (props: FormLayoutProps) => {
  const { children, TagName, className, getRef, onSubmit, ...restProps } = props;

  return React.createElement(
    TagName,
    {
      ...restProps,
      className: classNames(baseClassName, className),
      onSubmit,
      ref: getRef
    },
    <div className="FormLayout__container">
      {Children.toArray(children).map((
        field: any, // FIXME
        i
      ) => {
        if (field) {
          const { status, top, bottom } = field.props;

          return (
            <div
              className={classNames('FormLayout__row', {
                [`FormLayout__row--s-${status}`]: status
              })}
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
    </div>,
    TagName === 'form' && <input type="submit" className="FormLayout__submit" value="" />
  );
};

FormLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  TagName: PropTypes.string,
  onSubmit: PropTypes.func,
  getRef: PropTypes.func
};

FormLayout.defaultProps = {
  status: 'default',
  TagName: 'form',
  onSubmit: preventDefault
};

export default FormLayout;
