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
          <div className={getSizeXClassName(styles["SizeXCompact"], sizeX)}>
            {compact}
          </div>
        )}
      {hasReactNode(regular) &&
        (sizeX === undefined || sizeX === SizeType.REGULAR) && (
          <div className={getSizeXClassName(styles["SizeXRegular"], sizeX)}>
            {regular}
          </div>
        )}
    </React.Fragment>
  );
};
