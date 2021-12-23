import * as React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { HasRef } from "../../types";
import { VKCOM } from "../../lib/platform";
import PanelHeader from "../PanelHeader/PanelHeader";

export interface ModalPageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  /**
   * Иконки, отображаемые слева
   */
  left?: React.ReactNode;
  /**
   * Иконки, отображаемые справа
   */
  right?: React.ReactNode;
  separator?: boolean;
}

const ModalPageHeader: React.FunctionComponent<ModalPageHeaderProps> = ({
  children,
  separator,
  getRef,
  ...restProps
}: ModalPageHeaderProps) => {
  const platform = usePlatform();
  const hasSeparator = separator && platform === VKCOM;

  return (
    <PanelHeader
      {...restProps}
      fixed={false}
      separator={hasSeparator}
      getRootRef={getRef}
      transparent
      vkuiClass="ModalPageHeader"
    >
      {children}
    </PanelHeader>
  );
};

ModalPageHeader.defaultProps = {
  separator: true,
};

export default ModalPageHeader;
