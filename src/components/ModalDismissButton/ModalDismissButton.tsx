import * as React from "react";
import { Icon20Cancel } from "@vkontakte/icons";
import { Tappable } from "../Tappable/Tappable";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import "./ModalDismissButton.css";

export type ModalDismissButtonProps = React.HTMLAttributes<HTMLButtonElement>;

/**
 * @see https://vkcom.github.io/VKUI/#/ModalDismissButton
 */
export const ModalDismissButton: React.FC<ModalDismissButtonProps> = ({
  "aria-label": ariaLabel = "Закрыть",
  ...restProps
}: ModalDismissButtonProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      vkuiClass={getClassName("ModalDismissButton", platform)}
      {...restProps}
      aria-label={ariaLabel}
      activeMode="ModalDismissButton--active"
      hoverMode="ModalDismissButton--hover"
    >
      <Icon20Cancel />
    </Tappable>
  );
};
