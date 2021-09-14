import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import Touch, { TouchEventHandler, TouchEvent } from '../Touch/Touch';
import { classNames } from '../../lib/classNames';
import { withPlatform } from '../../hoc/withPlatform';
import { HasAlign, HasPlatform, HasRef, HasRootRef } from '../../types';
import { withDOM, DOMProps } from '../../lib/dom';
import { setRef } from '../../lib/utils';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import HorizontalScrollArrow from '../HorizontalScroll/HorizontalScrollArrow';
import { clamp } from '../../helpers/math';
import { useTimeout } from '../../hooks/useTimeout';
import './Gallery.css';

export interface BaseGalleryProps extends
  Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onDragStart' | 'onDragEnd'>,
  HasPlatform,
  HasAlign,
  HasRootRef<HTMLDivElement>,
  HasRef<HTMLElement> {
  slideWidth?: string | number;
  slideIndex?: number;
  onDragStart?: TouchEventHandler;
  onDragEnd?: TouchEventHandler;
  onChange?(current: number): void;
  onEnd?({ targetIndex }: { targetIndex: number }): void;
  bullets?: 'dark' | 'light' | false;
  isDraggable?: boolean;
  showArrows?: boolean;
}

export interface GalleryProps extends BaseGalleryProps {
  initialSlideIndex?: number;
  timeout?: number;
}

export interface GalleryState {
  containerWidth: number;
  layerWidth?: number;
  min?: number;
  max?: number;
  startT?: Date;
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

type GetSlideRef = (index: number) => React.RefCallback<HTMLElement>;

class BaseGallery extends React.Component<BaseGalleryProps & DOMProps & AdaptivityProps, GalleryState> {
  constructor(props: GalleryProps) {
    super(props);

    this.state = {
      containerWidth: 0,
      deltaX: 0,
      shiftX: 0,
      slides: [],
      animation: true,
      duration: 0.24,
    };

    this.slidesStore = {};
  }

  container: HTMLDivElement;
  slidesStore: {
    [index: string]: HTMLElement;
  };
  viewport: HTMLElement;

  static defaultProps: Partial<BaseGalleryProps> = {
    slideWidth: '100%',
    children: '',
    align: 'left',
    bullets: false,
    isDraggable: true,
  };

  get isCenterWithCustomWidth() {
    return this.props.slideWidth === 'custom' && this.props.align === 'center';
  }

  initializeSlides(options: { animation?: boolean } = {}) {
    const slides: GallerySlidesState[] = React.Children.map(
      this.props.children,
      (_item: React.ReactElement, i: number): GallerySlidesState => {
        const elem = this.slidesStore[`slide-${i}`];
        return {
          coordX: elem.offsetLeft,
          width: elem.offsetWidth,
        };
      });

    const containerWidth = this.container.offsetWidth;
    const layerWidth = slides.reduce((val: number, slide: GallerySlidesState) => slide.width + val, 0);

    const min = this.calcMin({ containerWidth, layerWidth, slides });
    const max = this.calcMax({ slides });

    this.setState({ min, max, layerWidth, containerWidth, slides }, () => {
      const shiftX = this.calculateIndent(this.props.slideIndex);
      if (this.state.shiftX === shiftX) {
        return;
      }
      const isValidShift = this.state.shiftX === this.validateIndent(this.state.shiftX);
      const { animation = isValidShift } = options;
      this.setState({ shiftX, animation }, () => {
        if (!this.state.animation) {
          this.props.window.requestAnimationFrame(() => this.setState({ animation: true }));
        }
      });
    });
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

    if (this.isFullyVisible) {
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

  get isFullyVisible() {
    return this.state.layerWidth <= this.state.containerWidth;
  }

  /*
   * Получает индекс слайда, к которому будет осуществлен переход
   */
  getTarget() {
    const { slides, deltaX, shiftX, startT, max } = this.state;
    const { slideIndex } = this.props;
    const expectDeltaX = deltaX / (Date.now() - startT.getTime()) * 240 * 0.6;
    const shift = shiftX + deltaX + expectDeltaX - max;
    const direction = deltaX < 0 ? 1 : -1;

    // Находим ближайшую границу слайда к текущему отступу
    let targetIndex = slides.reduce((val: number, item: GallerySlidesState, index: number) => {
      const previousValue = Math.abs(slides[val].coordX + shift);
      const currentValue = Math.abs(item.coordX + shift);

      return previousValue < currentValue ? val : index;
    }, slideIndex);

    if (targetIndex === slideIndex) {
      let targetSlide = slideIndex + direction;

      if (targetSlide >= 0 && targetSlide < slides.length) {
        if (Math.abs(deltaX) > slides[targetSlide].width * 0.05) {
          targetIndex = targetSlide;
        }
      }
    }

    return targetIndex;
  }

  onStart: TouchEventHandler = (e: TouchEvent) => {
    this.setState({
      animation: false,
      startT: e.startT,
    });
  };

  onMoveX: TouchEventHandler = (e: TouchEvent) => {
    if (this.props.isDraggable && !this.isFullyVisible) {
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
    const targetIndex = e.isSlide ? this.getTarget() : this.props.slideIndex;
    this.props.onDragEnd && this.props.onDragEnd(e);
    this.setState({ deltaX: 0, animation: true }, () => this.props.onChange(targetIndex));

    if (this.props.onEnd) {
      this.props.onEnd({ targetIndex });
    }
  };

  onResize: VoidFunction = () => this.initializeSlides({ animation: false });

  get canSlideLeft() {
    // shiftX is negative number <= 0, we can swipe back only if it is < 0
    return !this.isFullyVisible && this.state.shiftX < 0;
  }

  get canSlideRight() {
    const { containerWidth, layerWidth, shiftX, slides } = this.state;
    const { align, slideIndex } = this.props;
    return !this.isFullyVisible && (
      // we can't move right when gallery layer fully scrolled right, if gallery aligned by left side
      align === 'left' && containerWidth - shiftX < layerWidth ||
      // otherwise we need to check current slide index (align = right or align = center)
      align !== 'left' && slideIndex < slides.length - 1
    );
  }

  slideLeft = () => {
    const { slideIndex, onChange } = this.props;
    if (this.canSlideLeft) {
      this.setState({ deltaX: 0, animation: true }, () => onChange(slideIndex - 1));
    }
  };

  slideRight = () => {
    const { slideIndex, onChange } = this.props;
    if (this.canSlideRight) {
      this.setState({ deltaX: 0, animation: true }, () => onChange(slideIndex + 1));
    }
  };

  getSlideRef: GetSlideRef = (id: number) => (slide) => {
    this.slidesStore[`slide-${id}`] = slide;
  };

  getViewportRef: React.RefCallback<HTMLElement> = (viewport) => {
    this.viewport = viewport;
    setRef(viewport, this.props.getRef);
  };

  getRootRef: React.RefCallback<HTMLDivElement> = (container) => {
    this.container = container;
    setRef(container, this.props.getRootRef);
  };

  componentDidMount() {
    this.initializeSlides({ animation: false });
    this.props.window.addEventListener('resize', this.onResize);
  }

  componentDidUpdate(prevProps: GalleryProps) {
    const widthChanged = this.props.slideWidth !== prevProps.slideWidth;
    const isPropUpdate = this.props !== prevProps;
    const slideCountChanged = React.Children.count(this.props.children) !== React.Children.count(prevProps.children);
    const isCustomWidth = this.props.slideWidth === 'custom';

    // в любом из этих случаев позиция могла поменяться
    if (widthChanged || slideCountChanged || isCustomWidth && isPropUpdate) {
      this.initializeSlides();
    } else if (this.props.slideIndex !== prevProps.slideIndex) {
      this.setState({
        animation: true,
        deltaX: 0,
        shiftX: this.calculateIndent(this.props.slideIndex),
      });
    }
  }

  componentWillUnmount() {
    this.props.window.removeEventListener('resize', this.onResize);
  }

  render() {
    const { animation, duration, dragging } = this.state;
    const {
      children,
      slideWidth,
      slideIndex,
      isDraggable,
      onDragStart,
      onDragEnd,
      onChange,
      onEnd,
      align,
      bullets,
      platform,
      hasMouse,
      showArrows,
      window,
      document,
      getRef,
      getRootRef,
      ...restProps
    } = this.props;

    const indent = dragging ? this.calculateDragIndent() : this.calculateIndent(slideIndex);

    const layerStyle = {
      WebkitTransform: `translateX(${indent}px)`,
      transform: `translateX(${indent}px)`,
      WebkitTransition: animation ? `-webkit-transform ${duration}s cubic-bezier(.1, 0, .25, 1)` : 'none',
      transition: animation ? `transform ${duration}s cubic-bezier(.1, 0, .25, 1)` : 'none',
    };

    return (
      <div
        {...restProps}
        vkuiClass={classNames(getClassName('Gallery', platform), `Gallery--${align}`, {
          'Gallery--dragging': dragging,
          'Gallery--custom-width': slideWidth === 'custom',
        })}
        ref={this.getRootRef}
      >
        <Touch
          vkuiClass="Gallery__viewport"
          onStartX={this.onStart}
          onMoveX={this.onMoveX}
          onEnd={this.onEnd}
          noSlideClick
          style={{ width: slideWidth === 'custom' ? '100%' : slideWidth }}
          getRootRef={this.getViewportRef}
        >
          <div vkuiClass="Gallery__layer" style={layerStyle}>
            {React.Children.map(children, (item: React.ReactElement, i: number) =>
              <div vkuiClass="Gallery__slide" key={`slide-${i}`} ref={this.getSlideRef(i)}>{item}</div>,
            )}
          </div>
        </Touch>

        {bullets &&
        <div aria-hidden="true" vkuiClass={classNames('Gallery__bullets', `Gallery__bullets--${bullets}`)}>
          {React.Children.map(children, (_item: React.ReactElement, index: number) =>
            <div
              vkuiClass={classNames('Gallery__bullet', { 'Gallery__bullet--active': index === slideIndex })}
              key={index}
            />,
          )}
        </div>
        }

        {showArrows && hasMouse && this.canSlideLeft && <HorizontalScrollArrow direction="left" onClick={this.slideLeft} />}
        {showArrows && hasMouse && this.canSlideRight && <HorizontalScrollArrow direction="right" onClick={this.slideRight} />}
      </div>
    );
  }
}

const BaseGalleryAdaptive = withAdaptivity(withDOM<BaseGalleryProps>(BaseGallery), {
  hasMouse: true,
});

const Gallery: React.FC<GalleryProps> = ({
  initialSlideIndex = 0,
  children,
  timeout,
  onChange,
  ...props
}: GalleryProps) => {
  const [localSlideIndex, setSlideIndex] = React.useState(initialSlideIndex);
  const isControlled = typeof props.slideIndex === 'number';
  const slideIndex = isControlled ? props.slideIndex : localSlideIndex;
  const isDraggable = !isControlled || Boolean(onChange);
  const slides = React.Children.toArray(children).filter((item) => Boolean(item));
  const childCount = slides.length;

  const handleChange: GalleryProps['onChange'] = React.useCallback((current) => {
    if (current === slideIndex) {
      return;
    }
    !isControlled && setSlideIndex(current);
    onChange && onChange(current);
  }, [onChange, slideIndex]);

  const autoplay = useTimeout(() => handleChange((slideIndex + 1) % childCount), timeout);
  React.useEffect(() => timeout ? autoplay.set() : autoplay.clear(), [timeout, slideIndex]);

  // prevent invalid slideIndex
  // any slide index is invalid with no slides, just keep it as is
  const safeSlideIndex = childCount > 0 ? clamp(slideIndex, 0, childCount - 1) : slideIndex;
  // notify parent in controlled mode
  React.useEffect(() => {
    if (onChange && safeSlideIndex !== slideIndex) {
      onChange(safeSlideIndex);
    }
  }, [safeSlideIndex]);

  return (
    <BaseGalleryAdaptive
      isDraggable={isDraggable}
      {...props}
      slideIndex={safeSlideIndex}
      onChange={handleChange}
    >{slides}</BaseGalleryAdaptive>
  );
};

export default withPlatform(Gallery);
