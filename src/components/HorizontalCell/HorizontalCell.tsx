import * as React from "react";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { Caption } from "../Typography/Caption/Caption";
import Tappable from "../Tappable/Tappable";
import Subhead from "../Typography/Subhead/Subhead";
import Avatar from "../Avatar/Avatar";
import { HasComponent, HasRef, HasRootRef } from "../../types";
import "./HorizontalCell.css";

interface CellTypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  size: HorizontalCellProps["size"];
}

const CellTypography: React.FC<CellTypographyProps> = ({
  size,
  children,
  ...restProps
}: CellTypographyProps) => {
  return size === "s" ? (
    <Caption level="2" {...restProps}>
      {children}
    </Caption>
  ) : (
    <Subhead {...restProps}>{children}</Subhead>
  );
};

export interface HorizontalCellProps
  extends React.AnchorHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement>,
    HasComponent {
  size?: "s" | "m" | "l";
  header?: React.ReactNode;
  subtitle?: React.ReactNode;
  disabled?: boolean;
}

export const HorizontalCell: React.FC<HorizontalCellProps> = ({
  className,
  header,
  style,
  subtitle,
  size = "s",
  children = <Avatar size={56} />,
  getRootRef,
  getRef,
  ...restProps
}: HorizontalCellProps) => {
  const platform = usePlatform();

  return (
    <div
      vkuiClass={classNames(
        getClassName("HorizontalCell", platform),
        `HorizontalCell--${size}`
      )}
      ref={getRootRef}
      style={style}
      className={className}
    >
      <Tappable
        vkuiClass="HorizontalCell__body"
        getRootRef={getRef}
        {...restProps}
      >
        {hasReactNode(children) && (
          <div vkuiClass="HorizontalCell__image">{children}</div>
        )}
        <div vkuiClass="HorizontalCell__content">
          {hasReactNode(header) && (
            <CellTypography size={size} vkuiClass="HorizontalCell__title">
              {header}
            </CellTypography>
          )}
          {hasReactNode(subtitle) && (
            <Caption vkuiClass="HorizontalCell__subtitle">{subtitle}</Caption>
          )}
        </div>
      </Tappable>
    </div>
  );
};
