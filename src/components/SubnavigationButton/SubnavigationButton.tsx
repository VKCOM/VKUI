import * as React from "react";
import { HasComponent, HasChildren } from "../../types";
import { classNames } from "../../lib/classNames";
import { getTitleFromChildren } from "../../lib/utils";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { Icon16Dropdown } from "@vkontakte/icons";
import { Caption } from "../Typography/Caption/Caption";
import { Subhead } from "../Typography/Subhead/Subhead";
import "./SubnavigationButton.css";

export interface SubnavigationButtonProps extends Omit<TappableProps, "size"> {
  mode?: "primary" | "outline" | "tertiary";
  size?: "s" | "m" | "l";
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

type SubnavigationButtonTypographyProps = Pick<
  SubnavigationButtonProps,
  "textLevel"
> &
  HasComponent &
  HasChildren;

const SubnavigationButtonTypography = ({
  textLevel,
  ...restProps
}: SubnavigationButtonTypographyProps) => {
  if (textLevel === 1) {
    return <Subhead {...restProps} />;
  }

  return <Caption level={textLevel === 2 ? "2" : "3"} {...restProps} />;
};

/**
 * @see https://vkcom.github.io/VKUI/#/SubnavigationButton
 */
export const SubnavigationButton = ({
  mode = "primary",
  size = "m",
  selected,
  textLevel = 1,
  before,
  after,
  expandable,
  children,
  ...restProps
}: SubnavigationButtonProps) => {
  const { sizeY } = useAdaptivity();

  return (
    <Tappable
      {...restProps}
      hasActive={false}
      focusVisibleMode="outside"
      vkuiClass={classNames(
        "SubnavigationButton",
        `SubnavigationButton--${size}`,
        `SubnavigationButton--mode-${mode}`,
        selected && "SubnavigationButton--selected",
        `SubnavigationButton--sizeY-${sizeY}`
      )}
      aria-label={getTitleFromChildren(children)}
    >
      <span vkuiClass="SubnavigationButton__in">
        {before && (
          <span vkuiClass="SubnavigationButton__before">{before}</span>
        )}
        <SubnavigationButtonTypography
          textLevel={textLevel}
          vkuiClass="SubnavigationButton__label"
          Component="span"
        >
          {children}
        </SubnavigationButtonTypography>
        {after && <span vkuiClass="SubnavigationButton__after">{after}</span>}
        {expandable && (
          <Icon16Dropdown
            vkuiClass="SubnavigationButton__expandableIcon"
            aria-hidden
          />
        )}
      </span>
    </Tappable>
  );
};
