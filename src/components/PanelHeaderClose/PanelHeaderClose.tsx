import { Icon28CancelOutline } from "@vkontakte/icons";
import {
  PanelHeaderButton,
  PanelHeaderButtonProps,
} from "../PanelHeaderButton/PanelHeaderButton";
import { IOS } from "../../lib/platform";
import { getTitleFromChildren } from "../../lib/utils";
import { usePlatform } from "../../hooks/usePlatform";

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderClose
 */
export const PanelHeaderClose = ({
  children = "Отмена",
  ...restProps
}: PanelHeaderButtonProps) => {
  const platform = usePlatform();
  return (
    <PanelHeaderButton
      aria-label={getTitleFromChildren(children)}
      {...restProps}
    >
      {platform === IOS ? children : <Icon28CancelOutline />}
    </PanelHeaderButton>
  );
};
