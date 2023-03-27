import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import {
  arrowMiddleware,
  autoPlacementMiddleware,
  autoUpdateFloatingElement,
  checkIsNotAutoPlacement,
  convertFloatingDataToReactCSSProperties,
  flipMiddleware,
  getAutoPlacementAlign,
  offsetMiddleware,
  type Placement,
  type PlacementWithAuto,
  shiftMiddleware,
  sizeMiddleware,
  useFloating,
  type UseFloatingMiddleware,
} from '../../lib/floating';
import type { HasRef } from '../../types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { ARROW_HEIGHT, ARROW_PADDING, PopperArrow } from '../PopperArrow/PopperArrow';
import styles from './Popper.module.css';

export interface PopperRenderContentProps {
  className: string;
}

export interface PopperCommonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  /**
   * По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства
   */
  placement?: PlacementWithAuto;
  /**
   * Отступ по вспомогательной оси
   */
  offsetSkidding?: number;
  /**
   * Отступ по главной оси
   */
  offsetDistance?: number;
  /**
   * Отображать ли стрелку, указывающую на якорный элемент
   */
  arrow?: boolean;
  /**
   * Стиль стрелки
   */
  arrowClassName?: string;
  /**
   * Выставлять ширину равной target элементу
   */
  sameWidth?: boolean;
  forcePortal?: boolean;
  /**
   * Подписывается на изменение геометрии `targetRef`, чтобы пересчитать свою позицию.
   */
  autoUpdateOnTargetResize?: boolean;
  /**
   * Массив кастомных модификаторов для Popper (необходимо мемоизировать)
   */
  customMiddlewares?: UseFloatingMiddleware[];
  /**
   * При передаче содержимого в `children`, он будет обёрнут во внутренний контейнер.
   *
   * Если хочется управлять этим контейнером, то используйте данную функцию.
   *
   * > ⚠️ Параметр `children` будет проигнорирован.
   */
  renderContent?(props: PopperRenderContentProps): React.ReactNode;
  onPlacementChange?(data: { placement?: Placement }): void;
}

export interface PopperProps extends PopperCommonProps {
  targetRef: React.RefObject<HTMLElement>;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Popper
 */
export const Popper = ({
  targetRef,
  children,
  getRef,
  placement: placementProp = 'bottom-start',
  onPlacementChange,
  arrow,
  arrowClassName,
  sameWidth,
  offsetDistance = 8,
  offsetSkidding = 0,
  forcePortal = true,
  autoUpdateOnTargetResize = false,
  style: styleProp,
  customMiddlewares,
  renderContent,
  className,
  ...restProps
}: PopperProps) => {
  const arrowRef = React.useRef<HTMLDivElement>(null);

  const isNotAutoPlacement = checkIsNotAutoPlacement(placementProp);

  const memoizedMiddlewares = React.useMemo(() => {
    const middlewares: UseFloatingMiddleware[] = [
      offsetMiddleware({
        crossAxis: offsetSkidding,
        mainAxis: arrow ? offsetDistance + ARROW_HEIGHT : offsetDistance,
      }),
    ];

    // см. https://floating-ui.com/docs/flip#conflict-with-autoplacement
    if (isNotAutoPlacement) {
      middlewares.push(flipMiddleware());
    } else {
      middlewares.push(
        autoPlacementMiddleware({ alignment: getAutoPlacementAlign(placementProp) }),
      );
    }

    middlewares.push(shiftMiddleware());

    if (sameWidth) {
      middlewares.push(
        sizeMiddleware({
          apply({ rects, elements }) {
            Object.assign(elements.floating.style, {
              width: `${rects.reference.width}px`,
            });
          },
        }),
      );
    }

    if (customMiddlewares) {
      middlewares.push(...customMiddlewares);
    }

    // см. https://floating-ui.com/docs/arrow#order
    if (arrow) {
      middlewares.push(
        arrowMiddleware({
          element: arrowRef,
          padding: ARROW_PADDING,
        }),
      );
    }

    return middlewares;
  }, [
    arrow,
    sameWidth,
    offsetSkidding,
    offsetDistance,
    customMiddlewares,
    placementProp,
    isNotAutoPlacement,
  ]);

  const {
    x: floatingDataX,
    y: floatingDataY,
    strategy: floatingPositionStrategy,
    placement: resolvedPlacement,
    refs,
    middlewareData: { arrow: arrowCoords },
  } = useFloating({
    placement: isNotAutoPlacement ? placementProp : undefined,
    middleware: memoizedMiddlewares,
    whileElementsMounted(...args) {
      return autoUpdateFloatingElement(...args, {
        elementResize: autoUpdateOnTargetResize,
      });
    },
  });

  const handleRootRef = useExternRef<HTMLDivElement>(refs.setFloating, getRef);

  React.useEffect(() => {
    refs.setReference(targetRef.current);
  }, [refs, targetRef]);

  React.useEffect(() => {
    if (resolvedPlacement && onPlacementChange) {
      onPlacementChange({ placement: resolvedPlacement });
    }
  }, [onPlacementChange, resolvedPlacement]);

  const dropdown = (
    <div
      {...restProps}
      className={classNames(styles['Popper'], className)}
      ref={handleRootRef}
      style={{
        ...styleProp,
        ...convertFloatingDataToReactCSSProperties(
          floatingPositionStrategy,
          floatingDataX,
          floatingDataY,
          sameWidth ? null : undefined,
        ),
      }}
    >
      {arrow && (
        <PopperArrow
          coords={arrowCoords}
          placement={resolvedPlacement}
          arrowClassName={arrowClassName}
          getRootRef={arrowRef}
        />
      )}
      {renderContent ? renderContent({ className: '' }) : children}
    </div>
  );

  return <AppRootPortal forcePortal={forcePortal}>{dropdown}</AppRootPortal>;
};
