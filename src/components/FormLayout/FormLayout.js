import './FormLayout.css';
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('FormLayout');

export default function FormLayout (props) {
  const children = Array.isArray(props.children) ? props.children : [props.children];
  const TagName = props.tagName || 'form';
  const modifiers = {
    'FormLayout--web': props.mod === 'web'
  };

  return (
    <TagName className={classnames(baseClassNames, modifiers)} {...removeObjectKeys(props, ['tagName', 'mod', 'allowSubmit'])}>
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
      {TagName === 'form' && props.allowSubmit && <input type="submit" style={{ display: 'none' }} />}
    </TagName>
  );
}

FormLayout.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  tagName: PropTypes.string,
  mod: PropTypes.string,
  allowSubmit: PropTypes.bool
};

FormLayout.defaultProps = {
  allowSubmit: true
};
