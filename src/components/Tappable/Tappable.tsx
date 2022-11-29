import * as React from "react";
import mitt from "mitt";
import { noop } from "../../lib/utils";
import { Touch, TouchEvent, TouchProps } from "../Touch/Touch";
import TouchRootContext from "../Touch/TouchContext";
import { classNamesString } from "../../lib/classNames";
import { Platform } from "../../lib/platform";
import { getOffsetRect } from "../../lib/offset";
import { coordX, coordY } from "../../lib/touch";
import { HasComponent, HasRootRef } from "../../types";
import { shouldTriggerClickOnEnterOrSpace } from "../../lib/accessibility";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { FocusVisible, FocusVisibleMode } from "../FocusVisible/FocusVisible";
import { useTimeout } from "../../hooks/useTimeout";
import { useExternRef } from "../../hooks/useExternRef";
import { usePlatform } from "../../hooks/usePlatform";
import { useFocusVisible } from "../../hooks/useFocusVisible";
import { callMultiple } from "../../lib/callMultiple";
import { useBooleanState } from "../../hooks/useBooleanState";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useAdaptivityHasHover } from "../../hooks/useAdaptivityHasHover";
import { useAdaptivityHasPointer } from "../../hooks/useAdaptivityHasPointer";
import styles from "./Tappable.module.css";

const sizeXClassNames = {
  none: styles["Tappable--sizeX-none"],
  compact: styles["Tappable--sizeX-compact"],
  regular: styles["Tappable--sizeX-regular"],
};

type StateMode = "opacity" | "background";

const WAVE_LIVE = 225;

export type TappableElementProps = Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | "onTouchStart"
  | "onTouchMove"
  | "onTouchEnd"
  | "onTouchCancel"
  | "onMouseDown"
  | "onMouseMove"
  | "onMouseUp"
  | "onMouseLeave"
>;

export interface TappableProps
  extends TappableElementProps,
    HasRootRef<HTMLElement>,
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
  activeMode?: StateMode | string;
  /**
   * Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover
   */
  hoverMode?: StateMode | string;
  /**
   * Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible
   */
  focusVisibleMode?: FocusVisibleMode | string;
  children?: React.ReactNode;
  onEnter?(outputEvent: MouseEvent): void;
  onLeave?(outputEvent: MouseEvent): void;
}

interface Wave {
  x: number;
  y: number;
  id: number;
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

function isPresetStateMode(
  stateMode: StateMode | string
): stateMode is StateMode {
  switch (stateMode) {
    case "opacity":
    case "background":
      return true;
    default:
      return false;
  }
}

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

/**
 * @see https://vkcom.github.io/VKUI/#/Tappable
 */
export const Tappable = ({
  children,
  Component,
  onClick,
  onKeyDown: _onKeyDown,
  activeEffectDelay = ACTIVE_EFFECT_DELAY,
  stopPropagation = false,
  getRootRef,
  hasHover: _hasHover = true,
  hoverMode = "background",
  hasActive: _hasActive = true,
  activeMode = "background",
  focusVisibleMode = "inside",
  onEnter,
  onLeave,
  className,
  ...props
}: TappableProps) => {
  Component = Component || ((props.href ? "a" : "div") as React.ElementType);

  const { onHoverChange } = React.useContext(TappableContext);
  const insideTouchRoot = React.useContext(TouchRootContext);
  const platform = usePlatform();
  const { focusVisible, onBlur, onFocus } = useFocusVisible();
  const { sizeX = "none" } = useAdaptivity();
  const hasPointerContext = useAdaptivityHasPointer();
  const hasHoverContext = useAdaptivityHasHover();

  const [clicks, setClicks] = React.useState<Wave[]>([]);
  const [childHover, setChildHover] = React.useState(false);
  const {
    value: _hovered,
    setTrue: setHoveredTrue,
    setFalse: setHoveredFalse,
  } = useBooleanState(false);

  const hovered = _hovered && !props.disabled;
  const hasActive = _hasActive && !childHover && !props.disabled;
  const hasHover = hasHoverContext === true && _hasHover && !childHover;
  const isCustomElement =
    Component !== "a" &&
    Component !== "button" &&
    Component !== "label" &&
    !props.contentEditable;
  const isPresetHoverMode = isPresetStateMode(hoverMode);
  const isPresetActiveMode = isPresetStateMode(activeMode);
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

  const needWaves =
    platform === Platform.ANDROID &&
    !hasPointerContext &&
    hasActive &&
    activeMode === "background";

  const clearClicks = useTimeout(() => setClicks([]), WAVE_LIVE);

  function addClick(x: number, y: number) {
    const dateNow = Date.now();
    const filteredClicks = clicks.filter(
      (click) => click.id + WAVE_LIVE > dateNow
    );

    setClicks([...filteredClicks, { x, y, id: dateNow }]);
    clearClicks.set();
  }

  function onStart({ originalEvent }: TouchEvent) {
    if (hasActive) {
      if (originalEvent.touches && originalEvent.touches.length > 1) {
        // r сожалению я так и не понял, что это делает и можно ли упихнуть его в Touch
        return stop();
      }

      if (needWaves) {
        const { top, left } = getOffsetRect(containerRef.current);
        const x = coordX(originalEvent) - (left ?? 0);
        const y = coordY(originalEvent) - (top ?? 0);
        addClick(x, y);
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
    const activeDuration = duration - ACTIVE_DELAY;
    stop(activeDuration >= 100 ? 0 : activeEffectDelay - activeDuration);
  }

  const classes = classNamesString(
    className,
    styles["Tappable"],
    platform === Platform.IOS && styles["Tappable--ios"],
    sizeXClassNames[sizeX],
    hasHoverContext && styles["Tappable--hover-has"],
    hasActive && styles["Tappable--hasActive"],
    hasHover && hovered && !isPresetHoverMode && hoverMode,
    hasActive && active && !isPresetActiveMode && activeMode,
    focusVisible && !isPresetFocusVisibleMode && focusVisibleMode,
    hasActive && active && styles["Tappable--active"],
    hasHover &&
      hovered &&
      isPresetHoverMode &&
      styles[`Tappable--hover-${hoverMode}`],
    hasActive &&
      active &&
      isPresetActiveMode &&
      styles[`Tappable--active-${activeMode}`],
    focusVisible && styles["Tappable--focus-visible"]
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
      className={classes}
      Component={Component}
      getRootRef={containerRef}
      onBlur={callMultiple(onBlur, props.onBlur)}
      onFocus={callMultiple(onFocus, props.onFocus)}
      {...(props.disabled ? {} : handlers)}
    >
      <TappableContext.Provider value={childContext}>
        {children}
      </TappableContext.Provider>
      {needWaves && (
        <span aria-hidden="true" className={styles.Tappable__waves}>
          {clicks.map((wave) => (
            <span
              key={wave.id}
              className={styles.Tappable__wave}
              style={{ top: wave.y, left: wave.x }}
            />
          ))}
        </span>
      )}
      {((hasHover && hoverMode === "background") ||
        (hasActive && activeMode === "background")) && (
        <span aria-hidden="true" className={styles.Tappable__stateLayer} />
      )}
      {!props.disabled && isPresetFocusVisibleMode && (
        <FocusVisible mode={focusVisibleMode as FocusVisibleMode} />
      )}
    </Touch>
  );
};
