import * as React from "react";
import { classNames } from "../../lib/classNames";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { hasReactNode } from "../../lib/utils";
import { SizeType } from "../../lib/adaptivity";
import "./SizeYConditionalRender.css";

export interface SizeYConditionalRenderProps {
  compact?: React.ReactNode;
  regular?: React.ReactNode;
}

export const SizeYConditionalRender = ({
  compact,
  regular,
}: SizeYConditionalRenderProps) => {
  const { sizeY } = useAdaptivity();

  return (
    <React.Fragment>
      {hasReactNode(compact) &&
        (sizeY === undefined || sizeY === SizeType.COMPACT) && (
          <div vkuiClass={classNames(getSizeYClassName("SizeYCompact", sizeY))}>
            {compact}
          </div>
        )}
      {hasReactNode(regular) &&
        (sizeY === undefined || sizeY === SizeType.REGULAR) && (
          <div vkuiClass={classNames(getSizeYClassName("SizeYRegular", sizeY))}>
            {regular}
          </div>
        )}
    </React.Fragment>
  );
};
