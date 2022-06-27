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
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormLayoutGroup
 */
export const FormLayoutGroup: React.FC<FormLayoutGroupProps> = ({
  children,
  mode = "vertical",
  removable,
  removePlaceholder = "Удалить",
  onRemove = noop,
  getRootRef,
  ...restProps
}: FormLayoutGroupProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();
  const isRemovable = removable && mode === "horizontal";
  const rootEl = useExternRef(getRootRef);

  return (
    <div
      ref={rootEl}
      vkuiClass={classNames(
        getClassName("FormLayoutGroup", platform), // TODO: v5 remove
        `FormLayoutGroup--sizeY-${sizeY}`,
        `FormLayoutGroup--${mode}`,
        isRemovable && "FormLayoutGroup--removable"
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
        children
      )}
    </div>
  );
};
