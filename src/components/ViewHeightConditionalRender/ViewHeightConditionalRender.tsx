import * as React from "react";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getViewHeightClassName } from "../../helpers/getViewHeightClassName";
import { hasReactNode } from "../../lib/utils";
import { ViewHeight } from "../AdaptivityProvider/AdaptivityContext";
import "./ViewHeightConditionalRender.css";

export interface ViewHeightConditionalRenderProps {
  mobile?: React.ReactNode;
  desktop?: React.ReactNode;
}

const ViewHeightConditionalRender: React.FC<
  ViewHeightConditionalRenderProps
> = ({ mobile, desktop }) => {
  const { viewHeight } = useAdaptivity();

  return (
    <React.Fragment>
      {hasReactNode(mobile) &&
        (viewHeight === undefined || viewHeight < ViewHeight.SMALL) && (
          <div
            vkuiClass={getViewHeightClassName(
              "ViewHeightConditionalRender__mobile",
              viewHeight
            )}
          >
            {mobile}
          </div>
        )}
      {hasReactNode(desktop) &&
        (viewHeight === undefined || viewHeight >= ViewHeight.SMALL) && (
          <div
            vkuiClass={getViewHeightClassName(
              "ViewHeightConditionalRender__desktop",
              viewHeight
            )}
          >
            {desktop}
          </div>
        )}
    </React.Fragment>
  );
};

export { ViewHeightConditionalRender };
