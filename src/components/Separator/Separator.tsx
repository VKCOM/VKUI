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
  expanded?: boolean;
}

const Separator: React.FC<SeparatorProps> = ({
  wide,
  expanded,
  ...restProps
}) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      aria-hidden="true"
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
      vkuiClass={classNames(getClassName("Separator", platform), {
        "Separator--wide": wide,
      })}
    >
      <div
        // eslint-disable-next-line vkui/no-object-expression-in-arguments
        vkuiClass={classNames("Separator__in", {
          "Separator__in--expanded": expanded,
        })}
      />
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default React.memo(Separator);
