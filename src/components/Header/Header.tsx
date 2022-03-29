import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { HasComponent, HasPlatform, HasRootRef } from "../../types";
import { hasReactNode, isPrimitiveReactNode } from "../../lib/utils";
import { Platform } from "../../lib/platform";
import Headline from "../Typography/Headline/Headline";
import { Caption } from "../Typography/Caption/Caption";
import Title from "../Typography/Title/Title";
import Text from "../Typography/Text/Text";
import Subhead from "../Typography/Subhead/Subhead";
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

const HeaderContent: React.FC<HeaderContentProps> = ({
  platform,
  mode,
  ...restProps
}) => {
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
        return <Headline weight="regular" {...restProps} />;
      case "secondary":
      case "tertiary":
        return <Caption {...restProps} />;
    }
  }

  switch (mode) {
    case "primary":
    case "tertiary":
      return <Headline weight="medium" {...restProps} />;
    case "secondary":
      return <Caption weight="1" caps {...restProps} />;
  }

  return null;
};

type HeaderAsideProps = Pick<HeaderProps, "aside"> & HasPlatform & HasComponent;

const HeaderAside: React.FC<HeaderAsideProps> = ({
  platform,
  ...restProps
}) => {
  return platform === Platform.VKCOM ? (
    <Subhead {...restProps} />
  ) : (
    <Text weight="regular" {...restProps} />
  );
};

type HeaderSubtitleProps = Pick<HeaderProps, "subtitle" | "mode"> &
  HasComponent;

const HeaderSubtitle: React.FC<HeaderSubtitleProps> = ({
  mode,
  ...restProps
}) => {
  return mode === "secondary" ? (
    <Subhead {...restProps} />
  ) : (
    <Caption {...restProps} />
  );
};

const Header: React.FC<HeaderProps> = ({
  mode,
  children,
  subtitle,
  indicator,
  aside,
  getRootRef,
  multiline,
  ...restProps
}: HeaderProps) => {
  const platform = usePlatform();

  return (
    <header
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        getClassName("Header", platform),
        `Header--mode-${mode}`,
        { "Header--pi": isPrimitiveReactNode(indicator) }
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
            vkuiClass={classNames("Header__content-in", {
              "Header__content-in--multiline": multiline,
            })}
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
          <HeaderSubtitle vkuiClass="Header__subtitle" Component="span">
            {subtitle}
          </HeaderSubtitle>
        )}
      </div>

      {hasReactNode(aside) && (
        <HeaderAside
          vkuiClass="Header__aside"
          Component="span"
          platform={platform}
        >
          {aside}
        </HeaderAside>
      )}
    </header>
  );
};

Header.defaultProps = {
  mode: "primary",
};

// eslint-disable-next-line import/no-default-export
export default Header;
