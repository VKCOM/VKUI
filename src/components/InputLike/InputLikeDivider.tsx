import * as React from "react";
import "./InputLikeDivider.css";

export const InputLikeDivider = ({
  children,
  ...props
}: React.InputHTMLAttributes<HTMLSpanElement>) => {
  return (
    <span vkuiClass="InputLikeDivider" {...props}>
      {children}
    </span>
  );
};
