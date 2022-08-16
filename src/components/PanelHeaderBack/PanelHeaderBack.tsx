import * as React from "react";
import {
  Icon28ChevronBack,
  Icon28ChevronLeftOutline,
  Icon28ArrowLeftOutline,
} from "@vkontakte/icons";
import {
  PanelHeaderButton,
  PanelHeaderButtonProps,
} from "../PanelHeaderButton/PanelHeaderButton";
import { ANDROID, VKCOM, IOS } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import {
  withAdaptivity,
  SizeType,
  AdaptivityProps,
} from "../../hoc/withAdaptivity";
import { classNames } from "../../lib/classNames";
import "./PanelHeaderBack.css";

export type PanelHeaderBackProps = PanelHeaderButtonProps &
  AdaptivityProps & {
    "aria-label"?: string;
  };

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderBack
 */
export const PanelHeaderBackComponent = ({
  label,
  sizeX,
  "aria-label": ariaLabel = "Назад",
  ...restProps
}: PanelHeaderButtonProps & AdaptivityProps) => {
  const platform = usePlatform();
  const showLabel =
    platform === VKCOM || (platform === IOS && sizeX === SizeType.REGULAR);

  return (
    <PanelHeaderButton
      {...restProps}
      aria-label={ariaLabel}
      vkuiClass={classNames(
        "PanelHeaderBack",
        platform === IOS && "PanelHeaderBack--ios",
        platform === VKCOM && "PanelHeaderBack--vkcom",
        showLabel && !!label && "PanelHeaderBack--has-label"
      )}
      label={showLabel && label}
    >
      {platform === ANDROID && <Icon28ArrowLeftOutline />}
      {platform === VKCOM && <Icon28ChevronLeftOutline />}
      {platform === IOS && <Icon28ChevronBack />}
    </PanelHeaderButton>
  );
};

export const PanelHeaderBack = React.memo(
  withAdaptivity(PanelHeaderBackComponent, {
    sizeX: true,
  })
);

PanelHeaderBack.displayName = "PanelHeaderBack";
