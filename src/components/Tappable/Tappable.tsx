import * as React from 'react';
import mitt from 'mitt';
import { hasHover, noop } from '@vkontakte/vkjs';
import { Touch, TouchEvent, TouchProps } from '../Touch/Touch';
import TouchRootContext from '../Touch/TouchContext';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { ANDROID } from '../../lib/platform';
import { getOffsetRect } from '../../lib/offset';
import { coordX, coordY, VKUITouchEvent } from '../../lib/touch';
import { HasPlatform, HasRootRef } from '../../types';
import { withPlatform } from '../../hoc/withPlatform';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { shouldTriggerClickOnEnterOrSpace } from '../../lib/accessibility';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { FocusVisible, FocusVisibleMode } from '../FocusVisible/FocusVisible';
import { useTimeout } from '../../hooks/useTimeout';
import { useExternRef } from '../../hooks/useExternRef';
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

export interface RootComponentProps extends TouchProps {
  ref?: React.Ref<HTMLElement>;
}

export const ACTIVE_DELAY = 70;
export const ACTIVE_EFFECT_DELAY = 600;

const activeBus = mitt<{ active: string }>();

type TappableContextInterface = { onEnter?: VoidFunction; onLeave?: VoidFunction };
const TappableContext = React.createContext<TappableContextInterface>({});

const Tappable: React.FC<TappableProps & TappableContextInterface & { insideTouchRoot: boolean }> = (props) => {
  const {
    children,
    Component = props.href ? 'a' : 'div',
    onClick,
    onKeyDown: _onKeyDown,
    onEnter: parentOnEnter,
    onLeave: parentOnLeave,
    activeEffectDelay,
    stopPropagation,
    getRootRef,
    platform,
    sizeX,
    hasMouse,
    hasHover: _hasHover,
    hoverMode,
    hasActive: _hasActive,
    activeMode,
    focusVisibleMode,
    insideTouchRoot,
    ...restProps
  } = props;

  const [clicks, setClicks] = React.useState<Wave[]>([]);
  const [active, setActive] = React.useState(false);
  const [childHover, setChildHover] = React.useState(false);
  const [_hovered, setHovered] = React.useState(false);

  const hovered = _hovered && !props.disabled;
  const hasActive = _hasActive && !childHover;
  const hasHover = _hasHover && !childHover;
  const isCustomElement = Component !== 'a' && Component !== 'button' && !restProps.contentEditable;
  const isPresetHoverMode = ['opacity', 'background'].includes(hoverMode);
  const isPresetActiveMode = ['opacity', 'background'].includes(activeMode);

  const id = React.useMemo(() => Math.round(Math.random() * 1e8).toString(16), []);
  const containerRef = useExternRef(getRootRef);
  const stopTimeout = useTimeout(stop, activeEffectDelay);
  const activeTimeout = useTimeout(start, ACTIVE_DELAY);

  const onActiveChange = React.useCallback((activeId: string) => {
    if (activeId !== id) {
      stopTimeout.clear();
      stop();
    }
  }, []);

  /*
   * [a11y]
   * Обрабатывает событие onkeydown
   * для кастомных доступных элементов:
   * - role="link" (активация по Enter)
   * - role="button" (активация по Space и Enter)
   */
  function onKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (isCustomElement && shouldTriggerClickOnEnterOrSpace(e)) {
      e.preventDefault();
      containerRef.current.click();
    }

    if (typeof _onKeyDown === 'function') {
      return _onKeyDown(e);
    }
  }

  function onStart({ originalEvent }: TouchEvent) {
    !insideTouchRoot && stopPropagation && originalEvent.stopPropagation();

    if (hasActive) {
      if (originalEvent.touches && originalEvent.touches.length > 1) {
        activeBus.emit('active');
        return;
      }

      if (platform === ANDROID) {
        onDown(originalEvent);
      }

      activeTimeout.set();
      activeBus.on('active', onActiveChange);
    }
  }

  function onMove({ originalEvent, isSlide }: TouchEvent) {
    !insideTouchRoot && stopPropagation && originalEvent.stopPropagation();
    if (isSlide) {
      stop();
    }
  }

  function onEnd({ originalEvent, isSlide, duration }: TouchEvent) {
    !insideTouchRoot && stopPropagation && originalEvent.stopPropagation();

    if (originalEvent.touches && originalEvent.touches.length > 0) {
      stop();
      return;
    }

    if (active) {
      const activeDuraion = duration - ACTIVE_DELAY;
      if (activeDuraion >= 100) {
        // Долгий тап, выключаем подсветку
        stop();
      } else {
        // Короткий тап, оставляем подсветку
        stopTimeout.set(activeEffectDelay - activeDuraion);
      }
    } else if (!isSlide) {
      // Очень короткий тап, включаем подсветку
      start();

      activeTimeout.clear();
      stopTimeout.set();
    }
  }

  /*
   * Реализует эффект при тапе для Андроида
   */
  function onDown(e: VKUITouchEvent) {
    if (platform === ANDROID) {
      const { top, left } = getOffsetRect(containerRef.current);
      const x = coordX(e) - left;
      const y = coordY(e) - top;

      setClicks([...clicks, { x, y, id: Date.now().toString() }]);
    }
  }

  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  const childContext = React.useMemo(() => ({
    onEnter: () => setChildHover(true),
    onLeave: () => setChildHover(false),
  }), []);

  /*
   * Устанавливает активное выделение
   */
  function start() {
    if (hasActive) {
      setActive(true);
    }
    activeBus.emit('active', id);
  }

  /*
   * Снимает активное выделение
   */
  function stop() {
    setActive(false);
    activeTimeout.clear();
    activeBus.off('active', onActiveChange);
  }

  // active subscription cleanup
  useIsomorphicLayoutEffect(() => () => {
    activeBus.off('active', onActiveChange);
  }, []);

  // hover propagation
  useIsomorphicLayoutEffect(() => {
    if (!hovered) {
      return noop;
    }
    parentOnEnter && parentOnEnter();
    return () => parentOnLeave && parentOnLeave();
  }, [hovered]);

  function removeWave(id: Wave['id']) {
    setClicks(clicks.filter((c) => c.id !== id));
  }

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

  const handlers: RootComponentProps = { onStart, onMove, onEnd, onClick, onKeyDown };
  const role = props.href ? 'link' : 'button';

  return (
    <Touch
      onEnter={onEnter}
      onLeave={onLeave}
      type={Component === 'button' ? 'button' : undefined}
      tabIndex={isCustomElement && !restProps.disabled ? 0 : undefined}
      role={isCustomElement ? role : undefined}
      aria-disabled={isCustomElement ? restProps.disabled : null}
      {...restProps}
      slideThreshold={20}
      usePointerHover
      vkuiClass={classes}
      Component={Component}
      getRootRef={containerRef}
      {...(props.disabled ? {} : handlers)}>
      <TappableContext.Provider value={childContext}>
        {children}
      </TappableContext.Provider>
      {platform === ANDROID && !hasMouse && hasActive && activeMode === 'background' && (
        <span aria-hidden="true" vkuiClass="Tappable__waves">
          {clicks.map((wave) => (
            <Wave {...wave} key={wave.id} onClear={() => removeWave(wave.id)} />
          ))}
        </span>
      )}
      {hasHover && hoverMode === 'background' && <span aria-hidden="true" vkuiClass="Tappable__hoverShadow" />}
      {!restProps.disabled && <FocusVisible mode={focusVisibleMode} />}
    </Touch>
  );
};

Tappable.defaultProps = {
  stopPropagation: false,
  disabled: false,
  focusVisibleMode: 'inside',
  hasHover,
  hoverMode: 'background',
  hasActive: true,
  activeMode: 'background',
  activeEffectDelay: ACTIVE_EFFECT_DELAY,
};

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
