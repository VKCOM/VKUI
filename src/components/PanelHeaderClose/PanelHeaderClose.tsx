import * as React from "react";
import { Icon28CancelOutline } from "@vkontakte/icons";
import {
  PanelHeaderButton,
  PanelHeaderButtonProps,
} from "../PanelHeaderButton/PanelHeaderButton";
import { ANDROID, VKCOM } from "../../lib/platform";
import { getTitleFromChildren } from "../../lib/utils";
import { usePlatform } from "../../hooks/usePlatform";

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderClose
 */
export const PanelHeaderClose: React.FunctionComponent<
  PanelHeaderButtonProps
> = ({ children = "Отмена", ...restProps }: PanelHeaderButtonProps) => {
  const platform = usePlatform();
  return (
    <PanelHeaderButton
      aria-label={getTitleFromChildren(children)}
      {...restProps}
    >
      {platform === ANDROID || platform === VKCOM ? (
        <Icon28CancelOutline />
      ) : (
        children
      )}
    </PanelHeaderButton>
  );
};
