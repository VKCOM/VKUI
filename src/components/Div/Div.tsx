import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { HasRootRef } from "../../types";
import "./Div.css";

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {}

export const Div: React.FC<DivProps> = ({
  children,
  getRootRef,
  ...restProps
}) => {
  const platform = usePlatform();
  return (
    <div
      {...restProps}
      ref={getRootRef}
      vkuiClass={getClassName("Div", platform)}
    >
      {children}
    </div>
  );
};
