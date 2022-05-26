import * as React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivityIsDesktop } from "../../hooks/useAdaptivity";
import { HasRef } from "../../types";
import { VKCOM } from "../../lib/platform";
import { Separator } from "../Separator/Separator";
import { PanelHeader, PanelHeaderProps } from "../PanelHeader/PanelHeader";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import "./ModalPageHeader.css";

export interface ModalPageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<PanelHeaderProps, "fixed" | "shadow">,
    HasRef<HTMLDivElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/ModalPageHeader
 */
const ModalPageHeader = ({
  children,
  separator,
  getRef,
  ...restProps
}: ModalPageHeaderProps) => {
  const platform = usePlatform();
  const hasSeparator = separator && platform === VKCOM;
  const isDesktop = useAdaptivityIsDesktop();

  return (
    <div
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
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
