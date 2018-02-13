import './FormLayout.css';
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('FormLayout');

export default class FormLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    tagName: PropTypes.string,
    mod: PropTypes.string,
    allowSubmit: PropTypes.bool,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    allowSubmit: true
  };

  onSubmit = (e) => {
    if (!this.props.allowSubmit) {
      e.preventDefault();
    } else {
      this.props.onSubmit && this.props.onSubmit(e);
    }
  };

  render () {
    const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
    const TagName = this.props.tagName || 'form';
    const modifiers = {
      'FormLayout--web': this.props.mod === 'web'
    };

    return (
      <TagName className={classnames(baseClassNames, modifiers)} {...removeObjectKeys(this.props, ['tagName', 'mod', 'allowSubmit', 'onSubmit'])} onSubmit={this.onSubmit}>
        <div className={'FormLayout__container'}>
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
              </div>
            </label>
          ))}
        </div>
        {TagName === 'form' && this.props.allowSubmit && <input type="submit" style={{ position: 'absolute', visibility: 'hidden' }} />}
      </TagName>
    );
  }
}
