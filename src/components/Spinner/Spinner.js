import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import { platform, IOS } from '../../lib/platform';
import classnames from '../../lib/classnames.js';
import AndroidSpinner from './AndroidSpinner';
import IosSpinner from './IosSpinner';

const osname = platform();
const baseClassNames = getClassName('Spinner');

export default class Spinner extends Component {
  static propTypes = {
    style: PropTypes.object,
    size: PropTypes.number,
    /**
     * Толщина линии в Android версии
     */
    strokeWidth: PropTypes.number,
    /**
     * @ignore
     */
    on: PropTypes.bool,
    /**
     * @ignore
     */
    progress: PropTypes.number,
    className: PropTypes.string
  };
  static defaultProps = {
    strokeWidth: 4,
    on: true,
    progress: null
  };
  render () {
    const { on, progress, className, ...restProps } = this.props;
    const Component = osname === IOS ? IosSpinner : AndroidSpinner;
    const size = this.props.size || Component.defaultProps.size;

    return (
      <div {...restProps} className={classnames(baseClassNames, {
        'Spinner--on': on && progress === null
      }, className)}>
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
