import React from 'react';
import Touch from '../Touch/Touch';
import getClassName from '../../helpers/getClassName';
import Slider from '../Slider/Slider';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('Slider');

export default class RangeSlider extends Slider {
  static propTypes = {
    ...Slider.propTypes,
    value: PropTypes.arrayOf(PropTypes.number),
    defaultValue: PropTypes.arrayOf(PropTypes.number)
  };

  static defaultProps = Slider.defaultProps;

  onStart = (e) => {
    const absolutePosition = this.validateAbsolute(e.startX - this.state.containerLeft);
    const percentPosition = this.absoluteToPecent(absolutePosition);
    const percentRange = this.calcPercentRange(percentPosition);

    this.onChange(this.percentToValue(percentRange));

    if (this.isControlledOutside) {
      this.setState({startX: absolutePosition});
    } else {
      this.setState({
        startX: absolutePosition,
        ...percentRange
      });
    }

    const thumb = e.originalEvent.target.closest('.Slider__thumb');

    if (thumb === this.thumbStart) {
      this.setState({ active: 'start' });
    } else if (thumb === this.thumbEnd) {
      this.setState({ active: 'end' });
    }
  };

  onMoveX = e => {
    const absolutePosition = this.validateAbsolute(this.state.startX + (e.shiftX || 0));
    const percentPosition = this.absoluteToPecent(absolutePosition);
    const percentRange = this.calcPercentRange(percentPosition);

    this.onChange(this.percentToValue(percentRange));

    if (!this.isControlledOutside) {
      this.setState(percentRange);
    }

    e.originalEvent.preventDefault();
  };

  calcPercentRange (percent) {
    const {percentStart, percentEnd} = this.state;

    if (percentStart === 100) {
      return {percentStart: percent, percentEnd};
    } else if (percentEnd === 0) {
      return {percentEnd: percent, percentStart};
    } else if (Math.abs(percentStart - percent) <= Math.abs(percentEnd - percent)) {
      return {percentStart: percent, percentEnd};
    } else {
      return {percentEnd: percent, percentStart};
    }
  }

  validatePercent ({percentStart, percentEnd}) {
    return {
      percentStart: super.validatePercent(percentStart),
      percentEnd: super.validatePercent(percentEnd)
    };
  }

  percentToValue ({percentStart, percentEnd}) {
    return [super.percentToValue(percentStart), super.percentToValue(percentEnd)];
  }

  valueToPercent ([valueStart, valueEnd]) {
    return {
      percentStart: super.valueToPercent(valueStart),
      percentEnd: super.valueToPercent(valueEnd)
    };
  }

  get value () {
    if (this.isControlledOutside) {
      return this.props.value;
    } else if (this.props.hasOwnProperty('defaultValue')) {
      return this.props.defaultValue;
    } else {
      return [this.props.min, this.props.max];
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize);
    this.onResize(() => {
      this.setState(this.validatePercent(this.valueToPercent(this.value)));
    });
  }

  componentWillReceiveProps (nextProps) {
    if (this.isControlledOutside && nextProps.value !== this.props.value) {
      this.setState(this.validatePercent(this.valueToPercent(nextProps.value)));
    }
  }

  render () {
    const { className, min, max, step, value, defaultValue, onChange, getRootRef, ...restProps } = this.props;

    return (
      <div {...restProps} className={classnames(baseClassNames, className)} ref={this.getRef}>
        <Touch onStart={this.onStart} onMoveX={this.onMoveX} onEnd={this.onEnd} className="Slider__in">
          <div
            className="Slider__dragger"
            style={{
              width: this.state.percentEnd - this.state.percentStart + '%',
              left: this.state.percentStart + '%'
            }}
          >
            <span
              className={classnames('Slider__thumb', 'Slider__thumb--start', {
                'Slider__thumb--active': this.state.active === 'start'
              })}
              ref={el => this.thumbStart = el}
            />
            <span
              className={classnames('Slider__thumb', 'Slider__thumb--end', {
                'Slider__thumb--active': this.state.active === 'end'
              })}
              ref={el => this.thumbEnd = el}
            />
          </div>
        </Touch>
      </div>
    );
  }
}
