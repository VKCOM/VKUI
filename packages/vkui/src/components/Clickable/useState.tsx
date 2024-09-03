import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { mergeCalls } from '../../lib/mergeCalls';
import { useStateWithDelay } from './useStateWithDelay';

export interface StateProps {
  /**
   * Указывает, должен ли компонент реагировать на hover-состояние
   */
  hasHover?: boolean;
  /**
   * Позволяет управлять hovered-состоянием извне
   */
  hovered?: boolean;
  /**
   * Позволяет управлять activated-состоянием извне
   */
  activated?: boolean;
  /**
   * Указывает, должен ли компонент реагировать на active-состояние
   */
  hasActive?: boolean;

  /**
   * Позволяет родительскому компоненту
   * иметь hovered-cостояние при наведении
   * на любой дочерний элемент.
   * По умолчанию состояние hovered у родителя сбрасывается.
   *
   * Присваивается родителькому компоненту.
   *
   * @example
   * <Tappable hasHoverWithChildren>
   *   <IconButton />
   *   <IconButton />
   *   <IconButton />
   * </Tappable>
   */
  hasHoverWithChildren?: boolean;

  /**
   * Позволяет родительскому компоненту показывать hovered-состояние при наведении
   * на текущий дочерний компонент.
   *
   * Присваивается дочернему компоненту.
   *
   * @example
   * <Tappable>
   *   <IconButton unlockParentHover />
   *   <IconButton unlockParentHover />
   *   <IconButton />
   * </Tappable>
   */
  unlockParentHover?: boolean;

  /**
   * Длительность показа `activated`-состояния
   */
  activeEffectDelay?: number;

  /**
   * Стиль подсветки active-состояния
   */
  activeClassName?: string;

  /**
   * Стиль подсветки hover-состояния
   */
  hoverClassName?: string;
}

export const DEFAULT_ACTIVE_EFFECT_DELAY = 600;

const ACTIVE_DELAY = 70;

function calculateIsHovered({
  hasHover,
  lockState,
  hoveredStateControlled,
  hoveredStateLocal,
}: {
  hasHover: boolean;
  lockState: boolean;
  hoveredStateControlled: boolean;
  hoveredStateLocal: boolean;
}): boolean {
  return hasHover && !lockState && (hoveredStateControlled || hoveredStateLocal);
}

interface UseHoverProps extends Pick<StateProps, 'hovered' | 'hasHover'> {
  /**
   * Блокирование активации состояний
   */
  lockState: boolean;
  setParentStateLock: (v: boolean) => void;
}

/**
 * Управляет наведением на компонент, игнорирует тач события
 */
function useHover({ hovered, hasHover = true, lockState, setParentStateLock }: UseHoverProps) {
  const [hoveredStateLocal, setHoveredStateLocal] = React.useState(false);

  const prevHoverRef = React.useRef<boolean | undefined>(undefined);

  const handleHover = React.useCallback(
    (isHover: boolean) => {
      setHoveredStateLocal(isHover);

      const isHovered = calculateIsHovered({
        hasHover,
        lockState,
        hoveredStateControlled: Boolean(hovered),
        hoveredStateLocal: isHover,
      });
      if (prevHoverRef.current === undefined || isHovered !== prevHoverRef.current) {
        prevHoverRef.current = isHovered;
        setParentStateLock(isHovered);
      }
    },
    [setParentStateLock, hasHover, hovered, lockState],
  );

  const onPointerEnter: React.PointerEventHandler<any> = (e) => {
    if (e.pointerType === 'touch') {
      return;
    }

    handleHover(true);
  };

  const onPointerLeave = () => {
    handleHover(false);
  };

  const isHovered = calculateIsHovered({
    hasHover,
    lockState,
    hoveredStateControlled: Boolean(hovered),
    hoveredStateLocal,
  });

  return {
    isHovered,
    hoveredState: hoveredStateLocal,
    onPointerEnter: hasHover ? onPointerEnter : noop,
    onPointerLeave: hasHover ? onPointerLeave : noop,
  };
}

function calculateIsActive({
  hasActive,
  lockState,
  activeStateControlled,
  activeStateLocal,
}: {
  hasActive: boolean;
  lockState: boolean;
  activeStateControlled: boolean;
  activeStateLocal: boolean;
}): boolean {
  return hasActive && !lockState && (activeStateControlled || activeStateLocal);
}

interface UseActiveProps extends Pick<StateProps, 'activated' | 'activeEffectDelay' | 'hasActive'> {
  /**
   * Блокирование активации состояний
   */
  lockStateRef: React.MutableRefObject<boolean>;
  setParentStateLock: (v: boolean) => void;
}

/**
 * Управляет активацией компонента
 */
function useActive({
  activated,
  activeEffectDelay,
  hasActive = true,
  lockStateRef,
  setParentStateLock,
}: UseActiveProps) {
  // передаём setParentStateLock, чтобы функция вызывалась вместе с установкой стейта,
  // если установка отложена c помощью delay, то и вызов будет отложен
  const [activatedState, setActivated] = useStateWithDelay<boolean>(false, 0, setParentStateLock);

  // Список нажатий которые не требуется отменять
  const pointersUp = React.useMemo(() => new Set<number>(), []);

  const onPointerDown = () => {
    if (lockStateRef.current) {
      return;
    }

    setActivated(true, ACTIVE_DELAY);
    // намеренно выставляем lock, так как setActivated вызов отложен
    // а у отложенного setActivated setParentStateLock тоже вызовится отложенно
    // родитель сейчас тоже обработает это же событие PointerDown
    // если мы не залочим activatedState у родителя сейчас, то родитель выставит active состояние
    setParentStateLock(true);
  };

  const onPointerCancel: React.PointerEventHandler = (e) => {
    if (pointersUp.has(e.pointerId)) {
      pointersUp.delete(e.pointerId);
      return;
    }

    setActivated(false);
  };

  const onPointerUp: React.PointerEventHandler = (e) => {
    pointersUp.add(e.pointerId);

    if (lockStateRef.current) {
      return;
    }

    setActivated(true);
    setActivated(false, activeEffectDelay);
  };

  const isActivated = calculateIsActive({
    hasActive,
    lockState: lockStateRef.current,
    activeStateControlled: Boolean(activated),
    activeStateLocal: activatedState,
  });

  return {
    isActivated,
    activatedState,
    onPointerLeave: hasActive ? onPointerCancel : noop,
    onPointerDown: hasActive ? onPointerDown : noop,
    onPointerCancel: hasActive ? onPointerCancel : noop,
    onPointerUp: hasActive ? onPointerUp : noop,
  };
}

interface ClickableLockStateContextInterface {
  lockHoverStateBubbling?: (v: boolean) => void;
  lockActiveStateBubbling?: (v: boolean) => void;
}

export const ClickableLockStateContext: React.Context<ClickableLockStateContextInterface> =
  React.createContext<ClickableLockStateContextInterface>({
    lockHoverStateBubbling: undefined,
    lockActiveStateBubbling: undefined,
  });

/**
 * Блокирует стейт на всплытие
 */
function useLockState(
  setParentStateLockBubbling: (v: boolean) => void,
): readonly [boolean, (v: boolean) => void, (...args: any[]) => void] {
  const [lockState, setLockState] = React.useState(false);

  const setParentStateLockBubblingImmediate = React.useCallback(
    (isLock: boolean) => {
      setLockState(isLock);
      setParentStateLockBubbling(isLock);
    },
    [setParentStateLockBubbling],
  );

  return [lockState, setParentStateLockBubbling, setParentStateLockBubblingImmediate] as const;
}

function useLockRef(
  setParentStateLockBubbling: (v: boolean) => void,
): readonly [React.MutableRefObject<boolean>, (v: boolean) => void, (...args: any[]) => void] {
  const lockStateRef = React.useRef(false);

  const setParentStateLockBubblingImmediate = React.useCallback(
    (isLock: boolean) => {
      lockStateRef.current = isLock;
      setParentStateLockBubbling(isLock);
    },
    [setParentStateLockBubbling],
  );

  return [lockStateRef, setParentStateLockBubbling, setParentStateLockBubblingImmediate] as const;
}

/**
 * Управляет состоянием компонента
 */
export function useState({
  hovered,
  hasHover,
  hasActive,
  unlockParentHover,
  ...restProps
}: StateProps): {
  stateClassName: string;
  setLockHoverBubblingImmediate: (...args: any[]) => void;
  setLockActiveBubblingImmediate: (...args: any[]) => void;
} {
  const { lockHoverStateBubbling = noop, lockActiveStateBubbling = noop } =
    React.useContext(ClickableLockStateContext);

  const [lockHoverState, setParentStateLockHoverBubbling, setLockHoverBubblingImmediate] =
    useLockState(unlockParentHover ? noop : lockHoverStateBubbling);
  const [lockActiveStateRef, setParentStateLockActiveBubbling, setLockActiveBubblingImmediate] =
    useLockRef(lockActiveStateBubbling);

  const { isHovered, hoveredState, ...hoverEvent } = useHover({
    hasHover,
    hovered,
    lockState: lockHoverState,
    setParentStateLock: setParentStateLockHoverBubbling,
  });

  const { isActivated, activatedState, ...activeEvent } = useActive({
    ...restProps,
    lockStateRef: lockActiveStateRef,
    setParentStateLock: setParentStateLockActiveBubbling,
  });

  const stateClassName = classNames(
    isHovered && restProps.hoverClassName,
    isActivated && restProps.activeClassName,
  );
  const handlers = mergeCalls(hoverEvent, activeEvent);

  return {
    stateClassName,
    setLockHoverBubblingImmediate,
    setLockActiveBubblingImmediate,
    ...handlers,
  };
}
