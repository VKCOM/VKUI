import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { Separator } from "../Separator/Separator";
import { hasReactNode } from "../../lib/utils";
import { Caption } from "../Typography/Caption/Caption";
import ModalRootContext from "../ModalRoot/ModalRootContext";
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
}

/**
 * @see https://vkcom.github.io/VKUI/#/Group
 */
const Group: React.FC<GroupProps> = (props: GroupProps) => {
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

  return (
    <section
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        getClassName("Group", platform),
        getSizeXClassName("Group", sizeX),
        computedMode && `Group--${computedMode}`
      )}
    >
      <div vkuiClass="Group__inner">
        {header}
        {children}
        {hasReactNode(description) && (
          <Caption vkuiClass="Group__description">{description}</Caption>
        )}
      </div>
      {separator !== "hide" && (
        <Separator
          vkuiClass={classNames(
            "Group__separator",
            separator === "show" && "Group__separator--force"
          )}
        />
      )}
    </section>
  );
};

// eslint-disable-next-line import/no-default-export
export default Group;
