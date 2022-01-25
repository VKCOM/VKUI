import * as React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { HasRef } from "../../types";
import { VKCOM } from "../../lib/platform";
import PanelHeader, { PanelHeaderProps } from "../PanelHeader/PanelHeader";
import Separator from "../Separator/Separator";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { ViewHeight, ViewWidth } from "../AdaptivityProvider/AdaptivityContext";
import "./ModalPageHeader.css";

export interface ModalPageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<PanelHeaderProps, "fixed" | "shadow">,
    HasRef<HTMLDivElement> {}

const ModalPageHeader: React.FunctionComponent<ModalPageHeaderProps> = ({
  children,
  separator,
  getRef,
  ...restProps
}: ModalPageHeaderProps) => {
  const platform = usePlatform();
  const { viewWidth, viewHeight, hasMouse } = useAdaptivity();
  const hasSeparator = separator && platform === VKCOM;
  const isDesktop =
    viewWidth >= ViewWidth.SMALL_TABLET &&
    (hasMouse || viewHeight >= ViewHeight.MEDIUM);

  return (
    <div
      vkuiClass={classNames(getClassName("ModalPageHeader", platform), {
        "ModalPageHeader--desktop": isDesktop,
      })}
      ref={getRef}
    >
      <PanelHeader
        vkuiClass="ModalPageHeader__in"
        {...restProps}
        fixed={false}
        separator={false}
        transparent
      >
        {children}
      </PanelHeader>
      {hasSeparator && <Separator wide />}
    </div>
  );
};

ModalPageHeader.defaultProps = {
  separator: true,
};

// eslint-disable-next-line import/no-default-export
export default ModalPageHeader;
