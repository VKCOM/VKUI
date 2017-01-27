import React, { Component } from 'react';
import { getSupportedEvents, coordX, coordY } from './TouchUtils';
import removeObjectKeys from '../../lib/removeObjectKeys';

const events = getSupportedEvents();

export default class Touch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gesture: {}
    };
  }

  /**
   * Обработчик событий touchstart
   *
   * @param {Object} e Браузерное событие
   * @param {Object} props Component props
   * @returns {void}
   */
  onStart = (e) => {
    this.setState({
      gesture: {
        startX: coordX(e),
        startY: coordY(e),
        startT: new Date(),
        isPressed: true
      }
    });

    // Вызываем нужные колбеки из props

    if (this.props.onStart) {
      this.props.onStart(this.state.gesture);
    }

    if (this.props.onStartX) {
      this.props.onStartX(this.state.gesture);
    }

    if (this.props.onStartY) {
      this.props.onStartY(this.state.gesture);
    }

    document.addEventListener(events[1], this.onMove);
    document.addEventListener(events[2], this.onEnd);
    document.addEventListener(events[3], this.onEnd);
  }

  /**
   * Обработчик событий touchmove
   *
   * @param {Object} e Браузерное событие
   * @param {Object} props Component props
   * @returns {void}
   */
  onMove = (e) => {
    const { isPressed, isX, isY, startX, startY } = this.state.gesture;

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
        let willBeSlidedX = (willBeX && !!this.props.onMoveX) || !!this.props.onMove;
        let willBeSlidedY = (willBeY && !!this.props.onMoveY) || !!this.props.onMove;

        this.setState({
          gesture: {
            ...this.state.gesture,
            isY: willBeY,
            isX: willBeX,
            isSlideX: willBeSlidedX,
            isSlideY: willBeSlidedY,
            isSlide: willBeSlidedX || willBeSlidedY
          }
        });
      }

      if (this.state.gesture.isSlide) {
        this.setState({
          gesture: {
            ...this.state.gesture,
            shiftX,
            shiftY,
            shiftXAbs,
            shiftYAbs
          }
        });

        // Вызываем нужные колбеки из props

        if (this.props.onMove) {
          this.props.onMove(this.state.gesture);
          e.preventDefault();
        }

        if (this.state.gesture.isSlideX && this.props.onMoveX) {
          this.props.onMoveX(this.state.gesture);
          e.preventDefault();
        }

        if (this.state.gesture.isSlideY && this.props.onMoveY) {
          this.props.onMoveY(this.state.gesture);
          e.preventDefault();
        }
      }
    }
  }

  /**
   * Обработчик событий touchend, touchcancel
   *
   * @param {Object} e Браузерное событие
   * @param {Object} props Component props
   * @returns {void}
   */
  onEnd = (e) => {
    const { isPressed, isSlide, isSlideX, isSlideY } = this.state.gesture;

    if (isPressed) {
      // Вызываем нужные колбеки из props

      if (this.props.onEnd) {
        this.props.onEnd();
      }

      if (isSlideY && this.props.onEndY) {
        this.props.onEndY();
      }

      if (isSlideX && this.props.onEndX) {
        this.props.onEndX();
      }
    }

    this.setState({
      // Если закончили жест на ссылке, выставляем флаг для отмены перехода
      cancelClick: e.target.tagName === 'A' && isSlide,
      gesture: {}
    });

    document.removeEventListener(events[1], this.onMove);
    document.removeEventListener(events[2], this.onEnd);
    document.removeEventListener(events[3], this.onEnd);
  }

  /**
   * Обработчик событий dragstart
   * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
   *
   * @param {Object} e Браузерное событие
   * @returns {void}
   */
  onDragStart = (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
      return e.preventDefault();
    }
  }

  /**
   * Обработчик клика по компоненту
   * Отменяет переход по вложенной ссылке, если был зафиксирован свайп
   *
   * @param {Object} e Браузерное событие
   * @returns {void}
   */
  onClick = (e) => {
    if (this.state.cancelClick) {
      this.setState({ cancelClick: false });

      return e.preventDefault();
    }
  }

  render() {
    const handlers = {
      [events[0]]: this.onStart,
      onDragStart: this.onDragStart,
      onClick: this.onClick
    };
    const nativeProps = removeObjectKeys(Object.assign({}, this.props), [
      'onStart',
      'onStartX',
      'onStartY',
      'onMove',
      'onMoveX',
      'onMoveY',
      'onEnd',
      'onEndX',
      'onEndY'
    ])

    return <div {...handlers} {...nativeProps}>{this.props.children}</div>;
  }
}
