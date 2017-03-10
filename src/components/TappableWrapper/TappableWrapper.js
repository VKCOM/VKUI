import './TappableWrapper.css';
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import removeObjectKeys from '../../lib/removeObjectKeys';
import classnames from '../../lib/classnames';
import { platform, ANDROID } from '../../lib/platform.js';
import { getOffsetRect } from '../../lib/offset';
import { coordX, coordY } from '../Touch/TouchUtils';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Tappable');
const osname = platform();

export default class TappableWrapper extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clicks: {}
    };
  }
  static propTypes = {
    onClick: PropTypes.func,
    component: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]),
    children: PropTypes.node,
    className: PropTypes.string
  };
  getContainer = (container) => {
    this.container = container;
    return;
  };
  onDown = (e) => {
    const { top, left } = getOffsetRect(this.container);
    const x = coordX(e);
    const y = coordY(e);
    const key = 'wave' + Date.now().toString();

    this.setState(state => ({
      clicks: Object.assign({}, state.clicks, {
        [key]: {
          x: Math.round(x - left),
          y: Math.round(y - top)
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
  render () {
    const { clicks } = this.state;
    const Container = !this.props.onClick ? this.props.component : Tappable;
    const commonProps = {
      className: classnames(baseClassNames, this.props.className)
    };
    const TappableProps = {
      className: commonProps.className,
      classes: {
        active: 'Tappable--active',
        inactive: 'Tappable--inactive'
      },
      activeDelay: 150
    };

    let containerProps;

    if (this.props.onClick) {
      const onDownHandler = osname === ANDROID ? this.onDown : undefined;

      containerProps = removeObjectKeys(Object.assign({}, this.props, TappableProps, {
        onMouseDown: onDownHandler,
        onTouchStart: onDownHandler,
        onTap: this.props.onClick
      }), ['onClick']);
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
