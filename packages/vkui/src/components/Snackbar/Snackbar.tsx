import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { useTimeout } from '../../hooks/useTimeout';
import { useWaitTransitionFinish } from '../../hooks/useWaitTransitionFinish';
import { ViewWidth } from '../../lib/adaptivity';
import { rubber } from '../../lib/touch';
import { HTMLAttributesWithRootRef } from '../../types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { Button } from '../Button/Button';
import { RootComponent } from '../RootComponent/RootComponent';
import { Touch, TouchEvent } from '../Touch/Touch';
import { Basic, BasicProps } from './subcomponents/Basic/Basic';
import styles from './Snackbar.module.css';

export interface SnackbarProps extends HTMLAttributesWithRootRef<HTMLElement>, BasicProps {
  /**
   * Название кнопки действия в уведомлении
   * Не может использоваться одновременно с `subtitle`
   */
  action?: React.ReactNode;

  /**
   * Будет вызвано при клике на кнопку действия
   */
  onActionClick?: (e: React.MouseEvent) => void;

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
  children,
  layout: layoutProps,
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
  ...restProps
}: SnackbarProps) => {
  const platform = usePlatform();
  const { viewWidth } = useAdaptivityWithJSMediaQueries();
  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET;
  const { waitTransitionFinish } = useWaitTransitionFinish();

  const [closing, setClosing] = React.useState(false);
  const [touched, setTouched] = React.useState(false);

  const shiftXPercentRef = React.useRef<number>(0);
  const shiftXCurrentRef = React.useRef<number>(0);

  const bodyElRef = React.useRef<HTMLDivElement | null>(null);
  const innerElRef = React.useRef<HTMLDivElement | null>(null);

  const animationFrameRef = React.useRef<ReturnType<typeof requestAnimationFrame> | null>(null);

  const transitionFinishDurationFallback = platform === 'ios' ? 320 : 400;

  const close = () => {
    setClosing(true);
    waitTransitionFinish(
      innerElRef.current,
      () => {
        onClose();
      },
      transitionFinishDurationFallback,
    );
  };

  const handleActionClick = (e: React.MouseEvent) => {
    close();

    if (action && typeof onActionClick === 'function') {
      onActionClick(e);
    }
  };

  const closeTimeout = useTimeout(close, duration);

  const setBodyTransform = (percent: number) => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      if (bodyElRef.current) {
        bodyElRef.current.style.transform = `translate3d(${percent}%, 0, 0)`;
      }
    });
  };

  const onTouchStart = closeTimeout.clear;

  const onTouchMoveX = (event: TouchEvent) => {
    const { shiftX, originalEvent } = event;
    originalEvent.preventDefault();

    if (!touched) {
      setTouched(true);
    }

    shiftXPercentRef.current = (shiftX / (bodyElRef.current?.offsetWidth ?? 0)) * 100;
    shiftXCurrentRef.current = rubber(shiftXPercentRef.current, 72, 1.2, platform !== 'ios');

    setBodyTransform(shiftXCurrentRef.current);
  };

  const onTouchEnd = (e: TouchEvent) => {
    let callback: VoidFunction | undefined;

    if (touched) {
      let shiftXCurrent = shiftXCurrentRef.current;
      const expectTranslateY = (shiftXCurrent / e.duration) * 240 * 0.6;
      shiftXCurrent = shiftXCurrent + expectTranslateY;

      if (isDesktop && shiftXCurrent <= -50) {
        closeTimeout.clear();
        waitTransitionFinish(
          bodyElRef.current,
          () => {
            onClose();
          },
          transitionFinishDurationFallback,
        );
        setBodyTransform(-120);
      } else if (!isDesktop && shiftXCurrent >= 50) {
        closeTimeout.clear();
        waitTransitionFinish(
          bodyElRef.current,
          () => {
            onClose();
          },
          transitionFinishDurationFallback,
        );
        setBodyTransform(120);
      } else {
        callback = () => {
          closeTimeout.set();
          setBodyTransform(0);
        };
      }
    } else {
      closeTimeout.set();
    }

    setTouched(false);
    callback && requestAnimationFrame(callback);
  };

  React.useEffect(() => closeTimeout.set(), [closeTimeout]);

  const layout = layoutProps || (after || isDesktop || subtitle ? 'vertical' : 'horizontal');

  return (
    <AppRootPortal>
      <RootComponent
        {...restProps}
        baseClassName={classNames(
          styles['Snackbar'],
          platform === 'ios' && styles['Snackbar--ios'],
          closing && styles['Snackbar--closing'],
          touched && styles['Snackbar--touched'],
          isDesktop && styles['Snackbar--desktop'],
        )}
        style={offsetY ? { ...style, bottom: offsetY } : style}
      >
        <Touch
          className={styles['Snackbar__in']}
          getRootRef={innerElRef}
          onStart={onTouchStart}
          onMoveX={onTouchMoveX}
          onEnd={onTouchEnd}
        >
          <Basic
            className={styles['Snackbar__snackbar']}
            getRootRef={bodyElRef}
            layout={layout}
            mode={mode}
            before={before}
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
            after={after}
          >
            {children}
          </Basic>
        </Touch>
      </RootComponent>
    </AppRootPortal>
  );
};

Snackbar.Basic = Basic;
