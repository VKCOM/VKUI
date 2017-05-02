import './Div.css';
import React from 'react';
import PropTypes from 'prop-types';
import { platform, ANDROID, IOS } from '../../lib/platform.js';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';

const osname = platform();
const baseClassNames = getClassName('Div');

export default function Div (props) {
  const modifiers = {
    'Div--shadow': osname === ANDROID && props.androidShadow,
    'Div--border': osname === IOS && props.iosBorder
  };

  return (
    <div
      className={classnames(baseClassNames, modifiers, props.className)}
      style={props.style}
      {...removeObjectKeys(props, ['className', 'style', 'iosBorder', 'androidShadow'])}
    >
      {props.children}
    </div>
  );
}

Div.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  androidShadow: PropTypes.bool,
  iosBorder: PropTypes.bool,
  className: PropTypes.string
};
