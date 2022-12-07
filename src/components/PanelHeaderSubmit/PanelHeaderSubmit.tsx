import * as React from "react";
import {
  PanelHeaderButton,
  PanelHeaderButtonProps,
} from "../PanelHeaderButton/PanelHeaderButton";
import { Icon28DoneOutline } from "@vkontakte/icons";
import { Platform } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { getTitleFromChildren } from "../../lib/utils";

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderSubmit
 */
export const PanelHeaderSubmit = ({
  children = "Готово",
  ...restProps
}: PanelHeaderButtonProps) => {
  const platform = usePlatform();

  return (
    <PanelHeaderButton
      aria-label={getTitleFromChildren(children)}
      primary
      {...restProps}
    >
      {platform === Platform.IOS ? children : <Icon28DoneOutline />}
    </PanelHeaderButton>
  );
};
