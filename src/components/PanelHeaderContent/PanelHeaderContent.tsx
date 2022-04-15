import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import Tappable from "../Tappable/Tappable";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { Caption } from "../Typography/Caption/Caption";
import Headline from "../Typography/Headline/Headline";
import { IOS, Platform } from "../../lib/platform";
import Text from "../Typography/Text/Text";
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
}

const PanelHeaderChildren: React.FC<PanelHeaderChildrenProps> = ({
  platform,
  hasStatus,
  hasBefore,
  children,
}) => {
  if (platform === Platform.VKCOM) {
    return (
      <Text Component="div" weight="medium">
        {children}
      </Text>
    );
  }

  return hasStatus || hasBefore ? (
    <Headline Component="div" weight="medium">
      {children}
    </Headline>
  ) : (
    <div vkuiClass="PanelHeaderContent__children-in">{children}</div>
  );
};

const PanelHeaderContent: React.FunctionComponent<PanelHeaderContentProps> = ({
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
  const baseClassNames = getClassName("PanelHeaderContent", platform);

  return (
    <div
      {...rootProps}
      vkuiClass={baseClassNames}
      style={style}
      className={className}
    >
      {hasReactNode(before) && (
        <div vkuiClass="PanelHeaderContent__before">{before}</div>
      )}
      <InComponent {...inProps} vkuiClass="PanelHeaderContent__in">
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

// eslint-disable-next-line import/no-default-export
export default PanelHeaderContent;
