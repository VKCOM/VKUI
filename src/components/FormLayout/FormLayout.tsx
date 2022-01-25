import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { HasComponent, HasRef } from "../../types";
import "./FormLayout.css";

const preventDefault = (e: React.FormEvent) => e.preventDefault();

export type FormLayoutProps = React.AllHTMLAttributes<HTMLElement> &
  HasRef<HTMLElement> &
  HasComponent;

const FormLayout: React.FC<FormLayoutProps> = (props: FormLayoutProps) => {
  const {
    children,
    Component = "form",
    getRef,
    onSubmit = preventDefault,
    ...restProps
  } = props;

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

// eslint-disable-next-line import/no-default-export
export default FormLayout;
