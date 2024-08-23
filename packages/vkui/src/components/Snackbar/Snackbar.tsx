import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import { useGlobalEscKeyDown } from '../../hooks/useGlobalEscKeyDown';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import { getRelativeBoundingClientRect } from '../../lib/dom';
import { UIPanGestureRecognizer } from '../../lib/touch';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HTMLAttributesWithRootRef } from '../../types';
import { Button } from '../Button/Button';
import { RootComponent } from '../RootComponent/RootComponent';
import { Basic, type BasicProps } from './subcomponents/Basic/Basic';
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
  exited: undefined,
};

export interface SnackbarProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'role'>,
    BasicProps {
  /**
   * Задаёт расположение компонента.
   *
   * > Note: в мобильном режиме:
   * > - `"top-start"`/`"top-end"` перебивается на `"top"`, чтобы поведение было схожим с нативными
   * >   уведомлениями;
   * > - `"bottom"` перебивается на `"bottom-start"`, чтобы избежать вызова системных
   * >   функций, таких как **Pull To Refresh** и **Режим управления одной рукой**.
   * > - `"bottom-start"`/`"bottom-end"` закрываются смахиванием в любое из направлений
   * >   по горизонтальной оси.
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
export const Snackbar: React.FC<SnackbarProps> & { Basic: typeof Basic } = ({
  placement = 'bottom-start',
  children,
  layout,
  action,
  before,
  after,
  duration = 4000,
  onActionClick,
  onClose,
  mode = 'default',
  subtitle,
  offsetY,
  style,
  getRootRef,
  ...restProps
}: SnackbarProps) => {
  const platform = usePlatform();

  const [open, setOpen] = React.useState(true);
  const [touched, setTouched] = React.useState(false);

  const rootRef = useExternRef(getRootRef);
  const focused = useFocusWithin(rootRef);
  const inRef = React.useRef<HTMLDivElement>(null);
  const panGestureRecognizer = React.useRef<UIPanGestureRecognizer | null>(null);

  const shiftDataRef = React.useRef<ShiftData | null>(null);

  const rafRef = React.useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const closeTimeoutIdRef = React.useRef<ReturnType<typeof setTimeout>>();
  const mediaQueries = useMediaQueries();
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    open ? 'enter' : 'exit',
    {
      onExited: onClose,
    },
  );

  const clearRAF = React.useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const updateShiftAxisCSSProperties = React.useCallback(
    (x: number | null, y: number | null, direction: number | null) => {
      rafRef.current = requestAnimationFrame(() => {
        if (rootRef.current) {
          x === null
            ? rootRef.current.style.removeProperty('--vkui_internal--snackbar_shift_x')
            : rootRef.current.style.setProperty('--vkui_internal--snackbar_shift_x', `${x}px`);
          y === null
            ? rootRef.current.style.removeProperty('--vkui_internal--snackbar_shift_y')
            : rootRef.current.style.setProperty('--vkui_internal--snackbar_shift_y', `${y}px`);
          direction === null
            ? rootRef.current.style.removeProperty('--vkui_internal--snackbar_direction')
            : /* istanbul ignore next: TODO чтобы протестировать кейс, нужно мокать useMediaQueries(), чтобы перебивать mediaQueries.smallTabletPlus.matches */
              rootRef.current.style.setProperty(
                '--vkui_internal--snackbar_direction',
                `${direction}`,
              );
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
      onActionClick?.(event);
    }
  };

  const handleTouchStart = (event: React.UIEvent<HTMLDivElement>) => {
    panGestureRecognizer.current = new UIPanGestureRecognizer();
    panGestureRecognizer.current.setStartCoords(event.nativeEvent);
    shiftDataRef.current = getInitialShiftData(
      rootRef.current!.offsetWidth,
      rootRef.current!.offsetHeight,
      mediaQueries,
    );
    setTouched(true);
  };

  const handleTouchMove = (event: React.UIEvent<HTMLDivElement>) => {
    if (shiftDataRef.current && panGestureRecognizer.current) {
      panGestureRecognizer.current.setInitialTimeOnce();
      panGestureRecognizer.current.setEndCoords(event.nativeEvent);
      shiftDataRef.current = getMovedShiftData(
        placement,
        shiftDataRef.current,
        panGestureRecognizer.current.delta(),
      );

      if (shiftDataRef.current.shifted) {
        updateShiftAxisCSSProperties(
          shiftDataRef.current.x,
          shiftDataRef.current.y,
          shiftDataRef.current.direction,
        );
      }
    }
  };

  const handleTouchEnd = () => {
    if (
      touched &&
      shiftDataRef.current &&
      panGestureRecognizer.current &&
      shouldBeClosedByShiftData(
        placement,
        shiftDataRef.current,
        getRelativeBoundingClientRect(rootRef.current!, inRef.current!),
        panGestureRecognizer.current.velocity(),
      )
    ) {
      close();
    }

    setTouched(false);
  };

  useIsomorphicLayoutEffect(
    function closeAfterDelay() {
      if (!open || focused || touched || animationState !== 'entered') {
        return;
      }
      closeTimeoutIdRef.current = setTimeout(close, duration);
      return function preventCloseAfterDelayOnUnmount() {
        clearTimeout(closeTimeoutIdRef.current);
      };
    },
    [open, focused, touched, animationState, close, duration],
  );

  useIsomorphicLayoutEffect(
    function clearUserInteractionDataAfterTouchEnd() {
      if (!touched) {
        clearRAF();
        shiftDataRef.current = null;
        panGestureRecognizer.current = null;

        if (open) {
          updateShiftAxisCSSProperties(null, null, null);
        }
      }
    },
    [touched, open, updateShiftAxisCSSProperties, clearRAF],
  );

  React.useEffect(() => clearRAF, [clearRAF]);

  useGlobalEscKeyDown(open, close);

  if (animationState === 'exited') {
    return null;
  }

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
      <div
        role="alert"
        className={styles['Snackbar__in']}
        ref={inRef}
        // mobile
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        // desktop
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
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
                appearance={
                  mode === 'dark'
                    ? /* istanbul ignore next: проверяется в e2e */
                      'overlay'
                    : 'accent'
                }
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
      </div>
    </RootComponent>
  );
};

Snackbar.Basic = Basic;
