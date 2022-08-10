import * as React from "react";
import { HasComponent, HasRootRef } from "../../types";
import { classNames } from "../../lib/classNames";
import { useExternRef } from "../../hooks/useExternRef";
import { hasReactNode, noop } from "../../lib/utils";
import { Subhead } from "../Typography/Subhead/Subhead";
import { Footnote } from "../Typography/Footnote/Footnote";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { Removable, RemovableProps } from "../Removable/Removable";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import "./FormItem.css";

export interface FormItemProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent,
    RemovableProps {
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  status?: "default" | "error" | "valid";
  /**
   * Дает возможность удалить `FormItem`. Рекомендуется использовать только для `Input` или `Select`.
   */
  removable?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormItem
 */
export const FormItem = ({
  children,
  top,
  bottom,
  status = "default",
  Component = "div",
  removable,
  onRemove = noop,
  removePlaceholder = "Удалить",
  getRootRef,
  ...restProps
}: FormItemProps) => {
  const rootEl = useExternRef(getRootRef);
  const { sizeY } = useAdaptivity();

  const wrappedChildren = (
    <React.Fragment>
      {hasReactNode(top) && <Subhead vkuiClass="FormItem__top">{top}</Subhead>}
      {children}
      {hasReactNode(bottom) && (
        <Footnote vkuiClass="FormItem__bottom">{bottom}</Footnote>
      )}
    </React.Fragment>
  );

  return (
    <Component
      {...restProps}
      ref={rootEl}
      vkuiClass={classNames(
        "FormItem",
        `FormItem--${status}`,
        getSizeYClassName("FormItem", sizeY),
        hasReactNode(top) && "FormItem--withTop",
        removable && "FormItem--removable"
      )}
    >
      {removable ? (
        <Removable
          align="start"
          onRemove={(e) => {
            if (rootEl?.current) {
              onRemove(e, rootEl.current);
            }
          }}
          removePlaceholder={removePlaceholder}
        >
          <div vkuiClass="FormItem__removable">{wrappedChildren}</div>
        </Removable>
      ) : (
        wrappedChildren
      )}
    </Component>
  );
};
