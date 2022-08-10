import * as React from "react";
import { IOS } from "../../lib/platform";
import { classNames } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { Spacing } from "../Spacing/Spacing";
import { Separator } from "../Separator/Separator";
import { hasReactNode } from "../../lib/utils";
import { Footnote } from "../Typography/Footnote/Footnote";
import { ModalRootContext } from "../ModalRoot/ModalRootContext";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import "./Group.css";

export interface GroupProps
  extends HasRootRef<HTMLElement>,
    React.HTMLAttributes<HTMLElement> {
  header?: React.ReactNode;
  description?: React.ReactNode;
  /**
    show - разделитель всегда показывается,
    hide – разделитель всегда спрятан,
    auto – разделитель рисуется автоматически между соседними группами.
   */
  separator?: "show" | "hide" | "auto";
  /**
   * Режим отображения. Если установлен 'card', выглядит как карточка c
   * обводкой и внешними отступами. Если 'plain' — без отступов и обводки.
   * По умолчанию режим отображения зависит от `sizeX`. В модальных окнах
   * по умолчанию 'plain'.
   */
  mode?: "plain" | "card";
  children?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Group
 */
export const Group = (props: GroupProps) => {
  const {
    header,
    description,
    children,
    separator = "auto",
    getRootRef,
    mode,
    ...restProps
  } = props;
  const { isInsideModal } = React.useContext(ModalRootContext);
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();

  let computedMode: GroupProps["mode"] | "none" = mode;

  if (!mode) {
    // Подробнее в "none" можно прочитать в ADAPTIVITY_GUIDE.md
    computedMode = isInsideModal ? "plain" : "none";
  }

  let separatorElement = null;

  if (separator !== "hide") {
    const separatorClassName = classNames(
      "Group__separator",
      separator === "show" && "Group__separator--force"
    );
    separatorElement =
      computedMode === "card" ? (
        <Spacing vkuiClass={separatorClassName} size={16} />
      ) : (
        <Separator vkuiClass={separatorClassName} />
      );
  }

  return (
    <section
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        "Group",
        platform === IOS && "Group--ios",
        getSizeXClassName("Group", sizeX),
        computedMode && `Group--${computedMode}`
      )}
    >
      <div vkuiClass="Group__inner">
        {header}
        {children}
        {hasReactNode(description) && (
          <Footnote vkuiClass="Group__description">{description}</Footnote>
        )}
      </div>
      {separatorElement}
    </section>
  );
};
