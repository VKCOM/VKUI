import * as React from "react";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getViewWidthClassName } from "../../helpers/getViewWidthClassName";
import { hasReactNode } from "../../lib/utils";
import styles from "./DeviceConditionalRender.module.css";

export interface DeviceConditionalRenderProps {
  mobile?: React.ReactNode;
  desktop?: React.ReactNode;
}

export const DeviceConditionalRender = ({
  mobile,
  desktop,
}: DeviceConditionalRenderProps) => {
  const { viewWidth } = useAdaptivity();

  return (
    <React.Fragment>
      {hasReactNode(mobile) && (
        <div
          className={getViewWidthClassName(
            styles["DeviceConditionalRender__mobile"],
            viewWidth
          )}
        >
          {mobile}
        </div>
      )}
      {hasReactNode(desktop) && (
        <div
          className={getViewWidthClassName(
            styles["DeviceConditionalRender__desktop"],
            viewWidth
          )}
        >
          {desktop}
        </div>
      )}
    </React.Fragment>
  );
};
