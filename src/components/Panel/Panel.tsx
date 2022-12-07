import * as React from "react";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { classNamesString } from "../../lib/classNames";
import { Touch } from "../Touch/Touch";
import { TooltipContainer } from "../Tooltip/TooltipContainer";
import { HasRootRef } from "../../types";
import { Platform } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { NavIdProps } from "../../lib/getNavId";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import styles from "./Panel.module.css";

export interface PanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    NavIdProps {
  centered?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Panel
 */
export const Panel = ({
  centered = false,
  children,
  getRootRef,
  nav,
  className,
  ...restProps
}: PanelProps) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();

  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNamesString(
        styles["Panel"],
        getSizeXClassName(styles["Panel"], sizeX),
        centered && styles["Panel--centered"],
        className
      )}
    >
      <Touch Component={TooltipContainer} className={styles["Panel__in"]}>
        {platform === Platform.IOS && <div className={styles["Panel__fade"]} />}
        <div className={styles["Panel__in-before"]} />
        {centered ? (
          <div className={styles["Panel__centered"]}>{children}</div>
        ) : (
          children
        )}
        <div className={styles["Panel__in-after"]} />
      </Touch>
    </div>
  );
};
