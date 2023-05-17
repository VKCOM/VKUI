import * as React from 'react';
import ReactDOM from 'react-dom';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useDOM } from '../../lib/dom';
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
  useFloating,
  type UseFloatingMiddleware,
} from '../../lib/floating';
import { warnOnce } from '../../lib/warnOnce';
import { HasRootRef } from '../../types';
import { useNavTransition } from '../NavTransitionContext/NavTransitionContext';
import { DefaultIcon } from '../PopperArrow/DefaultIcon';
import { PopperArrow, type PopperArrowProps } from '../PopperArrow/PopperArrow';
import { Subhead } from '../Typography/Subhead/Subhead';
import { tooltipContainerAttr } from './TooltipContainer';
import styles from './Tooltip.module.css';

/**
 * Перебиваем `ref`.
 *
 * В оригинальном `React.DOMElement` задаётся `React.LegacyRef<T>`, в котором есть `string`.
 * Когда как `{ ref: "string" }` уже давно депрекейтнут.
 */
interface DOMElement<P extends React.HTMLAttributes<T> | React.SVGAttributes<T>, T extends Element>
  extends React.DOMElement<P, T> {
  ref: React.Ref<T>;
}

const isDOMTypeElement = <
  P extends React.HTMLAttributes<T> | React.SVGAttributes<T>,
  T extends Element,
>(
  element: React.ReactElement,
): element is DOMElement<P, T> => {
  return React.isValidElement(element) && typeof element.type === 'string';
};

const warn = warnOnce('Tooltip');

const stylesAppearance = {
  accent: styles['Tooltip--appearance-accent'],
  white: styles['Tooltip--appearance-white'],
  black: styles['Tooltip--appearance-black'],
  inversion: styles['Tooltip--appearance-inversion'],
};

export interface TooltipProps {
  /**
   * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
   * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
   * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
   */
  children: React.ReactElement<HasRootRef<any>> | React.ReactElement;
  /**
   * Стиль отображения подсказки
   */
  appearance?: 'accent' | 'neutral' | 'white' | 'black' | 'inversion';
  /**
   * Если передан `false`, то рисуется просто `children`.
   */
  isShown?: boolean;
  /**
   * Текст тултипа.
   */
  text?: React.ReactNode;
  /**
   * Заголовок тултипа.
   */
  header?: React.ReactNode;
  /**
   * Положение по горизонтали (прижатие к левому или правому краю `children`).
   * Если не задано, позиция по горизонтали определятся автоматически
   */
  alignX?: 'center' | 'left' | 'right';
  /**
   * Положение по вертикали (расположение над или под `children`).
   * Если не задано, позиция по вертикали определятся автоматически
   */
  alignY?: 'top' | 'bottom';
  /**
   * Сдвиг по горизонтали (относительно портала, в котором рисуется тултип).
   */
  offsetX?: number;
  /**
   * Сдвиг по вертикали (относительно портала, в котором рисуется тултип).
   */
  offsetY?: number;
  /**
   * Отображать ли стрелку, указывающую на якорный элемент
   */
  arrow?: boolean;
  /**
   * Безопасная зона вокруг стрелки, чтобы та не выходила за края контента.
   */
  arrowPadding?: number;
  /**
   * Пользовательская SVG иконка.
   *
   * Требования:
   *
   * 1. Иконка по умолчанию должна быть направлена вверх (a.k.a `IconUp`).
   * 2. Чтобы избежать проблемы с пространством между стрелкой и контентом на некоторых экранах,
   *    растяните кривую по высоте на `1px` и увеличьте на этот размер `height` и `viewBox` SVG.
   *    (см. https://github.com/VKCOM/VKUI/pull/4496).
   * 3. Убедитесь, что компонент принимает все валидные для SVG параметры.
   * 4. Убедитесь, что SVG и её элементы наследует цвет через `fill="currentColor"`.
   * 5. Если стрелка наезжает на якорный элемент, то увеличьте значение параметра `offsetY`.
   */
  ArrowIcon?: PopperArrowProps['Icon'];
  /**
   * Сдвиг стрелочки относительно центра дочернего элемента.
   */
  cornerOffset?: number;
  /**
   * Сдвиг стрелочки относительно ширины тултипа
   */
  cornerAbsoluteOffset?: number;
  /**
   * Callback, который вызывается при клике по любому месту в пределах экрана.
   */
  onClose?: () => void;
  /**
   * По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства
   */
  placement?: PlacementWithAuto;
  /**
   * Пользовательские css-классы, будут добавлены на root-элемент
   */
  className?: string;
}

function mapAlignX(x: TooltipProps['alignX']) {
  switch (x) {
    case 'left':
      return 'start';
    case 'right':
      return 'end';
    default:
      return '';
  }
}
function getDefaultPlacement(
  alignX: TooltipProps['alignX'],
  alignY: TooltipProps['alignY'],
): Placement {
  return [alignY || 'bottom', mapAlignX(alignX || 'left')]
    .filter((p) => !!p)
    .join('-') as Placement;
}
function isVerticalPlacement(placement: PlacementWithAuto) {
  return placement.startsWith('top') || placement.startsWith('bottom');
}

/**
 * @see https://vkcom.github.io/VKUI/#/Tooltip
 */
export const Tooltip = ({
  children,
  isShown: isShownProp = true,
  offsetX = 0,
  offsetY = 15,
  alignX,
  alignY,
  onClose,
  cornerOffset = 0,
  cornerAbsoluteOffset,
  appearance = 'accent',
  arrow = true,
  arrowPadding = 14,
  ArrowIcon = DefaultIcon,
  placement: placementProp,
  text,
  header,
  className,
  ...restProps
}: TooltipProps) => {
  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);
  const [target, setTarget] = React.useState<HTMLElement | null>(null);
  /* eslint-disable no-restricted-properties */
  const tooltipContainer = React.useMemo(
    () => target?.closest<HTMLDivElement>(`[${tooltipContainerAttr}]`),
    [target],
  );
  const { entering } = useNavTransition();
  const isShown = isShownProp && tooltipContainer && !entering;

  const placement = placementProp || getDefaultPlacement(alignX, alignY);
  const isNotAutoPlacement = checkIsNotAutoPlacement(placement);

  if (process.env.NODE_ENV === 'development') {
    const multiChildren = React.Children.count(children) > 1;
    // Empty children is a noop
    const primitiveChild = hasReactNode(children) && typeof children !== 'object';
    (multiChildren || primitiveChild) &&
      warn(
        [
          'children должен быть одним React элементом, получено',
          multiChildren && 'несколько',
          primitiveChild && JSON.stringify(children),
        ]
          .filter(Boolean)
          .join(' '),
        'error',
      );
  }

  const floatingPositionStrategy = React.useMemo(
    () => (target?.style.position === 'fixed' ? 'fixed' : 'absolute'),
    [target],
  );

  if (process.env.NODE_ENV === 'development' && target && !tooltipContainer) {
    throw new Error('Use TooltipContainer for Tooltip outside Panel (see docs)');
  }

  const memoizedMiddlewares = React.useMemo(() => {
    const middlewares: UseFloatingMiddleware[] = [
      offsetMiddleware({
        crossAxis: offsetX,
        mainAxis: offsetY,
      }),
    ];

    // см. https://floating-ui.com/docs/flip#conflict-with-autoplacement
    if (isNotAutoPlacement) {
      middlewares.push(flipMiddleware());
    } else {
      middlewares.push(
        autoPlacementMiddleware({
          alignment: placement ? getAutoPlacementAlign(placement) : null,
        }),
      );
    }

    middlewares.push(shiftMiddleware());

    // см. https://floating-ui.com/docs/arrow#order
    if (arrow) {
      middlewares.push(
        arrowMiddleware({
          element: arrowRef,
          padding: arrowPadding,
        }),
      );
      middlewares.push({
        name: 'arrowOffset',
        fn({ placement, middlewareData }) {
          if (!middlewareData.arrow) {
            return Promise.resolve({});
          }
          if (isVerticalPlacement(placement)) {
            if (cornerAbsoluteOffset !== undefined) {
              middlewareData.arrow.x = cornerAbsoluteOffset;
            } else if (middlewareData.arrow.x !== undefined) {
              middlewareData.arrow.x += cornerOffset;
            }
          } else {
            if (cornerAbsoluteOffset !== undefined) {
              middlewareData.arrow.y = cornerAbsoluteOffset;
            } else if (middlewareData.arrow.y !== undefined) {
              middlewareData.arrow.y += cornerOffset;
            }
          }
          return Promise.resolve({});
        },
      });
    }

    return middlewares;
  }, [
    arrow,
    arrowRef,
    arrowPadding,
    cornerAbsoluteOffset,
    cornerOffset,
    offsetX,
    offsetY,
    placement,
    isNotAutoPlacement,
  ]);

  const {
    x: floatingDataX,
    y: floatingDataY,
    placement: resolvedPlacement,
    refs,
    middlewareData: { arrow: arrowCoords },
  } = useFloating({
    strategy: floatingPositionStrategy,
    placement: isNotAutoPlacement ? placement : undefined,
    middleware: memoizedMiddlewares,
    whileElementsMounted: autoUpdateFloatingElement,
  });

  const { document } = useDOM();
  useGlobalEventListener(document, 'click', isShown && onClose, {
    capture: true,
    passive: true,
  });

  const childRef = isDOMTypeElement<React.HTMLAttributes<HTMLElement>, HTMLElement>(children)
    ? children.ref
    : React.isValidElement<HasRootRef<HTMLElement>>(children)
    ? children.props.getRootRef
    : null;
  const patchedRef = useExternRef<HTMLElement>(setTarget, refs.setReference, childRef);
  const child = React.isValidElement(children)
    ? React.cloneElement(children, {
        [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: patchedRef,
      })
    : children;

  return (
    <React.Fragment>
      {child}
      {isShown &&
        target != null &&
        ReactDOM.createPortal(
          <div
            {...restProps}
            className={classNames(
              styles['Tooltip'],
              appearance !== 'neutral' && stylesAppearance[appearance],
              className,
            )}
          >
            <div
              ref={refs.setFloating}
              style={convertFloatingDataToReactCSSProperties(
                floatingPositionStrategy,
                floatingDataX,
                floatingDataY,
              )}
            >
              {arrow && (
                <PopperArrow
                  coords={arrowCoords}
                  placement={resolvedPlacement}
                  arrowClassName={styles['Tooltip__arrow']}
                  getRootRef={setArrowRef}
                  Icon={ArrowIcon}
                />
              )}
              <div className={styles['Tooltip__content']}>
                {header && <Subhead weight="2">{header}</Subhead>}
                {text && <Subhead>{text}</Subhead>}
              </div>
            </div>
          </div>,
          tooltipContainer,
        )}
    </React.Fragment>
  );
};
