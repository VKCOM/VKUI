import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { Tappable } from "../Tappable/Tappable";
import { Platform } from "../../lib/platform";
import { HasComponent, HasRootRef } from "../../types";
import "./TabbarItem.css";

export interface TabbarItemProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  selected?: boolean;
  /**
   * Текст рядом с иконкой
   */
  text?: React.ReactNode;
  /**
   * Индикатор над иконкой. Принимает `<Badge mode="prominent" />` или `<Counter size="s" mode="prominent" />`
   */
  indicator?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/TabbarItem
 */
export const TabbarItem = ({
  children,
  selected,
  indicator,
  text,
  href,
  Component = href ? "a" : "button",
  disabled,
  ...restProps
}: TabbarItemProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      disabled={disabled}
      href={href}
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
      vkuiClass={classNames(getClassName("TabbarItem", platform), {
        "TabbarItem--selected": selected,
        "TabbarItem--text": !!text,
      })}
    >
      <Tappable
        role="presentation"
        Component="div"
        disabled={disabled}
        activeMode={
          platform === Platform.IOS
            ? "TabbarItem__tappable--active"
            : "background"
        }
        activeEffectDelay={platform === Platform.IOS ? 0 : 300}
        hasHover={false}
        vkuiClass="TabbarItem__tappable"
      />
      <div vkuiClass="TabbarItem__in">
        <div vkuiClass="TabbarItem__icon">
          {children}
          <div vkuiClass="TabbarItem__label">
            {hasReactNode(indicator) && indicator}
          </div>
        </div>
        {text && <div vkuiClass="TabbarItem__text">{text}</div>}
      </div>
    </Component>
  );
};
