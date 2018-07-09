import '../Select/Select.css';
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
    placeholder: PropTypes.string
  };

  static defaultProps = {
    tabIndex: 0
  };

  render () {
    const { className, placeholder, children, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        className={classnames(baseClassName, { 'Select--not-selected': !children, 'Select--mimicry': true }, className)}
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
