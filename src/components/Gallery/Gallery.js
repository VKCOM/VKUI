import './Gallery.css';
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
    this.state = {
      containerWidth: 0,
      current: 0,
      deltaX: 0,
      shiftX: 0,
      slides: [],
      animation: true,
      duration: 0.24
    };

    this.slides = this.getChildren(props.children);
  }

  static propTypes = {
    activePanel: PropTypes.string,
    prevPanel: PropTypes.string,
    nextPanel: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    slideWidth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    autoplay: PropTypes.number
  };

  static defaultProps = {
    slideWidth: '100%',
    children: '',
    autoplay: 0
  };

  slidesStore = {};

  initializeSlides () {
    const slides = this.getSlidesCoords();
    const containerWidth = this.container.offsetWidth;
    const layerWidth = slides.reduce((val, slide) => slide.width + val, 0);
    const min = -layerWidth + containerWidth;
    const max = 0;

    this.setState({ min, max, layerWidth, containerWidth, slides });
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
    const targetIndent = this.validateIndent(-1 * coordX);

    return targetIndent;
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
      shiftX: this.calculateIndent(targetIndex),
      current: targetIndex
    });

    if (this.timeout) {
      this.clearTimeout();
      this.setTimeout(this.props.autoplay);
    }
  };

  next = () => {
    const { slides, current } = this.state;
    const targetIndex = current < slides.length - 1 ? current + 1 : current;

    this.go(targetIndex);
  };

  prev = () => {
    const { current } = this.state;
    const targetIndex = current > 0 ? current - 1 : current;

    this.go(targetIndex);
  };

  onStart = (e) => {
    this.setState({
      animation: false,
      startT: e.startT
    });
  };

  onMove = (e) => {
    if (!this.isDraggable()) {
      return;
    }

    if (e.isSlideX) {
      if (this.state.deltaX !== e.shiftX || this.state.dragging !== e.isSlideX) {
        this.setState({
          deltaX: e.shiftX,
          dragging: e.isSlideX
        });
      }
      e.originalEvent.preventDefault();
      e.originalEvent.stopPropagation();

      return true;
    }
  };

  onEnd = (e) => {
    const targetIndex = e.isSlide ? this.getTarget() : this.state.current;

    this.setState({
      shiftX: this.calculateIndent(targetIndex),
      deltaX: 0,
      animation: true,
      current: targetIndex,
      duration: '.24'
    });

    if (this.timeout) {
      this.clearTimeout();
      this.setTimeout(this.props.autoplay);
    }

    return true;
  };

  onResize = () => {
    this.initializeSlides();

    const { layerWidth } = this.state;
    const newContainerWidth = this.container.offsetWidth;

    this.setState({
      shiftX: this.calculateIndent(this.state.current),
      containerWidth: newContainerWidth,
      min: -layerWidth + newContainerWidth,
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
  }

  clearTimeout = () => {
    clearTimeout(this.timeout);
  }

  getChildren (children) {
    return [].concat(children || this.props.children).reduce(this.reduceChildren, []);
  }

  reduceChildren = (acc, item, i) => {
    if (item) {
      const key = item.props.key || item.props.id || `slide-${i}`;
      const ref = this.getSlideRef(i);

      acc.push(<div className="Gallery__slide" key={key} ref={ref}>{item}</div>);
    }

    return acc;
  }

  getContainerRef = (container) => {
    this.container = container;
  };

  getSlideRef = (id) => (slide) => {
    this.slidesStore[`slide-${id}`] = slide;
  }

  componentDidMount () {
    this.initializeSlides();
    window.addEventListener('resize', this.onResize);

    if (this.props.autoplay) {
      this.setTimeout(this.props.autoplay);
    }
  }

  componentDidUpdate () {
    if (this.isChildrenDirty) {
      this.isChildrenDirty = false;
      this.initializeSlides();
    }
  }

  componentWillReceiveProps (nextProps) {
    this.slides = this.getChildren();
    this.isChildrenDirty = true;

    if (nextProps.autoplay && !this.props.autoplay) {
      if (nextProps.autoplay) {
        this.setTimeout(nextProps.autoplay);
      }
    }
    if (!nextProps.autoplay && this.props.autoplay) {
      this.clearTimeout();
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);

    this.clearTimeout();
  }

  render () {
    const { animation, duration, current, dragging } = this.state;
    const { className, style, slideWidth } = this.props;
    const indent = dragging ? this.calculateDragIndent() : this.calculateIndent(current);
    const classname = classnames(baseClassNames, className, {
      'Gallery--dragging': dragging
    });
    const layerStyle = {
      transform: `translateX(${indent}px)`,
      transition: animation ? `transform ${duration}s cubic-bezier(.1, 0, .25, 1)` : 'none'
    };

    return (
      <div className={classname} style={style} ref={this.getContainerRef}>
        <Touch
          useCapture={true}
          className="Gallery__viewport"
          onStartX={this.onStart}
          onMoveX={this.onMove}
          onEnd={this.onEnd}
          style={{ width: slideWidth }}
        >
          <div className="Gallery__layer" style={layerStyle}>
            {this.slides}
          </div>
        </Touch>
        {this.isDraggable() ? (
          <div className="Gallery__control">
            <div className="Gallery__prev" onClick={this.prev} />
            <div className="Gallery__next" onClick={this.next} />
          </div>
        ) : null}
      </div>
    );
  }
}
