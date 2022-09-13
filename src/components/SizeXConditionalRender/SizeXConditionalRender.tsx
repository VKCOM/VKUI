import * as React from "react";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { hasReactNode } from "../../lib/utils";
import { SizeType } from "../../lib/adaptivity";
import styles from "./SizeXConditionalRender.module.css";

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
          <div className={getSizeXClassName("SizeXCompact", sizeX, styles)}>
            {compact}
          </div>
        )}
      {hasReactNode(regular) &&
        (sizeX === undefined || sizeX === SizeType.REGULAR) && (
          <div className={getSizeXClassName("SizeXRegular", sizeX, styles)}>
            {regular}
          </div>
        )}
    </React.Fragment>
  );
};
