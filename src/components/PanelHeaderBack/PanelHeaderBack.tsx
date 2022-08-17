import {
  Icon28ChevronBack,
  Icon28ChevronLeftOutline,
  Icon28ArrowLeftOutline,
} from "@vkontakte/icons";
import {
  PanelHeaderButton,
  PanelHeaderButtonProps,
} from "../PanelHeaderButton/PanelHeaderButton";
import { Platform } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { getPlatformClassName } from "../../helpers/getPlatformClassName";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { classNames } from "../../lib/classNames";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./PanelHeaderBack.css";

export type PanelHeaderBackProps = PanelHeaderButtonProps & {
  "aria-label"?: string;
};

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderBack
 */
export const PanelHeaderBack = ({
  label,
  "aria-label": ariaLabel = "Назад",
  ...restProps
}: PanelHeaderButtonProps) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();
  // так-же label нужно скрывать при platform === Platform.IOS && sizeX === regular
  // https://github.com/VKCOM/VKUI/blob/master/src/components/PanelHeaderButton/PanelHeaderButton.css#L104
  const showLabel = platform === Platform.VKCOM || platform === Platform.IOS;

  return (
    <PanelHeaderButton
      {...restProps}
      vkuiClass={classNames(
        "PanelHeaderBack",
        getPlatformClassName("PanelHeaderBack", platform),
        getSizeXClassName("PanelHeaderBack", sizeX),
        showLabel && !!label && "PanelHeaderBack--has-label"
      )}
      label={showLabel && label}
      aria-label={ariaLabel}
    >
      {platform === Platform.ANDROID && <Icon28ArrowLeftOutline />}
      {platform === Platform.VKCOM && <Icon28ChevronLeftOutline />}
      {platform === Platform.IOS && <Icon28ChevronBack />}
    </PanelHeaderButton>
  );
};
