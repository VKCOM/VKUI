import './Spinner.css';
import React, { Component } from 'react';
import getClassName from '../../helpers/getClassName';
import { platform, ANDROID, IOS } from '../../lib/platform.js';

const osname = platform();
const baseClassNames = getClassName('Spinner');

export default class Spinner extends Component {
  render() {
    const size = osname === ANDROID ? 38 : 24;
    const stroke = this.props.stroke || 4;

    return (
      <div className={baseClassNames}>
        {osname === ANDROID && (
          <svg
            className="Spinner__self"
            style={{ width: size, height: size }}
            viewBox={`0 0 ${size} ${size}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="Spinner__path"
              fill="none"
              strokeWidth={stroke}
              cx={0.5 * size}
              cy={0.5 * size}
              r={0.5 * size - 0.5 * stroke}
            />
          </svg>
        )}
        {osname === IOS && (
          <div />
        )}
      </div>
    );
  }
}