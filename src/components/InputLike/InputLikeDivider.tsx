import * as React from "react";
import "./InputLikeDivider.css";

export const InputLikeDivider: React.FC<
  React.InputHTMLAttributes<HTMLSpanElement>
> = ({ children, ...props }) => {
  return (
    <span vkuiClass="InputLikeDivider" {...props}>
      {children}
    </span>
  );
};
