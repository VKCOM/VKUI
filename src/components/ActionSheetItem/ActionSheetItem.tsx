import * as React from "react";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import Tappable from "../Tappable/Tappable";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode, noop } from "../../lib/utils";
import Subhead from "../Typography/Subhead/Subhead";
import Title from "../Typography/Title/Title";
import Text from "../Typography/Text/Text";
import { ANDROID, VKCOM } from "../../lib/platform";
import { Icon16Done, Icon24Done } from "@vkontakte/icons";
import {
  ActionSheetContext,
  ActionSheetContextType,
} from "../ActionSheet/ActionSheetContext";
import { Caption } from "../Typography/Caption/Caption";
import Headline from "../Typography/Headline/Headline";
import {
  withAdaptivity,
  AdaptivityProps,
  SizeType,
} from "../../hoc/withAdaptivity";
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
   * Если autoclose === true, onClick будет вызван после завершения анимации скрытия и после вызова onClose.
   * Из этого следует, что в объекте события значения полей типа `currentTarget` будут не определены.
   * Если вам нужен объект события именно на момент клика, используйте `onImmediateClick`.
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  onImmediateClick?: React.MouseEventHandler<HTMLElement>;
}

const ActionSheetItemComponent: React.FC<ActionSheetItemProps> = ({
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
  ...restProps
}: ActionSheetItemProps) => {
  const platform = usePlatform();
  const { onItemClick = () => noop, isDesktop } =
    React.useContext<ActionSheetContextType<HTMLElement>>(ActionSheetContext);

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
          : onItemClick(onClick, onImmediateClick, Boolean(autoclose))
      }
      activeMode="ActionSheetItem--active"
      vkuiClass={classNames(
        getClassName("ActionSheetItem", platform),
        `ActionSheetItem--${mode}`,
        `ActionSheetItem--sizeY-${sizeY}`,
        {
          "ActionSheetItem--compact": isCompact,
          "ActionSheetItem--desktop": isDesktop,
          "ActionSheetItem--withSubtitle": hasReactNode(subtitle),
        }
      )}
      Component={Component}
    >
      {hasReactNode(before) && (
        <div vkuiClass="ActionSheetItem__before">{before}</div>
      )}
      <div vkuiClass="ActionSheetItem__container">
        <div vkuiClass="ActionSheetItem__content">
          {sizeY === SizeType.COMPACT ? (
            <React.Fragment>
              <Text
                weight={mode === "cancel" ? "medium" : "regular"}
                vkuiClass="ActionSheetItem__children"
              >
                {children}
              </Text>
              {hasReactNode(meta) && (
                <Text weight="regular" vkuiClass="ActionSheetItem__meta">
                  {meta}
                </Text>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {platform === ANDROID ? (
                <Headline weight={mode === "cancel" ? "medium" : "regular"}>
                  {children}
                </Headline>
              ) : (
                <Title
                  weight={mode === "cancel" ? "2" : "3"}
                  level={isCompact || hasReactNode(before) ? "3" : "2"}
                  vkuiClass="ActionSheetItem__children"
                >
                  {children}
                </Title>
              )}
              {hasReactNode(meta) &&
                (platform === ANDROID ? (
                  <Headline weight={mode === "cancel" ? "medium" : "regular"}>
                    {children}
                  </Headline>
                ) : (
                  <Title
                    weight="3"
                    level={isCompact || hasReactNode(before) ? "3" : "2"}
                    vkuiClass="ActionSheetItem__meta"
                  >
                    {meta}
                  </Title>
                ))}
            </React.Fragment>
          )}
        </div>
        {hasReactNode(subtitle) &&
          (sizeY === SizeType.COMPACT ? (
            <Caption vkuiClass="ActionSheetItem__subtitle">{subtitle}</Caption>
          ) : (
            <Subhead vkuiClass="ActionSheetItem__subtitle">{subtitle}</Subhead>
          ))}
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
            {platform === VKCOM ? <Icon24Done /> : <Icon16Done />}
          </div>
        </div>
      )}
    </Tappable>
  );
};

export const ActionSheetItem = withAdaptivity(ActionSheetItemComponent, {
  sizeY: true,
});
