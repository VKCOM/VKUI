import './ButtonOld.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import removeObjectKeys from '../../lib/removeObjectKeys';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Button');

export default class ButtonOld extends Component {
  static propTypes = {
    style: PropTypes.object,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    appearance: PropTypes.oneOf([
      'primary',
      'default',
      'danger',
      'vk-wide-primary',
      'vk-wide',
      'vk-rich',
      'vk-primary',
      'vk-secondary',
      'vk-tertiary'
    ]),
    wide: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.string
  };
  static defaultProps = {
    style: {},
    alignment: 'left',
    appearance: 'default',
    type: 'default',
    wide: true,
    children: '',
    component: 'button'
  };
  render () {
    const { style, children, alignment, appearance, wide, className, component } = this.props;
    const modifiers = {
      'Button--left': alignment === 'left',
      'Button--center': alignment === 'center',
      'Button--right': alignment === 'right',
      'Button--primary': appearance === 'primary',
      'Button--default': appearance === 'default',
      'Button--danger': appearance === 'danger',
      'Button--vk-wide': appearance === 'vk-wide',
      'Button--vk-wide-primary': appearance === 'vk-wide-primary',
      'Button--vk-rich': appearance === 'vk-rich',
      'Button--vk-primary': appearance === 'vk-primary',
      'Button--vk-secondary': appearance === 'vk-secondary',
      'Button--vk-tertiary': appearance === 'vk-tertiary',
      'Button--wide': wide
    };
    const nativeProps = removeObjectKeys(this.props, [
      'alignment',
      'appearance',
      'wide',
      'className',
      'component'
    ]);

    return (
      <Tappable
        component={component}
        className={classnames(baseClassNames, className, modifiers)}
        style={style}
        {...nativeProps}
      >
        {children}
      </Tappable>
    );
  }
}
