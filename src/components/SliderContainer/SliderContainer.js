import './SliderContainer.css';
import React from 'react';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('SliderContainer');

export default function SliderContainer(props) {
  return <div className={baseClassNames}>{props.children}</div>;
}