import './FormLayout.css';
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassName = getClassName('FormLayout');

export default class FormLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    TagName: PropTypes.string,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    status: 'default',
    TagName: 'form'
  };

  onSubmit = (e) => {
    if (this.props.onSubmit) {
      this.props.onSubmit(e);
    } else {
      e.preventDefault();
    }
  };

  render () {
    const {
      children,
      TagName,
      className,
      ...restProps
    } = this.props;
    const arrayChildren = Array.isArray(children) ? children : [children];

    return (
      <TagName
        className={classnames(baseClassName, className)}
        {...restProps}
        onSubmit={this.onSubmit}
      >
        <div className="FormLayout__container">
          {arrayChildren.map((field, i) => (
            field ? <label className="FormLayout__row" key={field.key || `row-${i}`}>
              {field.props.top && <div className="FormLayout__row-top">{field.props.top}</div>}
              <div className="FormLayout__field">
                {field}
              </div>
              {field.props.bottom && <div className="FormLayout__row-bottom">{field.props.bottom}</div>}
            </label> : null
          ))}
        </div>
        {TagName === 'form' && <input type="submit" style={{ position: 'absolute', visibility: 'hidden' }} />}
      </TagName>
    );
  }
}
