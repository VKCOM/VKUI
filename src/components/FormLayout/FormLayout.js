import React, { Children } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassName = getClassName('FormLayout');

const preventDefault = e => e.preventDefault();

const FormLayout = props => {
  const {
    children,
    TagName,
    className,
    getRef,
    onSubmit,
    ...restProps
  } = props;

  return (
    <TagName
      {...restProps}
      className={classNames(baseClassName, className)}
      onSubmit={onSubmit}
      ref={getRef}
    >
      <div className="FormLayout__container">
        {Children.toArray(children).map((field, i) => {
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
      </div>
      {TagName === 'form' && (
        <input type="submit" className="FormLayout__submit" value="" />
      )}
    </TagName>
  );
};

FormLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  TagName: PropTypes.string,
  onSubmit: PropTypes.func,
  getRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

FormLayout.defaultProps = {
  status: 'default',
  TagName: 'form',
  onSubmit: preventDefault
};

export default FormLayout;
