
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
    onSubmit: PropTypes.func,
    getRef: PropTypes.func
  };

  static defaultProps = {
    status: 'default',
    TagName: 'form'
  };

  onSubmit = (e) => this.props.onSubmit ? this.props.onSubmit(e) : e.preventDefault();

  render () {
    const {
      children,
      TagName,
      className,
      getRef,
      ...restProps
    } = this.props;
    const arrayChildren = Array.isArray(children) ? children : [children];

    return (
      <TagName
        {...restProps}
        className={classnames(baseClassName, className)}
        onSubmit={this.onSubmit}
        ref={getRef}
      >
        <div className="FormLayout__container">
          {arrayChildren.map((field, i) => (
            field ? <div className="FormLayout__row" key={field.key || `row-${i}`}>
              {field.props.top && <div className="FormLayout__row-top">{field.props.top}</div>}
              <div className="FormLayout__field">{field}</div>
              {field.props.bottom && <div className="FormLayout__row-bottom">{field.props.bottom}</div>}
            </div> : null
          ))}
        </div>
        {TagName === 'form' && <input type="submit" className="FormLayout__submit" value="" />}
      </TagName>
    );
  }
}
