import * as React from "react";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getViewWidthClassName } from "../../helpers/getViewWidthClassName";
import type { ExpectedConditionalRenderComponentProps } from "../../types";
import styles from "./DeviceConditionalRender.module.css";

export interface DeviceConditionalRenderProps {
  Mobile?: React.ComponentType<ExpectedConditionalRenderComponentProps>;
  Desktop?: React.ComponentType<ExpectedConditionalRenderComponentProps>;
}

export const DeviceConditionalRender = ({
  Mobile,
  Desktop,
}: DeviceConditionalRenderProps) => {
  const { viewWidth } = useAdaptivity();

  return (
    <React.Fragment>
      {Mobile && (
        <Mobile
          className={getViewWidthClassName(
            styles["DeviceConditionalRender__mobile"],
            viewWidth
          )}
        />
      )}
      {Desktop && (
        <Desktop
          className={getViewWidthClassName(
            styles["DeviceConditionalRender__desktop"],
            viewWidth
          )}
        />
      )}
    </React.Fragment>
  );
};
