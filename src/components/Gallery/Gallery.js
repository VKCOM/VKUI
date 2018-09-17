
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import Touch from '../Touch/Touch';
import classnames from '../../lib/classnames';
import requestAnimationFrame from '../../lib/requestAnimationFrame';

const baseClassNames = getClassName('Gallery');

export default class Gallery extends Component {
  constructor (props) {
    super(props);
    const current = typeof props.slideIndex === 'number' ? props.slideIndex : props.initialSlideIndex;

    this.state = {
      containerWidth: 0,
      current,
      deltaX: 0,
      shiftX: 0,
      slides: [],
      animation: false,
      duration: 0.24
    };

    this.slides = this.getChildren(props.children);
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    slideWidth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    autoplay: PropTypes.number,
    initialSlideIndex: PropTypes.number,
    slideIndex: PropTypes.number,
    onDragStart: PropTypes.func,
    onDragEnd: PropTypes.func,
    onChange: PropTypes.func,
    onEnd: PropTypes.func,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    bullets: PropTypes.oneOf(['dark', 'light', false])
  };

  static defaultProps = {
    slideWidth: '100%',
    children: '',
    autoplay: 0,
    initialSlideIndex: 0,
    align: 'left',
    bullets: false
  };

  slidesStore = {};

  initializeSlides (callback = () => {}) {
    const slides = this.getSlidesCoords();
    const containerWidth = this.container.offsetWidth;
    const viewportWidth = this.viewport.offsetWidth;
    const layerWidth = slides.reduce((val, slide) => slide.width + val, 0);
    const min = this.calcMin({ containerWidth, layerWidth, viewportWidth });
    const max = 0;

    this.setState({ min, max, layerWidth, containerWidth, slides }, callback);
  }

  calcMin ({ containerWidth, layerWidth, viewportWidth }) {
    switch (this.props.align) {
      case 'left':
        return containerWidth - layerWidth;
      case 'right':
        return viewportWidth - layerWidth;
      case 'center':
        return viewportWidth - (containerWidth - viewportWidth) / 2 - layerWidth;
    }
  }

  /**
   * Получает координаты и размеры каждого слайда

   * @returns {Array} Массив с объектами, описывающими габариты слайда
   */
  getSlidesCoords () {
    return [].concat(this.props.children).reduce((acc, item, i) => {
      if (item) {
        const elem = this.slidesStore[`slide-${i}`];
        const res = {
          coordX: elem.offsetLeft,
          width: elem.offsetWidth,
          id: item.props.id
        };

        acc.push(res);
      }

      return acc;
    }, []);
  }

  /**
   * Считает отступ слоя галереи во время драга
   *
   * @returns {Number} Значения отступа
   */
  calculateDragIndent () {
    const { shiftX, deltaX, min, max } = this.state;
    const indent = shiftX + deltaX;
    if (indent > max) {
      return max + Number((indent - max) / 3);
    } else if (indent < min) {
      return min + Number((indent - min) / 3);
    }

    return indent;
  }

  /**
   * Считает отступ слоя галереи
   *
   * @param {Number} targetIndex ID целевого слайда
   * @returns {Number} Значения отступа
   */
  calculateIndent (targetIndex) {
    const { slides } = this.state;

    if (!this.isDraggable()) {
      return 0;
    }

    const coordX = slides.length ? slides[targetIndex].coordX : 0;
    return this.validateIndent(-1 * coordX);
  }

  validateIndent (value) {
    const { min, max } = this.state;

    if (value < min) {
      return min;
    } else if (value > max) {
      return max;
    }

    return value;
  }

  isDraggable () {
    return this.state.layerWidth > this.state.containerWidth;
  }

  /**
   * Получает индекс слайда, к которому будет осуществлен переход
   *
   * @returns {Number} Индекс слайда
   */
  getTarget () {
    const { slides, current, deltaX, shiftX, startT } = this.state;
    const expectDeltaX = deltaX / (new Date() - startT) * 240 * 0.6;
    const shift = shiftX + deltaX + expectDeltaX;
    const direction = deltaX < 0 ? 1 : -1;

    // Находим ближайшую границу слайда к текущему отступу
    let targetIndex = slides.reduce((val, item, index) => {
      const previousValue = Math.abs(slides[val].coordX + shift);
      const currentValue = Math.abs(item.coordX + shift);

      return previousValue < currentValue ? val : index;
    }, current);

    if (targetIndex === current) {
      let targetSlide = current + direction;

      if (targetSlide >= 0 && targetSlide < slides.length) {
        if (Math.abs(deltaX) > slides[targetSlide].width * 0.05) {
          targetIndex = targetSlide;
        }
      }
    }

    return targetIndex;
  }

  go = (targetIndex) => {
    this.setState({
      animation: true,
      shiftX: this.calculateIndent(targetIndex),
      current: targetIndex
    });

    if (this.timeout) {
      this.clearTimeout();
      this.setTimeout(this.props.autoplay);
    }
  };

  onStart = (e) => {
    this.setState({
      animation: false,
      startT: e.startT
    });
  };

  onMoveX = (e) => {
    if (!this.isDraggable()) {
      return;
    }

    e.originalEvent.preventDefault();

    if (e.isSlideX) {
      this.props.onDragStart && this.props.onDragStart();
      if (this.state.deltaX !== e.shiftX || this.state.dragging !== e.isSlideX) {
        this.setState({
          deltaX: e.shiftX,
          dragging: e.isSlideX
        });
      }

      return true;
    }
  };

  onEnd = (e) => {
    const targetIndex = e.isSlide ? this.getTarget() : this.state.current;
    this.props.onDragEnd && this.props.onDragEnd();

    this.setState({
      shiftX: this.calculateIndent(targetIndex),
      deltaX: 0,
      animation: true,
      current: targetIndex,
      duration: '.24'
    });

    if (this.props.onEnd) {
      this.props.onEnd({
        targetIndex
      });
    }

    if (this.timeout) {
      this.clearTimeout();
      this.setTimeout(this.props.autoplay);
    }

    return true;
  };

  onResize = () => {
    this.initializeSlides();

    const { layerWidth } = this.state;
    const containerWidth = this.container.offsetWidth;
    const viewportWidth = this.viewport.offsetWidth;

    this.setState({
      shiftX: this.calculateIndent(this.state.current),
      containerWidth,
      min: this.calcMin({ layerWidth, containerWidth, viewportWidth }),
      animation: false
    }, () => {
      requestAnimationFrame(() => this.setState({ animation: true }));
    });
  };

  setTimeout = (duration) => {
    this.timeout = setTimeout(() => {
      const { slides, current } = this.state;
      const targetIndex = current < slides.length - 1 ? current + 1 : 0;

      this.go(targetIndex);
    }, duration);
  };

  clearTimeout = () => {
    clearTimeout(this.timeout);
  };

  getChildren (children) {
    return [].concat(children || this.props.children).reduce(this.reduceChildren, []);
  }

  reduceChildren = (acc, item, i) => {
    if (item) {
      const ref = this.getSlideRef(i);
      acc.push(<div className="Gallery__slide" key={`slide-${i}`} ref={ref}>{item}</div>);
    }

    return acc;
  };

  getContainerRef = (container) => {
    this.container = container;
  };

  getViewportRef = (viewport) => {
    this.viewport = viewport ? viewport.container : {};
  };

  getSlideRef = (id) => (slide) => {
    this.slidesStore[`slide-${id}`] = slide;
  };

  componentDidMount () {
    this.initializeSlides(() => {
      this.setState({
        shiftX: this.calculateIndent(this.state.current)
      });
    });
    window.addEventListener('resize', this.onResize);

    if (this.props.autoplay) {
      this.setTimeout(this.props.autoplay);
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.isChildrenDirty) {
      this.isChildrenDirty = false;
      this.initializeSlides();
    }
    if (prevState.current !== this.state.current && this.props.onChange) {
      this.props.onChange(this.state.current);
    }
  }

  componentWillReceiveProps (nextProps) {
    this.slides = this.getChildren(nextProps.children);
    this.isChildrenDirty = true;

    if (nextProps.autoplay && !this.props.autoplay) {
      if (nextProps.autoplay) {
        this.setTimeout(nextProps.autoplay);
      }
    }
    if (!nextProps.autoplay && this.props.autoplay) {
      this.clearTimeout();
    }
    if (nextProps.slideIndex !== this.props.slideIndex && typeof nextProps.slideIndex === 'number') {
      this.go(nextProps.slideIndex);
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
    this.clearTimeout();
  }

  render () {
    const { animation, duration, current, dragging } = this.state;
    const {
      children,
      slideWidth,
      autoplay,
      initialSlideIndex,
      slideIndex,
      onDragStart,
      onDragEnd,
      onChange,
      onEnd,
      align,
      bullets,
      className,
      ...restProps
    } = this.props;
    const indent = dragging ? this.calculateDragIndent() : this.calculateIndent(current);
    const layerStyle = {
      WebkitTransform: `translateX(${indent}px)`,
      transform: `translateX(${indent}px)`,
      WebkitTransition: animation ? `-webkit-transform ${duration}s cubic-bezier(.1, 0, .25, 1)` : 'none',
      transition: animation ? `transform ${duration}s cubic-bezier(.1, 0, .25, 1)` : 'none'
    };

    return (
      <div {...restProps} className={classnames(baseClassNames, className, {
        'Gallery--dragging': dragging,
        [`Gallery--${this.props.align}`]: true
      })} ref={this.getContainerRef}>
        <Touch
          className="Gallery__viewport"
          onStartX={this.onStart}
          onMoveX={this.onMoveX}
          onEnd={this.onEnd}
          style={{ width: slideWidth }}
          ref={this.getViewportRef}
        >
          <div className="Gallery__layer" style={layerStyle}>{this.slides}</div>
        </Touch>
        {this.props.bullets &&
          <div className={classnames('Gallery__bullets', { [`Gallery__bullets--${this.props.bullets}`]: true })}>
            {this.slides.map((item, index) => (
              <div className={classnames('Gallery__bullet', { 'Gallery__bullet--active': index === current })} key={index} />
            ))}
          </div>
        }
      </div>
    );
  }
}
