import React, { Component } from 'react';
import PropTypes from 'prop-types';

const IOS_PART_HEIGHT = 0.275;

export default class IosSpinner extends Component {
  constructor (props) {
    super(props);

    const c = 0.5 * props.size;
    const r = Math.max(Math.floor(props.size * 0.075), 2);
    const ty = Math.ceil(-0.5 * (1 - IOS_PART_HEIGHT) * props.size);

    let iosStyles = [];

    for (let i = 0; i < 12; i++) {
      iosStyles.push({
        transform: `rotate(${i * 30}, ${c}, ${c}) translate(0 ${ty})`,
        rx: r,
        ry: r,
        style: {
          animationDelay: Math.round(props.duration / 12 * 100 * (-11 + i)) / 100 + 's'
        }
      });
    }

    this.state = { iosStyles };
  }

  static propTypes = {
    size: PropTypes.number,
    duration: PropTypes.number,
    on: PropTypes.bool,
    progress: PropTypes.number
  };

  static defaultProps = {
    size: 20,
    duration: 1.4,
    on: true,
    progress: null
  };

  render () {
    const { on, progress } = this.props;
    const { iosStyles } = this.state;

    let parts = iosStyles;

    if (!on) {
      parts = iosStyles.slice(0, Math.round(progress / (100 / 12)));
    }

    return parts.map((item, i) => (
      <rect
        x="46.25%"
        y="36.25%"
        width="7.5%"
        height="27.5%"
        className="Spinner__part"
        {...item}
        key={`spinner-part-${i}`}
      />
    ));
  }
}
