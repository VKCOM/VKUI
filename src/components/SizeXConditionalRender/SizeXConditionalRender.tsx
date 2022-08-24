import * as React from "react";
import { classNames } from "../../lib/classNames";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { hasReactNode } from "../../lib/utils";
import { SizeType } from "../../lib/adaptivity";
import "./SizeXConditionalRender.css";

export interface SizeXConditionalRenderProps {
  compact?: React.ReactNode;
  regular?: React.ReactNode;
}

export const SizeXConditionalRender = ({
  compact,
  regular,
}: SizeXConditionalRenderProps) => {
  const { sizeX } = useAdaptivity();

  return (
    <React.Fragment>
      {hasReactNode(compact) &&
        (sizeX === undefined || sizeX === SizeType.COMPACT) && (
          <div vkuiClass={classNames(getSizeXClassName("SizeXCompact", sizeX))}>
            {compact}
          </div>
        )}
      {hasReactNode(regular) &&
        (sizeX === undefined || sizeX === SizeType.REGULAR) && (
          <div vkuiClass={classNames(getSizeXClassName("SizeXRegular", sizeX))}>
            {regular}
          </div>
        )}
    </React.Fragment>
  );
};
