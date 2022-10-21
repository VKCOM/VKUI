import * as React from "react";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { SizeType } from "../../lib/adaptivity";
import type { ExpectedConditionalRenderComponentProps } from "../../types";
import styles from "./SizeYConditionalRender.module.css";

export interface SizeYConditionalRenderProps {
  Compact?: React.ComponentType<ExpectedConditionalRenderComponentProps>;
  Regular?: React.ComponentType<ExpectedConditionalRenderComponentProps>;
}

export const SizeYConditionalRender = ({
  Compact,
  Regular,
}: SizeYConditionalRenderProps) => {
  const { sizeY } = useAdaptivity();

  return (
    <React.Fragment>
      {Compact && (sizeY === undefined || sizeY === SizeType.COMPACT) && (
        <Compact className={getSizeYClassName(styles["SizeYCompact"], sizeY)} />
      )}
      {Regular && (sizeY === undefined || sizeY === SizeType.REGULAR) && (
        <Regular className={getSizeYClassName(styles["SizeYRegular"], sizeY)} />
      )}
    </React.Fragment>
  );
};
