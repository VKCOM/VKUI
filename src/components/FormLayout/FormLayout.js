import './FormLayout.css';
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('FormLayout');

export default function FormLayout (props) {
  const children = Array.isArray(props.children) ? props.children : [props.children];

  return (
    <div className={baseClassNames} style={props.style}>
      {children.map((field, i) => (
        <label className="FormLayout__row" key={field.key || `row-${i}`}>
          <div className="FormLayout__separator" />
          {!!field.props.label && (
            <div className="FormLayout__label">
              <div className="FormLayout__label-in">{field.props.label}</div>
            </div>
          )}
          <div className="FormLayout__field">
            {field}
            <div className="FormLayout__underline" />
          </div>
        </label>
      ))}
    </div>
  );
}

FormLayout.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};
