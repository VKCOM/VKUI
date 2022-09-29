import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { Tappable } from "../Tappable/Tappable";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { getPlatformClassName } from "../../helpers/getPlatformClassName";
import { Footnote } from "../Typography/Footnote/Footnote";
import { Headline } from "../Typography/Headline/Headline";
import { Platform } from "../../lib/platform";
import { Text } from "../Typography/Text/Text";
import styles from "./PanelHeaderContent.module.css";

export interface PanelHeaderContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  aside?: React.ReactNode;
  before?: React.ReactNode;
  status?: React.ReactNode;
}

interface PanelHeaderChildrenProps {
  hasStatus: boolean;
  hasBefore: boolean;
  children?: React.ReactNode;
}

const PanelHeaderChildren = ({
  hasStatus,
  hasBefore,
  children,
}: PanelHeaderChildrenProps) => {
  const platform = usePlatform();
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
    <div className={styles["PanelHeaderContent__children-in"]}>{children}</div>
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
        hasActive: platform === Platform.IOS,
        activeMode: "opacity",
      }
    : {};

  return (
    <div
      {...rootProps}
      style={style}
      className={classNamesString(
        styles["PanelHeaderContent"],
        getPlatformClassName(styles["PanelHeaderContent"], platform),
        className
      )}
    >
      {hasReactNode(before) && (
        <div className={styles["PanelHeaderContent__before"]}>{before}</div>
      )}
      <InComponent
        {...inProps}
        className={classNamesString(
          styles["PanelHeaderContent__in"],
          !before &&
            platform !== Platform.ANDROID &&
            styles["PanelHeaderContent__in--centered"]
        )}
      >
        {hasReactNode(status) && (
          <Footnote className={styles["PanelHeaderContent__status"]}>
            {status}
          </Footnote>
        )}
        <div className={styles["PanelHeaderContent__children"]}>
          <PanelHeaderChildren
            hasStatus={hasReactNode(status)}
            hasBefore={hasReactNode(before)}
          >
            {children}
          </PanelHeaderChildren>
          {hasReactNode(aside) && (
            <div className={styles["PanelHeaderContent__aside"]}>{aside}</div>
          )}
        </div>
        {hasReactNode(before) && (
          <div className={styles["PanelHeaderContent__width"]} />
        )}
      </InComponent>
    </div>
  );
};
