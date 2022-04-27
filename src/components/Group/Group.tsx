import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import Separator from "../Separator/Separator";
import { hasReactNode } from "../../lib/utils";
import { Caption } from "../Typography/Caption/Caption";
import ModalRootContext from "../ModalRoot/ModalRootContext";
import { useAdaptivity } from "../../hooks/useAdaptivity";
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

  let computedMode: GroupProps["mode"] = mode;

  if (!mode && isInsideModal) {
    computedMode = "plain";
  }

  return (
    <section
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(
        getClassName("Group", platform),
        sizeX && `Group--sizeX-${sizeX}`,
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
          // eslint-disable-next-line vkui/no-object-expression-in-arguments
          vkuiClass={classNames("Group__separator", {
            "Group__separator--force": separator === "show",
          })}
          expanded={computedMode === "card"}
        />
      )}
    </section>
  );
};

// eslint-disable-next-line import/no-default-export
export default Group;
