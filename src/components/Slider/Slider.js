import './Slider.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Touch from '../Touch/Touch';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Slider');

export default class Slider extends Component {
  constructor (props) {
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
    if (!this.state.containerWidth) {
      this.onResize();
    }

    if (!e.originalEvent.target.closest('.Slider__thumb')) {
      const coords = this.calculate(e.startX - this.state.containerLeft);

      this.setState(Object.assign({}, coords, {
        startX: coords.absolutePosition,
        deltaX: 0
      }));
    } else {
      this.setState({ active: true });
    }
  }
  onMove = e => {
    this.setState(this.calculate(this.state.startX + (e.shiftX || 0)));
    e.originalEvent.preventDefault();
  }
  onEnd = () => {
    this.setState({
      startX: this.state.absolutePosition,
      deltaX: 0,
      active: false
    });
  }
  onResize = () => {
    this.setState({
      containerLeft: this.container.offsetLeft,
      containerWidth: this.container.offsetWidth
    });
  }
  calculate (pos) {
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
  componentDidMount () {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }
  getRef = (container) => {
    this.container = container;
    return;
  }
  render () {
    const modifiers = {
      'Slider--active': this.state.active
    };

    return (
      <div className={classnames(baseClassNames, modifiers)} ref={this.getRef}>
        <Touch onStart={this.onStart} onMove={this.onMove} onEnd={this.onEnd} className="Slider__in">
          <div className="Slider__dragger" style={{ width: this.state.position + '%' }}>
            <span className="Slider__thumb" />
          </div>
        </Touch>
      </div>
    );
  }
}
