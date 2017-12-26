import './CloseButton.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {platform, ANDROID, IOS} from '../../lib/platform';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';
import classnames from '../../lib/classnames';

const osname = platform();

const baseClassNames = getClassName('CloseButton');

export default class CloseButton extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node
  };

  render () {
    const width = 14;
    const height = 14;
    const svgProps = {
      width,
      height,
      viewBox: `0 0 ${width} ${height}`,
      xmlns: 'http://www.w3.org/2000/svg'
    };
    const className = classnames(baseClassNames, this.props.className);

    return (
      <div {...removeObjectKeys(this.props, ['className'])} className={className}>
        {osname === ANDROID &&
        <svg {...svgProps}>
          <path fill="#fff" d="M14 1.4l-1.4-1.4-5.6 5.6-5.6-5.6-1.4 1.4 5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"/>
        </svg>
        }
        {osname === IOS && this.props.children}
      </div>
    );
  }
}
