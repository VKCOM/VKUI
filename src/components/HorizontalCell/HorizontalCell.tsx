import * as React from "react";
import { classNames } from "../../lib/classNames";
import { hasReactNode } from "../../lib/utils";
import { Caption } from "../Typography/Caption/Caption";
import { Tappable } from "../Tappable/Tappable";
import { Subhead } from "../Typography/Subhead/Subhead";
import { Footnote } from "../Typography/Footnote/Footnote";
import { Avatar } from "../Avatar/Avatar";
import { HasComponent, HasRef, HasRootRef } from "../../types";
import "./HorizontalCell.css";

interface CellTypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  size: HorizontalCellProps["size"];
}

const CellTypography = ({
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

/**
 * @see https://vkcom.github.io/VKUI/#/HorizontalCell
 */
export const HorizontalCell = ({
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
  return (
    <div
      vkuiClass={classNames("HorizontalCell", `HorizontalCell--${size}`)}
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
            <Footnote vkuiClass="HorizontalCell__subtitle">{subtitle}</Footnote>
          )}
        </div>
      </Tappable>
    </div>
  );
};
