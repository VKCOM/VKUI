import './FormLayout.css';
import React, { PropTypes } from 'react';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('FormLayout');

export default function FormLayout (props) {
  const children = Array.isArray(props.children) ? props.children : [props.children];

  return (
    <div className={baseClassNames}>
      {children.map((field, i) => (
        <label className="FormLayout__row" key={field.key || `row-${i}`}>
          <div className="FormLayout__separator" />
          {!!field.props.label && (
            <div className="FormLayout__label">
              <div className="FormLayout__label-in">{field.props.label}</div>
            </div>
          )}
          <div className="FormLayout__field">{field}</div>
        </label>
      ))}
    </div>
  );
}

FormLayout.propTypes = {
  children: PropTypes.node
};
