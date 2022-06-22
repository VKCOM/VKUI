import * as React from "react";
import { HasComponent } from "../../types";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { getTitleFromChildren, hasReactNode } from "../../lib/utils";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { Icon16Dropdown } from "@vkontakte/icons";
import { usePlatform } from "../../hooks/usePlatform";
import { Caption } from "../Typography/Caption/Caption";
import { Subhead } from "../Typography/Subhead/Subhead";
import "./SubnavigationButton.css";

export interface SubnavigationButtonProps extends Omit<TappableProps, "size"> {
  size?: "m" | "l";
  selected?: boolean;
  /**
   * Размер шрифта. Этим свойством рекомендуется пользоваться, чтобы отрегулировать размер шрифта у кнопок в `<SubnavigationBar mode="fixed" />`
   */
  textLevel?: 1 | 2 | 3;
  /**
   * Рекомендуется использовать только иконки с размером 24
   */
  before?: React.ReactNode;
  /**
   * Рекомендуется использовать только `<Counter size="s" />` или `<Badge />`
   */
  after?: React.ReactNode;
  expandable?: boolean;
}

type SubnavButtonTypographyProps = Pick<SubnavigationButtonProps, "textLevel"> &
  HasComponent;

const SubnavigationButtonTypography: React.FC<SubnavButtonTypographyProps> = ({
  textLevel,
  ...restProps
}: SubnavButtonTypographyProps) => {
  if (textLevel === 1) {
    return <Subhead {...restProps} />;
  }

  return <Caption level={textLevel === 2 ? "1" : "2"} {...restProps} />;
};

/**
 * @see https://vkcom.github.io/VKUI/#/SubnavigationButton
 */
export const SubnavigationButton: React.FC<SubnavigationButtonProps> = ({
  size = "m",
  selected,
  textLevel = 1,
  before,
  after,
  expandable,
  children,
  ...restProps
}: SubnavigationButtonProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      hasActive={false}
      focusVisibleMode="outside"
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
      vkuiClass={classNames(
        getClassName("SubnavigationButton", platform),
        `SubnavigationButton--${size}`,
        {
          "SubnavigationButton--selected": selected,
        }
      )}
      aria-label={getTitleFromChildren(children)}
    >
      <span vkuiClass="SubnavigationButton__in">
        {hasReactNode(before) && (
          <span vkuiClass="SubnavigationButton__before">{before}</span>
        )}
        <SubnavigationButtonTypography
          textLevel={textLevel}
          vkuiClass="SubnavigationButton__label"
          Component="span"
        >
          {children}
        </SubnavigationButtonTypography>
        {hasReactNode(after) && (
          <span vkuiClass="SubnavigationButton__after">{after}</span>
        )}
        {expandable && (
          <Icon16Dropdown vkuiClass="SubnavigationButton__expandableIcon" />
        )}
      </span>
    </Tappable>
  );
};
