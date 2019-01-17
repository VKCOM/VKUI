import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';

const baseClassName = getClassName('Select');

export default class SelectMimicry extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
    tabIndex: PropTypes.number,
    placeholder: PropTypes.string,
    alignment: PropTypes.oneOf(['left', 'center', 'top']),
    getRootRef: PropTypes.func
  };

  static defaultProps = {
    tabIndex: 0
  };

  render () {
    const { className, placeholder, children, alignment, getRootRef, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        className={classNames(baseClassName, {
          'Select--not-selected': !children,
          'Select--mimicry': true,
          [`Select--align-${alignment}`]: alignment
        }, className)}
        ref={getRootRef}
      >
        <div className="Select__container">
          <div className="Select__title">{children || placeholder}</div>
          <Icon24Dropdown />
        </div>
        <div className="Select__border" />
      </div>
    );
  }
}
