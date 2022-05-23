import * as React from "react";
import { classNames } from "../../lib/classNames";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { hasReactNode } from "../../lib/utils";
import "./SizeXConditionalRender.css";

export interface SizeXConditionalRenderProps {
  compact?: React.ReactNode;
  regular?: React.ReactNode;
}

const SizeXConditionalRender: React.FC<SizeXConditionalRenderProps> = ({
  compact,
  regular,
}) => {
  const { sizeX } = useAdaptivity();

  return (
    <React.Fragment>
      {hasReactNode(compact) && (
        <div vkuiClass={classNames(getSizeXClassName("SizeXCompact", sizeX))}>
          {compact}
        </div>
      )}
      {hasReactNode(regular) && (
        <div vkuiClass={classNames(getSizeXClassName("SizeXRegular", sizeX))}>
          {regular}
        </div>
      )}
    </React.Fragment>
  );
};

export { SizeXConditionalRender };
