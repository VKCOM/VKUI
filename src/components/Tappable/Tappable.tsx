import * as React from 'react';
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
  ts?: number;
  childHover?: boolean;
}

export interface RootComponentProps extends TouchProps {
  ref?: React.Ref<HTMLElement>;
}

export interface StorageItem {
  activeTimeout: ReturnType<typeof setTimeout>;
  timeout?: ReturnType<typeof setTimeout>;
  stop(): void;
}

export interface Storage {
  [index: string]: StorageItem;
}

export type GetStorage = () => StorageItem;

const ts = () => +Date.now();

export const ACTIVE_DELAY = 70;
export const ACTIVE_EFFECT_DELAY = 600;

let storage: Storage = {};

/*
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 */
function deactivateOtherInstances(exclude?: string) {
  Object.keys(storage).filter((id: string) => id !== exclude).forEach((id: string) => {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();

    delete storage[id];
  });
}

type TappableContextInterface = { onEnter?: VoidFunction; onLeave?: VoidFunction };
const TappableContext = React.createContext<TappableContextInterface>({});

class Tappable extends React.Component<TappableProps & TappableContextInterface, TappableState> {
  constructor(props: TappableProps) {
    super(props);
    this.id = Math.round(Math.random() * 1e8).toString(16);
    this.state = {
      clicks: [],
      active: false,
      ts: null,
      childHover: false,
    };
    this.isSlide = false;
  }

  get hasActive() {
    return this.props.hasActive && !this.state.childHover;
  }

  get hasHover() {
    return this.props.hasHover && !this.state.childHover;
  }

  id: string;

  isSlide: boolean;

  insideTouchRoot: boolean;

  container: HTMLElement;

  timeout: ReturnType<typeof setTimeout>;

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
    !this.insideTouchRoot && this.props.stopPropagation && originalEvent.stopPropagation();

    if (this.hasActive) {
      if (originalEvent.touches && originalEvent.touches.length > 1) {
        deactivateOtherInstances();
        return;
      }

      if (this.props.platform === ANDROID) {
        this.onDown(originalEvent);
      }

      storage[this.id] = {
        stop: this.stop,
        activeTimeout: setTimeout(this.start, ACTIVE_DELAY),
      };
    }
  };

  /*
   * Обрабатывает событие touchmove
   */
  onMove: TouchEventHandler = ({ originalEvent, shiftXAbs, shiftYAbs }: TouchEvent) => {
    !this.insideTouchRoot && this.props.stopPropagation && originalEvent.stopPropagation();
    if (shiftXAbs > 20 || shiftYAbs > 20) {
      this.isSlide = true;
      this.stop();
    }
  };

  /*
   * Обрабатывает событие touchend
   */
  onEnd: TouchEventHandler = ({ originalEvent }: TouchEvent) => {
    !this.insideTouchRoot && this.props.stopPropagation && originalEvent.stopPropagation();
    const now = ts();

    if (originalEvent.touches && originalEvent.touches.length > 0) {
      this.isSlide = false;
      this.stop();
      return;
    }

    if (this.state.active) {
      if (now - this.state.ts >= 100) {
        // Долгий тап, выключаем подсветку
        this.stop();
      } else {
        // Короткий тап, оставляем подсветку
        const timeout = setTimeout(this.stop, this.props.activeEffectDelay - now + this.state.ts);
        const store = this.getStorage();

        if (store) {
          store.timeout = timeout;
        }
      }
    } else if (!this.isSlide) {
      // Очень короткий тап, включаем подсветку
      this.start();

      const timeout = setTimeout(this.stop, this.props.activeEffectDelay);

      if (this.getStorage()) {
        clearTimeout(this.getStorage().activeTimeout);
        this.getStorage().timeout = timeout;
      } else {
        this.timeout = timeout;
      }
    }

    this.isSlide = false;
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
        ts: ts(),
      });
    }
    deactivateOtherInstances(this.id);
  };

  /*
   * Снимает активное выделение
   */
  stop: VoidFunction = () => {
    if (this.state.active) {
      this.setState({
        active: false,
        ts: null,
      });
    }
    if (this.getStorage()) {
      clearTimeout(this.getStorage().activeTimeout);
      delete storage[this.id];
    }
  };

  /*
   * Возвращает хранилище для экземпляра компонента
   */
  getStorage: GetStorage = () => {
    return storage[this.id];
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
    if (storage[this.id]) {
      clearTimeout(storage[this.id].timeout);
      clearTimeout(storage[this.id].activeTimeout);

      delete storage[this.id];
    }
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
      <TouchRootContext.Consumer>
        {(insideTouchRoot: boolean) => {
          this.insideTouchRoot = insideTouchRoot;
          return (
            <Touch
              onEnter={this.onEnter}
              onLeave={this.onLeave}
              type={Component === 'button' ? 'button' : undefined}
              tabIndex={isCustomElement && !restProps.disabled ? 0 : undefined}
              role={isCustomElement ? role : undefined}
              {...restProps}
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
        }}
      </TouchRootContext.Consumer>
    );
  }
}

const TappableNest: React.FC<TappableProps> = (props) => {
  const parent = React.useContext(TappableContext);
  return <Tappable {...props} {...parent} />;
};

export default withAdaptivity(withPlatform(TappableNest), { sizeX: true, hasMouse: true });

function Wave({ x, y, onClear }: Wave & { onClear: VoidFunction }) {
  const timeout = useTimeout(onClear, 225);
  React.useEffect(() => timeout.set(), []);
  return <span vkuiClass="Tappable__wave" style={{ top: y, left: x }} />;
}
