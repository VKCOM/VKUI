
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Touch from '../Touch/Touch';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import { platform, ANDROID } from '../../lib/platform';
import { getOffsetRect } from '../../lib/offset';
import { coordX, coordY } from '../../lib/touch';

const ts = () => +Date.now();
const baseClassNames = getClassName('Tappable');
const osname = platform();

const ACTIVE_DELAY = 70;
export const ACTIVE_EFFECT_DELAY = 600;

let storage = {};

/**
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 *
 * @param {String} exclude ID экземпляра-исключения
 * @returns {void}
 */
function deactivateOtherInstances (exclude) {
  Object.keys(storage).filter(id => id !== exclude).forEach(id => {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();

    delete storage[id];
  });
}

export default class Tappable extends Component {
  constructor (props) {
    super(props);
    this.id = Math.round(Math.random() * 1e8).toString(16);
    this.state = {
      clicks: {},
      active: false,
      ts: null
    };
  }

  static propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    role: PropTypes.string,
    activeEffectDelay: PropTypes.number,
    stopPropagation: PropTypes.bool,
    disabled: PropTypes.bool,
    getRootRef: PropTypes.func
  };

  static defaultProps = {
    component: 'div',
    role: 'button',
    stopPropagation: false,
    disabled: false,
    activeEffectDelay: ACTIVE_EFFECT_DELAY
  };

  isSlide = false;

  /**
   * Обрабатывает событие touchstart
   *
   * @returns {void}
   */
  onStart = ({ originalEvent }) => {
    this.props.stopPropagation && originalEvent.stopPropagation();
    if (originalEvent.touches && originalEvent.touches.length > 1) {
      return deactivateOtherInstances();
    }

    if (osname === ANDROID) {
      this.onDown(originalEvent);
    }

    storage[this.id] = {};
    this.getStorage().stop = this.stop;
    this.getStorage().activeTimeout = setTimeout(this.start, ACTIVE_DELAY);
  };

  /**
   * Обрабатывает событие touchmove
   *
   * @returns {void}
   */
  onMove = ({ originalEvent, shiftXAbs, shiftYAbs }) => {
    this.props.stopPropagation && originalEvent.stopPropagation();
    if (shiftXAbs > 20 || shiftYAbs > 20) {
      this.isSlide = true;
      this.stop();
    }
  };

  /**
   * Обрабатывает событие touchend
   *
   * @returns {void}
   */
  onEnd = ({ originalEvent }) => {
    this.props.stopPropagation && originalEvent.stopPropagation();
    const now = ts();

    if (originalEvent.touches && originalEvent.touches.length > 0) {
      this.isSlide = false;
      return;
    }

    if (this.state.active) {
      if (now - this.state.ts >= 100) {
        // Долгий тап, выключаем подсветку
        this.stop();
      } else {
        // Короткий тап, оставляем подсветку
        const timeout = setTimeout(this.stop, this.props.activeEffectDelay - now + this.state.ts);
        const store = this.getStorage();

        if (store) {
          store.timeout = timeout;
        }
      }
    } else if (!this.isSlide) {
      // Очень короткий тап, включаем подсветку
      this.start();

      const timeout = setTimeout(this.stop, this.props.activeEffectDelay);

      if (this.getStorage()) {
        clearTimeout(this.getStorage().activeTimeout);
        this.getStorage().timeout = timeout;
      } else {
        this.timeout = timeout;
      }
    }

    this.isSlide = false;
  };

  /**
   * Реализует эффект при тапе для Андроида
   *
   * @returns {void}
   */
  onDown = (e) => {
    if (osname === ANDROID) {
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

      this.wavesTimeout = setTimeout(() => {
        this.setState(state => {
          let clicks = Object.assign({}, state.clicks);
          delete clicks[key];
          return { clicks };
        });
      }, 225);
    }
  };

  /**
   * Устанавливает активное выделение
   *
   * @returns {void}
   */
  start = () => {
    if (!this.state.active) {
      this.setState({
        active: true,
        ts: ts()
      });
    }
    deactivateOtherInstances(this.id);
  };

  /**
   * Снимает активное выделение
   *
   * @returns {void}
   */
  stop = () => {
    if (this.state.active) {
      this.setState({
        active: false,
        ts: null
      });
    }
    if (this.getStorage()) {
      clearTimeout(this.getStorage().activeTimeout);
      delete storage[this.id];
    }
  };

  /**
   * Возвращает хранилище для экземпляра компонента
   *
   * @returns {Object} Хранилище для текущего экземпляра компонента
   */
  getStorage = () => {
    return storage[this.id];
  };

  /**
   * Берет ref на DOM-ноду из экземпляра Touch
   *
   * @param {React.Component} container Touch component instance
   */
  getRef = container => {
    this.container = container;
    this.props.getRootRef && this.props.getRootRef(container);
  };

  componentWillUnmount () {
    if (storage[this.id]) {
      clearTimeout(storage[this.id].timeout);
      clearTimeout(storage[this.id].activeTimeout);

      delete storage[this.id];
    }

    clearTimeout(this.wavesTimeout);
  }

  render () {
    const { clicks, active } = this.state;
    const { children, className, component, activeEffectDelay, stopPropagation, getRootRef, ...restProps } = this.props;
    const Component = !restProps.disabled ? Touch : component;
    const classes = classnames(baseClassNames, className, {
      'Tappable--active': active,
      'Tappable--inactive': !active
    });

    let props = {};

    if (!restProps.disabled) {
      props.component = component;
      props.onStart = this.onStart;
      props.onMove = this.onMove;
      props.onEnd = this.onEnd;
    }

    if (typeof Component === 'string') {
      props.ref = this.getRef;
    } else {
      props.getRootRef = this.getRef;
    }

    return (
      <Component {...restProps} className={classes} {...props}>
        {osname === ANDROID && (
          <span className="Tappable__waves">
            {Object.keys(clicks).map(k => (
              <span className="Tappable__wave" style={{ top: clicks[k].y, left: clicks[k].x }} key={k} />
            ))}
          </span>
        )}
        {children}
      </Component>
    );
  }
}
