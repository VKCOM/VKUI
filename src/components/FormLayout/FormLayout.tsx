import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
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
  const platform = usePlatform();
  return (
    <Component
      {...restProps}
      vkuiClass={getClassName("FormLayout", platform)}
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
