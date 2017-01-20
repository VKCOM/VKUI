import './Button.css';
import React, { Component, PropTypes } from 'react';
import classnames from '../../lib/classnames';
import removeObjectKeys from '../../lib/removeObjectKeys';
import TappableWrapper from '../TappableWrapper/TappableWrapper';

export default class Button extends Component {
  static propTypes = {
    style: PropTypes.object,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    appearance: PropTypes.oneOf(['primary', 'default', 'danger'])
  };
  static defaultProps = {
    style: {},
    alignment: 'left',
    appearance: 'default'
  };
  render() {
    const { style, children, alignment, appearance } = this.props;
    const modifiers = {
      'Button--left': alignment === 'left',
      'Button--center': alignment === 'center',
      'Button--right': alignment === 'right',
      'Button--primary': appearance === 'primary',
      'Button--default': appearance === 'default',
      'Button--danger': appearance === 'danger'
    };
    const nativeProps = removeObjectKeys(this.props, ['alignment', 'appearance']);

    return (
      <TappableWrapper
        component="button"
        className={classnames('Button', modifiers)}
        style={style}
        {...nativeProps}
      >
        {children}
      </TappableWrapper>
    );
  }
}