import * as React from "react";
import { HasComponent } from "../../types";
import { TappableProps } from "../Tappable/Tappable";
import { Icon16Dropdown } from "@vkontakte/icons";
import { Caption } from "../Typography/Caption/Caption";
import { Subhead } from "../Typography/Subhead/Subhead";
import { Button } from "../Button/Button";
import { classNames } from "../../lib/classNames";
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
export const SubnavigationButton = ({
  mode = "primary",
  size = "m",
  selected,
  textLevel = 1,
  after,
  expandable,
  children,
  ...restProps
}: SubnavigationButtonProps) => {
  return (
    <Button
      {...restProps}
      vkuiClass={classNames(
        "SubnavigationButton",
        selected && "SubnavigationButton--selected",
        `SubnavigationButton--mode-${mode}`
      )}
      after={
        <React.Fragment>
          {after}
          {expandable && (
            <Icon16Dropdown
              vkuiClass="SubnavigationButton__expandableIcon"
              aria-hidden
            />
          )}
        </React.Fragment>
      }
      size={size}
    >
      <SubnavigationButtonTypography
        textLevel={textLevel}
        vkuiClass="SubnavigationButton__label"
        Component="span"
      >
        {children}
      </SubnavigationButtonTypography>
    </Button>
  );
};
