import './Gallery.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
// import removeObjectKeys from '../../lib/removeObjectKeys';
import Touch from '../Touch/Touch';
import classnames from '../../lib/classnames';

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
  }

  static propTypes = {
    activePanel: PropTypes.string,
    prevPanel: PropTypes.string,
    nextPanel: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
  };

  static defaultProps = {
    children: ''
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
  getSlidesCoords() {
    const children = this.getChildren();

    return children.map((item, i) => {
      const elem = this.slidesStore[`slide-${i}`];

      return {
        coordX: elem.offsetLeft,
        width: elem.offsetWidth,
        id: item.props.id
      };
    });
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
      return max + Number((indent - max) / 5);
    } else if (indent < min) {
      return min + Number((indent - min) / 5);
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

  isDraggable() {
    const { layerWidth, containerWidth } = this.state;

    return layerWidth > containerWidth;
  }


  /**
   * Получает индекс слайда, к которому будет осуществлен переход
   *
   * @returns {Number} Индекс слайда
   */
  getTarget () {
    const { slides, current, deltaX, shiftX } = this.state;
    const shift = shiftX + deltaX;
    const direction = deltaX < 0 ? 1 : -1;

    // Находим ближайшую границу слайда к текущему отступу
    let targetIndex = slides.reduce((val, item, index) => {
      const previousValue = Math.abs(slides[val].coordX + shift);
      const currentValue = Math.abs(item.coordX + shift);

      return previousValue < currentValue ? val : index;
    }, current);

    if (targetIndex == current) {
      let targetSlide = current + direction;

      if (targetSlide >= 0 && targetSlide < slides.length) {
        if (Math.abs(deltaX) > slides[targetSlide].width * 0.05) {
          targetIndex = targetSlide;
        }
      }
    }

    return targetIndex;
  }

  getChildren() {
    return [].concat(this.props.children).filter(a => !!a);
  }


  next = () => {
    const { slides, current } = this.state;
    const targetIndex = current < slides.length - 1 ? current + 1 : current;

    this.setState({
      shiftX: this.calculateIndent(targetIndex),
      current: targetIndex
    });
  };

  prev = () => {
    const { current } = this.state;
    const targetIndex = current > 0 ? current - 1 : current;

    this.setState({
      shiftX: this.calculateIndent(targetIndex),
      current: targetIndex
    });
  };

  onStart = () => {
    this.setState({ animation: false });
  };

  onMove = (e) => {
    if (!this.isDraggable()) {
      return;
    }

    if (e.isSlide) {
      this.setState({
        deltaX: e.shiftX,
        dragging: e.isSlide
      });
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

    // Костыль для того, чтобы при драге не происходило клика по вложенным ссылкам
    // setTimeout(() => this.setState({ dragging: false }), 0);
  };

  onResize = () => {
    const { layerWidth } = this.state;
    const newContainerWidth = this.refs.container.offsetWidth;

    this.setState({
      containerWidth: newContainerWidth,
      min: -layerWidth + newContainerWidth
    });
  };

  getContainerRef = (container) => {
    this.container = container;
  };

  getSlideRef = (id) => (slide) => {
    this.slidesStore[`slide-${id}`] = slide;
  }

  componentDidMount () {
    this.initializeSlides();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }

  render () {
    const { animation, duration, current, dragging } = this.state;
    const indent = dragging ? this.calculateDragIndent() : this.calculateIndent(current);
    const classname = classnames(baseClassNames, this.props.className, {
      'Gallery--dragging': dragging
    });
    const layerStyle = {
      transform: `translateX(${indent}px)`,
      transition: animation ? `transform ${duration}s cubic-bezier(.1, 0, .25, 1)` : 'none'
    };

    return (
      <div className={classname} ref={this.getContainerRef}>
        <Touch
          className="Gallery__viewport"
          onStart={this.onStart}
          onMove={this.onMove}
          onEnd={this.onEnd}
        >
          <div className="Gallery__layer" style={layerStyle}>
            {this.getChildren().map((item, i) => (
              <div className="Gallery__slide"
                key={item.props.key || item.props.id || `slide-${i}`}
                ref={this.getSlideRef(i)}
              >
                {item}
              </div>
            ))}
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
