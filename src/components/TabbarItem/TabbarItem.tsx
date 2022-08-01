import * as React from "react";
import { Counter } from "../Counter/Counter";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { Tappable } from "../Tappable/Tappable";
import { Footnote } from "../Typography/Footnote/Footnote";
import { Platform } from "../../lib/platform";
import { HasComponent, HasRootRef } from "../../types";
import { warnOnce } from "../../lib/warnOnce";
import "./TabbarItem.css";

export interface TabbarItemProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "label">, // TODO убрать Omit после удаления свойства label
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
  /**
   * @deprecated будет удалено в 5.0.0. Используйте `indicator`
   */
  label?: React.ReactNode;
}

const warn = warnOnce("TabbarItem");

/**
 * @see https://vkcom.github.io/VKUI/#/TabbarItem
 */
export const TabbarItem = ({
  children,
  selected,
  label,
  indicator,
  text,
  href,
  Component = href ? "a" : "button",
  disabled,
  ...restProps
}: TabbarItemProps) => {
  const platform = usePlatform();

  if (label && process.env.NODE_ENV === "development") {
    warn(
      "Свойство label устарело и будет удалено в 5.0.0. Используйте indicator."
    );
  }

  return (
    <Component
      {...restProps}
      disabled={disabled}
      href={href}
      vkuiClass={classNames(
        "TabbarItem",
        platform === Platform.IOS && "TabbarItem--ios",
        platform === Platform.ANDROID && "TabbarItem--android",
        selected && "TabbarItem--selected",
        !!text && "TabbarItem--text"
      )}
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
            {!indicator && label && (
              <Counter size="s" mode="prominent">
                {label}
              </Counter>
            )}
          </div>
        </div>
        {text && (
          <Footnote Component="div" vkuiClass="TabbarItem__text" weight="2">
            {text}
          </Footnote>
        )}
      </div>
    </Component>
  );
};
