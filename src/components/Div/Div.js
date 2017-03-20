import './Div.css';
import React, { Component, PropTypes } from 'react';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';

const baseClassNames = getClassName('Div');

export default function Div (props) {
  return (
    <div
      className={classnames(baseClassNames, props.className)}
      style={props.style}
      {...removeObjectKeys(props, ['className', 'style'])}
    >
      {props.children}
    </div>
  );
}

Div.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
};
