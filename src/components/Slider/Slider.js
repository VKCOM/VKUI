import './Slider.css';
import React, { Component, PropTypes } from 'react';
import Touch from '../Touch/Touch';
import classnames from '../../lib/classnames';
import { platform, ANDROID, IOS } from '../../lib/platform.js';

const osname = platform();

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startX: 0,
      deltaX: 0,
      value: null
    };
  }
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    step: PropTypes.number
  };
  static defaultProps = {
    min: 0,
    max: 100,
    value: 0,
    step: 0
  };
  onStart = (e) => {
    if (!e.originalEvent.target.closest('.Slider__thumb')) {
      // calculate absolute position
    }
  }
  onMove = e => {
    this.setState(this.calculate(this.state.startX + (e.shiftX || 0)));
  }
  onEnd = () => {
    this.setState({
      startX: this.state.absolutePosition,
      deltaX: 0
    });
  }
  onResize = () => {
    this.setState({ containerWidth: this.container.offsetWidth });
  }
  calculate(pos) {
    const { min, max, step } = this.props;
    const { containerWidth } = this.state;

    pos = Math.max(0, Math.min(pos, containerWidth));

    const relation = pos / containerWidth;
    const absolutePosition = pos;
    const position = Math.round(relation * 10000) / 100;

    if (step > 0) {
      const stepCount = Math.round((max - min) / step);

      return {
        position: Math.round(relation * stepCount) * step / (max - min) * 100,
        absolutePosition,
        value: min + Math.round(relation * stepCount) * step
      };
    }

    return {
      position,
      absolutePosition,
      value: min + (max - min) * relation
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
  render() {
    const modifiers = {
      'Slider--ios': osname === IOS,
      'Slider--android': osname === ANDROID
    };

    return (
      <div className={classnames('Slider', modifiers)} ref={el => this.container = el}>
        <Touch onStartX={this.onStart} onMoveX={this.onMove} onEndX={this.onEnd} className="Slider__in">
          <div className="Slider__dragger" style={{ width: this.state.position + '%' }}>
            <span className="Slider__thumb" />
          </div>
        </Touch>
      </div>
    );
  }
}
