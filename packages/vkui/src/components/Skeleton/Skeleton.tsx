'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import { useExternRef } from '../../hooks/useExternRef';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { useStateWithPrev } from '../../hooks/useStateWithPrev';
import { millisecondsInSecond } from '../../lib/date';
import { useDOM } from '../../lib/dom';
import { animationVisibilityDelayStyles } from '../../styles/animationVisibilityDelay';
import type { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Skeleton.module.css';
import stylesDelay from '../../styles/animationVisibilityDelay.module.css';

const CUSTOM_PROPERTY_GRADIENT_LEFT = '--vkui_internal--skeleton_gradient_left';

/**
 * Синхронизирует анимацию скелетонов с помощью временных отрезков.
 *
 * ## visibilitychange
 *
 * В синхронизацию не заложен механизм перехода на оптимизации браузеров при
 * переходе на другую вкладку, поскольку нет уверенности в реальности таких
 * кейсов со скелетонами. Если такой кейс принесут, необходимо обработать
 * событие `visibilitychange` используя функцию `syncAnimation`.
 *
 * Смотри https://developer.chrome.com/blog/page-lifecycle-api/.
 *
 * @param duration Длительность анимации в секундах.
 */
function useSkeletonSyncAnimation(disableAnimation: boolean, duration = 1.5) {
  const [isAnimationStarted, setIsAnimationStarted] = React.useState<boolean>(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const syncAnimation = React.useCallback(() => {
    clearTimeout(timer.current);
    setIsAnimationStarted(false);

    const durationInMilliseconds = duration * millisecondsInSecond;
    const delay = durationInMilliseconds - (performance.now() % durationInMilliseconds);

    timer.current = setTimeout(() => setIsAnimationStarted(true), delay);

    return () => clearTimeout(timer.current);
  }, [duration]);

  React.useEffect(() => {
    if (disableAnimation) {
      setIsAnimationStarted(false);
      return;
    }

    if (isAnimationStarted) {
      return;
    }

    return syncAnimation();
  }, [disableAnimation, isAnimationStarted, syncAnimation]);

  return isAnimationStarted;
}

/**
 * Вычисляет позицию скелетона.
 */
function useSkeletonPosition(rootRef: React.RefObject<HTMLElement | null>) {
  const { document, window } = useDOM();
  const [[skeletonGradientLeft, prevSkeletonGradientLeft], setSkeletonGradientLeft] =
    useStateWithPrev('0');

  const updatePosition = React.useCallback(() => {
    const el = rootRef.current;
    if (!el || !document) {
      return;
    }

    const value = -(el.getBoundingClientRect().left - document.body.getBoundingClientRect().left);
    const gradientValue = value === 0 ? '0' : `${value}px`;
    if (prevSkeletonGradientLeft !== gradientValue) {
      setSkeletonGradientLeft(gradientValue);
    }
  }, [document, prevSkeletonGradientLeft, rootRef, setSkeletonGradientLeft]);

  React.useEffect(updatePosition, [updatePosition]);
  useResizeObserver(window, updatePosition);

  return skeletonGradientLeft;
}

export interface SkeletonProps
  extends HTMLAttributesWithRootRef<HTMLDivElement | HTMLSpanElement>,
    Pick<
      React.CSSProperties,
      | 'width'
      | 'height'
      | 'inlineSize'
      | 'blockSize'
      | 'maxWidth'
      | 'maxInlineSize'
      | 'borderRadius'
      | 'margin'
    > {
  /**
   * Начальный цвет анимации.
   */
  colorFrom?: string;

  /**
   * Финальный цвет анимации.
   */
  colorTo?: string;

  /**
   * Выключает анимацию, в результате чего показывается только один цвет.
   */
  noAnimation?: boolean;

  /**
   * Длительность анимации в секундах.
   */
  duration?: number;

  /**
   * Задерживает отрисовку элемента на заданное количество миллисекунд.
   */
  visibilityDelay?: number;
}

/**
 * > Старайтесь минимизировать количество заглушек на экране. Не каждый элемент
 * > на экране должен заменяться заглушкой.
 * >
 * > Текстовые блоки лучше сокращать до трёх строк. Ширина последней строки
 * > скелета вычисляется, как 75% от ширины текстового блока. Высота скелетона
 * > автоматически подстраивается под размер шрифта, поэтому идеально
 * > вписывается в слоты компонентов, которые обычно ожидают текст.
 *
 * @since 6.1.0
 *
 * @see https://vkui.io/components/skeleton
 *
 */
export const Skeleton = ({
  width,
  height,
  inlineSize,
  blockSize,
  maxWidth,
  maxInlineSize,
  borderRadius,
  children,
  colorFrom,
  colorTo,
  noAnimation = false,
  duration,
  margin,
  getRootRef,
  visibilityDelay,
  ...restProps
}: SkeletonProps): React.ReactNode => {
  const rootRef = useExternRef(getRootRef);

  const disableAnimation = !useSkeletonSyncAnimation(noAnimation, duration);
  const skeletonGradientLeft = useSkeletonPosition(rootRef);

  const skeletonStyle: React.CSSProperties & CSSCustomProperties = {
    width,
    height,
    inlineSize,
    blockSize,
    maxWidth,
    maxInlineSize,
    borderRadius,
    margin,
    [CUSTOM_PROPERTY_GRADIENT_LEFT]: skeletonGradientLeft,
  };

  if (colorFrom) {
    skeletonStyle['--vkui_internal--skeleton_color_from'] = colorFrom;
  }

  if (colorTo) {
    skeletonStyle['--vkui_internal--skeleton_color_to'] = colorTo;
  }

  if (Number.isFinite(duration)) {
    skeletonStyle['--vkui_internal--skeleton_animation_duration'] = `${duration}s`;
  }

  return (
    <RootComponent
      getRootRef={rootRef}
      Component="span"
      baseClassName={classNames(
        styles.host,
        disableAnimation && styles.disableAnimation,
        visibilityDelay && stylesDelay.visibilityDelay,
      )}
      baseStyle={mergeStyle(skeletonStyle, animationVisibilityDelayStyles(visibilityDelay))}
      {...restProps}
    >
      {children || <>&zwnj;</>}
    </RootComponent>
  );
};
