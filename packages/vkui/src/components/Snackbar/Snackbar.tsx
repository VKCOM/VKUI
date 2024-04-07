import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { Keys, pressedKey } from '../../lib/accessibility';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import { useReducedMotion } from '../../lib/animation/useReducedMotion';
import { getRelativeBoundingClientRect, getWindow } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HTMLAttributesWithRootRef } from '../../types';
import { Button } from '../Button/Button';
import { RootComponent } from '../RootComponent/RootComponent';
import { Touch, TouchEvent } from '../Touch/Touch';
import { Basic, BasicProps } from './subcomponents/Basic/Basic';
import type { ShiftData, SnackbarPlacement } from './types';
import {
  getInitialShiftData,
  getMovedShiftData,
  resolveOffsetYCssStyle,
  shouldBeClosedByShiftData,
} from './utils';
import styles from './Snackbar.module.css';

const placementClassNames = {
  'top-start': styles['Snackbar--placement-top-start'],
  'top': styles['Snackbar--placement-top'],
  'top-end': styles['Snackbar--placement-top-end'],
  'bottom-start': styles['Snackbar--placement-bottom-start'],
  'bottom': styles['Snackbar--placement-bottom'],
  'bottom-end': styles['Snackbar--placement-bottom-end'],
};

const animationStateClassNames = {
  enter: styles['Snackbar--state-enter'],
  entering: styles['Snackbar--state-entering'],
  entered: styles['Snackbar--state-entered'],
  exit: styles['Snackbar--state-exit'],
  exiting: styles['Snackbar--state-exiting'],
  exited: styles['Snackbar--state-exited'],
};

export interface SnackbarProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'role'>,
    BasicProps {
  /**
   * Задаёт расположение компонента.
   */
  placement?: SnackbarPlacement;
  /**
   * Название кнопки действия в уведомлении
   * Не может использоваться одновременно с `subtitle`
   */
  action?: React.ReactNode;
  /**
   * Будет вызвано при клике на кнопку действия
   */
  onActionClick?: (event: React.MouseEvent) => void;
  /**
   * Время в миллисекундах, через которое плашка скроется
   */
  duration?: number;
  /**
   * Обработчик закрытия уведомления
   */
  onClose: () => void;
  /**
   * Величина отступа снизу. Используется для позиционирования элемента в случае, когда нежелательно, чтобы Snackbar при появлении перекрывал важные элементы интерфейса.
   */
  offsetY?: React.CSSProperties['bottom'];
}

/**
 * @see https://vkcom.github.io/VKUI/#/Snackbar
 */
export const Snackbar = ({
  placement = 'bottom-start',
  children,
  layout,
  action,
  before,
  after,
  duration = 4000,
  onActionClick = noop,
  onClose,
  mode = 'default',
  subtitle,
  offsetY,
  style,
  getRootRef,
  ...restProps
}: SnackbarProps) => {
  const isReducedMotion = useReducedMotion();
  const platform = usePlatform();

  const [open, setOpen] = React.useState(true);
  const [touched, setTouched] = React.useState(false);

  const rootRef = useExternRef(getRootRef);
  const inRef = React.useRef<HTMLDivElement>(null);

  const shiftDataRef = React.useRef<ShiftData | null>(null);

  const rafRef = React.useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const closeTimeoutIdRef = React.useRef<ReturnType<typeof setTimeout>>();
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    open ? 'enter' : 'exit',
    {
      onExited: onClose,
    },
  );

  const updateShiftAxisCSSProperties = React.useCallback(
    (x: number | null, y: number | null) => {
      rafRef.current = requestAnimationFrame(() => {
        if (rootRef.current) {
          x === null
            ? rootRef.current.style.removeProperty('--vkui_internal--snackbar_shift_x')
            : rootRef.current.style.setProperty('--vkui_internal--snackbar_shift_x', `${x}px`);
          y === null
            ? rootRef.current.style.removeProperty('--vkui_internal--snackbar_shift_y')
            : rootRef.current.style.setProperty('--vkui_internal--snackbar_shift_y', `${y}px`);
        }
      });
    },
    [rootRef],
  );

  const close = React.useCallback(() => {
    setOpen(false);
  }, []);

  const handleActionClick = (event: React.MouseEvent) => {
    close();
    if (action) {
      onActionClick(event);
    }
  };

  const handleTouchStart = () => {
    shiftDataRef.current = getInitialShiftData(
      rootRef.current!.offsetWidth,
      rootRef.current!.offsetHeight,
    );
    setTouched(true);
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (shiftDataRef.current) {
      const { shiftX: x, shiftY: y, originalEvent } = event;
      originalEvent.preventDefault();
      shiftDataRef.current = getMovedShiftData(placement, shiftDataRef.current, { x, y });
      updateShiftAxisCSSProperties(shiftDataRef.current.x, shiftDataRef.current.y);
    }
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (shiftDataRef.current) {
      if (
        shouldBeClosedByShiftData(
          placement,
          shiftDataRef.current,
          getRelativeBoundingClientRect(rootRef.current!, inRef.current!),
          event.duration,
        )
      ) {
        setOpen(false);
      }

      setTouched(false);
    }
  };

  useIsomorphicLayoutEffect(
    function closeAfterDelay() {
      if (!open || touched || animationState !== 'entered') {
        return;
      }
      closeTimeoutIdRef.current = setTimeout(close, duration);
      return function preventCloseAfterDelayOnUnmount() {
        clearTimeout(closeTimeoutIdRef.current);
      };
    },
    [open, touched, animationState, close, duration],
  );

  useIsomorphicLayoutEffect(
    function clearUpdateShiftAxisCSSPropertiesIfShifted() {
      if (shiftDataRef.current && shiftDataRef.current.shifted && open && !touched) {
        updateShiftAxisCSSProperties(null, null);
        shiftDataRef.current = null;
      }
    },
    [touched, open, updateShiftAxisCSSProperties],
  );

  useIsomorphicLayoutEffect(
    function handleGlobalKeyDownIfSnackbarOpened() {
      if (!open) {
        return;
      }
      const handleKeyDown = (event: KeyboardEvent) => {
        if (pressedKey(event) === Keys.ESCAPE) {
          setOpen(false);
        }
      };
      const doc = getWindow(rootRef.current).document;
      doc.addEventListener('keydown', handleKeyDown, { passive: true, capture: true });
      return () => {
        doc.removeEventListener('keydown', handleKeyDown, { capture: true });
      };
    },
    [open, animationState, rootRef],
  );

  return (
    <RootComponent
      {...restProps}
      role="presentation"
      baseClassName={classNames(
        styles['Snackbar'],
        platform === 'ios' && styles['Snackbar--ios'],
        touched && styles['Snackbar--touched'],
        placementClassNames[placement],
        animationStateClassNames[animationState],
      )}
      style={resolveOffsetYCssStyle(placement, style, offsetY)}
      getRootRef={rootRef}
    >
      <Touch
        role="alert"
        className={styles['Snackbar__in']}
        getRootRef={inRef}
        onStart={isReducedMotion ? undefined : handleTouchStart}
        onMove={isReducedMotion ? undefined : handleTouchMove}
        onEnd={isReducedMotion ? undefined : handleTouchEnd}
        {...animationHandlers}
      >
        <Basic
          mode={mode}
          layout={layout}
          before={before}
          after={after}
          subtitle={subtitle}
          action={
            action && (
              <Button
                align="left"
                mode="link"
                appearance={mode === 'dark' ? 'overlay' : 'accent'}
                size="s"
                onClick={handleActionClick}
              >
                {action}
              </Button>
            )
          }
        >
          {children}
        </Basic>
      </Touch>
    </RootComponent>
  );
};
