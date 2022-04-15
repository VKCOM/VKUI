import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import "./Tabbar.css";

export interface TabbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Флаг для показа/скрытия верхней тени (Android) или границы (iOS)
   */
  shadow?: boolean;
  itemsLayout?: "vertical" | "horizontal" | "auto";
}

const Tabbar: React.FunctionComponent<TabbarProps> = (props: TabbarProps) => {
  const { children, shadow, itemsLayout, ...restProps } = props;
  const platform = usePlatform();

  const getItemsLayout = () => {
    switch (itemsLayout) {
      case "horizontal":
      case "vertical":
        return itemsLayout;
      default:
        return React.Children.count(children) > 2 ? "vertical" : "horizontal";
    }
  };

  return (
    <div
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
      vkuiClass={classNames(
        getClassName("Tabbar", platform),
        `Tabbar--l-${getItemsLayout()}`,
        {
          "Tabbar--shadow": shadow,
        }
      )}
      {...restProps}
    >
      <div vkuiClass="Tabbar__in">{children}</div>
    </div>
  );
};

Tabbar.defaultProps = {
  shadow: true,
};

// eslint-disable-next-line import/no-default-export
export default Tabbar;
