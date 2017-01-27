import './TappableWrapper.css';
import React from 'react';
import Tappable from 'react-tappable';
import removeObjectKeys from '../../lib/removeObjectKeys';

export default function TappableWrapper(props) {
  let Container = !props.onClick ? props.component || 'div' : Tappable;
  let containerProps = removeObjectKeys(Object.assign({}, props), ['component']);

  if (props.onClick) {
    containerProps = removeObjectKeys(Object.assign({}, props, {
      onTap: props.onClick
    }), ['onClick']);
  }

  return <Container {...containerProps}>{props.children}</Container>;
}