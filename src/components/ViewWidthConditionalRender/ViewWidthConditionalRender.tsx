import * as React from "react";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getViewWidthClassName } from "../../helpers/getViewWidthClassName";
import { hasReactNode } from "../../lib/utils";
import { ViewWidth } from "../../lib/adaptivity";
import styles from "./ViewWidthConditionalRender.module.css";

export interface ViewWidthConditionalRenderProps {
  mobile?: React.ReactNode;
  desktop?: React.ReactNode;
}

export const ViewWidthConditionalRender = ({
  mobile,
  desktop,
}: ViewWidthConditionalRenderProps) => {
  const { viewWidth } = useAdaptivity();

  return (
    <React.Fragment>
      {hasReactNode(mobile) &&
        (viewWidth === undefined || viewWidth < ViewWidth.TABLET) && (
          <div
            className={getViewWidthClassName(
              styles["ViewWidthConditionalRender__mobile"],
              viewWidth
            )}
          >
            {mobile}
          </div>
        )}
      {hasReactNode(desktop) &&
        (viewWidth === undefined || viewWidth >= ViewWidth.TABLET) && (
          <div
            className={getViewWidthClassName(
              styles["ViewWidthConditionalRender__desktop"],
              viewWidth
            )}
          >
            {desktop}
          </div>
        )}
    </React.Fragment>
  );
};
