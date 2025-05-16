/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { mergeCalls } from '../../lib/mergeCalls';
import { useStateWithDelay } from './useStateWithDelay';

export interface StateProps {
  /**
   * Указывает, должен ли компонент реагировать на `hover`-состояние.
   */
  hasHover?: boolean;
  /**
   * Позволяет управлять `hovered`-состоянием извне.
   */
  hovered?: boolean;
  /**
   * Позволяет управлять `activated`-состоянием извне.
   */
  activated?: boolean;
  /**
   * Указывает, должен ли компонент реагировать на `active`-состояние.
   */
  hasActive?: boolean;

  /**
   * Позволяет родительскому компоненту
   * иметь `hovered`-cостояние при наведении
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
   * Длительность показа `active`-состояния.
   */
  activeEffectDelay?: number;

  /**
   * Стиль подсветки `active`-состояния.
   */
  activeClassName?: string;

  /**
   * Стиль подсветки `hover`-состояния.
   */
  hoverClassName?: string;
}

export const DEFAULT_ACTIVE_EFFECT_DELAY = 600;

const ACTIVE_DELAY = 70;

interface UseHoverProps extends Pick<StateProps, 'hovered' | 'hasHover'> {
  /**
   * Блокирование активации состояний.
   */
  lockState: boolean;
  setParentStateLock: (v: boolean) => void;
}

/**
 * Управляет наведением на компонент, игнорирует тач события.
 */
function useHover({ hovered, hasHover = true, lockState, setParentStateLock }: UseHoverProps) {
  const [hoveredStateLocal, setHoveredStateLocal] = React.useState(false);

  const prevIsHoveredRef = React.useRef<boolean | undefined>(undefined);

  const handleHover = React.useCallback(
    (isHover: boolean) => {
      setHoveredStateLocal(isHover);

      const isHovered =
        hovered ??
        calculateStateValue({
          hasState: hasHover,
          isLocked: lockState,
          stateValueLocal: isHover,
        });

      // проверка сделана чтобы реже вызывать обновление состояния
      // контекста родителя
      if (isHovered !== prevIsHoveredRef.current) {
        prevIsHoveredRef.current = isHovered;
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

  const isHovered =
    hovered ??
    calculateStateValue({
      hasState: hasHover,
      isLocked: lockState,
      stateValueLocal: hoveredStateLocal,
    });

  return {
    isHovered,
    onPointerEnter: hasHover ? onPointerEnter : noop,
    onPointerLeave: hasHover ? onPointerLeave : noop,
  };
}

interface UseActiveProps extends Pick<StateProps, 'activated' | 'activeEffectDelay' | 'hasActive'> {
  /**
   * Блокирование активации состояний.
   */
  lockStateRef: React.RefObject<boolean>;
  setParentStateLock: (v: boolean) => void;
}

/**
 * Управляет активацией компонента.
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

  const isActivated =
    activated ??
    calculateStateValue({
      hasState: hasActive,
      isLocked: lockStateRef.current,
      stateValueLocal: activatedState,
    });

  return {
    isActivated,
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
 * Блокирует стейт на всплытие.
 */
function useLockState(
  setParentStateLockBubbling: (v: boolean) => void,
): readonly [boolean, (v: boolean) => void, (...args: any[]) => void] {
  const [lockState, setLockState] = React.useState(false);

  const setStateLockBubblingImmediate = React.useCallback(
    (isLock: boolean) => {
      setLockState(isLock);
      setParentStateLockBubbling(isLock);
    },
    [setParentStateLockBubbling],
  );

  return [lockState, setParentStateLockBubbling, setStateLockBubblingImmediate] as const;
}

function useLockRef(
  setParentStateLockBubbling: (v: boolean) => void,
): readonly [React.RefObject<boolean>, (v: boolean) => void, (...args: any[]) => void] {
  const lockStateRef = React.useRef(false);

  const setStateLockBubblingImmediate = React.useCallback(
    (isLock: boolean) => {
      lockStateRef.current = isLock;
      setParentStateLockBubbling(isLock);
    },
    [setParentStateLockBubbling],
  );

  return [lockStateRef, setParentStateLockBubbling, setStateLockBubblingImmediate] as const;
}

/**
 * Управляет состоянием компонента.
 */
export function useState({
  hovered,
  hasHover,
  activated,
  hasActive,
  activeEffectDelay,
  unlockParentHover,
  hoverClassName,
  activeClassName,
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

  const { isHovered, ...hoverEvent } = useHover({
    hasHover,
    hovered,
    lockState: lockHoverState,
    setParentStateLock: setParentStateLockHoverBubbling,
  });

  const { isActivated, ...activeEvent } = useActive({
    activated,
    hasActive,
    activeEffectDelay,
    lockStateRef: lockActiveStateRef,
    setParentStateLock: setParentStateLockActiveBubbling,
  });

  const stateClassName = classNames(isHovered && hoverClassName, isActivated && activeClassName);
  const handlers = mergeCalls(hoverEvent, activeEvent);

  return {
    stateClassName,
    setLockHoverBubblingImmediate,
    setLockActiveBubblingImmediate,
    ...handlers,
  };
}

// Общая функция для определения конечного состояния active/hovered
function calculateStateValue({
  hasState,
  isLocked,
  stateValueLocal,
}: {
  hasState: boolean;
  isLocked: boolean;
  stateValueLocal: boolean;
}): boolean {
  return hasState && !isLocked && stateValueLocal;
}
