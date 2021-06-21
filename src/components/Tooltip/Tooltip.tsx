import React, { Fragment, useState, ReactElement, ReactNode, isValidElement, FC, forwardRef, Ref, useEffect, CSSProperties, HTMLAttributes, cloneElement, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import Subhead from '../Typography/Subhead/Subhead';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { tooltipContainerAttr } from './TooltipContainer';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useDOM } from '../../lib/dom';
interface SimpleTooltipProps extends Partial<TooltipProps> {
  target?: HTMLDivElement;
  arrowRef?: Ref<HTMLDivElement>;
  fixed: boolean;
  style?: {
    arrow: CSSProperties;
    container: CSSProperties;
  };
  attributes?: {
    arrow: HTMLAttributes<HTMLDivElement>;
    container: HTMLAttributes<HTMLDivElement>;
  };
}

const isDOMTypeElement = (element: ReactElement): element is React.DOMElement<any, any> => {
  return React.isValidElement(element) && typeof element.type === 'string';
};

const baseClassName = getClassName('Tooltip');

const SimpleTooltip = forwardRef<HTMLDivElement, SimpleTooltipProps>(
  function SimpleTooltip(
    { mode = 'accent', header, text, arrowRef, style = {}, attributes, fixed },
    ref,
  ) {
    return (
      <div vkuiClass={
        classNames(
          baseClassName,
          `Tooltip--${mode}`,
          {
            'Tooltip--fixed': fixed,
          },
        )}>
        <div vkuiClass="Tooltip__container" ref={ref} style={style.container} {...attributes.container}>
          <div vkuiClass="Tooltip__corner" style={style.arrow} {...attributes.arrow} ref={arrowRef} />
          <div vkuiClass="Tooltip__content">
            {header && <Subhead weight="semibold" vkuiClass="Tooltip__title">{header}</Subhead>}
            {text && <Subhead weight="regular" vkuiClass="Tooltip__text">{text}</Subhead>}
          </div>
        </div>
      </div>
    );
  });

export interface TooltipProps {
  /**
   * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
   * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
   * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
   */
  children: ReactElement;
  mode?: 'accent' | 'light';
  /**
   * Если передан `false`, то рисуется просто `children`.
   */
  isShown?: boolean;
  /**
   * Текст тултипа.
   */
  text?: ReactNode;
  /**
   * Заголовок тултипа.
   */
  header?: ReactNode;
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
   * Сдвиг треугольника (относительно ширины тултипа).
   */
  cornerOffset?: number;
  /**
   * Callback, который вызывается при клике по любому месту в пределах экрана.
   */
  onClose?: () => void;
}

function getTranslateFromPlacement(placement: Placement) {
  const basePlacement = placement?.split('-')[0];

  let deg = 0;
  let translate: [number, number] = [0, 0];
  switch (basePlacement) {
    case 'right':
      deg = 270;
      translate[1] = -14;
      break;
    case 'left':
      deg = 90;
      translate[1] = -14;
      break;
    case 'top':
    case 'bottom':
      deg = 0;
      translate[1] = -8;
      break;
  }

  return {
    deg,
    translate,
  };
}

function getPlacement(alignX?: TooltipProps['alignX'], alignY?: TooltipProps['alignY']): Placement {
  let placementX = '';
  let placementY = '';

  if (alignY === 'top') {
    placementY = 'top';
  } else if (alignY === 'bottom' || !alignY) {
    placementY = 'bottom';
  }

  if (alignX === 'center') {
    placementX = '';
  } else if (alignX === 'left' || !alignX) {
    placementX = '-start';
  } else if (alignX === 'right') {
    placementX = '-end';
  };

  return `${placementY}${placementX}` as Placement;
}

const autoPlacementsX: Placement[] = ['right', 'left'];
const autoPlacementsY: Placement[] = ['bottom', 'top'];

const Tooltip: FC<TooltipProps> = ({
  children, isShown = true, offsetX = 0, offsetY = 15,
  alignX, alignY, onClose, cornerOffset,
  ...restProps
}) => {
  const [tooltipRef, setTooltipRef] = useState<HTMLElement>();
  const [tooltipArrowRef, setTooltipArrowRef] = useState<HTMLElement>();
  const [target, setTarget] = useState<HTMLElement>();

  /* eslint-disable no-restricted-properties */
  /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion*/
  const fixedPortal = useMemo(() => target?.closest(`[${tooltipContainerAttr}=fixed]`) != null, [target]);
  const portalTarget = useMemo(() => target?.closest(`[${tooltipContainerAttr}]`) as HTMLDivElement, [target]);
  const strategy = useMemo(() => target?.style.position === 'fixed' ? 'fixed' : 'absolute', [target]);
  /* eslint-enable @typescript-eslint/no-unnecessary-type-assertion*/
  /* eslint-enable no-restricted-properties */

  const { document } = useDOM();
  useGlobalEventListener(document, 'click', onClose);

  const placement = getPlacement(alignX, alignY);

  let availablePlacements: Placement[] = [placement];
  if (!alignX) {
    availablePlacements = [...availablePlacements, ...autoPlacementsX];
  }
  if (!alignY) {
    availablePlacements = [...availablePlacements, ...autoPlacementsY];
  }

  const { styles, attributes, forceUpdate, state } = usePopper(target, tooltipRef, {
    strategy: strategy,
    modifiers: [
      {
        name: 'offset', options: {
          offset: [
            offsetX,
            offsetY,
          ],
        },
      },
      {
        name: 'arrow', options: {
          element: tooltipArrowRef,
          padding: 14,
        },
      },
      {
        name: 'preventOverflow', options: {
          boundary: portalTarget,
        },
      },
      {
        name: 'flip',
        options: {
          fallbackPlacements: availablePlacements,
          allowedAutoPlacements: availablePlacements,
        },
      },
    ],
    placement: 'auto',
  });

  const childRef = isValidElement(children) &&
    (isDOMTypeElement(children) ? children.ref : children.props.getRootRef);
  const patchedRef = useExternRef(setTarget, childRef);
  const child = isValidElement(children) ? cloneElement(children, {
    [isDOMTypeElement(children) ? 'ref' : 'getRootRef']: patchedRef,
  }) : children;

  useEffect(() => {
    forceUpdate?.();
  }, [child]);

  const arrowTransform = getTranslateFromPlacement(state?.placement);

  const arrowStyle: CSSProperties = {
    ...styles.arrow,
    transform:
      `${styles.arrow?.transform || ''} rotate(${arrowTransform?.deg}deg) translate(${arrowTransform?.translate[0] + cornerOffset}px, ${arrowTransform?.translate[1]}px)`,
  };

  return (
    <Fragment>
      {child}
      {isShown && target != null && ReactDOM.createPortal(
        <SimpleTooltip
          {...restProps}
          ref={(el) => setTooltipRef(el)}
          fixed={fixedPortal}
          arrowRef={(el) => setTooltipArrowRef(el)}
          style={{ arrow: arrowStyle, container: styles.popper }}
          attributes={{ arrow: attributes.arrow, container: attributes.popper }}
        />, portalTarget)}
    </Fragment>
  );
};

export default Tooltip;
