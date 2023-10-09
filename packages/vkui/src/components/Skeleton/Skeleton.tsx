import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useDOM } from '../../lib/dom';
import { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Skeleton.module.css';

const ANIMATION_DURATION = 1500;
const CUSTOM_PROPERTY_GRADIENT_LEFT = '--vkui_internal--skeleton_gradient_left';

/**
 * Синхронизирует анимацию скелетонов с помощью временных отрезков
 *
 * ## visibilitychange
 *
 * В синхронизацию не заложен механизм перехода на оптимизации браузеров при
 * переходе на другую вкладку, поскольку нет уверенности в реальности таких
 * кейсов со скелетонами. Если такой кейс принесут, необходимо обработать
 * событие `visibilitychange` используя функцию `syncAnimation`
 *
 * https://developer.chrome.com/blog/page-lifecycle-api/
 */
function useSkeletonSyncAnimation(
  disableAnimation: boolean,
  rootRef: React.MutableRefObject<HTMLElement | null>,
) {
  const isAnimationStarted = React.useRef<boolean>(false);
  const timer = React.useRef<NodeJS.Timeout | undefined>(undefined);

  /* eslint-disable no-restricted-properties -- используем класс из css modules*/
  const syncAnimation = React.useCallback(() => {
    const el = rootRef.current;
    if (el === null) {
      return;
    }

    clearTimeout(timer.current);
    el.classList.add(styles['Skeleton--disableAnimation']);
    isAnimationStarted.current = false;

    const delay = ANIMATION_DURATION - (performance.now() % ANIMATION_DURATION);

    timer.current = setTimeout(() => {
      if (rootRef.current === null) {
        return;
      }

      rootRef.current.classList.remove(styles['Skeleton--disableAnimation']);
      isAnimationStarted.current = true;
    }, delay);

    return () => clearTimeout(timer.current);
  }, [rootRef]);
  /* eslint-enable no-restricted-properties*/

  React.useEffect(() => {
    if (disableAnimation) {
      isAnimationStarted.current = false;
      return;
    }

    if (isAnimationStarted.current) {
      return;
    }

    return syncAnimation();
  }, [disableAnimation, syncAnimation]);

  return isAnimationStarted.current;
}

/**
 * Вычисляет позицию скелетона
 */
function useSkeletonPosition(rootRef: React.MutableRefObject<HTMLElement | null>) {
  const { document, window } = useDOM();
  const skeletonGradientLeft = React.useRef('0');

  const updatePosition = React.useCallback(() => {
    const el = rootRef.current;
    if (!el || !document) {
      return;
    }

    const value = -(el.getBoundingClientRect().left - document.body.getBoundingClientRect().left);
    skeletonGradientLeft.current = value === 0 ? '0' : `${value}px`;

    el.style.setProperty(CUSTOM_PROPERTY_GRADIENT_LEFT, skeletonGradientLeft.current);
  }, [document, rootRef]);

  React.useEffect(updatePosition, [updatePosition]);
  useGlobalEventListener(window, 'resize', updatePosition);

  return skeletonGradientLeft.current;
}

export interface SkeletonProps extends HTMLAttributesWithRootRef<HTMLDivElement | HTMLSpanElement> {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  inlineSize?: React.CSSProperties['inlineSize'];
  blockSize?: React.CSSProperties['blockSize'];
  maxWidth?: React.CSSProperties['maxWidth'];
  maxInlineSize?: React.CSSProperties['maxInlineSize'];
  borderRadius?: React.CSSProperties['borderRadius'];

  /**
   * Сделает скелетон круглым. Имеет более высокий приоритет над `borderRadius`
   */
  circle?: boolean;

  /**
   * Начальный цвет анимации
   */
  colorFrom?: string;

  /**
   * Финальный цвет анимации
   */
  colorTo?: string;

  /**
   * Выключает анимацию, в результате чего показывается только один цвет
   */
  still?: boolean;
}

/**
 * Старайтесь минимизировать количество заглушек на экране. Не каждый элемент
 * на экране должен заменяться заглушкой.
 *
 * Текстовые блоки лучше сокращать до трёх строк. Ширина последней строки
 * скелета вычисляется, как 75% от ширины текстового блока. Высота скелетона
 * автоматически подстраивается под размер шрифта, поэтому идеально
 * вписывается в слоты компонентов, которые обычно ожидают текст.
 *
 * @since 6.0.0
 */
export const Skeleton = ({
  width,
  height,
  inlineSize,
  blockSize,
  maxWidth,
  maxInlineSize,
  borderRadius,
  circle,
  style,
  children,
  getRootRef,
  colorFrom,
  colorTo,
  still = false,
  ...restProps
}: SkeletonProps) => {
  const rootRef = useExternRef(getRootRef);

  const disableAnimation = !useSkeletonSyncAnimation(still, rootRef);
  const skeletonGradientLeft = useSkeletonPosition(rootRef);

  const skeletonStyle: React.CSSProperties & CSSCustomProperties = {
    width,
    height,
    inlineSize,
    blockSize,
    maxWidth,
    maxInlineSize,
    borderRadius: circle ? '50%' : borderRadius,
    [CUSTOM_PROPERTY_GRADIENT_LEFT]: skeletonGradientLeft,
  };

  if (colorFrom) {
    skeletonStyle['--vkui_internal--skeleton_color_from'] = colorFrom;
  }

  if (colorTo) {
    skeletonStyle['--vkui_internal--skeleton_color_to'] = colorTo;
  }

  return (
    <RootComponent
      Component={children ? 'div' : 'span'}
      baseClassName={classNames(
        styles['Skeleton'],
        disableAnimation && styles['Skeleton--disableAnimation'],
      )}
      getRootRef={rootRef}
      style={{ ...skeletonStyle, ...style }}
      {...restProps}
    >
      {children || <>&zwnj;</>}
    </RootComponent>
  );
};
