import * as React from 'react';
import {
  getSupportedEvents,
  coordX,
  coordY,
  touchEnabled,
  VKUITouchEvent,
  VKUITouchEventHander,
} from '../../lib/touch';
import { HasRootRef } from '../../types';
import { canUseDOM, DOMProps, withDOM } from '../../lib/dom';
import { setRef, noop } from '../../lib/utils';

export interface TouchProps extends React.AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
  onEnter?(outputEvent: MouseEvent): void;
  onLeave?(outputEvent: MouseEvent): void;
  onStart?(outputEvent: TouchEvent): void;
  onStartX?(outputEvent: TouchEvent): void;
  onStartY?(outputEvent: TouchEvent): void;
  onMove?(outputEvent: TouchEvent): void;
  onMoveX?(outputEvent: TouchEvent): void;
  onMoveY?(outputEvent: TouchEvent): void;
  onEnd?(outputEvent: TouchEvent): void;
  onEndX?(outputEvent: TouchEvent): void;
  onEndY?(outputEvent: TouchEvent): void;
  useCapture?: boolean;
  noSlideClick?: boolean;
  Component?: React.ElementType;
}

export interface Gesture {
  startX?: number;
  startY?: number;
  startT?: Date;
  isPressed?: boolean;
  isY?: boolean;
  isX?: boolean;
  isSlideX?: boolean;
  isSlideY?: boolean;
  isSlide?: boolean;
  shiftX?: number;
  shiftY?: number;
  shiftXAbs?: number;
  shiftYAbs?: number;
}

export interface TouchEvent extends Gesture {
  originalEvent: VKUITouchEvent;
}

export type TouchEventHandler = (e: TouchEvent) => void;
export type ClickHandler = (e: React.MouseEvent<HTMLElement>) => void;
export type DragHandler = (e: React.DragEvent<HTMLElement>) => void;

const events = getSupportedEvents();

class Touch extends React.Component<TouchProps & DOMProps> {
  didSlide = false;
  gesture: Partial<Gesture> = {};
  container: HTMLElement;

  static defaultProps: TouchProps = {
    Component: 'div',
    children: '',
    useCapture: false,
    noSlideClick: false,
  };

  get document() {
    return this.props.document;
  }

  componentDidMount() {
    if (canUseDOM) {
      this.container.addEventListener(events[0], this.onStart, { capture: this.props.useCapture, passive: false });
      touchEnabled && this.subscribe(this.container);

      this.container.addEventListener('mouseenter', this.onEnter, { capture: this.props.useCapture, passive: true });
      this.container.addEventListener('mouseleave', this.onLeave, { capture: this.props.useCapture, passive: true });
    }
  }

  componentWillUnmount() {
    this.container.removeEventListener(events[0], this.onStart);
    this.unsubscribe();

    this.container.removeEventListener('mouseenter', this.onEnter);
    this.container.removeEventListener('mouseleave', this.onLeave);
  }

  /**
   * Обработчик событий mouseenter
   *
   * @param {Object} e Браузерное событие
   * @return {void}
   */
  onEnter = (e: MouseEvent) => {
    if (this.props.onEnter) {
      this.props.onEnter(e);
    }
  };

  /**
   * Обработчик событий mouseleave
   *
   * @param {Object} e Браузерное событие
   * @param {boolean} simulated флаг, с которым обработчик был вызван симулятивно
   * @return {void}
   */
  onLeave = (e: MouseEvent) => {
    if (this.props.onLeave) {
      this.props.onLeave(e);
    }
  };

  /**
   * Обработчик событий touchstart
   *
   * @param {Object} e Браузерное событие
   * @return {void}
   */
  onStart: VKUITouchEventHander = (e: VKUITouchEvent) => {
    this.gesture = {
      startX: coordX(e),
      startY: coordY(e),
      startT: new Date(),
      isPressed: true,
    };

    // Вызываем нужные колбеки из props
    const outputEvent = {
      ...this.gesture,
      originalEvent: e,
    };

    if (this.props.onStart) {
      this.props.onStart(outputEvent);
    }

    if (this.props.onStartX) {
      this.props.onStartX(outputEvent);
    }

    if (this.props.onStartY) {
      this.props.onStartY(outputEvent);
    }

    !touchEnabled && this.subscribe(this.document);
  };

  /**
   * Обработчик событий touchmove
   *
   * @param {Object} e Браузерное событие
   * @return {void}
   */
  onMove: VKUITouchEventHander = (e: VKUITouchEvent) => {
    const { isPressed, isX, isY, startX, startY } = this.gesture;

    if (isPressed) {
      // смещения
      const shiftX = coordX(e) - startX;
      const shiftY = coordY(e) - startY;

      // абсолютные значения смещений
      const shiftXAbs = Math.abs(shiftX);
      const shiftYAbs = Math.abs(shiftY);

      // Если определяем мультитач, то прерываем жест
      if (!!e.touches && e.touches.length > 1) {
        return this.onEnd(e);
      }

      // если мы ещё не определились
      if (!isX && !isY) {
        let willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
        let willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
        let willBeSlidedX = willBeX && !!this.props.onMoveX || !!this.props.onMove;
        let willBeSlidedY = willBeY && !!this.props.onMoveY || !!this.props.onMove;

        this.gesture.isY = willBeY;
        this.gesture.isX = willBeX;
        this.gesture.isSlideX = willBeSlidedX;
        this.gesture.isSlideY = willBeSlidedY;
        this.gesture.isSlide = willBeSlidedX || willBeSlidedY;
      }

      if (this.gesture.isSlide) {
        this.gesture.shiftX = shiftX;
        this.gesture.shiftY = shiftY;
        this.gesture.shiftXAbs = shiftXAbs;
        this.gesture.shiftYAbs = shiftYAbs;

        // Вызываем нужные колбеки из props
        const outputEvent: TouchEvent = {
          ...this.gesture,
          originalEvent: e,
        };

        if (this.props.onMove) {
          this.props.onMove(outputEvent);
        }

        if (this.gesture.isSlideX && this.props.onMoveX) {
          this.props.onMoveX(outputEvent);
        }

        if (this.gesture.isSlideY && this.props.onMoveY) {
          this.props.onMoveY(outputEvent);
        }
      }
    }
  };

  /**
   * Обработчик событий touchend, touchcancel
   *
   * @param {Object} e Браузерное событие
   * @return {void}
   */
  onEnd: VKUITouchEventHander = (e: VKUITouchEvent) => {
    const { isPressed, isSlide, isSlideX, isSlideY } = this.gesture;

    if (isPressed) {
      // Вызываем нужные колбеки из props
      const outputEvent: TouchEvent = {
        ...this.gesture,
        originalEvent: e,
      };

      if (this.props.onEnd) {
        this.props.onEnd(outputEvent);
      }

      if (isSlideY && this.props.onEndY) {
        this.props.onEndY(outputEvent);
      }

      if (isSlideX && this.props.onEndX) {
        this.props.onEndX(outputEvent);
      }
    }

    this.didSlide = isSlide;
    this.gesture = {};

    // Если это был тач-евент, симулируем отмену hover
    if (e.type === 'touchend' || e.type === 'touchcancel') {
      this.onLeave(e);
    }

    !touchEnabled && this.unsubscribe();
  };

  subscribe(element: HTMLElement | Document) {
    this.unsubscribe();
    const listenerParams = { capture: this.props.useCapture, passive: false };
    element.addEventListener(events[1], this.onMove, listenerParams);
    element.addEventListener(events[2], this.onEnd, listenerParams);
    element.addEventListener(events[3], this.onEnd, listenerParams);
    this.unsubscribe = () => {
      // Здесь нужен последний аргумент с такими же параметрами, потому что
      // некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
      // https://github.com/VKCOM/VKUI/issues/444
      element.removeEventListener(events[1], this.onMove, listenerParams);
      element.removeEventListener(events[2], this.onEnd, listenerParams);
      element.removeEventListener(events[3], this.onEnd, listenerParams);
      this.unsubscribe = noop;
    };
  }
  unsubscribe = noop;

  /**
   * Обработчик событий dragstart
   * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
   *
   * @param {Object} e Браузерное событие
   * @return {void}
   */
  onDragStart: DragHandler = (e: React.DragEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.tagName === 'IMG') {
      e.preventDefault();
    }
  };

  /**
   * Обработчик клика по компоненту
   * Отменяет переход по вложенной ссылке, если был зафиксирован свайп
   *
   * @param {Object} e Браузерное событие
   * @return {void}
   */
  postGestureClick: ClickHandler = (e) => {
    const { onClickCapture, noSlideClick } = this.props;
    if (!this.didSlide) {
      return onClickCapture && onClickCapture(e);
    }
    if ((e.target as HTMLElement).tagName === 'A') {
      e.preventDefault();
    }
    if (noSlideClick) {
      e.stopPropagation();
    } else {
      onClickCapture && onClickCapture(e);
    }
    this.didSlide = false;
  };

  getRef: React.RefCallback<HTMLElement> = (container) => {
    this.container = container;
    setRef(container, this.props.getRootRef);
  };

  render() {
    const {
      onStart,
      onStartX,
      onStartY,
      onMove,
      onMoveX,
      onMoveY,
      onLeave,
      onEnter,
      onEnd,
      onEndX,
      onEndY,
      useCapture,
      Component,
      getRootRef,
      noSlideClick,
      window,
      document,
      ...restProps
    } = this.props;

    return (
      <Component
        {...restProps}
        onDragStart={this.onDragStart}
        onClickCapture={this.postGestureClick}
        ref={this.getRef}
      >
        {this.props.children}
      </Component>
    );
  }
}

export default withDOM<TouchProps>(Touch);
