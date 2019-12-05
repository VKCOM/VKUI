import React, { Component, HTMLAttributes, DragEvent, ElementType, MouseEvent } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import { getSupportedEvents, coordX, coordY, touchEnabled, VKUITouchEvent } from '../../lib/touch';
import { HasRootRef } from '../../types/props';
import { canUseDOM } from '../../lib/dom';

export interface TouchProps extends HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
  onStart?(outputEvent: OutputEvent): void;
  onStartX?(outputEvent: OutputEvent): void;
  onStartY?(outputEvent: OutputEvent): void;
  onMove?(outputEvent: OutputEvent): void;
  onMoveX?(outputEvent: OutputEvent): void;
  onMoveY?(outputEvent: OutputEvent): void;
  onEnd?(outputEvent: OutputEvent): void;
  onEndX?(outputEvent: OutputEvent): void;
  onEndY?(outputEvent: OutputEvent): void;
  useCapture?: boolean;
  Component?: ElementType;
}

export interface TouchContext {
  document: Requireable<{}>;
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

export interface OutputEvent extends Gesture {
  originalEvent: VKUITouchEvent;
}

export type EventHandler = (e: VKUITouchEvent) => void;
export type ClickHandler = (e: MouseEvent<HTMLElement>) => void;
export type DragHandler = (e: DragEvent<HTMLElement>) => void;
export type GetRef = (container: HTMLElement) => void;

const events = getSupportedEvents();

export default class Touch extends Component<TouchProps> {
  constructor(props: TouchProps) {
    super(props);
    this.cancelClick = false;
  }

  cancelClick: boolean;
  gesture: Partial<Gesture> = {};
  container: HTMLElement;

  static defaultProps: TouchProps = {
    Component: 'div',
    children: '',
    useCapture: false,
  };

  static contextTypes: TouchContext = {
    document: PropTypes.object,
  };

  get document() {
    return this.context.document || document;
  }

  componentDidMount() {
    if (canUseDOM) {
      this.container.addEventListener(events[0], this.onStart, { capture: this.props.useCapture, passive: false });
      touchEnabled && this.subscribe(this.container);
    }
  }

  componentWillUnmount() {
    this.container.removeEventListener(events[0], this.onStart);
    touchEnabled && this.unsubscribe(this.container);
  }

  /**
   * Обработчик событий touchstart
   *
   * @param {Object} e Браузерное событие
   * @return {void}
   */
  onStart: EventHandler = (e: VKUITouchEvent) => {
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
  onMove: EventHandler = (e: VKUITouchEvent) => {
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
        const outputEvent: OutputEvent = {
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
  onEnd: EventHandler = (e: VKUITouchEvent) => {
    const { isPressed, isSlide, isSlideX, isSlideY } = this.gesture;

    if (isPressed) {
      // Вызываем нужные колбеки из props
      const outputEvent: OutputEvent = {
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

    const target = e.target as HTMLElement;

    // Если закончили жест на ссылке, выставляем флаг для отмены перехода
    this.cancelClick = target.tagName === 'A' && isSlide;
    this.gesture = {};

    !touchEnabled && this.unsubscribe(this.document);
  };

  subscribe(element: HTMLElement) {
    element.addEventListener(events[1], this.onMove, { capture: this.props.useCapture, passive: false });
    element.addEventListener(events[2], this.onEnd, { capture: this.props.useCapture, passive: false });
    element.addEventListener(events[3], this.onEnd, { capture: this.props.useCapture, passive: false });
  }

  unsubscribe(element: HTMLElement) {
    element.removeEventListener(events[1], this.onMove);
    element.removeEventListener(events[2], this.onEnd);
    element.removeEventListener(events[3], this.onEnd);
  }

  /**
   * Обработчик событий dragstart
   * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
   *
   * @param {Object} e Браузерное событие
   * @return {void}
   */
  onDragStart: DragHandler = (e: DragEvent<HTMLElement>) => {
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
  onClick: ClickHandler = (e: MouseEvent<HTMLElement>) => {
    if (this.cancelClick) {
      this.cancelClick = false;
      e.preventDefault();
    }
    this.props.onClick && this.props.onClick(e);
  };

  getRef: GetRef = (container: HTMLElement) => {
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

  render() {
    const {
      onStart,
      onStartX,
      onStartY,
      onMove,
      onMoveX,
      onMoveY,
      onEnd,
      onEndX,
      onEndY,
      useCapture,
      Component,
      getRootRef,
      ...restProps
    } = this.props;

    return (
      <Component {...restProps} onDragStart={this.onDragStart} onClick={this.onClick} ref={this.getRef}>
        {this.props.children}
      </Component>
    );
  }
}
