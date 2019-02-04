import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassName = getClassName('FormLayout');

const onSubmit = fn => e => fn ? fn(e) : e.preventDefault();

const FormLayout = props => {
  const {
    children,
    TagName,
    className,
    getRef,
    ...restProps
  } = props;

  const arrayChildren = Array.isArray(children) ? children : [children];

  return (
    <TagName
      {...restProps}
      className={classNames(baseClassName, className)}
      onSubmit={onSubmit(props.onSubmit)}
      ref={getRef}
    >
      <div className="FormLayout__container">
        {arrayChildren.map((field, i) => (
          field ? <div className="FormLayout__row" key={field.key || `row-${i}`}>
            {field.props.top && <div className="FormLayout__row-top">{field.props.top}</div>}
            <div className="FormLayout__field">{field}</div>
            {field.props.bottom && <div className="FormLayout__row-bottom">{field.props.bottom}</div>}
          </div> : null
        ))}
      </div>
      {TagName === 'form' && <input type="submit" className="FormLayout__submit" value="" />}
    </TagName>
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
  TagName: 'form'
};

export default FormLayout;
