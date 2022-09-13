import * as React from "react";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { hasReactNode } from "../../lib/utils";
import { SizeType } from "../../lib/adaptivity";
import styles from "./SizeYConditionalRender.module.css";

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
          <div className={getSizeYClassName("SizeYCompact", sizeY, styles)}>
            {compact}
          </div>
        )}
      {hasReactNode(regular) &&
        (sizeY === undefined || sizeY === SizeType.REGULAR) && (
          <div className={getSizeYClassName("SizeYRegular", sizeY, styles)}>
            {regular}
          </div>
        )}
    </React.Fragment>
  );
};
