import * as React from 'react';
import mitt from 'mitt';
import { Touch, TouchEvent, TouchEventHandler, TouchProps } from '../Touch/Touch';
import TouchRootContext from '../Touch/TouchContext';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { ANDROID } from '../../lib/platform';
import { getOffsetRect } from '../../lib/offset';
import { coordX, coordY, VKUITouchEvent, VKUITouchEventHander } from '../../lib/touch';
import { HasPlatform, HasRootRef } from '../../types';
import { withPlatform } from '../../hoc/withPlatform';
import { hasHover } from '@vkontakte/vkjs';
import { setRef } from '../../lib/utils';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { shouldTriggerClickOnEnterOrSpace } from '../../lib/accessibility';
import { FocusVisible, FocusVisibleMode } from '../FocusVisible/FocusVisible';
import { useTimeout } from '../../hooks/useTimeout';
import './Tappable.css';

export interface TappableProps extends React.AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasPlatform, AdaptivityProps {
  Component?: React.ElementType;
  /**
   * Длительность показа active-состояния
   */
  activeEffectDelay?: number;
  stopPropagation?: boolean;
  /**
   * Указывает, должен ли компонент реагировать на hover-состояние
   */
  hasHover?: boolean;
  /**
   * Указывает, должен ли компонент реагировать на active-состояние
   */
  hasActive?: boolean;
  /**
   * Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active
   */
  activeMode?: 'opacity' | 'background' | string;
  /**
   * Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover
   */
  hoverMode?: 'opacity' | 'background' | string;
  /**
   * Стиль аутлайна focus visible.
   */
  focusVisibleMode?: FocusVisibleMode;
}

interface Wave {
  x: number;
  y: number;
  id: string;
}

export interface TappableState {
  clicks?: Wave[];
  hovered?: boolean;
  active?: boolean;
  childHover?: boolean;
}

export interface RootComponentProps extends TouchProps {
  ref?: React.Ref<HTMLElement>;
}

export const ACTIVE_DELAY = 70;
export const ACTIVE_EFFECT_DELAY = 600;

const activeBus = mitt<{ active: string }>();

type TappableContextInterface = { onEnter?: VoidFunction; onLeave?: VoidFunction };
const TappableContext = React.createContext<TappableContextInterface>({});

class Tappable extends React.Component<TappableProps & TappableContextInterface & { insideTouchRoot: boolean }, TappableState> {
  constructor(props: TappableProps & TappableContextInterface & { insideTouchRoot: boolean }) {
    super(props);
    this.id = Math.round(Math.random() * 1e8).toString(16);
    this.state = {
      clicks: [],
      active: false,
      childHover: false,
    };
  }

  get hasActive() {
    return this.props.hasActive && !this.state.childHover;
  }

  get hasHover() {
    return this.props.hasHover && !this.state.childHover;
  }

  onActiveChange = (id: string) => {
    if (id !== this.id) {
      clearTimeout(this.stopTimeout);
      this.stop();
    }
  };

  id: string;

  container: HTMLElement;

  stopTimeout: ReturnType<typeof setTimeout>;
  activeTimeout: ReturnType<typeof setTimeout>;

  static defaultProps = {
    stopPropagation: false,
    disabled: false,
    focusVisibleMode: 'inside',
    hasHover,
    hoverMode: 'background',
    hasActive: true,
    activeMode: 'background',
    activeEffectDelay: ACTIVE_EFFECT_DELAY,
  };

  /*
   * [a11y]
   * Обрабатывает событие onkeydown
   * для кастомных доступных элементов:
   * - role="link" (активация по Enter)
   * - role="button" (активация по Space и Enter)
   */
  onKeyDown: React.KeyboardEventHandler = (e: React.KeyboardEvent<HTMLElement>) => {
    const { onKeyDown } = this.props;

    if (shouldTriggerClickOnEnterOrSpace(e)) {
      e.preventDefault();
      this.container.click();
    }

    {
      if (typeof onKeyDown === 'function') {
        return onKeyDown(e);
      }
    }
  };

  /*
   * Обрабатывает событие touchstart
   */
  onStart: TouchEventHandler = ({ originalEvent }: TouchEvent) => {
    !this.props.insideTouchRoot && this.props.stopPropagation && originalEvent.stopPropagation();

    if (this.hasActive) {
      if (originalEvent.touches && originalEvent.touches.length > 1) {
        activeBus.emit('active');
        return;
      }

      if (this.props.platform === ANDROID) {
        this.onDown(originalEvent);
      }

      this.activeTimeout = setTimeout(this.start, ACTIVE_DELAY);
      activeBus.on('active', this.onActiveChange);
    }
  };

  /*
   * Обрабатывает событие touchmove
   */
  onMove: TouchEventHandler = ({ originalEvent, isSlide }: TouchEvent) => {
    !this.props.insideTouchRoot && this.props.stopPropagation && originalEvent.stopPropagation();
    if (isSlide) {
      this.stop();
    }
  };

  /*
   * Обрабатывает событие touchend
   */
  onEnd: TouchEventHandler = ({ originalEvent, isSlide, duration }: TouchEvent) => {
    !this.props.insideTouchRoot && this.props.stopPropagation && originalEvent.stopPropagation();

    if (originalEvent.touches && originalEvent.touches.length > 0) {
      this.stop();
      return;
    }

    if (this.state.active) {
      const activeDuraion = duration - ACTIVE_DELAY;
      if (activeDuraion >= 100) {
        // Долгий тап, выключаем подсветку
        this.stop();
      } else {
        // Короткий тап, оставляем подсветку
        this.stopTimeout = setTimeout(this.stop, this.props.activeEffectDelay - activeDuraion);
      }
    } else if (!isSlide) {
      // Очень короткий тап, включаем подсветку
      this.start();

      clearTimeout(this.activeTimeout);
      this.stopTimeout = setTimeout(this.stop, this.props.activeEffectDelay);
    }
  };

  /*
   * Реализует эффект при тапе для Андроида
   */
  onDown: VKUITouchEventHander = (e: VKUITouchEvent) => {
    if (this.props.platform === ANDROID) {
      const { top, left } = getOffsetRect(this.container);
      const x = coordX(e) - left;
      const y = coordY(e) - top;

      this.setState({
        clicks: [...this.state.clicks, { x, y, id: Date.now().toString() }],
      });
    }
  };

  onEnter = () => {
    this.setState({ hovered: true });
  };

  onLeave = () => {
    this.setState({ hovered: false });
  };

  childContext: TappableContextInterface= {
    onEnter: () => this.setState({ childHover: true }),
    onLeave: () => this.setState({ childHover: false }),
  };

  /*
   * Устанавливает активное выделение
   */
  start: VoidFunction = () => {
    if (!this.state.active && this.hasActive) {
      this.setState({
        active: true,
      });
    }
    activeBus.emit('active', this.id);
  };

  /*
   * Снимает активное выделение
   */
  stop: VoidFunction = () => {
    if (this.state.active) {
      this.setState({
        active: false,
      });
    }
    clearTimeout(this.activeTimeout);
    activeBus.off('active', this.onActiveChange);
  };

  /*
   * Берет ref на DOM-ноду из экземпляра Touch
   */
  getRef: React.RefCallback<HTMLElement> = (container) => {
    this.container = container;
    setRef(container, this.props.getRootRef);
  };

  componentWillUnmount() {
    if (this.state.hovered && !this.props.disabled && this.props.onLeave) {
      this.props.onLeave();
    }
    activeBus.off('active', this.onActiveChange);
    clearTimeout(this.activeTimeout);
    clearTimeout(this.stopTimeout);
  }

  componentDidUpdate(prevProps: TappableProps, prevState: TappableState) {
    const hovered = this.state.hovered && !this.props.disabled;
    const prevHovered = prevState.hovered && !prevProps.disabled;
    if (!prevHovered && hovered && this.props.onEnter) {
      this.props.onEnter();
    }
    if (prevHovered && !hovered && this.props.onLeave) {
      this.props.onLeave();
    }
  }

  removeWave(id: Wave['id']) {
    this.setState({ clicks: this.state.clicks.filter((c) => c.id !== id) });
  }

  render() {
    const { hasHover, hasActive } = this;
    const { clicks, active } = this.state;
    const hovered = this.state.hovered && !this.props.disabled;

    const defaultComponent: React.ElementType = this.props.href ? 'a' : 'div';

    const {
      children,
      Component = defaultComponent,
      onClick,
      onKeyDown,
      onEnter,
      onLeave,
      activeEffectDelay,
      stopPropagation,
      getRootRef,
      platform,
      sizeX,
      hasMouse,
      hasHover: propsHasHover,
      hoverMode,
      hasActive: propsHasActive,
      activeMode,
      focusVisibleMode,
      ...restProps
    } = this.props;

    const isCustomElement: boolean = Component !== 'a' && Component !== 'button' && !restProps.contentEditable;

    const isPresetHoverMode = ['opacity', 'background'].includes(hoverMode);
    const isPresetActiveMode = ['opacity', 'background'].includes(activeMode);

    const classes = classNames(
      getClassName('Tappable', platform),
      `Tappable--sizeX-${sizeX}`,
      {
        'Tappable--active': hasActive && active,
        'Tappable--inactive': !active,
        'Tappable--mouse': hasMouse,
        [`Tappable--hover-${hoverMode}`]: hasHover && hovered && isPresetHoverMode,
        [`Tappable--active-${activeMode}`]: hasActive && active && isPresetActiveMode,
        [hoverMode]: hasHover && hovered && !isPresetHoverMode,
        [activeMode]: hasActive && active && !isPresetActiveMode,
      });

    const props: RootComponentProps = {};
    if (!restProps.disabled) {
      props.onStart = this.onStart;
      props.onMove = this.onMove;
      props.onEnd = this.onEnd;
      props.onClick = onClick;
      props.onKeyDown = isCustomElement ? this.onKeyDown : onKeyDown;
    }

    if (isCustomElement) {
      props['aria-disabled'] = restProps.disabled;
    }

    const role: string = restProps.href ? 'link' : 'button';

    return (
      <Touch
        onEnter={this.onEnter}
        onLeave={this.onLeave}
        type={Component === 'button' ? 'button' : undefined}
        tabIndex={isCustomElement && !restProps.disabled ? 0 : undefined}
        role={isCustomElement ? role : undefined}
        {...restProps}
        slideThreshold={20}
        usePointerHover
        vkuiClass={classes}
        Component={Component}
        getRootRef={this.getRef}
        {...props}>
        <TappableContext.Provider value={this.childContext}>
          {children}
        </TappableContext.Provider>
        {platform === ANDROID && !hasMouse && hasActive && activeMode === 'background' && (
          <span aria-hidden="true" vkuiClass="Tappable__waves">
            {clicks.map((wave) => (
              <Wave {...wave} key={wave.id} onClear={() => this.removeWave(wave.id)} />
            ))}
          </span>
        )}
        {hasHover && hoverMode === 'background' && <span aria-hidden="true" vkuiClass="Tappable__hoverShadow" />}
        {!restProps.disabled && <FocusVisible mode={focusVisibleMode} />}
      </Touch>
    );
  }
}

const TappableNest: React.FC<TappableProps> = (props) => {
  const parent = React.useContext(TappableContext);
  const insideTouchRoot = React.useContext(TouchRootContext);
  return <Tappable {...props} {...parent} insideTouchRoot={insideTouchRoot} />;
};

export default withAdaptivity(withPlatform(TappableNest), { sizeX: true, hasMouse: true });

function Wave({ x, y, onClear }: Wave & { onClear: VoidFunction }) {
  const timeout = useTimeout(onClear, 225);
  React.useEffect(() => timeout.set(), []);
  return <span vkuiClass="Tappable__wave" style={{ top: y, left: x }} />;
}
