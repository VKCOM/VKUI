import * as React from "react";
import Tappable, { TappableProps } from "../Tappable/Tappable";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { IOS } from "../../lib/platform";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./IconButton.css";

export type IconButtonProps = TappableProps;

/**
 * @see https://vkcom.github.io/VKUI/#/IconButton
 */
const IconButton: React.FC<IconButtonProps> = ({
  children,
  Component = "button",
  ...restProps
}: IconButtonProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? "a" : Component}
      activeEffectDelay={200}
      activeMode={platform === IOS ? "opacity" : "IconButton--active"}
      vkuiClass={classNames(
        getClassName("IconButton", platform),
        getSizeYClassName("IconButton", sizeY)
      )}
    >
      {children}
    </Tappable>
  );
};

// eslint-disable-next-line import/no-default-export
export default IconButton;
