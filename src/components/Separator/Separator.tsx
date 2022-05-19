import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import "./Separator.css";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide?: boolean;

  /**
   * @deprecated Это свойство устарело и будет удалено в 5.0.0. Используйте [`Spacing`](#/Spacing).
   */
  expanded?: boolean;
}

export const Separator: React.FC<SeparatorProps> = ({
  wide,
  expanded,
  ...restProps
}) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      aria-hidden="true"
      vkuiClass={classNames(
        getClassName("Separator", platform),
        wide && "Separator--wide"
      )}
    >
      <div
        vkuiClass={classNames(
          "Separator__in",
          expanded && "Separator__in--expanded"
        )}
      />
    </div>
  );
};
