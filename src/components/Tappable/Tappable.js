import './Tappable.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Touch from '../Touch/Touch';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';
import { platform, ANDROID } from '../../lib/platform';
import { getOffsetRect } from '../../lib/offset';
import { coordX, coordY } from '../Touch/TouchUtils';
import requestAnimationFrame from '../../lib/requestAnimationFrame';

const ts = () => +Date.now();
const baseClassNames = getClassName('Tappable');
const osname = platform();

const ACTIVE_DELAY = 70;
const ACTIVE_EFFECT_DELAY = 600;

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
    ])
  };
  static defaultProps = {
    component: 'div'
  };

  isSlide = false;

  /**
   * Обрабатывает событие touchstart
   *
   * @returns {void}
   */
  onStart = ({ originalEvent }) => {
    if (originalEvent.touches && originalEvent.touches.length > 1) {
      return deactivateOtherInstances();
    }

    if (osname === ANDROID) {
      this.onDown(originalEvent);
    }

    storage[this.id] = {};
    this.getStorage().stop = this.stop;
    this.getStorage().activeTimeout = setTimeout(this.start, ACTIVE_DELAY);
  }

  /**
   * Обрабатывает событие touchmove
   *
   * @returns {void}
   */
  onMove = (e) => {
    if (e.shiftXAbs > 20 || e.shiftYAbs > 20) {
      this.isSlide = true;
      this.stop();
    }
  }

  /**
   * Обрабатывает событие touchdown
   *
   * @returns {void}
   */
  onEnd = ({ originalEvent }) => {
    const now = ts();

    if (originalEvent.touches && originalEvent.touches.length > 0) {
      this.isSlide = false;
      return;
    }

    if (this.state.active) {
      requestAnimationFrame(() => this.callback());

      if (now - this.state.ts >= 100) {
        // Долгий тап, выключаем подсветку
        this.stop();
      } else {
        // Короткий тап, оставляем подсветку
        const timeout = setTimeout(this.stop, ACTIVE_EFFECT_DELAY - now + this.state.ts);
        const store = this.getStorage();

        if (store) {
          store.timeout = timeout;
        }
      }
    } else if (!this.isSlide) {
      // Очень короткий тап, включаем подсветку
      requestAnimationFrame(() => this.callback());

      this.start();

      const timeout = setTimeout(this.stop, ACTIVE_EFFECT_DELAY);

      if (this.getStorage()) {
        clearTimeout(this.getStorage().activeTimeout);
        this.getStorage().timeout = timeout;
      } else {
        this.timeout = timeout;
      }
    }

    this.isSlide = false;
  }

  /**
   * Реализует эффект при тапе для Андроида
   *
   * @returns {void}
   */
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

    this.wavesTimeout = setTimeout(() => {
      this.setState(state => {
        let clicks = Object.assign({}, state.clicks);
        delete clicks[key];
        return { clicks };
      });
    }, 225);
  }

  /**
   * Вызывает колбек, переданный родителем
   *
   * @returns {void}
   */
  callback () {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

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
  }

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
  }

  /**
   * Возвращает хранилище для экземпляра компонента
   *
   * @returns {Object} Хранилище для текущего экземпляра компонента
   */
  getStorage = () => {
    return storage[this.id];
  }

  /**
   * Берет ref на DOM-ноду из экземпляра Touch
   *
   * @param {React.Component} container Touch component instance
   * @returns {void}
   */
  getContainer = (container) => {
    if (container && container.container) {
      this.container = container.container;
    }
    return;
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
    const Component = this.props.onClick ? Touch : this.props.component;
    const classes = classnames(baseClassNames, this.props.className, {
      'Tappable--active': active,
      'Tappable--inactive': !active
    });

    let props = {};

    if (this.props.onClick) {
      props.component = this.props.component;
      props.onStart = this.onStart;
      props.onMove = this.onMove;
      props.onEnd = this.onEnd;
      props.ref = this.getContainer;
    }

    const nativeProps = removeObjectKeys(Object.assign({}, this.props), [
      'onClick',
      'children',
      'className',
      'component'
    ]);

    return (
      <Component className={classes} {...props} {...nativeProps}>
        {osname === ANDROID && (
          <span className="Tappable__waves" ref={this.getContainer}>
            {Object.keys(clicks).map(k => (
              <span className="Tappable__wave" style={{ top: clicks[k].y, left: clicks[k].x }} key={k} />
            ))}
          </span>
        )}
        {this.props.children}
      </Component>
    );
  }
}
