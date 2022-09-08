import * as React from "react";
import { HasComponent, HasRef } from "../../types";
import "./FormLayout.css";

const preventDefault = (e: React.FormEvent) => e.preventDefault();

export type FormLayoutProps = React.AllHTMLAttributes<HTMLElement> &
  HasRef<HTMLElement> &
  HasComponent;

/**
 * @see https://vkcom.github.io/VKUI/#/FormLayout
 */
export const FormLayout = ({
  children,
  Component = "form",
  getRef,
  onSubmit = preventDefault,
  ...restProps
}: FormLayoutProps) => {
  return (
    <Component
      {...restProps}
      vkuiClass="FormLayout"
      onSubmit={onSubmit}
      ref={getRef}
    >
      <div vkuiClass="FormLayout__container">{children}</div>
      {Component === "form" && (
        <input type="submit" vkuiClass="FormLayout__submit" value="" />
      )}
    </Component>
  );
};
