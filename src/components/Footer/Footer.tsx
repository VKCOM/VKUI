import * as React from "react";
import { HasComponent } from "../../types";
import { Caption } from "../Typography/Caption/Caption";
import "./Footer.css";

export type FooterProps = React.AllHTMLAttributes<HTMLElement> & HasComponent;

/**
 * @see https://vkcom.github.io/VKUI/#/Footer
 */
export const Footer = ({ children, ...restProps }: FooterProps) => {
  return (
    <Caption Component="footer" {...restProps} vkuiClass="Footer">
      {children}
    </Caption>
  );
};
