import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import { platform, ANDROID } from '../../lib/platform';

const osname = platform();
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
    tabIndex: 0,
    alignment: 'left'
  };

  render () {
    const { className, placeholder, children, alignment, getRootRef, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        className={classnames(baseClassName, {
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
        {osname === ANDROID && <div className="Select-underline" />}
      </div>
    );
  }
}
