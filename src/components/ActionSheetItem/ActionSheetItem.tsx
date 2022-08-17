import * as React from "react";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { Tappable } from "../Tappable/Tappable";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode, noop } from "../../lib/utils";
import { Platform } from "../../lib/platform";
import { Icon16Done, Icon24Done } from "@vkontakte/icons";
import {
  ActionSheetContext,
  ActionSheetContextType,
} from "../ActionSheet/ActionSheetContext";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./ActionSheetItem.css";

export interface ActionSheetItemProps
  extends React.HTMLAttributes<HTMLElement>,
    React.AnchorHTMLAttributes<HTMLElement>,
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      "name" | "checked" | "value"
    > {
  mode?: "default" | "destructive" | "cancel";
  before?: React.ReactNode;
  meta?: React.ReactNode;
  subtitle?: React.ReactNode;
  autoClose?: boolean;
  selectable?: boolean;
  disabled?: boolean;
  /**
   * Если autoClose === true, onClick будет вызван после завершения анимации скрытия и после вызова onClose.
   * Из этого следует, что в объекте события значения полей типа `currentTarget` будут не определены.
   * Если вам нужен объект события именно на момент клика, используйте `onImmediateClick`.
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  onImmediateClick?: React.MouseEventHandler<HTMLElement>;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ActionSheetItem
 */
const ActionSheetItem = ({
  children,
  autoClose,
  mode = "default",
  meta,
  subtitle,
  before,
  selectable,
  value,
  name,
  checked,
  defaultChecked,
  onChange,
  onClick,
  onImmediateClick,
  ...restProps
}: ActionSheetItemProps) => {
  const platform = usePlatform();
  const { onItemClick = () => noop, isDesktop } =
    React.useContext<ActionSheetContextType<HTMLElement>>(ActionSheetContext);
  const { sizeY } = useAdaptivity();

  let Component: React.ElementType = restProps.href ? "a" : "div";

  if (selectable) {
    Component = "label";
  }

  const isCompact = hasReactNode(subtitle) || hasReactNode(meta) || selectable;

  return (
    <Tappable
      {...restProps}
      onClick={
        selectable
          ? onClick
          : onItemClick(onClick, onImmediateClick, Boolean(autoClose))
      }
      activeMode="ActionSheetItem--active"
      vkuiClass={classNames(
        getClassName("ActionSheetItem", platform),
        `ActionSheetItem--${mode}`,
        getSizeYClassName("ActionSheetItem", sizeY),
        isCompact && "ActionSheetItem--compact",
        isDesktop && "ActionSheetItem--desktop",
        hasReactNode(subtitle) && "ActionSheetItem--withSubtitle",
        hasReactNode(before) && "ActionSheetItem--withBefore"
      )}
      Component={Component}
    >
      {hasReactNode(before) && (
        <div vkuiClass="ActionSheetItem__before">{before}</div>
      )}
      <div vkuiClass="ActionSheetItem__container">
        <div vkuiClass="ActionSheetItem__content">
          <span vkuiClass="ActionSheetItem__children">{children}</span>
          {hasReactNode(meta) && (
            <span vkuiClass="ActionSheetItem__meta">{meta}</span>
          )}
        </div>
        {hasReactNode(subtitle) && (
          <span vkuiClass="ActionSheetItem__subtitle">{subtitle}</span>
        )}
      </div>
      {selectable && (
        <div vkuiClass="ActionSheetItem__after">
          <input
            type="radio"
            vkuiClass="ActionSheetItem__radio"
            name={name}
            value={value}
            onChange={onChange}
            onClick={onItemClick(noop, noop, Boolean(autoClose))}
            defaultChecked={defaultChecked}
            checked={checked}
            disabled={restProps.disabled}
          />
          <div vkuiClass="ActionSheetItem__marker">
            {platform === Platform.VKCOM ? <Icon24Done /> : <Icon16Done />}
          </div>
        </div>
      )}
    </Tappable>
  );
};

export { ActionSheetItem };
