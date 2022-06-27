import * as React from "react";
import {
  PanelHeaderButton,
  PanelHeaderButtonProps,
} from "../PanelHeaderButton/PanelHeaderButton";
import { Icon28DoneOutline } from "@vkontakte/icons";
import { ANDROID, VKCOM } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { getTitleFromChildren } from "../../lib/utils";

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderSubmit
 */
export const PanelHeaderSubmit: React.FunctionComponent<
  PanelHeaderButtonProps
> = ({ children = "Готово", ...restProps }: PanelHeaderButtonProps) => {
  const platform = usePlatform();

  return (
    <PanelHeaderButton
      aria-label={getTitleFromChildren(children)}
      primary
      {...restProps}
    >
      {platform === ANDROID || platform === VKCOM ? (
        <Icon28DoneOutline />
      ) : (
        children
      )}
    </PanelHeaderButton>
  );
};
