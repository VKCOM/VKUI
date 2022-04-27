import * as React from "react";
import Tappable, { TappableProps } from "../Tappable/Tappable";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import { IOS } from "../../lib/platform";
import "./IconButton.css";

export type IconButtonProps = TappableProps & AdaptivityProps;

const IconButton: React.FC<IconButtonProps> = ({
  sizeY,
  children,
  Component,
  ...restProps
}: IconButtonProps) => {
  const platform = usePlatform();

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
      {children}
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
