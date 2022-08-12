import * as React from "react";
import { HasRootRef } from "../../types";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { noop } from "../../lib/utils";
import { useExternRef } from "../../hooks/useExternRef";
import { usePlatform } from "../../hooks/usePlatform";
import { Removable, RemovableProps } from "../Removable/Removable";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./FormLayoutGroup.css";

export interface FormLayoutGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    RemovableProps,
    HasRootRef<HTMLDivElement> {
  mode?: "vertical" | "horizontal";
  /**
   * Только для режима horizontal. Дает возможность удалить всю группу `FormItem`.
   */
  removable?: boolean;

  /**
   * Только для режима horizontal. Дает возможность склеить несколько `FormItem`.
   */
  segmented?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormLayoutGroup
 */
export const FormLayoutGroup = ({
  children,
  mode = "vertical",
  removable,
  segmented,
  removePlaceholder = "Удалить",
  onRemove = noop,
  getRootRef,
  ...restProps
}: FormLayoutGroupProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();
  const isRemovable = removable && mode === "horizontal";
  const isSegmented = segmented && mode === "horizontal";
  const rootEl = useExternRef(getRootRef);

  return (
    <div
      ref={rootEl}
      vkuiClass={classNames(
        getClassName("FormLayoutGroup", platform), // TODO: v5 remove
        `FormLayoutGroup--sizeY-${sizeY}`,
        `FormLayoutGroup--${mode}`,
        isRemovable && "FormLayoutGroup--removable",
        isSegmented && "FormLayoutGroup--segmented"
      )}
      {...restProps}
    >
      {isRemovable ? (
        <Removable
          vkuiClass="FormLayoutGroup__removable"
          align="start"
          removePlaceholder={removePlaceholder}
          onRemove={(e) => {
            if (rootEl?.current) {
              onRemove(e, rootEl.current);
            }
          }}
        >
          {children}
        </Removable>
      ) : (
        <React.Fragment>
          {children}
          <span vkuiClass="FormLayoutGroup__offset" aria-hidden />
        </React.Fragment>
      )}
    </div>
  );
};
