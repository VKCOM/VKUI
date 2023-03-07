import * as React from "react";
import { IOS } from "../../lib/platform";
import { classNames } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { Spacing } from "../Spacing/Spacing";
import { Separator } from "../Separator/Separator";
import { hasReactNode } from "../../lib/utils";
import { Caption } from "../Typography/Caption/Caption";
import { warnOnce } from "../../lib/warnOnce";
import {
  withAdaptivity,
  AdaptivityProps,
  SizeType,
} from "../../hoc/withAdaptivity";
import { ModalRootContext } from "../ModalRoot/ModalRootContext";
import "./Group.css";

export interface GroupProps
  extends HasRootRef<HTMLElement>,
    React.HTMLAttributes<HTMLElement>,
    AdaptivityProps {
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
  /**
   * Отвечает за отступы вокруг контента в режиме 'card'.
   */
  padding?: "s" | "m";
  children?: React.ReactNode;
}

const warn = warnOnce("TabsItem");

const GroupComponent = ({
  header,
  description,
  children,
  separator = "auto",
  getRootRef,
  mode,
  padding = "m",
  sizeX,
  tabIndex: tabIndexProp,
  ...restProps
}: GroupProps) => {
  const { isInsideModal } = React.useContext(ModalRootContext);
  const platform = usePlatform();

  let computedMode: GroupProps["mode"] = mode;

  if (!mode) {
    computedMode =
      sizeX === SizeType.COMPACT || isInsideModal ? "plain" : "card";
  }

  const isTabPanel = restProps.role === "tabpanel";

  if (
    process.env.NODE_ENV === "development" &&
    isTabPanel &&
    (!restProps["aria-controls"] || !restProps["id"])
  ) {
    warn(
      'При использовании роли "tabpanel" необходимо задать значение свойств "aria-controls" и "id"'
    );
  }

  const tabIndex = isTabPanel && tabIndexProp === undefined ? 0 : tabIndexProp;

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
    <React.Fragment>
      <section
        {...restProps}
        tabIndex={tabIndex}
        ref={getRootRef}
        vkuiClass={classNames(
          "Group",
          platform === IOS && "Group--ios",
          // TODO v5.0.0 Новая адаптивность
          `Group--sizeX-${sizeX}`,
          `Group--${computedMode}`,
          `Group--padding-${padding}`
        )}
      >
        {header}
        {children}
        {hasReactNode(description) && (
          <Caption vkuiClass="Group__description">{description}</Caption>
        )}
      </section>
      {separatorElement}
    </React.Fragment>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Group
 */
export const Group = withAdaptivity(GroupComponent, { sizeX: true });

Group.displayName = "Group";
