import React, { Component, ElementType, HTMLAttributes } from 'react';
import Touch, { TouchEvent, TouchEventHandler, TouchProps } from '../Touch/Touch';
import TouchRootContext from '../Touch/TouchContext';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { ANDROID } from '../../lib/platform';
import { getOffsetRect } from '../../lib/offset';
import { coordX, coordY, VKUITouchEvent, VKUITouchEventHander } from '../../lib/touch';
import { HasPlatform, HasRootRef, OldRef, RefWithCurrent } from '../../types';
import withPlatform from '../../hoc/withPlatform';

export interface TappableProps extends HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasPlatform {
  Component?: ElementType;
  activeEffectDelay?: number;
  disabled?: boolean;
  stopPropagation?: boolean;
  href?: string;
  target?: string;
}

export interface TappableState {
  clicks?: {
    [index: string]: {
      x: number;
      y: number;
    };
  };
  active?: boolean;
  ts?: number;
}

export interface RootComponentProps extends TouchProps {
  ref?: OldRef<HTMLElement> | RefWithCurrent<HTMLElement>;
}

export interface StorageItem {
  activeTimeout: number;
  timeout?: number;
  stop(): void;
}

export interface Storage {
  [index: string]: StorageItem;
}

export type GetStorage = () => StorageItem;

const ts = () => +Date.now();

export const ACTIVE_DELAY = 70;
export const ACTIVE_EFFECT_DELAY = 600;

let storage: Storage = {};

/*
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 */
function deactivateOtherInstances(exclude?: string) {
  Object.keys(storage).filter((id: string) => id !== exclude).forEach((id: string) => {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();

    delete storage[id];
  });
}

class Tappable extends Component<TappableProps, TappableState> {
  constructor(props: TappableProps) {
    super(props);
    this.id = Math.round(Math.random() * 1e8).toString(16);
    this.state = {
      clicks: {},
      active: false,
      ts: null,
    };
    this.isSlide = false;
  }

  id: string;

  isSlide: boolean;

  insideTouchRoot: boolean;

  container: HTMLElement;

  timeout: number;

  wavesTimeout: number;

  static defaultProps: TappableProps = {
    Component: 'div',
    role: 'button',
    stopPropagation: false,
    disabled: false,
    activeEffectDelay: ACTIVE_EFFECT_DELAY,
  };

  /*
   * Обрабатывает событие touchstart
   */
  onStart: TouchEventHandler = ({ originalEvent }: TouchEvent) => {
    !this.insideTouchRoot && this.props.stopPropagation && originalEvent.stopPropagation();
    if (originalEvent.touches && originalEvent.touches.length > 1) {
      deactivateOtherInstances();
      return;
    }

    if (this.props.platform === ANDROID) {
      this.onDown(originalEvent);
    }

    storage[this.id] = {
      stop: this.stop,
      activeTimeout: window.setTimeout(this.start, ACTIVE_DELAY),
    };
  };

  /*
   * Обрабатывает событие touchmove
   */
  onMove: TouchEventHandler = ({ originalEvent, shiftXAbs, shiftYAbs }: TouchEvent) => {
    !this.insideTouchRoot && this.props.stopPropagation && originalEvent.stopPropagation();
    if (shiftXAbs > 20 || shiftYAbs > 20) {
      this.isSlide = true;
      this.stop();
    }
  };

  /*
   * Обрабатывает событие touchend
   */
  onEnd: TouchEventHandler = ({ originalEvent }: TouchEvent) => {
    !this.insideTouchRoot && this.props.stopPropagation && originalEvent.stopPropagation();
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

  /*
   * Реализует эффект при тапе для Андроида
   */
  onDown: VKUITouchEventHander = (e: VKUITouchEvent) => {
    if (this.props.platform === ANDROID) {
      const { top, left } = getOffsetRect(this.container);
      const x = coordX(e) - left;
      const y = coordY(e) - top;
      const key = 'wave' + Date.now().toString();

      this.setState((state: TappableState): TappableState => {
        return {
          clicks: {
            ...state.clicks,
            [key]: {
              x,
              y,
            },
          },
        };
      });

      this.wavesTimeout = window.setTimeout(() => {
        this.setState((state: TappableState): TappableState => {
          let clicks = { ...state.clicks };
          delete clicks[key];
          return { clicks };
        });
      }, 225);
    }
  };

  /*
   * Устанавливает активное выделение
   */
  start: VoidFunction = () => {
    if (!this.state.active) {
      this.setState({
        active: true,
        ts: ts(),
      });
    }
    deactivateOtherInstances(this.id);
  };

  /*
   * Снимает активное выделение
   */
  stop: VoidFunction = () => {
    if (this.state.active) {
      this.setState({
        active: false,
        ts: null,
      });
    }
    if (this.getStorage()) {
      clearTimeout(this.getStorage().activeTimeout);
      delete storage[this.id];
    }
  };

  /*
   * Возвращает хранилище для экземпляра компонента
   */
  getStorage: GetStorage = () => {
    return storage[this.id];
  };

  /*
   * Берет ref на DOM-ноду из экземпляра Touch
   */
  getRef: OldRef<HTMLElement> = (container: HTMLElement) => {
    this.container = container;

    const getRootRef = this.props.getRootRef;
    if (getRootRef) {
      if (typeof getRootRef === 'function') {
        getRootRef(container);
      } else {
        getRootRef.current = container;
      }
    }
  };

  componentWillUnmount() {
    if (storage[this.id]) {
      clearTimeout(storage[this.id].timeout);
      clearTimeout(storage[this.id].activeTimeout);

      delete storage[this.id];
    }

    clearTimeout(this.wavesTimeout);
  }

  render() {
    const { clicks, active } = this.state;
    const { children, className, Component, activeEffectDelay,
      stopPropagation, getRootRef, platform, ...restProps } = this.props;

    const classes = classNames(getClassName('Tappable', platform), className, {
      'Tappable--active': active,
      'Tappable--inactive': !active,
    });

    const RootComponent = !restProps.disabled ? Touch : Component;
    let props: RootComponentProps = {};
    if (!restProps.disabled) {
      props.Component = Component;
      /* eslint-disable */
      props.onStart = this.onStart;
      props.onMove = this.onMove;
      props.onEnd = this.onEnd;
      /* eslint-enable */
      props.getRootRef = this.getRef;
    } else {
      props.ref = this.getRef;
    }

    return (
      <TouchRootContext.Consumer>
        {(insideTouchRoot: boolean) => {
          this.insideTouchRoot = insideTouchRoot;

          return (
            <RootComponent {...restProps} className={classes} {...props}>
              {platform === ANDROID &&
              <span className="Tappable__waves">
                {Object.keys(clicks).map((k: string) => {
                  return (
                    <span className="Tappable__wave" style={{ top: clicks[k].y, left: clicks[k].x }} key={k} />
                  );
                })}
              </span>
              }
              {children}
            </RootComponent>
          );
        }}
      </TouchRootContext.Consumer>
    );
  }
}

export default withPlatform(Tappable);
