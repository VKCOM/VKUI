import * as React from "react";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getViewWidthClassName } from "../../helpers/getViewWidthClassName";
import { ViewWidth } from "../../lib/adaptivity";
import type { ExpectedConditionalRenderComponentProps } from "../../types";
import styles from "./ViewWidthConditionalRender.module.css";

export interface ViewWidthConditionalRenderProps {
  Mobile?: React.ComponentType<ExpectedConditionalRenderComponentProps>;
  Desktop?: React.ComponentType<ExpectedConditionalRenderComponentProps>;
}

export const ViewWidthConditionalRender = ({
  Mobile,
  Desktop,
}: ViewWidthConditionalRenderProps) => {
  const { viewWidth } = useAdaptivity();

  return (
    <React.Fragment>
      {Mobile && (viewWidth === undefined || viewWidth < ViewWidth.TABLET) && (
        <Mobile
          className={getViewWidthClassName(
            styles["ViewWidthConditionalRender__mobile"],
            viewWidth
          )}
        />
      )}
      {Desktop &&
        (viewWidth === undefined || viewWidth >= ViewWidth.TABLET) && (
          <Desktop
            className={getViewWidthClassName(
              styles["ViewWidthConditionalRender__desktop"],
              viewWidth
            )}
          />
        )}
    </React.Fragment>
  );
};
