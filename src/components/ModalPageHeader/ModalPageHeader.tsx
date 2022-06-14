import * as React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { HasRef } from "../../types";
import { VKCOM } from "../../lib/platform";
import { Separator } from "../Separator/Separator";
import { PanelHeader, PanelHeaderProps } from "../PanelHeader/PanelHeader";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { getViewWidthClassName } from "../../helpers/getViewWidthClassName";
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
  const { viewWidth } = useAdaptivity();

  return (
    <div
      vkuiClass={classNames(
        getClassName("ModalPageHeader", platform),
        getViewWidthClassName("ModalPageHeader", viewWidth)
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
