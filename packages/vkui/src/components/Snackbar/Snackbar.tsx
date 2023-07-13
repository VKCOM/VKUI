import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { useTimeout } from '../../hooks/useTimeout';
import { useWaitTransitionFinish } from '../../hooks/useWaitTransitionFinish';
import { ViewWidth } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { rubber } from '../../lib/touch';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { Button } from '../Button/Button';
import { Touch, TouchEvent } from '../Touch/Touch';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './Snackbar.module.css';

export interface SnackbarProps extends React.HTMLAttributes<HTMLElement> {
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
   * Может быть следующими компонентами:
   *  - цветная иконка 24x24 или 28x28 пикселя
   *  - `<Avatar size={32} />`
   *  - `<Image size={40} />`
   */
  before?: React.ReactNode;
  /**
   * Контент в правой части, может быть иконкой 24x24
   */
  after?: React.ReactNode;
  /**
   * Варианты расположения кнопки действия
   * Игнорируется на десктопах и при наличии элементов `after` или `subtitle`
   */
  layout?: 'vertical' | 'horizontal';
  /**
   * Время в миллисекундах, через которое плашка скроется
   */
  duration?: number;
  /**
   * Обработчик закрытия уведомления
   */
  onClose: () => void;
  /**
   * Задает стиль снекбара
   */
  mode?: 'default' | 'dark';
  /**
   * Дополнительная строка текста под `children`.
   * Не может использоваться одновременно с `action`
   */
  subtitle?: React.ReactNode;
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
  layout: layoutProps = 'horizontal',
  action,
  before,
  after,
  duration = 4000,
  onActionClick,
  onClose,
  mode = 'default',
  className,
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

  const transitionFinishDurationFallback = platform === Platform.IOS ? 320 : 400;

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

  const handleActionClick: React.MouseEventHandler<HTMLElement> = (e) => {
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
    shiftXCurrentRef.current = rubber(shiftXPercentRef.current, 72, 1.2, platform !== Platform.IOS);

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

  const layout = after || isDesktop || subtitle ? 'vertical' : layoutProps;

  return (
    <AppRootPortal>
      <div
        {...restProps}
        className={classNames(
          styles['Snackbar'],
          platform === Platform.IOS && styles['Snackbar--ios'],
          {
            vertical: styles['Snackbar--layout-vertical'],
            horizontal: styles['Snackbar--layout-horizontal'],
          }[layout],
          mode === 'dark' && styles['Snackbar--mode-dark'],
          closing && styles['Snackbar--closing'],
          touched && styles['Snackbar--touched'],
          isDesktop && styles['Snackbar--desktop'],
          className,
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
          <div className={styles['Snackbar__body']} ref={bodyElRef}>
            {before && <div className={styles['Snackbar__before']}>{before}</div>}

            <div className={styles['Snackbar__content']}>
              <Paragraph className={styles['Snackbar__content-text']}>{children}</Paragraph>
              {subtitle && !action && (
                <Subhead className={styles['Snackbar__content-subtitle']}>{subtitle}</Subhead>
              )}

              {action && !subtitle && (
                <Button
                  align="left"
                  mode="link"
                  appearance={mode === 'dark' ? 'overlay' : 'accent'}
                  size="s"
                  className={styles['Snackbar__action']}
                  onClick={handleActionClick}
                >
                  {action}
                </Button>
              )}
            </div>

            {after && <div className={styles['Snackbar__after']}>{after}</div>}
          </div>
        </Touch>
      </div>
    </AppRootPortal>
  );
};
