import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { callMultiple } from '../../lib/callMultiple';
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

interface StateHookProps extends StateProps {
  /**
   * Блокирование активации состояний
   */
  lockState: boolean;
}

export const DEFAULT_ACTIVE_EFFECT_DELAY = 600;

const ACTIVE_DELAY = 70;

/**
 * Управляет наведением на компонент, игнорирует тач события
 */
function useHover({ hovered, hoverClassName, hasHover = true, lockState }: StateHookProps) {
  const [hoveredState, setHover] = React.useState(false);

  const hover = hasHover && !lockState && (hovered || hoveredState) ? hoverClassName : undefined;

  const onPointerEnter: React.PointerEventHandler<any> = (e) => {
    if (e.pointerType === 'touch') {
      return;
    }

    setHover(true);
  };

  const onPointerLeave = () => {
    setHover(false);
  };

  return {
    hover,
    onPointerEnter: hasHover ? onPointerEnter : noop,
    onPointerLeave: hasHover ? onPointerLeave : noop,
  };
}

/**
 * Управляет активацией компонента
 */
function useActive({
  activated,
  activeClassName,
  activeEffectDelay,
  hasActive = true,
  lockState,
}: StateHookProps) {
  const [activatedState, setActivated] = useStateWithDelay(false);

  // Список нажатий которые не требуется отменять
  const pointersUp = React.useMemo(() => new Set<number>(), []);

  const active =
    hasActive && !lockState && (activated || activatedState) ? activeClassName : undefined;

  const onPointerDown = () => setActivated(true, ACTIVE_DELAY);
  const onPointerCancel: React.PointerEventHandler = (e) => {
    if (pointersUp.has(e.pointerId)) {
      pointersUp.delete(e.pointerId);
      return;
    }

    setActivated(false);
  };

  const onPointerUp: React.PointerEventHandler = (e) => {
    pointersUp.add(e.pointerId);
    setActivated(true);
    setActivated(false, activeEffectDelay);
  };

  return {
    active,
    onPointerLeave: hasActive ? onPointerCancel : noop,
    onPointerDown: hasActive ? onPointerDown : noop,
    onPointerCancel: hasActive ? onPointerCancel : noop,
    onPointerUp: hasActive ? onPointerUp : noop,
  };
}

export const ClickableLockStateContext: React.Context<((v: boolean) => void) | undefined> =
  React.createContext<undefined | ((v: boolean) => void)>(undefined);

/**
 * Блокирует стейт на всплытие
 */
function useLockState(): readonly [boolean, (v: boolean) => void, (...args: any[]) => void] {
  const setLockBubbling = React.useContext(ClickableLockStateContext) || noop;
  const [lockState, setLockState] = React.useState(false);

  const setLockBubblingImmediate = callMultiple(setLockState, setLockBubbling);

  return [lockState, setLockBubbling, setLockBubblingImmediate] as const;
}

/**
 * Управляет состоянием компонента
 */
export function useState({ hasHover, hasActive, ...restProps }: StateProps): {
  stateClassName: string;
  setLockBubblingImmediate: (...args: any[]) => void;
} {
  const [lockState, setLockBubbling, setLockBubblingImmediate] = useLockState();

  const props = {
    hasHover,
    hasActive,
    lockState,
    ...restProps,
  };

  const { hover, ...hoverEvent } = useHover({ ...props });
  const { active, ...activeEvent } = useActive(props);

  const stateClassName = classNames(hover, active);
  const handlers = mergeCalls(hoverEvent, activeEvent);

  React.useEffect(() => {
    setLockBubbling(!!stateClassName);
  }, [setLockBubbling, stateClassName]);

  return {
    stateClassName,
    setLockBubblingImmediate,
    ...handlers,
  };
}
