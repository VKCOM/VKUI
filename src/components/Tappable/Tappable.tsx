import * as React from "react";
import mitt from "mitt";
import { noop } from "@vkontakte/vkjs";
import { Touch, TouchEvent, TouchProps } from "../Touch/Touch";
import TouchRootContext from "../Touch/TouchContext";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { ANDROID } from "../../lib/platform";
import { getOffsetRect } from "../../lib/offset";
import { coordX, coordY } from "../../lib/touch";
import { HasComponent, HasRootRef } from "../../types";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import { shouldTriggerClickOnEnterOrSpace } from "../../lib/accessibility";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { FocusVisible, FocusVisibleMode } from "../FocusVisible/FocusVisible";
import { useTimeout } from "../../hooks/useTimeout";
import { useExternRef } from "../../hooks/useExternRef";
import { usePlatform } from "../../hooks/usePlatform";
import { useFocusVisible } from "../../hooks/useFocusVisible";
import { callMultiple } from "../../lib/callMultiple";
import { useBooleanState } from "../../hooks/useBooleanState";
import "./Tappable.css";

export interface TappableProps
  extends Omit<
      React.AllHTMLAttributes<HTMLElement>,
      | "onTouchStart"
      | "onTouchMove"
      | "onTouchEnd"
      | "onTouchCancel"
      | "onMouseDown"
      | "onMouseMove"
      | "onMouseUp"
      | "onMouseLeave"
    >,
    HasRootRef<HTMLElement>,
    AdaptivityProps,
    HasComponent,
    Pick<TouchProps, "onStart" | "onEnd" | "onMove"> {
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
  activeMode?: "opacity" | "background" | string;
  /**
   * Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover
   */
  hoverMode?: "opacity" | "background" | string;
  /**
   * Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible
   */
  focusVisibleMode?: FocusVisibleMode | string;
  onEnter?: (outputEvent: MouseEvent) => void;
  onLeave?: (outputEvent: MouseEvent) => void;
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
const TapState = { none: 0, pending: 1, active: 2, exiting: 3 } as const;

type TappableContextInterface = { onHoverChange: (s: boolean) => void };
const TappableContext = React.createContext<TappableContextInterface>({
  onHoverChange: noop,
});

function useActivity(hasActive: boolean, stopDelay: number) {
  const id = React.useMemo(
    () => Math.round(Math.random() * 1e8).toString(16),
    []
  );

  const [activity, setActivity] = React.useState<
    typeof TapState[keyof typeof TapState]
  >(TapState.none);
  const _stop = () => setActivity(TapState.none);
  const start = () => hasActive && setActivity(TapState.active);
  const delayStart = () => {
    hasActive && setActivity(TapState.pending);
  };

  const activeTimeout = useTimeout(start, ACTIVE_DELAY);
  const stopTimeout = useTimeout(_stop, stopDelay);

  useIsomorphicLayoutEffect(() => {
    if (activity === TapState.pending) {
      activeTimeout.set();
      return activeTimeout.clear;
    }
    if (activity === TapState.exiting) {
      return stopTimeout.clear;
    }
    if (activity === TapState.active) {
      activeBus.emit("active", id);
    }
    return noop;
  }, [activity]);

  useIsomorphicLayoutEffect(() => {
    if (activity === TapState.none) {
      return noop;
    }
    const onActiveChange = (activeId: string) => {
      activeId !== id && _stop();
    };
    activeBus.on("active", onActiveChange);
    return () => activeBus.off("active", onActiveChange);
  }, [activity === TapState.none]);

  useIsomorphicLayoutEffect(() => {
    !hasActive && _stop();
  }, [hasActive]);

  const stop = (delay?: number) => {
    if (delay) {
      setActivity(TapState.exiting);
      return stopTimeout.set(delay);
    }
    _stop();
  };

  return [activity, { delayStart, start, stop }] as const;
}

const Tappable: React.FC<TappableProps> = ({
  children,
  Component,
  onClick,
  onKeyDown: _onKeyDown,
  activeEffectDelay = ACTIVE_EFFECT_DELAY,
  stopPropagation = false,
  getRootRef,
  sizeX,
  hasMouse,
  deviceHasHover,
  hasHover: _hasHover = true,
  hoverMode = "background",
  hasActive: _hasActive = true,
  activeMode = "background",
  focusVisibleMode = "inside",
  onEnter,
  onLeave,
  ...props
}: TappableProps) => {
  Component = Component || ((props.href ? "a" : "div") as React.ElementType);

  const { onHoverChange } = React.useContext(TappableContext);
  const insideTouchRoot = React.useContext(TouchRootContext);
  const platform = usePlatform();
  const { focusVisible, onBlur, onFocus } = useFocusVisible();

  const [clicks, setClicks] = React.useState<Wave[]>([]);
  const [childHover, setChildHover] = React.useState(false);
  const {
    value: _hovered,
    setTrue: setHoveredTrue,
    setFalse: setHoveredFalse,
  } = useBooleanState(false);

  const hovered = _hovered && !props.disabled;
  const hasActive = _hasActive && !childHover && !props.disabled;
  const hasHover = deviceHasHover && _hasHover && !childHover;
  const isCustomElement =
    Component !== "a" && Component !== "button" && !props.contentEditable;
  const isPresetHoverMode = ["opacity", "background"].includes(hoverMode);
  const isPresetActiveMode = ["opacity", "background"].includes(activeMode);
  const isPresetFocusVisibleMode = ["inside", "outside"].includes(
    focusVisibleMode
  );

  const [activity, { start, stop, delayStart }] = useActivity(
    hasActive,
    activeEffectDelay
  );
  const active = activity === TapState.active || activity === TapState.exiting;

  const containerRef = useExternRef(getRootRef);

  // hover propagation
  const childContext = React.useRef({ onHoverChange: setChildHover }).current;
  useIsomorphicLayoutEffect(() => {
    if (!hovered) {
      return noop;
    }
    onHoverChange(true);
    return () => onHoverChange(false);
  }, [hovered]);

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
      containerRef.current?.click();
    }
  }

  function onStart({ originalEvent }: TouchEvent) {
    if (hasActive) {
      if (originalEvent.touches && originalEvent.touches.length > 1) {
        // r сожалению я так и не понял, что это делает и можно ли упихнуть его в Touch
        return stop();
      }

      if (platform === ANDROID) {
        const { top, left } = getOffsetRect(containerRef.current);
        const x = coordX(originalEvent) - (left ?? 0);
        const y = coordY(originalEvent) - (top ?? 0);
        setClicks([...clicks, { x, y, id: Date.now().toString() }]);
      }

      delayStart();
    }
  }

  function onMove({ isSlide }: TouchEvent) {
    if (isSlide) {
      stop();
    }
  }

  function onEnd({ duration }: TouchEvent) {
    if (activity === TapState.none) {
      return;
    }
    if (activity === TapState.pending) {
      // активировать при коротком тапе
      start();
    }

    // отключить без задержки при длинном тапе
    const activeDuraion = duration - ACTIVE_DELAY;
    stop(activeDuraion >= 100 ? 0 : activeEffectDelay - activeDuraion);
  }

  const classes = classNames(
    getClassName("Tappable", platform),
    `Tappable--sizeX-${sizeX}`,
    hasHover && hovered && !isPresetHoverMode && hoverMode,
    hasActive && active && !isPresetActiveMode && activeMode,
    focusVisible && !isPresetFocusVisibleMode && focusVisibleMode,
    {
      "Tappable--active": hasActive && active,
      "Tappable--mouse": hasMouse,
      [`Tappable--hover-${hoverMode}`]:
        hasHover && hovered && isPresetHoverMode,
      [`Tappable--active-${activeMode}`]:
        hasActive && active && isPresetActiveMode,
      "Tappable--focus-visible": focusVisible,
    }
  );

  const handlers: RootComponentProps = {
    onStart: callMultiple(onStart, props.onStart),
    onMove: callMultiple(onMove, props.onMove),
    onEnd: callMultiple(onEnd, props.onEnd),
    onClick,
    onKeyDown: callMultiple(onKeyDown, _onKeyDown),
  };
  const role = props.href ? "link" : "button";

  return (
    <Touch
      onEnter={callMultiple(setHoveredTrue, onEnter)}
      onLeave={callMultiple(setHoveredFalse, onLeave)}
      type={Component === "button" ? "button" : undefined}
      tabIndex={isCustomElement && !props.disabled ? 0 : undefined}
      role={isCustomElement ? role : undefined}
      aria-disabled={isCustomElement ? props.disabled : undefined}
      stopPropagation={stopPropagation && !insideTouchRoot && !props.disabled}
      {...props}
      slideThreshold={20}
      usePointerHover
      vkuiClass={classes}
      Component={Component}
      getRootRef={containerRef}
      onBlur={callMultiple(onBlur, props.onBlur)}
      onFocus={callMultiple(onFocus, props.onFocus)}
      {...(props.disabled ? {} : handlers)}
    >
      <TappableContext.Provider value={childContext}>
        {children}
      </TappableContext.Provider>
      {platform === ANDROID &&
        !hasMouse &&
        hasActive &&
        activeMode === "background" && (
          <span aria-hidden="true" vkuiClass="Tappable__waves">
            {clicks.map((wave) => (
              <Wave
                {...wave}
                key={wave.id}
                onClear={() =>
                  setClicks(clicks.filter((c) => c.id !== wave.id))
                }
              />
            ))}
          </span>
        )}
      {hasHover && hoverMode === "background" && (
        <span aria-hidden="true" vkuiClass="Tappable__hoverShadow" />
      )}
      {!props.disabled && isPresetFocusVisibleMode && (
        <FocusVisible mode={focusVisibleMode as FocusVisibleMode} />
      )}
    </Touch>
  );
};

// eslint-disable-next-line import/no-default-export
export default withAdaptivity(Tappable, {
  sizeX: true,
  hasMouse: true,
  deviceHasHover: true,
});

function Wave({ x, y, onClear }: Wave & { onClear: VoidFunction }) {
  const timeout = useTimeout(onClear, 225);
  React.useEffect(() => timeout.set(), [timeout]);
  return <span vkuiClass="Tappable__wave" style={{ top: y, left: x }} />;
}
