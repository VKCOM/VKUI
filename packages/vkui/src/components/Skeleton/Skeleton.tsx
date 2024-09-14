import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { millisecondsInSecond } from 'date-fns/constants';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePrevious } from '../../hooks/usePrevious';
import { useDOM } from '../../lib/dom';
import type { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Skeleton.module.css';

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
 *
 * @param duration длительность анимации в секундах
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
 * Вычисляет позицию скелетона
 */
function useSkeletonPosition(rootRef: React.MutableRefObject<HTMLElement | null>) {
  const { document, window } = useDOM();
  const [skeletonGradientLeft, setSkeletonGradientLeft] = React.useState('0');
  const prevSkeletonGradientLeft = usePrevious(skeletonGradientLeft);

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
  }, [document, prevSkeletonGradientLeft, rootRef]);

  React.useEffect(updatePosition, [updatePosition]);
  useGlobalEventListener(window, 'resize', updatePosition);

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
  noAnimation?: boolean;

  /**
   * Длительность анимации в секундах
   */
  duration?: number;
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
 */
export const Skeleton = ({
  width,
  height,
  inlineSize,
  blockSize,
  maxWidth,
  maxInlineSize,
  borderRadius,
  style,
  children,
  colorFrom,
  colorTo,
  noAnimation = false,
  duration,
  margin,
  getRootRef,
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
        styles['Skeleton'],
        disableAnimation && styles['Skeleton--disableAnimation'],
      )}
      style={{ ...skeletonStyle, ...style }}
      {...restProps}
    >
      {children || <>&zwnj;</>}
    </RootComponent>
  );
};
