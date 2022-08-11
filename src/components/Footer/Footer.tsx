import * as React from "react";
import { HasComponent } from "../../types";
import { Footnote } from "../Typography/Footnote/Footnote";
import "./Footer.css";

export type FooterProps = React.AllHTMLAttributes<HTMLElement> & HasComponent;

/**
 * @see https://vkcom.github.io/VKUI/#/Footer
 */
export const Footer = ({ children, ...restProps }: FooterProps) => {
  return (
    <Footnote Component="footer" {...restProps} vkuiClass="Footer">
      {children}
    </Footnote>
  );
};
