import './AndroidClose.css';
import React, { Component } from 'react';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('CloseButton');

export default class AndroidCloseButton extends Component {
  render () {
    const width = 14;
    const height = 14;
    const props = {
      width,
      height,
      viewBox: `0 0 ${width} ${height}`,
      xmlns: 'http://www.w3.org/2000/svg',
      onClick: this.props.onClick,
      className: baseClassNames
    };

    return (
      <svg {...props}>
        <path fill="#fff" d="M14 1.4l-1.4-1.4-5.6 5.6-5.6-5.6-1.4 1.4 5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/>
      </svg>
    );
  }
}
