import './FormLayout.css';
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

export default class FormLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    tagName: PropTypes.string,
    allowSubmit: PropTypes.bool,
    onSubmit: PropTypes.func,
    top: PropTypes.node,
    bottom: PropTypes.node,
    status: PropTypes.oneOf(['default', 'error', 'verified'])
  };

  static defaultProps = {
    allowSubmit: true,
    status: 'default',
    tagName: 'form'
  };

  baseClass = 'FormLayout';

  onSubmit = (e) => {
    if (!this.props.allowSubmit) {
      e.preventDefault();
    } else {
      this.props.onSubmit && this.props.onSubmit(e);
    }
  };

  render () {
    const {
      children,
      tagName,
      status,
      allowSubmit,
      onSubmit,
      className,
      top,
      bottom,
      ...restProps
    } = this.props;
    const arrayChildren = Array.isArray(children) ? children : [children];
    const TagName = tagName;

    return (
      <TagName
        className={classnames(getClassName(this.baseClass), {
          [`${this.baseClass}--s-${status}`]: true
        }, className)}
        onSubmit={this.onSubmit}
        {...restProps}
      >
        <div className={`${this.baseClass}__container`}>
          {top && <div className={`${this.baseClass}__addon ${this.baseClass}__addon--top`}>{top}</div>}
          {arrayChildren.map((field, i) => (
            <label className={`${this.baseClass}__row`} key={field.key || `row-${i}`}>
              <div className={`${this.baseClass}__field`}>
                {React.cloneElement(field, { v: 'new' })}
              </div>
            </label>
          ))}
          {bottom && <div className={`${this.baseClass}__addon ${this.baseClass}__addon--bottom`}>{bottom}</div>}
        </div>
        {TagName === 'form' && allowSubmit && <input type="submit" style={{ position: 'absolute', visibility: 'hidden' }} />}
      </TagName>
    );
  }
}
