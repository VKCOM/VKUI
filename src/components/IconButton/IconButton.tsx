import * as React from "react";
import Tappable, { TappableProps } from "../Tappable/Tappable";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import { IOS } from "../../lib/platform";
import { warnOnce } from "../../lib/warnOnce";
import "./IconButton.css";

export interface IconButtonProps extends TappableProps {
  /**
   * @deprecated будет удалено в 5.0.0. Используйте `children`
   */
  icon?: React.ReactNode;
}

const warn = warnOnce("IconButton");
const IconButton: React.FC<IconButtonProps> = ({
  icon,
  sizeY,
  children,
  Component,
  ...restProps
}: IconButtonProps) => {
  const platform = usePlatform();

  if (icon && process.env.NODE_ENV === "development") {
    warn(
      "Свойство icon устарело и будет удалено в 5.0.0. Используйте children"
    );
  }

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? "a" : Component}
      activeEffectDelay={200}
      activeMode={platform === IOS ? "opacity" : "IconButton--active"}
      vkuiClass={classNames(
        getClassName("IconButton", platform),
        `IconButton--sizeY-${sizeY}`
      )}
    >
      {icon || children}
    </Tappable>
  );
};

IconButton.defaultProps = {
  Component: "button",
};

// eslint-disable-next-line import/no-default-export
export default withAdaptivity(IconButton, {
  sizeY: true,
});
