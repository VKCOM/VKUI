import * as React from "react";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getViewWidthClassName } from "../../helpers/getViewWidthClassName";
import { hasReactNode } from "../../lib/utils";
import "./DeviceConditionalRender.css";

export interface DeviceConditionalRenderProps {
  mobile?: React.ReactNode;
  desktop?: React.ReactNode;
}

const DeviceConditionalRender: React.FC<DeviceConditionalRenderProps> = ({
  mobile,
  desktop,
}) => {
  const { viewWidth } = useAdaptivity();

  return (
    <React.Fragment>
      {hasReactNode(mobile) && (
        <div
          vkuiClass={getViewWidthClassName(
            "DeviceConditionalRender__mobile",
            viewWidth
          )}
        >
          {mobile}
        </div>
      )}
      {hasReactNode(desktop) && (
        <div
          vkuiClass={getViewWidthClassName(
            "DeviceConditionalRender__desktop",
            viewWidth
          )}
        >
          {desktop}
        </div>
      )}
    </React.Fragment>
  );
};

export { DeviceConditionalRender };
