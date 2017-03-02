import './Spinner.css';
import React, { Component, PropTypes } from 'react';
import getClassName from '../../helpers/getClassName';
import { platform, ANDROID, IOS } from '../../lib/platform.js';
import classnames from '../../lib/classnames.js';
import keyframes from '../../lib/keyframes.js';

const osname = platform();
const baseClassNames = getClassName('Spinner');

const IOS_PART_HEIGHT = 0.275;

export default class Spinner extends Component {
  constructor(props) {
    super(props);

    const id = Math.round(Math.random() * 1e6).toString(16);
    const androidOffset = osname === ANDROID ? Math.round(Math.PI * props.size) : null;

    let iosStyles = [];

    if (osname === IOS) {
      const c = 0.5 * props.size;
      const r = Math.floor(props.size * 0.075);
      const ty = -0.5 * (1 - IOS_PART_HEIGHT) * props.size;

      for (let i = 0; i < 12; i++) {
        iosStyles.push({
          transform: `rotate(${i * 30}, ${c}, ${c}) translate(0 ${ty})`,
          rx: r,
          ry: r,
          style: {
            fill: props.color,
            animationDelay: (props.duration / 12 * (-11 + i)) + 's'
          }
        });
      }
    }

    this.state = {
      id,
      androidOffset,
      iosStyles,
      androidAnimation: osname !== ANDROID ? null : keyframes('dash' + id, {
        '0%': {
          'stroke-dashoffset': androidOffset
        },
        '50%': {
          'stroke-dashoffset': Math.round(0.25 * androidOffset),
          transform: 'rotate(135deg)'
        },
        '100%': {
          'stroke-dashoffset': androidOffset,
          transform: 'rotate(360deg)'
        }
      }),
    };
  }
  static propTypes = {
    style: PropTypes.object,
    color: PropTypes.string,
    size: PropTypes.number,
    androidStrokeWidth: PropTypes.number,
    on: PropTypes.bool,
    progress: PropTypes.number,
    duration: PropTypes.number
  };
  static defaultProps = {
    color: osname === ANDROID ? '#5181b8' : '#262626',
    androidStrokeWidth: 4,
    size: osname === ANDROID ? 38 : 20,
    animated: true,
    duration: 1.4,
    on: true,
    progress: null
  }
  render() {
    const { color, size, on, progress, duration, androidStrokeWidth } = this.props;
    const { id, androidOffset, iosStyles, androidAnimation } = this.state;
    const isAnimated = on && progress === null;
    const modifiers = {
      'Spinner--on': isAnimated
    };

    return (
      <div className={classnames(baseClassNames, modifiers)}>
        <svg
          className="Spinner__self"
          style={{ width: size, height: size }}
          viewBox={`0 0 ${size} ${size}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {osname === ANDROID && <style dangerouslySetInnerHTML={{ __html: androidAnimation }} />}
          {osname === ANDROID && (
            <circle
              className="Spinner__path"
              fill="none"
              stroke={color}
              strokeDasharray={androidOffset}
              strokeDashoffset={androidOffset}
              strokeWidth={androidStrokeWidth}
              style={{
                animationName: isAnimated ? 'dash' + id : 'none',
                animationTimingFunction: 'ease-in-out',
                animationDuration: duration + 's',
                animationIterationCount: 'infinite'
              }}
              cx={0.5 * size}
              cy={0.5 * size}
              r={0.5 * size - 0.5 * androidStrokeWidth}
            />
          )}
          {osname === IOS && iosStyles.map(item => (
            <rect className="Spinner__part" {...item} />
          ))}
        </svg>
      </div>
    );
  }
}
