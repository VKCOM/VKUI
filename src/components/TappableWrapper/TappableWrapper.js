import './TappableWrapper.css';
import React, { Component } from 'react';
import Tappable from 'react-tappable';
import removeObjectKeys from '../../lib/removeObjectKeys';
import classnames from '../../lib/classnames';

export default function TappableWrapper(props) {
  let Container = !props.onClick ? props.component || 'div' : Tappable;
  let containerProps = props;

  if (props.onClick) {
    containerProps = removeObjectKeys(Object.assign({}, props, {
      onTap: props.onClick
    }), ['onClick']);
  }

  return <Container {...containerProps}>{props.children}</Container>;
}