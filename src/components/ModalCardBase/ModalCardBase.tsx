import * as React from "react";
import { hasReactNode } from "../../lib/utils";
import { Title } from "../Typography/Title/Title";
import { Headline } from "../Typography/Headline/Headline";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { ViewWidth, withAdaptivity } from "../../hoc/withAdaptivity";
import { HasRootRef } from "../../types";
import { PanelHeaderButton } from "../PanelHeaderButton/PanelHeaderButton";
import { ANDROID, IOS, Platform } from "../../lib/platform";
import ModalDismissButton from "../ModalDismissButton/ModalDismissButton";
import { Icon24Dismiss } from "@vkontakte/icons";
import { useKeyboard } from "../../hooks/useKeyboard";
import { AdaptivityContextInterface } from "../AdaptivityProvider/AdaptivityContext";
import { useAdaptivityIsDesktop } from "../../hooks/useAdaptivity";
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
export const ModalCardBase = withAdaptivity<
  ModalCardBaseProps & AdaptivityContextInterface
>(
  ({
    getRootRef,
    icon,
    header,
    subheader,
    children,
    actions,
    actionsLayout,
    viewWidth,
    hasMouse,
    viewHeight,
    onClose,
    dismissLabel = "Скрыть",
    ...restProps
  }) => {
    const platform = usePlatform();
    const isDesktop = useAdaptivityIsDesktop();
    const isSoftwareKeyboardOpened = useKeyboard().isOpened;

    const canShowCloseBtn =
      viewWidth >= ViewWidth.SMALL_TABLET || platform === Platform.VKCOM;
    const canShowCloseBtnIos = platform === IOS && !canShowCloseBtn;

    return (
      <div
        {...restProps}
        // eslint-disable-next-line vkui/no-object-expression-in-arguments
        vkuiClass={classNames(getClassName("ModalCardBase", platform), {
          "ModalCardBase--desktop": isDesktop,
        })}
        ref={getRootRef}
      >
        <div
          // eslint-disable-next-line vkui/no-object-expression-in-arguments
          vkuiClass={classNames("ModalCardBase__container", {
            "ModalCardBase__container--softwareKeyboardOpened":
              isSoftwareKeyboardOpened,
          })}
        >
          {hasReactNode(icon) && (
            <div vkuiClass="ModalCardBase__icon">{icon}</div>
          )}
          {hasReactNode(header) && (
            <Title
              level="2"
              weight={platform === ANDROID ? "2" : "1"}
              vkuiClass="ModalCardBase__header"
            >
              {header}
            </Title>
          )}
          {hasReactNode(subheader) && (
            <Headline weight="3" vkuiClass="ModalCardBase__subheader">
              {subheader}
            </Headline>
          )}

          {children}

          {hasReactNode(actions) && (
            <div
              // eslint-disable-next-line vkui/no-object-expression-in-arguments
              vkuiClass={classNames("ModalCardBase__actions", {
                "ModalCardBase__actions--v": actionsLayout === "vertical",
              })}
            >
              {actions}
            </div>
          )}

          {canShowCloseBtn && <ModalDismissButton onClick={onClose} />}
          {canShowCloseBtnIos && (
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
  },
  {
    viewWidth: true,
    viewHeight: true,
    hasMouse: true,
  }
);
