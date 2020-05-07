import React, { Component, HTMLAttributes, ReactElement } from 'react';
import getClassName from '../../helpers/getClassName';
import Touch, { TouchEventHandler, TouchEvent } from '../Touch/Touch';
import classNames from '../../lib/classNames';
import withPlatform from '../../hoc/withPlatform';
import { HasAlign, HasPlatform, OldRef } from '../../types';
import { canUseDOM } from '../../lib/dom';

export interface GalleryProps extends
  Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onDragStart' | 'onDragEnd'>,
  HasPlatform,
  HasAlign {
  slideWidth?: string | number;
  timeout?: number;
  initialSlideIndex?: number;
  slideIndex?: number;
  onDragStart?: TouchEventHandler;
  onDragEnd?: TouchEventHandler;
  onChange?(current: GalleryState['current']): void;
  onEnd?({ targetIndex }: { targetIndex: GalleryState['current'] }): void;
  bullets?: 'dark' | 'light' | false;
}

export interface GalleryState {
  containerWidth: number;
  layerWidth?: number;
  min?: number;
  max?: number;
  startT?: Date;
  current: number;
  deltaX: number;
  shiftX: number;
  slides: GallerySlidesState[];
  animation: boolean;
  duration: number;
  dragging?: boolean;
}

export interface GallerySlidesState {
  coordX: number;
  width: number;
}

type SetTimeout = (duration: number) => void;

type GetSlideRef = (index: number) => OldRef<HTMLElement>;

class Gallery extends Component<GalleryProps, GalleryState> {
  constructor(props: GalleryProps) {
    super(props);

    const current = typeof props.slideIndex === 'number' ? props.slideIndex : props.initialSlideIndex;

    if (!this.props.onChange && typeof this.props.slideIndex === 'number') {
      this.logControlledError();
    }

    this.state = {
      containerWidth: 0,
      current,
      deltaX: 0,
      shiftX: 0,
      slides: [],
      animation: false,
      duration: 0.24,
    };

    this.container = React.createRef();

    this.slidesStore = {};
  }

  container: React.RefObject<HTMLDivElement>;
  slidesStore: {
    [index: string]: HTMLElement;
  };
  viewport: HTMLElement;
  timeout: number;
  isChildrenDirty: boolean;

  static defaultProps: GalleryProps = {
    slideWidth: '100%',
    children: '',
    timeout: 0,
    initialSlideIndex: 0,
    align: 'left',
    bullets: false,
  };

  logControlledError() {
    console.error('Failed prop type: You provided a `slideIndex` prop to `Gallery` without an `onChange` handler.');
  }

  get isCenterWithCustomWidth() {
    return this.props.slideWidth === 'custom' && this.props.align === 'center';
  }

  initializeSlides(callback?: VoidFunction) {
    const slides: GallerySlidesState[] = React.Children.map(
      this.props.children,
      (_item: ReactElement, i: number): GallerySlidesState => {
        const elem = this.slidesStore[`slide-${i}`];
        return {
          coordX: elem.offsetLeft,
          width: elem.offsetWidth,
        };
      });

    const containerWidth = this.container.current.offsetWidth;
    const layerWidth = slides.reduce((val: number, slide: GallerySlidesState) => slide.width + val, 0);

    const min = this.calcMin({ containerWidth, layerWidth, slides });
    const max = this.calcMax({ slides });

    this.setState({ min, max, layerWidth, containerWidth, slides }, callback);
  }

  calcMin({ containerWidth, layerWidth, slides }: Pick<GalleryState, 'containerWidth' | 'layerWidth' | 'slides'>) {
    const viewportWidth = this.viewport.offsetWidth;
    switch (this.props.align) {
      case 'left':
        return containerWidth - layerWidth;
      case 'right':
        return viewportWidth - layerWidth;
      case 'center':
        if (this.isCenterWithCustomWidth && slides.length) {
          const { coordX, width } = slides[slides.length - 1];
          return viewportWidth / 2 - coordX - width / 2;
        } else {
          return viewportWidth - (containerWidth - viewportWidth) / 2 - layerWidth;
        }
    }
  }

  calcMax({ slides }: Pick<GalleryState, 'slides'>) {
    const viewportWidth = this.viewport.offsetWidth;
    if (this.isCenterWithCustomWidth && slides.length) {
      const { width, coordX } = slides[0];
      return viewportWidth / 2 - coordX - width / 2;
    } else {
      return 0;
    }
  }

  /*
   * Считает отступ слоя галереи
   */
  calculateIndent(targetIndex: number) {
    const { slides } = this.state;

    if (!this.isDraggable) {
      return 0;
    }

    const targetSlide = slides.length ? slides[targetIndex] : null;

    if (targetSlide) {
      const { coordX, width } = targetSlide;

      if (this.isCenterWithCustomWidth) {
        const viewportWidth = this.viewport.offsetWidth;
        return viewportWidth / 2 - coordX - width / 2;
      }

      return this.validateIndent(-1 * coordX);
    } else {
      return 0;
    }
  }

  /*
   * Считает отступ слоя галереи во время драга
   */
  calculateDragIndent() {
    const { shiftX, deltaX, min, max } = this.state;
    const indent = shiftX + deltaX;

    if (indent > max) {
      return max + Number((indent - max) / 3);
    } else if (indent < min) {
      return min + Number((indent - min) / 3);
    }

    return indent;
  }

  validateIndent(value: number) {
    const { min, max } = this.state;

    if (value < min) {
      return min;
    } else if (value > max) {
      return max;
    }

    return value;
  }

  get isDraggable() {
    return this.state.layerWidth > this.state.containerWidth;
  }

  /*
   * Получает индекс слайда, к которому будет осуществлен переход
   */
  getTarget() {
    const { slides, current, deltaX, shiftX, startT, max } = this.state;
    const expectDeltaX = deltaX / (Date.now() - startT.getTime()) * 240 * 0.6;
    const shift = shiftX + deltaX + expectDeltaX - max;
    const direction = deltaX < 0 ? 1 : -1;

    // Находим ближайшую границу слайда к текущему отступу
    let targetIndex = slides.reduce((val: number, item: GallerySlidesState, index: number) => {
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

  go(targetIndex: number) {
    if (typeof this.props.slideIndex === 'number' && !this.props.onChange) {
      this.logControlledError();
      this.setState({
        animation: true,
        deltaX: 0,
        shiftX: this.calculateIndent(this.state.current),
      });
    } else {
      this.setState({
        animation: true,
        deltaX: 0,
        shiftX: this.calculateIndent(targetIndex),
        current: targetIndex,
      });

      if (this.timeout) {
        this.clearTimeout();
        this.setTimeout(this.props.timeout);
      }
    }
  };

  onStart: TouchEventHandler = (e: TouchEvent) => {
    this.setState({
      animation: false,
      startT: e.startT,
    });
  };

  onMoveX: TouchEventHandler = (e: TouchEvent) => {
    if (this.isDraggable) {
      e.originalEvent.preventDefault();

      if (e.isSlideX) {
        this.props.onDragStart && this.props.onDragStart(e);

        if (this.state.deltaX !== e.shiftX || this.state.dragging !== e.isSlideX) {
          this.setState({
            deltaX: e.shiftX,
            dragging: e.isSlideX,
          });
        }
      }
    }
  };

  onEnd: TouchEventHandler = (e: TouchEvent) => {
    const targetIndex = e.isSlide ? this.getTarget() : this.state.current;
    this.props.onDragEnd && this.props.onDragEnd(e);
    this.go(targetIndex);

    if (this.props.onEnd) {
      this.props.onEnd({ targetIndex });
    }
  };

  onResize: VoidFunction = () => {
    this.initializeSlides();

    const { layerWidth, slides } = this.state;
    const containerWidth = this.container.current.offsetWidth;

    this.setState({
      shiftX: this.calculateIndent(this.state.current),
      containerWidth,
      min: this.calcMin({ layerWidth, containerWidth, slides }),
      max: this.calcMax({ slides }),
      animation: false,
    }, () => {
      window.requestAnimationFrame(() => this.setState({ animation: true }));
    });
  };

  setTimeout: SetTimeout = (duration: number) => {
    if (canUseDOM) {
      this.timeout = window.setTimeout(() => {
        const { slides, current } = this.state;
        const targetIndex = current < slides.length - 1 ? current + 1 : 0;

        this.go(targetIndex);
      }, duration);
    }
  };

  clearTimeout: VoidFunction = () => {
    clearTimeout(this.timeout);
  };

  getSlideRef: GetSlideRef = (id: number) => (slide: HTMLElement) => {
    this.slidesStore[`slide-${id}`] = slide;
  };

  getViewportRef: OldRef<HTMLElement> = (viewport: HTMLElement) => {
    this.viewport = viewport;
  };

  componentDidMount() {
    this.initializeSlides(() => {
      this.setState({
        shiftX: this.calculateIndent(this.state.current),
      });
    });

    window.addEventListener('resize', this.onResize);

    if (this.props.timeout) {
      this.setTimeout(this.props.timeout);
    }
  }

  componentDidUpdate(prevProps: GalleryProps, prevState: GalleryState) {
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

    if (this.props.timeout && !prevProps.timeout) {
      this.setTimeout(this.props.timeout);
    }

    if (!this.props.timeout && prevProps.timeout) {
      this.clearTimeout();
    }

    if (this.props.slideIndex !== prevProps.slideIndex && typeof this.props.slideIndex === 'number') {
      this.go(this.props.slideIndex);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    this.clearTimeout();
  }

  render() {
    const { animation, duration, current, dragging } = this.state;
    const {
      children,
      slideWidth,
      timeout,
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
      transition: animation ? `transform ${duration}s cubic-bezier(.1, 0, .25, 1)` : 'none',
    };

    return (
      <div className={classNames(getClassName('Gallery', platform), className, `Gallery--${align}`, {
        'Gallery--dragging': dragging,
        'Gallery--custom-width': slideWidth === 'custom',
      })} {...restProps} ref={this.container}>
        <Touch
          className="Gallery__viewport"
          onStartX={this.onStart}
          onMoveX={this.onMoveX}
          onEnd={this.onEnd}
          style={{ width: slideWidth === 'custom' ? '100%' : slideWidth }}
          getRootRef={this.getViewportRef}
        >
          <div className="Gallery__layer" style={layerStyle}>
            {React.Children.map(children, (item: ReactElement, i: number) =>
              <div className="Gallery__slide" key={`slide-${i}`} ref={this.getSlideRef(i)}>{item}</div>,
            )}
          </div>
        </Touch>

        {bullets &&
        <div className={classNames('Gallery__bullets', `Gallery__bullets--${bullets}`)}>
          {React.Children.map(children, (_item: ReactElement, index: number) =>
            <div
              className={classNames('Gallery__bullet', { 'Gallery__bullet--active': index === current })}
              key={index}
            />,
          )}
        </div>
        }
      </div>
    );
  }
}

export default withPlatform(Gallery);
