import './BackButton.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import { platform, ANDROID } from '../../lib/platform';

const osname = platform();
const baseClassNames = getClassName('BackButton');

export default class BackButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };
  render () {
    const isAndroid = osname === ANDROID;
    const width = isAndroid ? 16 : 13;
    const height = isAndroid ? 16 : 21;
    const svgProps = {
      width,
      height,
      viewBox: `0 0 ${width} ${height}`,
      xmlns: 'http://www.w3.org/2000/svg'
    };

    return (
      <div {...this.props} className={baseClassNames}>
        <svg {...svgProps}>
          {isAndroid
            ? <path fill="currentColor" d="M16 9h-12.2l5.6 5.6-1.4 1.4-8-8 8-8 1.4 1.4-5.6 5.6h12.2z" />
            : <path fill="currentColor" d="M0 10.5l10.5-10.5 2 2-8.5 8.5 8.5 8.5-2 2z" />
          }
        </svg>
      </div>
    );
  }
}
