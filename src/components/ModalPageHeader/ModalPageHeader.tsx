import * as React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivityIsDesktop } from "../../hooks/useAdaptivity";
import { HasRef } from "../../types";
import { VKCOM } from "../../lib/platform";
import { Separator } from "../Separator/Separator";
import { PanelHeader, PanelHeaderProps } from "../PanelHeader/PanelHeader";
import { classNames } from "../../lib/classNames";
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
  const hasSeparator = separator && platform === VKCOM;
  // TODO v5.0.0 поправить под новую адаптивность
  const isDesktop = useAdaptivityIsDesktop();

  return (
    <div
      vkuiClass={classNames(
        "ModalPageHeader",
        platform !== VKCOM && "ModalPageHeader--withGaps",
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
