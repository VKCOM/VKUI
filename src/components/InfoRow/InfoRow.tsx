import * as React from "react";
import { Subhead } from "../Typography/Subhead/Subhead";
import { Headline } from "../Typography/Headline/Headline";
import { hasReactNode } from "../../lib/utils";
import "./InfoRow.css";

export interface InfoRowProps extends React.HTMLAttributes<HTMLDivElement> {
  header: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/InfoRow
 */
export const InfoRow = ({ header, children, ...restProps }: InfoRowProps) => (
  <Headline {...restProps} vkuiClass="InfoRow" weight="3">
    {hasReactNode(header) && (
      <Subhead Component="span" vkuiClass="InfoRow__header">
        {header}
      </Subhead>
    )}
    {children}
  </Headline>
);
