import * as React from "react";
import { Icon16Done } from "@vkontakte/icons";
import { classNames } from "../../lib/classNames";
import { hasReactNode } from "../../lib/utils";
import { Paragraph } from "../Typography/Paragraph/Paragraph";
import { Caption } from "../Typography/Caption/Caption";
import { HasRootRef } from "../../types";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { warnOnce } from "../../lib/warnOnce";
import "./CustomSelectOption.css";

export interface CustomSelectOptionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * Вставляет основной контент.
   */
  option?: any;
  /**
   * Добавляет описание под основным блоком.
   */
  description?: React.ReactNode;
  /**
   * Вставляет элемент в начало блока перед основным контентом.
   * Например, можно передать компонент `Avatar`, `Icon<Name>` или другие изображения.
   */
  before?: React.ReactNode;
  /**
   * Вставляет элемент в конец блока после основного контента.
   * Например, можно передать компонент `Avatar`, `Icon<Name>` или другие изображения.
   */
  after?: React.ReactNode;
  /**
   * Позволяет создавать вложенность.
   */
  hierarchy?: number;
  /**
   * Включает состояние выбранного элемента списка.
   */
  selected?: boolean;
  /**
   * Включает состояние наведения.
   */
  hovered?: boolean;
  /**
   * Включает состояние фокуса.
   */
  focused?: boolean;
  /**
   * Блокирует весь блок.
   */
  disabled?: boolean;
}

const warn = warnOnce("CustomSelectOption");

/**
 * @see https://vkcom.github.io/VKUI/#/CustomSelectOption
 */
export const CustomSelectOption = ({
  children,
  hierarchy = 0,
  hovered,
  selected,
  before,
  after,
  option,
  description,
  disabled,
  style: styleProp,
  ...restProps
}: CustomSelectOptionProps) => {
  const title = typeof children === "string" ? children : undefined;
  const { sizeY } = useAdaptivity();
  const style = React.useMemo(
    () =>
      hierarchy > 0
        ? {
            "--custom-select-option-hierarchy-level": hierarchy,
            ...styleProp,
          }
        : styleProp,
    [hierarchy, styleProp]
  );

  if (!!option && process.env.NODE_ENV === "development") {
    warn("Свойство option было добавлено по ошибке и будет удалено в 5.0.0.");
  }

  return (
    <Paragraph
      {...restProps}
      Component="div"
      role="option"
      title={title}
      aria-disabled={disabled}
      aria-selected={selected}
      vkuiClass={classNames(
        "CustomSelectOption",
        `CustomSelectOption--sizeY-${sizeY}`,
        hovered && !disabled && "CustomSelectOption--hover",
        selected && "CustomSelectOption--selected", // Note: пустой класс
        disabled && "CustomSelectOption--disabled",
        hierarchy > 0 && "CustomSelectOption--hierarchy"
      )}
      style={style}
    >
      {hasReactNode(before) && (
        <div vkuiClass="CustomSelectOption__before">{before}</div>
      )}
      <div vkuiClass="CustomSelectOption__main">
        <div vkuiClass="CustomSelectOption__children">{children}</div>
        {hasReactNode(description) && (
          <Caption vkuiClass="CustomSelectOption__description">
            {description}
          </Caption>
        )}
      </div>
      <div vkuiClass="CustomSelectOption__after">
        {hasReactNode(after) && (
          <div vkuiClass="CustomSelectOption__afterIn">{after}</div>
        )}
        {selected && (
          <Icon16Done vkuiClass="CustomSelectOption__selectedIcon" />
        )}
      </div>
    </Paragraph>
  );
};
