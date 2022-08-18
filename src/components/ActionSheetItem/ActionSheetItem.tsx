import * as React from "react";
import { classNames } from "../../lib/classNames";
import { Tappable } from "../Tappable/Tappable";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode, noop } from "../../lib/utils";
import { Platform } from "../../lib/platform";
import { Subhead } from "../Typography/Subhead/Subhead";
import { Text } from "../Typography/Text/Text";
import { Icon24CheckCircleOn } from "@vkontakte/icons";
import {
  ActionSheetContext,
  ActionSheetContextType,
} from "../ActionSheet/ActionSheetContext";
import { AdaptivityProps, withAdaptivity } from "../../hoc/withAdaptivity";
import "./ActionSheetItem.css";

export interface ActionSheetItemProps
  extends React.HTMLAttributes<HTMLElement>,
    React.AnchorHTMLAttributes<HTMLElement>,
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      "name" | "checked" | "value"
    >,
    AdaptivityProps {
  mode?: "default" | "destructive" | "cancel";
  before?: React.ReactNode;
  meta?: React.ReactNode;
  subtitle?: React.ReactNode;
  autoclose?: boolean;
  selectable?: boolean;
  disabled?: boolean;
  /**
   * Все текстовые элементы при необходимости занимают несколько строк
   */
  multiline?: boolean;
  /**
   * Если autoclose === true, onClick будет вызван после завершения анимации скрытия и после вызова onClose.
   * Из этого следует, что в объекте события значения полей типа `currentTarget` будут не определены.
   * Если вам нужен объект события именно на момент клика, используйте `onImmediateClick`.
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  onImmediateClick?: React.MouseEventHandler<HTMLElement>;
}

const ActionSheetItemComponent = ({
  children,
  autoclose,
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
  sizeY,
  onImmediateClick,
  multiline = false,
  ...restProps
}: ActionSheetItemProps) => {
  const platform = usePlatform();
  const { onItemClick = () => noop, isDesktop } =
    React.useContext<ActionSheetContextType<HTMLElement>>(ActionSheetContext);

  let Component: React.ElementType = restProps.href ? "a" : "div";

  if (selectable) {
    Component = "label";
  }

  const isRich = hasReactNode(subtitle) || hasReactNode(meta) || selectable;
  const isCentered =
    !isRich && !hasReactNode(before) && platform === Platform.IOS;

  return (
    <Tappable
      {...restProps}
      onClick={
        selectable
          ? onClick
          : onItemClick(onClick, onImmediateClick, Boolean(autoclose))
      }
      activeMode={
        platform === Platform.IOS ? "ActionSheetItem--active" : undefined
      }
      vkuiClass={classNames(
        "ActionSheetItem",
        platform === Platform.IOS && "ActionSheetItem--ios",
        `ActionSheetItem--${mode}`,
        `ActionSheetItem--sizeY-${sizeY}`,
        isRich && "ActionSheetItem--rich",
        isDesktop && "ActionSheetItem--desktop"
      )}
      Component={Component}
    >
      {hasReactNode(before) && (
        <div vkuiClass="ActionSheetItem__before">{before}</div>
      )}
      <div
        vkuiClass={classNames(
          "ActionSheetItem__container",
          !multiline && "ActionSheetItem--ellipsis"
        )}
      >
        <div
          vkuiClass={classNames(
            "ActionSheetItem__content",
            isCentered && "ActionSheetItem--centered"
          )}
        >
          <Text
            weight={mode === "cancel" ? "2" : undefined}
            vkuiClass="ActionSheetItem__children"
          >
            {children}
          </Text>
          {hasReactNode(meta) && (
            <Text vkuiClass="ActionSheetItem__meta">{meta}</Text>
          )}
        </div>
        {hasReactNode(subtitle) && (
          <Subhead vkuiClass="ActionSheetItem__subtitle">{subtitle}</Subhead>
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
            onClick={onItemClick(noop, noop, Boolean(autoclose))}
            defaultChecked={defaultChecked}
            checked={checked}
            disabled={restProps.disabled}
          />
          <div vkuiClass="ActionSheetItem__marker">
            <Icon24CheckCircleOn />
          </div>
        </div>
      )}
    </Tappable>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/ActionSheetItem
 */
export const ActionSheetItem = withAdaptivity(ActionSheetItemComponent, {
  sizeY: true,
});
