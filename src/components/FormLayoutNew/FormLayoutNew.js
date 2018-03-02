import './FormLayoutNew.css';
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';
import classnames from '../../lib/classnames';

export default class FormLayoutNew extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    tagName: PropTypes.string,
    mod: PropTypes.string,
    allowSubmit: PropTypes.bool,
    onSubmit: PropTypes.func,
    top: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    bottom: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    status: PropTypes.oneOf(['default', 'error', 'verified'])
  };

  static defaultProps = {
    allowSubmit: true,
    top: false,
    bottom: false,
    status: 'default'
  };

  baseClass = 'FormLayoutNew';

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

    return (
      <TagName
        className={classnames(getClassName(this.baseClass), {
          [`${this.baseClass}--s-${this.props.status}`]: true
        }, this.props.className)}
        {...removeObjectKeys(this.props, ['tagName', 'mod', 'allowSubmit', 'onSubmit', 'top', 'bottom', 'status'])}
        onSubmit={this.onSubmit}
      >
        <div className={`${this.baseClass}__container`}>
          {this.props.top && <div className={`${this.baseClass}__addon ${this.baseClass}__addon--top`}>{this.props.top}</div>}
          {children.map((field, i) => (
            <label className={`${this.baseClass}__row`} key={field.key || `row-${i}`}>
              <div className={`${this.baseClass}__field`}>
                {React.cloneElement(field, { v: 'new' })}
              </div>
            </label>
          ))}
          {this.props.bottom && <div className={`${this.baseClass}__addon ${this.baseClass}__addon--bottom`}>{this.props.bottom}</div>}
        </div>
        {TagName === 'form' && this.props.allowSubmit && <input type="submit" style={{ position: 'absolute', visibility: 'hidden' }} />}
      </TagName>
    );
  }
}
