import * as React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivityWithMediaQueries } from "../../hooks/useAdaptivityWithMediaQueries";
import { HasRef } from "../../types";
import { Platform } from "../../lib/platform";
import { Separator } from "../Separator/Separator";
import { PanelHeader, PanelHeaderProps } from "../PanelHeader/PanelHeader";
import { classNames } from "../../lib/classNames";
import { getPlatformClassName } from "../../helpers/getPlatformClassName";
import "./ModalPageHeader.css";

export interface ModalPageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<PanelHeaderProps, "fixed" | "shadow">,
    HasRef<HTMLDivElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/ModalPageHeader
 */
export const ModalPageHeader = ({
  children,
  separator = true,
  getRef,
  ...restProps
}: ModalPageHeaderProps) => {
  const platform = usePlatform();
  const hasSeparator = separator && platform === Platform.VKCOM;
  const { isDesktop } = useAdaptivityWithMediaQueries();

  return (
    <div
      vkuiClass={classNames(
        "ModalPageHeader",
        getPlatformClassName("ModalPageHeader", platform),
        platform !== Platform.VKCOM && "ModalPageHeader--withGaps",
        isDesktop && "ModalPageHeader--desktop"
      )}
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
