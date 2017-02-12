import './TappableWrapper.css';
import React from 'react';
import Tappable from 'react-tappable';
import removeObjectKeys from '../../lib/removeObjectKeys';
import classnames from '../../lib/classnames';
import { platform, ANDROID, IOS } from '../../lib/platform.js';

const osname = platform();

export default function TappableWrapper(props) {
  const Container = !props.onClick ? props.component || 'div' : Tappable;
  const commonProps = {
    className: classnames('Tappable', props.className, {
      'Tappable--android': osname === ANDROID,
      'Tappable--ios': osname === IOS
    })
  };
  const TappableProps = {
    className: commonProps.className,
    classes: {
      active: 'Tappable--active',
      inactive: 'Tappable--inactive'
    }
  };

  let containerProps;

  if (props.onClick) {
    containerProps = removeObjectKeys(Object.assign({}, props, TappableProps, {
      onTap: props.onClick
    }), ['onClick', 'component']);
  } else {
    containerProps = removeObjectKeys(Object.assign({}, props), ['component']);
  }

  return <Container {...containerProps}>{props.children}</Container>;
}