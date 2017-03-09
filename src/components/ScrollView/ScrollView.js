import './ScrollView.css';
import React, { Component } from 'react';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';
import Spinner from '../Spinner/Spinner';
import Touch from '../Touch/Touch';
import { platform, ANDROID, IOS } from '../../lib/platform.js';

const osname = platform();
const baseClassNames = getClassName('ScrollView');
const MAXPULL = 60;

export default class ScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }

  prevScrollTopValue = 0;
  startShift = null;
  pulled = false;

  onMove = e => {
    const { onPullTop } = this.props;

    if (!onPullTop || this.pulled) {
      return;
    }

    const box = this.container.container
    const scroll = box.scrollTop;

    if (this.prevScrollTopValue >= 0 && scroll <= 0 && this.startShift !== null) {
      this.startShift = e.shiftY;
    }

    if (scroll <= 0 && e.shiftY >= 0) {
      this.started = true;

      const progress = Math.abs(this.startShift - e.shiftY) / MAXPULL;
      let shift = progress * MAXPULL;

      if (progress >= 1) {
        shift = Math.min(MAXPULL + (0.2 * MAXPULL * (progress - 1)), 2 * MAXPULL);
      }

      const state = {
        shift: shift,
        progress: Math.min(Math.round(progress * 100), 100),
        pullStyles: {
          transform: `translate3d(0, ${shift}px, 0)`,
          transition: 'none'
        },
        styles: osname === IOS ? {
          transform: `translate3d(0, ${shift}px, 0)`,
          transition: 'none'
        } : {}
      };

      this.setState(state);
      this.prevScrollTopValue = scroll;
      e.originalEvent.preventDefault();
    }
  };
  onEnd = e => {
    if (this.started) {
      const initialState = {
        on: false,
        shift: undefined,
        progress: null,
        pullStyles: {
          transition: 'transform .24s cubic-bezier(.36, .66, .04, 1)'
        },
        styles: osname === IOS ? {
          transition: 'transform .24s cubic-bezier(.36, .66, .04, 1)'
        } : {}
      };

      const progress = Math.abs(this.startShift - e.shiftY) / MAXPULL;
      const on = progress >= 1;

      this.startShift = null;

      this.setState({
        on: on,
        progress: !on ? Math.min(Math.round(progress * 100), 100) : null,
        pullStyles: {
          transform: `translate3d(0, ${on ? MAXPULL : 0}px, 0)`,
          transition: 'transform .24s cubic-bezier(.36, .66, .04, 1)'
        },
        styles: osname === IOS ? {
          transform: `translate3d(0, ${on ? MAXPULL : 0}px, 0)`,
          transition: 'transform .24s cubic-bezier(.36, .66, .04, 1)'
        } : {}
      });

      if (on) {
        this.pulled = true;
        this.props.onPullTop().then(() => {
          this.setState(initialState);
          this.pulled = false;
        });
      }

      this.started = false;
    }
  }
  render() {
    const { onPullTop } = this.props;

    let Component = 'div';
    let extProps = {};

    if (onPullTop) {
      Component = Touch;
      extProps = {
        onMove: this.onMove,
        onEnd: this.onEnd
      };
    }

    return (
      <Component
        className={baseClassNames}
        {...removeObjectKeys(this.props, ['header', 'onPullTop'])}
        {...extProps}
        ref={container => this.container = container}
      >
        {onPullTop && (
          <div className="ScrollView__top" style={this.state.pullStyles}>
            <Spinner
              size={osname === IOS ? 27 : 25}
              strokeWidth={3}
              on={this.state.on}
              progress={!this.state.on ? this.state.progress : null}
            />
          </div>
        )}
        <div className="ScrollView__in" style={this.state.styles}>
          {this.props.children}
        </div>
      </Component>
    );
  }
}