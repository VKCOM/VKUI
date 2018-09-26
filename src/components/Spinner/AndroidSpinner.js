import React, { Component } from 'react';
import PropTypes from 'prop-types';
import keyframes from '../../lib/keyframes';

export default class AndroidSpinner extends Component {
  constructor (props) {
    super(props);

    const id = Math.round(Math.random() * 1e6).toString(16);
    const offset = Math.round(Math.PI * props.size);
    const c = 0.5 * props.size;

    this.state = {
      c,
      id,
      offset,
      animation: keyframes('dash' + id, {
        '0%': {
          'stroke-dashoffset': offset
        },
        '50%': {
          'stroke-dashoffset': Math.round(0.25 * offset),
          'transform': 'rotate(135deg)'
        },
        '100%': {
          'stroke-dashoffset': offset,
          'transform': 'rotate(360deg)'
        }
      })
    };
  }

  static propTypes = {
    size: PropTypes.number,
    strokeWidth: PropTypes.number,
    duration: PropTypes.number,
    on: PropTypes.bool,
    progress: PropTypes.number
  };

  static defaultProps = {
    size: 38,
    strokeWidth: 4,
    duration: 1.4,
    on: true,
    progress: null
  };

  render () {
    const { size, on, progress, duration, strokeWidth } = this.props;
    const { id, offset, animation } = this.state;

    let dashoffset = offset;
    let transform = '';

    if (!on) {
      dashoffset = Math.abs(0.02 * (progress - 50) * 0.75 * offset) + 0.25 * offset;

      if (progress <= 50) {
        transform = `rotate(${Math.round(progress * 135 / 50)}deg)`;
      } else {
        transform = `rotate(${135 + Math.round((progress - 50) * 360 / 50)}deg)`;
      }
    }

    return (
      <g
        style={{
          width: size,
          height: size,
          transformOrigin: (0.5 * size) + 'px ' + (0.5 * size) + 'px',
          transform: transform
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: animation }} />
        <circle
          className="Spinner__path"
          fill="none"
          strokeDasharray={offset}
          strokeDashoffset={dashoffset}
          strokeWidth={strokeWidth}
          style={{
            animationName: on ? 'dash' + id : 'none',
            animationTimingFunction: 'ease-in-out',
            animationDuration: duration + 's',
            animationIterationCount: 'infinite'
          }}
          cx={0.5 * size}
          cy={0.5 * size}
          r={0.5 * size - 0.5 * strokeWidth}
        />
      </g>
    );
  }
}
