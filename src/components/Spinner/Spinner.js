import './Spinner.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import { platform, ANDROID, IOS } from '../../lib/platform';
import classnames from '../../lib/classnames.js';
import AndroidSpinner from './AndroidSpinner';
import IosSpinner from './IosSpinner';

const osname = platform();
const baseClassNames = getClassName('Spinner');

export default class Spinner extends Component {
  static propTypes = {
    style: PropTypes.object,
    color: PropTypes.string,
    size: PropTypes.number,
    androidStrokeWidth: PropTypes.number,
    on: PropTypes.bool,
    progress: PropTypes.number,
    className: PropTypes.string
  };
  static defaultProps = {
    color: osname === ANDROID ? '#5181b8' : '#262626',
    androidStrokeWidth: 4,
    size: osname === ANDROID ? 38 : 20,
    animated: true,
    on: true,
    progress: null
  };
  render () {
    const { on, progress, size, style, className } = this.props;
    const isAnimated = on && progress === null;
    const modifiers = {
      'Spinner--on': isAnimated
    };

    const Component = osname === IOS ? IosSpinner : AndroidSpinner;

    return (
      <div className={classnames(baseClassNames, modifiers, className)} style={style}>
        <svg
          className="Spinner__self"
          style={{ width: size, height: size }}
          viewBox={`0 0 ${size} ${size}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <Component {...this.props} />
        </svg>
      </div>
    );
  }
}
