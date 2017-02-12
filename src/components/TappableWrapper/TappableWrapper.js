import './TappableWrapper.css';
import React, { Component } from 'react';
import Tappable from 'react-tappable';
import removeObjectKeys from '../../lib/removeObjectKeys';
import classnames from '../../lib/classnames';
import { platform, ANDROID, IOS } from '../../lib/platform.js';
import { getOffsetRect } from '../../lib/offset';

const osname = platform();

export default class TappableWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: {}
    };
  }
  getContainer = container => this.container = container;
  onDown = (e) => {
    const { top, left } = getOffsetRect(this.container);
    const { clientX, clientY } = e;
    const key = 'wave' + Date.now().toString();

    this.setState(state => ({
      clicks: Object.assign({}, state.clicks, {
        [key]: {
          x: Math.round(clientX - left),
          y: Math.round(clientY - top)
        }
      })
    }));

    setTimeout(() => {
      this.setState(state => {
        let clicks = Object.assign({}, state.clicks);
        delete clicks[key];
        return { clicks };
      });
    }, 225);
  }
  render() {
    const { clicks } = this.state;
    const Container = !this.props.onClick ? this.props.component || 'div' : Tappable;
    const commonProps = {
      className: classnames('Tappable', this.props.className, {
        'Tappable--android': osname === ANDROID,
        'Tappable--ios': osname === IOS
      })
    };
    const TappableProps = {
      className: commonProps.className,
      classes: {
        active: 'Tappable--active',
        inactive: 'Tappable--inactive'
      }
    };

    let containerProps;

    if (this.props.onClick) {
      const onDownHandler = osname === ANDROID ? this.onDown : undefined;

      containerProps = removeObjectKeys(Object.assign({}, this.props, TappableProps, {
        onMouseDown: onDownHandler,
        onTouchStart: onDownHandler,
        onTap: this.props.onClick
      }), ['onClick', 'component']);
    } else {
      containerProps = removeObjectKeys(Object.assign({}, this.props), ['component']);
    }

    return (
      <Container {...containerProps}>
        {osname === ANDROID && (
          <span className="Tappable__waves" ref={this.getContainer}>
            {Object.keys(clicks).map(k => (
              <span className="Tappable__wave" style={{ top: clicks[k].y, left: clicks[k].x }} key={k} />
            ))}
          </span>
        )}
        {this.props.children}
      </Container>
    );
  }
}