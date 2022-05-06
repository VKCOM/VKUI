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
import { AdaptivityProps } from "../../hoc/withAdaptivity";
import { getClassName } from "../../helpers/getClassName";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { classNames } from "../../lib/classNames";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./PanelHeaderBack.css";

export type PanelHeaderBackProps = PanelHeaderButtonProps & {
  "aria-label"?: string;
};

const PanelHeaderBack: React.FC<PanelHeaderBackProps> = ({
  label,
  "aria-label": ariaLabel = "Назад",
  ...restProps
}: PanelHeaderButtonProps & AdaptivityProps) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();
  // так-же label нужно скрывать при platform === IOS && sizeX === regular
  // https://github.com/VKCOM/VKUI/blob/master/src/components/PanelHeaderButton/PanelHeaderButton.css#L104
  const showLabel = platform === VKCOM || platform === IOS;

  return (
    <PanelHeaderButton
      {...restProps}
      vkuiClass={classNames(
        getClassName("PanelHeaderBack", platform),
        getSizeXClassName("PanelHeaderBack", sizeX),
        label && "PanelHeaderBack--has-label"
      )}
      label={showLabel && label}
      aria-label={ariaLabel}
    >
      {platform === ANDROID && <Icon28ArrowLeftOutline />}
      {platform === VKCOM && <Icon28ChevronLeftOutline />}
      {platform === IOS && <Icon28ChevronBack />}
    </PanelHeaderButton>
  );
};

// eslint-disable-next-line import/no-default-export
export default React.memo(PanelHeaderBack);
