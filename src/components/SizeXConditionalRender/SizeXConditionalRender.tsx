import * as React from "react";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { SizeType } from "../../lib/adaptivity";
import type { ExpectedConditionalRenderComponentProps } from "../../types";
import styles from "./SizeXConditionalRender.module.css";

export interface SizeXConditionalRenderProps {
  Compact?: React.ComponentType<ExpectedConditionalRenderComponentProps>;
  Regular?: React.ComponentType<ExpectedConditionalRenderComponentProps>;
}

export const SizeXConditionalRender = ({
  Compact,
  Regular,
}: SizeXConditionalRenderProps) => {
  const { sizeX } = useAdaptivity();

  return (
    <React.Fragment>
      {Compact && (sizeX === undefined || sizeX === SizeType.COMPACT) && (
        <Compact className={getSizeXClassName(styles["SizeXCompact"], sizeX)} />
      )}
      {Regular && (sizeX === undefined || sizeX === SizeType.REGULAR) && (
        <Regular className={getSizeXClassName(styles["SizeXRegular"], sizeX)} />
      )}
    </React.Fragment>
  );
};
