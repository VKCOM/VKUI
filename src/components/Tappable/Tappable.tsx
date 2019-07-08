import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Touch from '../Touch/Touch';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { IS_PLATFORM_ANDROID } from '../../lib/platform';
import { getOffsetRect } from '../../lib/offset';
import { coordX, coordY } from '../../lib/touch';
import { HasChildren, HasStyleObject } from '../../types/props';

const ts = Date.now;
const baseClassNames = getClassName('Tappable');

const ACTIVE_DELAY = 70;
export const ACTIVE_EFFECT_DELAY = 600;

type Storage = {
  [id: string]: {
    activeTimeout?: number;
    timeout?: number;
    stop?: () => void;
  };
};

const storage: Storage = {};

/**
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 *
 * @param {String} exclude ID экземпляра-исключения
 */
function deactivateOtherInstances (exclude?: string) {
  Object.keys(storage)
    .filter(id => id !== exclude)
    .forEach(id => {
      clearTimeout(storage[id].activeTimeout);
      clearTimeout(storage[id].timeout);

      storage[id].stop();

      delete storage[id];
    });
}

export interface TappableProps extends HasChildren, HasStyleObject {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
  component?: keyof React.ReactHTML | typeof Touch;
  role?: string;
  activeEffectDelay?: number;
  stopPropagation?: boolean;
  disabled?: boolean;
  getRootRef?: (ref: HTMLElement | Touch) => void;
  href?: string;
}

type State = {
  clicks: {};
  active: boolean;
  ts: null | number;
};

export default class Tappable extends Component<TappableProps, State> {
  id: string = Math.round(Math.random() * 1e8).toString(16);

  timeout: number;
  wavesTimeout: number;

  container: HTMLElement | Touch;

  state: State = {
    clicks: {},
    active: false,
    ts: null
  };

  static propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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

    if (IS_PLATFORM_ANDROID) {
      this.onDown(originalEvent);
    }

    storage[this.id] = {};
    this.getStorage().stop = this.stop;
    this.getStorage().activeTimeout = window.setTimeout(this.start, ACTIVE_DELAY);
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
        const timeout = window.setTimeout(this.stop, this.props.activeEffectDelay - now + this.state.ts);
        const store = this.getStorage();

        if (store) {
          store.timeout = timeout;
        }
      }
    } else if (!this.isSlide) {
      // Очень короткий тап, включаем подсветку
      this.start();

      const timeout = window.setTimeout(this.stop, this.props.activeEffectDelay);

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
  onDown = e => {
    if (IS_PLATFORM_ANDROID && this.container instanceof HTMLElement) {
      const { top, left } = getOffsetRect(this.container);
      const x = coordX(e);
      const y = coordY(e);
      const key = 'wave' + Date.now().toString();

      this.setState(state => ({
        clicks: {
          ...state.clicks,
          [key]: {
            x: Math.round(x - left),
            y: Math.round(y - top)
          }
        }
      }));

      this.wavesTimeout = window.setTimeout(() => {
        this.setState(state => {
          let clicks = { ...state.clicks };
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
  getRef = (container: HTMLElement | Touch) => {
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
    const classes = classNames(baseClassNames, className, {
      'Tappable--active': active,
      'Tappable--inactive': !active
    });
    const tagName = component as keyof React.ReactHTML;

    const content = (
      <React.Fragment>
        {IS_PLATFORM_ANDROID && (
          <span className="Tappable__waves">
            {Object.keys(clicks).map(k => (
              <span className="Tappable__wave" style={{ top: clicks[k].y, left: clicks[k].x }} key={k} />
            ))}
          </span>
        )}
        {children}
      </React.Fragment>
    );

    return !restProps.disabled ? (
      <Touch
        component={tagName}
        onStart={this.onStart}
        onMove={this.onMove}
        onEnd={this.onEnd}
        getRootRef={this.getRef}
      >
        {content}
      </Touch>
    ) : (
      React.createElement(
        component as keyof React.ReactHTML,
        {
          ...restProps,
          className: classes,
          ref: this.getRef
        },
        content
      )
    );
  }
}
