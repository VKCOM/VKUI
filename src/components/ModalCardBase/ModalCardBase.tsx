import * as React from "react";
import { hasReactNode } from "../../lib/utils";
import { Title } from "../Typography/Title/Title";
import { Subhead } from "../Typography/Subhead/Subhead";
import { classNames } from "../../lib/classNames";
import { getPlatformClassName } from "../../helpers/getPlatformClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { HasRootRef } from "../../types";
import { PanelHeaderButton } from "../PanelHeaderButton/PanelHeaderButton";
import { Platform } from "../../lib/platform";
import { ModalDismissButton } from "../ModalDismissButton/ModalDismissButton";
import { Icon24Dismiss } from "@vkontakte/icons";
import { useKeyboard } from "../../hooks/useKeyboard";
import { useAdaptivityWithMediaQueries } from "../../hooks/useAdaptivityWithMediaQueries";
import "./ModalCardBase.css";

export interface ModalCardBaseProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * Иконка.
   *
   * Может быть компонентом иконки, например, `<Icon56MoneyTransferOutline />`, или `<Avatar size={72} src="" />`
   */
  icon?: React.ReactNode;

  /**
   * Заголовок карточки
   */
  header?: React.ReactNode;

  /**
   * Подзаголовок
   */
  subheader?: React.ReactNode;

  /**
   * Кнопки-действия.
   *
   * Рекомендуется использовать `<Button size="l" mode="primary" />` или `<Button size="l" mode="secondary" />`
   */
  actions?: React.ReactNode;

  /**
   * Тип отображения кнопок: вертикальный или горизонтальный
   */
  actionsLayout?: "vertical" | "horizontal";
  onClose?: VoidFunction;

  /**
   * `aria-label` для кнопки закрытия. Необходим, чтобы кнопка была доступной.
   */
  dismissLabel?: string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ModalCardBase
 */
export const ModalCardBase: React.FC<ModalCardBaseProps> = ({
  getRootRef,
  icon,
  header,
  subheader,
  children,
  actions,
  onClose,
  actionsLayout,
  dismissLabel = "Скрыть",
  ...restProps
}) => {
  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithMediaQueries();
  const isSoftwareKeyboardOpened = useKeyboard().isOpened;

  const canShowCloseButtonIOS = platform === Platform.IOS && !isDesktop;

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        "ModalCardBase",
        getPlatformClassName("ModalCardBase", platform),
        isDesktop && "ModalCardBase--desktop"
      )}
      ref={getRootRef}
    >
      <div
        vkuiClass={classNames(
          "ModalCardBase__container",
          isSoftwareKeyboardOpened &&
            "ModalCardBase__container--softwareKeyboardOpened"
        )}
      >
        {hasReactNode(icon) && (
          <div vkuiClass="ModalCardBase__icon">{icon}</div>
        )}
        {hasReactNode(header) && (
          <Title level="2" weight="2" vkuiClass="ModalCardBase__header">
            {header}
          </Title>
        )}
        {hasReactNode(subheader) && (
          <Subhead vkuiClass="ModalCardBase__subheader">{subheader}</Subhead>
        )}

        {children}

        {hasReactNode(actions) && (
          <div
            vkuiClass={classNames(
              "ModalCardBase__actions",
              actionsLayout === "vertical" && "ModalCardBase__actions--v"
            )}
          >
            {actions}
          </div>
        )}

        {isDesktop && <ModalDismissButton onClick={onClose} />}
        {canShowCloseButtonIOS && (
          <PanelHeaderButton
            aria-label={dismissLabel}
            vkuiClass="ModalCardBase__dismiss"
            onClick={onClose}
          >
            <Icon24Dismiss />
          </PanelHeaderButton>
        )}
      </div>
    </div>
  );
};
