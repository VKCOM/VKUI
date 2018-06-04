import './Select.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import Icon24Dropdown from '../../../dist/icons/24/dropdown';
import {platform, ANDROID} from '../../lib/platform';

const osname = platform();
const baseClassName = getClassName('Select');

export default class Select extends Component {

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
    placeholder: PropTypes.string
  };

  baseClass = 'SelectNew';

  render () {
    const { className, placeholder, children, ...restProps } = this.props;

    return (
      <div
        className={classnames(baseClassName, {
          'Select--not-selected': !children,
          'SelectNew--mimicry': true
        }, className)}
        {...restProps}
        tabIndex={0}
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
