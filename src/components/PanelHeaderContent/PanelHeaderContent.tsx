import * as React from "react";
import { classNames } from "../../lib/classNames";
import { Tappable } from "../Tappable/Tappable";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { getClassName } from "../../helpers/getClassName";
import { Caption } from "../Typography/Caption/Caption";
import { Headline } from "../Typography/Headline/Headline";
import { IOS, ANDROID, Platform } from "../../lib/platform";
import { Text } from "../Typography/Text/Text";
import { HasPlatform } from "../../types";
import "./PanelHeaderContent.css";

export interface PanelHeaderContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  aside?: React.ReactNode;
  before?: React.ReactNode;
  status?: React.ReactNode;
}

interface PanelHeaderChildrenProps extends HasPlatform {
  hasStatus: boolean;
  hasBefore: boolean;
  children?: React.ReactNode;
}

const PanelHeaderChildren = ({
  platform,
  hasStatus,
  hasBefore,
  children,
}: PanelHeaderChildrenProps) => {
  if (platform === Platform.VKCOM) {
    return (
      <Text Component="div" weight="2">
        {children}
      </Text>
    );
  }

  return hasStatus || hasBefore ? (
    <Headline Component="div" weight="2">
      {children}
    </Headline>
  ) : (
    <div vkuiClass="PanelHeaderContent__children-in">{children}</div>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderContent
 */
export const PanelHeaderContent = ({
  className,
  style,
  aside,
  status,
  before,
  children,
  onClick,
  ...restProps
}: PanelHeaderContentProps) => {
  const InComponent = onClick ? Tappable : "div";
  const rootProps = onClick ? {} : restProps;
  const platform = usePlatform();
  const inProps = onClick
    ? {
        ...restProps,
        onClick,
        activeEffectDelay: 200,
        hasActive: platform === IOS,
        activeMode: "opacity",
      }
    : {};

  return (
    <div
      {...rootProps}
      vkuiClass={getClassName("PanelHeaderContent", platform)}
      style={style}
      className={className}
    >
      {hasReactNode(before) && (
        <div vkuiClass="PanelHeaderContent__before">{before}</div>
      )}
      <InComponent
        {...inProps}
        vkuiClass={classNames(
          "PanelHeaderContent__in",
          !before && platform !== ANDROID && "PanelHeaderContent__in--centered"
        )}
      >
        {hasReactNode(status) && (
          <Caption vkuiClass="PanelHeaderContent__status">{status}</Caption>
        )}
        <div vkuiClass="PanelHeaderContent__children">
          <PanelHeaderChildren
            platform={platform}
            hasStatus={hasReactNode(status)}
            hasBefore={hasReactNode(before)}
          >
            {children}
          </PanelHeaderChildren>
          {hasReactNode(aside) && (
            <div vkuiClass="PanelHeaderContent__aside">{aside}</div>
          )}
        </div>
        {hasReactNode(before) && <div vkuiClass="PanelHeaderContent__width" />}
      </InComponent>
    </div>
  );
};
