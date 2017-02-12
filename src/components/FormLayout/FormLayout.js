import './FormLayout.css';
import React from 'react';
import { platform, ANDROID, IOS } from '../../lib/platform.js';
import classnames from '../../lib/classnames';

const osname = platform();

export default function FormLayout(props) {
  const modifiers = {
    'FormLayout--ios': osname === IOS,
    'FormLayout--android': osname === ANDROID
  };

  return (
    <div className={classnames('FormLayout', modifiers)}>
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