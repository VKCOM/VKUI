import * as React from "react";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { HasComponent, HasPlatform, HasRootRef } from "../../types";
import { hasReactNode, isPrimitiveReactNode } from "../../lib/utils";
import { Platform } from "../../lib/platform";
import { Headline } from "../Typography/Headline/Headline";
import { Caption } from "../Typography/Caption/Caption";
import { Title } from "../Typography/Title/Title";
import { Text } from "../Typography/Text/Text";
import { Subhead } from "../Typography/Subhead/Subhead";
import "./Header.css";

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement> {
  mode?: "primary" | "secondary" | "tertiary";
  subtitle?: React.ReactNode;
  /**
   * Допускаются иконки, текст, Link
   */
  aside?: React.ReactNode;
  /**
   * Допускаются текст, Indicator
   */
  indicator?: React.ReactNode;
  multiline?: boolean;
}

type HeaderContentProps = Pick<HeaderProps, "children" | "mode"> &
  HasPlatform &
  HasComponent;

const HeaderContent = ({
  platform,
  mode,
  ...restProps
}: HeaderContentProps) => {
  if (platform === Platform.IOS) {
    switch (mode) {
      case "primary":
      case "tertiary":
        return <Title weight="1" level="3" {...restProps} />;
      case "secondary":
        return <Caption weight="2" caps {...restProps} />;
    }
  }

  if (platform === Platform.VKCOM) {
    switch (mode) {
      case "primary":
        return <Headline weight="3" {...restProps} />;
      case "secondary":
      case "tertiary":
        return <Caption {...restProps} />;
    }
  }

  switch (mode) {
    case "primary":
    case "tertiary":
      return <Headline weight="2" {...restProps} />;
    case "secondary":
      return <Caption weight="1" caps {...restProps} />;
  }

  return null;
};

/**
 * @see https://vkcom.github.io/VKUI/#/Header
 */
export const Header = ({
  mode = "primary",
  children,
  subtitle,
  indicator,
  aside,
  getRootRef,
  multiline,
  ...restProps
}: HeaderProps) => {
  const platform = usePlatform();

  const AsideTypography = platform === Platform.VKCOM ? Subhead : Text;
  const SubtitleTypography = mode === "secondary" ? Subhead : Caption;

  return (
    <header
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        "Header",
        platform === Platform.VKCOM && "Header--vkcom",
        platform === Platform.ANDROID && "Header--android",
        platform === Platform.IOS && "Header--ios",
        `Header--mode-${mode}`,
        isPrimitiveReactNode(indicator) && "Header--pi"
      )}
    >
      <div vkuiClass="Header__main">
        <HeaderContent
          vkuiClass="Header__content"
          Component="span"
          mode={mode}
          platform={platform}
        >
          <span
            vkuiClass={classNames(
              "Header__content-in",
              multiline && "Header__content-in--multiline"
            )}
          >
            {children}
          </span>
          {hasReactNode(indicator) && (
            <Caption
              vkuiClass="Header__indicator"
              weight={
                mode === "primary" || mode === "secondary" ? "1" : undefined
              }
            >
              {indicator}
            </Caption>
          )}
        </HeaderContent>

        {hasReactNode(subtitle) && (
          <SubtitleTypography vkuiClass="Header__subtitle" Component="span">
            {subtitle}
          </SubtitleTypography>
        )}
      </div>

      {hasReactNode(aside) && (
        <AsideTypography vkuiClass="Header__aside" Component="span">
          {aside}
        </AsideTypography>
      )}
    </header>
  );
};
