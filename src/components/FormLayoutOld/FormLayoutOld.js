import './FormLayoutOld.css';
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

export default class FormLayoutOld extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    tagName: PropTypes.string,
    mod: PropTypes.string,
    allowSubmit: PropTypes.bool,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    allowSubmit: true,
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
    const { children, tagName, mod, allowSubmit, onSubmit, className, ...restProps } = this.props;
    const arrayChildren = Array.isArray(children) ? children : [children];
    const TagName = tagName;

    return (
      <TagName
        className={classnames(getClassName(this.baseClass), {
          [`${this.baseClass}--web`]: mod === 'web'
        }, className)}
        onSubmit={this.onSubmit}
        {...restProps}
      >
        <div className={`${this.baseClass}__container`}>
          {arrayChildren.map((field, i) => (
            <label className={`${this.baseClass}__row`} key={field.key || `row-${i}`}>
              <div className={`${this.baseClass}__separator`} />
              {!!field.props.label && (
                <div className={`${this.baseClass}__label`}>
                  <div className={`${this.baseClass}__label-in`}>{field.props.label}</div>
                </div>
              )}
              <div className={`${this.baseClass}__field`}>
                {field}
              </div>
            </label>
          ))}
        </div>
        {TagName === 'form' && allowSubmit &&
          <input type="submit" style={{ position: 'absolute', visibility: 'hidden' }} />
        }
      </TagName>
    );
  }
}
