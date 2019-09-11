import React, { Component } from 'react';
import getClassName from '../../helpers/getClassName';
import Touch from '../Touch/Touch';
import classNames from '../../lib/classNames';
import withPlatform from '../../hoc/withPlatform';
import { HasClassName, HasChildren, HasStyleObject, HasPlatform } from '../../types/props';
import { canUseDOM } from '../../lib/dom';

export interface GalleryProps extends HasStyleObject, HasChildren, HasClassName, HasPlatform {
  slideWidth?: string | number;
  autoplay?: number;
  initialSlideIndex?: number;
  slideIndex?: number;
  onDragStart?(): void;
  onDragEnd?(): void,
  onChange?(current: GalleryState['current']): void,
  onEnd?({ targetIndex }: { targetIndex: GalleryState['current'] }): void,
  align?: 'left' | 'center' | 'right',
  bullets?: 'dark' | 'light' | false
}

export interface GalleryState {
  containerWidth: number,
  layerWidth?: number,
  min?: number,
  max?: number,
  startT?: number,
  current: number,
  deltaX: number,
  shiftX: number,
  slides: GallerySlidesState[],
  animation: boolean,
  duration: number,
  dragging?: boolean
}

export interface GallerySlidesState {
  coordX: number,
  width: number
}

export class Gallery extends Component<GalleryProps, GalleryState> {
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

    this.container = React.createRef();

    this.slidesStore = {};
  }

  container: React.RefObject<HTMLDivElement>;
  slidesStore: Object;
  viewport: HTMLElement;
  timeout: number;
  isChildrenDirty: boolean;

  static defaultProps = {
    slideWidth: '100%',
    children: '',
    autoplay: 0,
    initialSlideIndex: 0,
    align: 'left',
    bullets: false
  };

  get isCenterWithCustomWidth () {
    return this.props.slideWidth === 'custom' && this.props.align === 'center';
  }

  initializeSlides (callback = () => {}) {
    const slides = React.Children.map(this.props.children, (_item, i): GallerySlidesState => {
      const elem = this.slidesStore[`slide-${i}`];
      return {
        coordX: elem.offsetLeft,
        width: elem.offsetWidth
      };
    });

    const containerWidth = this.container.current.offsetWidth;
    const viewportWidth = this.viewport.offsetWidth;
    const layerWidth = slides.reduce((val, slide) => slide.width + val, 0);

    const min = this.calcMin({ containerWidth, layerWidth, viewportWidth, slides });
    const max = this.calcMax({ viewportWidth, slides });

    this.setState({ min, max, layerWidth, containerWidth, slides }, callback);
  }

  calcMin ({ containerWidth, layerWidth, viewportWidth, slides }) {
    switch (this.props.align) {
      case 'left':
        return containerWidth - layerWidth;
      case 'right':
        return viewportWidth - layerWidth;
      case 'center':
        if (this.isCenterWithCustomWidth && slides.length) {
          const { coordX, width } = slides[slides.length - 1];
          return (viewportWidth / 2) - coordX - (width / 2);
        } else {
          return viewportWidth - (containerWidth - viewportWidth) / 2 - layerWidth;
        }
    }
  }

  calcMax ({ viewportWidth, slides }) {
    if (this.isCenterWithCustomWidth && slides.length) {
      const { width, coordX } = slides[0];
      return (viewportWidth / 2) - coordX - (width / 2);
    } else {
      return 0;
    }
  }

  /**
   * Считает отступ слоя галереи
   * @param {Number} targetIndex ID целевого слайда
   * @returns {Number} Значения отступа
   */
  calculateIndent (targetIndex) {
    const { slides } = this.state;

    if (!this.isDraggable()) {
      return 0;
    }

    const targetSlide = slides.length ? slides[targetIndex] : null;

    if (targetSlide) {
      const { coordX, width } = targetSlide;

      if (this.isCenterWithCustomWidth) {
        const viewportWidth = this.viewport.offsetWidth;
        return (viewportWidth / 2) - coordX - (width / 2);
      }

      return this.validateIndent(-1 * coordX);
    } else {
      return 0;
    }
  }

  /**
   * Считает отступ слоя галереи во время драга
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
   * @returns {Number} Индекс слайда
   */
  getTarget () {
    const { slides, current, deltaX, shiftX, startT, max } = this.state;
    const expectDeltaX = deltaX / (Date.now() - startT) * 240 * 0.6;
    const shift = shiftX + deltaX + expectDeltaX - max;
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
  }

  onMoveX = (e): void => {
    if (this.isDraggable()) {
      e.originalEvent.preventDefault();

      if (e.isSlideX) {
        this.props.onDragStart && this.props.onDragStart();

        if (this.state.deltaX !== e.shiftX || this.state.dragging !== e.isSlideX) {
          this.setState({
            deltaX: e.shiftX,
            dragging: e.isSlideX
          });
        }
      }
    }
  }

  onEnd = (e) => {
    const targetIndex = e.isSlide ? this.getTarget() : this.state.current;
    this.props.onDragEnd && this.props.onDragEnd();

    this.setState({
      shiftX: this.calculateIndent(targetIndex),
      deltaX: 0,
      animation: true,
      current: targetIndex
    });

    if (this.props.onEnd) {
      this.props.onEnd({ targetIndex });
    }

    if (this.timeout) {
      this.clearTimeout();
      this.setTimeout(this.props.autoplay);
    }

    return true;
  }

  onResize = () => {
    this.initializeSlides();

    const { layerWidth, slides } = this.state;
    const containerWidth = this.container.current.offsetWidth;

    const viewportWidth = this.viewport.offsetWidth;

    this.setState({
      shiftX: this.calculateIndent(this.state.current),
      containerWidth,
      min: this.calcMin({ layerWidth, containerWidth, viewportWidth, slides }),
      max: this.calcMax({ viewportWidth, slides }),
      animation: false
    }, () => {
      window.requestAnimationFrame(() => this.setState({ animation: true }));
    });
  };

  setTimeout = (duration) => {
    if (canUseDOM) {
      this.timeout = window.setTimeout(() => {
        const { slides, current } = this.state;
        const targetIndex = current < slides.length - 1 ? current + 1 : 0;

        this.go(targetIndex);
      }, duration);
    }
  };

  clearTimeout = () => {
    clearTimeout(this.timeout);
  };

  getSlideRef = (id) => (slide) => {
    this.slidesStore[`slide-${id}`] = slide;
  }

  getViewportRef = (viewport) => {
    this.viewport = viewport ? viewport.container : {};
  }

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
    if (this.props.children !== prevProps.children) {
      this.isChildrenDirty = true;
    }

    if (this.isChildrenDirty) {
      this.isChildrenDirty = false;
      this.initializeSlides();
    }
    if (prevState.current !== this.state.current && this.props.onChange) {
      this.props.onChange(this.state.current);
    }

    if (this.props.autoplay && !prevProps.autoplay) {
      if (this.props.autoplay) {
        this.setTimeout(this.props.autoplay);
      }
    }

    if (!this.props.autoplay && prevProps.autoplay) {
      this.clearTimeout();
    }

    if (this.props.slideIndex !== prevProps.slideIndex && typeof this.props.slideIndex === 'number') {
      this.go(this.props.slideIndex);
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
      platform,
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
      <div className={classNames(getClassName('Gallery', platform), className, `Gallery--${align}`, {
        'Gallery--dragging': dragging,
        'Gallery--custom-width': slideWidth === 'custom'
      })} {...restProps} ref={this.container}>
        <Touch
          className='Gallery__viewport'
          onStartX={this.onStart}
          onMoveX={this.onMoveX}
          onEnd={this.onEnd}
          style={{ width: slideWidth === 'custom' ? '100%' : slideWidth }}
          ref={this.getViewportRef}
        >
          <div className='Gallery__layer' style={layerStyle}>
            {React.Children.map(children, (item, i) => (
              <div className='Gallery__slide' key={`slide-${i}`} ref={this.getSlideRef(i)}>{item}</div>
            ))}
          </div>
        </Touch>

        {bullets &&
        <div className={classNames('Gallery__bullets', `Gallery__bullets--${bullets}`)}>
          {React.Children.map(children, (_item, index) => (
            <div
              className={classNames('Gallery__bullet', { 'Gallery__bullet--active': index === current })}
              key={index}
            />
          ))}
        </div>
        }
      </div>
    );
  }
}

export default withPlatform(Gallery);
