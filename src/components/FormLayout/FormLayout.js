import './FormLayout.css';
import React from 'react';

export default function FormLayout(props) {
  return (
    <div className="FormLayout">
      {props.children.map(field => (
        <label className="FormLayout__row">
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