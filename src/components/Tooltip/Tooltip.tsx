import * as React from "react";
import ReactDOM from "react-dom";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { Subhead } from "../Typography/Subhead/Subhead";
import { useNavTransition } from "../NavTransitionContext/NavTransitionContext";
import { PopperArrow } from "../PopperArrow/PopperArrow";
import { Modifier, usePopper } from "react-popper";
import { Placement } from "@popperjs/core";
import { tooltipContainerAttr } from "./TooltipContainer";
import { useExternRef } from "../../hooks/useExternRef";
import { useDOM } from "../../lib/dom";
import { warnOnce } from "../../lib/warnOnce";
import { hasReactNode } from "../../lib/utils";
import { prefixClass } from "../../lib/prefixClass";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import { HasRootRef } from "../../types";
import "./Tooltip.css";

interface SimpleTooltipProps extends Partial<TooltipProps> {
  target?: HTMLDivElement;
  style?: {
    arrow: React.CSSProperties;
    container: React.CSSProperties;
  };
  attributes?: {
    arrow: React.HTMLAttributes<HTMLDivElement> | null;
    container: React.HTMLAttributes<HTMLDivElement> | null;
  };
}

const isDOMTypeElement = (
  element: React.ReactElement
): element is React.DOMElement<any, any> => {
  return React.isValidElement(element) && typeof element.type === "string";
};

const baseClassName = getClassName("Tooltip");
const warn = warnOnce("Tooltip");
const IS_DEV = process.env.NODE_ENV === "development";

const SimpleTooltip = React.forwardRef<HTMLDivElement, SimpleTooltipProps>(
  function SimpleTooltip(
    { appearance = "accent", header, text, arrow, style = {}, attributes },
    ref
  ) {
    return (
      <div vkuiClass={classNames(baseClassName, `Tooltip--${appearance}`)}>
        <div
          vkuiClass="Tooltip__container"
          ref={ref}
          style={style.container}
          {...attributes?.container}
        >
          {arrow && (
            <PopperArrow
              style={style.arrow}
              attributes={attributes?.arrow}
              arrowClassName={prefixClass("Tooltip__arrow")}
            />
          )}
          <div vkuiClass="Tooltip__content">
            {header && (
              <Subhead weight="2" vkuiClass="Tooltip__title">
                {header}
              </Subhead>
            )}
            {text && <Subhead vkuiClass="Tooltip__text">{text}</Subhead>}
          </div>
        </div>
      </div>
    );
  }
);

export interface TooltipProps {
  /**
   * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
   * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
   * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
   */
  children:
    | React.ReactElement<HasRootRef<any>>
    | React.ReactElement<React.PropsWithRef<any>>;
  /**
   * @deprecated будет удалено в 5.0.0, устанавливать стиль следует через appearance
   * Стиль отображения подсказки
   */
  mode?: "accent" | "light";
  /**
   * Стиль отображения подсказки
   */
  appearance?: "accent" | "neutral" | "white" | "black" | "inversion";
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
  alignX?: "center" | "left" | "right";
  /**
   * Положение по вертикали (расположение над или под `children`).
   * Если не задано, позиция по вертикали определятся автоматически
   */
  alignY?: "top" | "bottom";
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
  placement?: Placement;
}

function mapAlignX(x: TooltipProps["alignX"]) {
  switch (x) {
    case "left":
      return "start";
    case "right":
      return "end";
    default:
      return "";
  }
}
function getPlacement(
  alignX: TooltipProps["alignX"],
  alignY: TooltipProps["alignY"]
): Placement {
  return [alignY || "bottom", mapAlignX(alignX || "left")]
    .filter((p) => !!p)
    .join("-") as Placement;
}
function isVerticalPlacement(placement: Placement) {
  return placement.startsWith("top") || placement.startsWith("bottom");
}

/**
 * Вычисляем стиль подсказки: параметр appearance имеет приоритет, иначе мапим mode на подходящее значение из appearance
 * TODO: v5 избавиться от пропа mode и этого метода, для appearance по умолчанию сделать "accent"
 */
function calculateAppearance(
  mode: TooltipProps["mode"],
  appearance: TooltipProps["appearance"]
): TooltipProps["appearance"] {
  if (appearance) {
    return appearance;
  }

  return mode === "light" ? "white" : "accent";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Tooltip
 */
export const Tooltip = ({
  children,
  isShown: _isShown = true,
  offsetX = 0,
  offsetY = 15,
  alignX,
  alignY,
  onClose,
  cornerOffset = 0,
  cornerAbsoluteOffset,
  mode = "accent",
  appearance,
  arrow = true,
  placement,
  ...restProps
}: TooltipProps) => {
  const { entering } = useNavTransition();
  const isShown = _isShown && !entering;
  const [tooltipRef, setTooltipRef] = React.useState<HTMLElement | null>(null);
  const [target, setTarget] = React.useState<HTMLElement>();

  if (IS_DEV) {
    const multiChildren = React.Children.count(children) > 1;
    // Empty children is a noop
    const primitiveChild =
      hasReactNode(children) && typeof children !== "object";
    (multiChildren || primitiveChild) &&
      warn(
        [
          "children должен быть одним React элементом, получено",
          multiChildren && "несколько",
          primitiveChild && JSON.stringify(children),
        ]
          .filter(Boolean)
          .join(" "),
        "error"
      );
  }

  /* eslint-disable no-restricted-properties */
  /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion*/
  const tooltipContainer = React.useMemo(
    () => target?.closest(`[${tooltipContainerAttr}]`) as HTMLDivElement,
    [target]
  );
  const strategy = React.useMemo(
    () => (target?.style.position === "fixed" ? "fixed" : "absolute"),
    [target]
  );
  /* eslint-enable @typescript-eslint/no-unnecessary-type-assertion*/
  /* eslint-enable no-restricted-properties */

  if (IS_DEV && target && !tooltipContainer) {
    throw new Error(
      "Use TooltipContainer for Tooltip outside Panel (see docs)"
    );
  }

  const modifiers = React.useMemo(() => {
    const modifiers: Array<Modifier<string>> = [
      {
        name: "offset",
        options: {
          offset: [offsetX, offsetY],
        },
      },
      {
        name: "preventOverflow",
      },
      {
        name: "flip",
      },
    ];

    if (arrow) {
      modifiers.push({
        name: "arrow",
        options: {
          padding: 14,
        },
      });
      modifiers.push({
        name: "arrowOffset",
        enabled: true,
        phase: "main",
        fn({ state }) {
          if (!state.modifiersData.arrow) {
            return;
          }
          if (isVerticalPlacement(state.placement)) {
            if (cornerAbsoluteOffset !== undefined) {
              state.modifiersData.arrow.x = cornerAbsoluteOffset;
            } else {
              if (state.modifiersData.arrow?.x !== undefined) {
                state.modifiersData.arrow.x += cornerOffset;
              }
            }
          } else {
            if (cornerAbsoluteOffset !== undefined) {
              state.modifiersData.arrow.y = cornerAbsoluteOffset;
            } else {
              if (state.modifiersData.arrow?.y !== undefined) {
                state.modifiersData.arrow.y += cornerOffset;
              }
            }
          }
        },
      });
    }

    return modifiers;
  }, [arrow, cornerAbsoluteOffset, cornerOffset, offsetX, offsetY]);

  const _placement = placement ?? getPlacement(alignX, alignY);
  const { styles, attributes } = usePopper(target, tooltipRef, {
    strategy,
    placement: _placement,
    modifiers,
  });

  const { document } = useDOM();
  useGlobalEventListener(document, "click", isShown && onClose, {
    capture: true,
    passive: true,
  });
  // NOTE: setting isShown to true used to trigger usePopper().forceUpdate()

  const childRef =
    React.isValidElement(children) &&
    (isDOMTypeElement(children) ? children.ref : children.props.getRootRef);
  const patchedRef = useExternRef(setTarget, childRef);
  const child = React.isValidElement(children)
    ? React.cloneElement(children, {
        [isDOMTypeElement(children) ? "ref" : "getRootRef"]: patchedRef,
      })
    : children;

  const _appearance = calculateAppearance(mode, appearance);

  return (
    <React.Fragment>
      {child}
      {isShown &&
        target != null &&
        ReactDOM.createPortal(
          <SimpleTooltip
            {...restProps}
            appearance={_appearance}
            arrow={arrow}
            ref={(el) => setTooltipRef(el)}
            style={{ arrow: styles.arrow, container: styles.popper }}
            attributes={{
              arrow: attributes.arrow ?? null,
              container: attributes.popper ?? null,
            }}
          />,
          tooltipContainer
        )}
    </React.Fragment>
  );
};
