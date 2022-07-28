import * as React from "react";
import { hasReactNode } from "../../lib/utils";
import { Title } from "../Typography/Title/Title";
import { Subhead } from "../Typography/Subhead/Subhead";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { HasRootRef } from "../../types";
import { PanelHeaderButton } from "../PanelHeaderButton/PanelHeaderButton";
import { ANDROID } from "../../lib/platform";
import { ModalDismissButton } from "../ModalDismissButton/ModalDismissButton";
import { Icon24Dismiss } from "@vkontakte/icons";
import { useKeyboard } from "../../hooks/useKeyboard";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
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
   * Кнопки-действия. Принимает [`Button`](https://vkcom.github.io/VKUI/#/Button) с параметрами:
   *
   * - `size="l" mode="primary" stretched`
   * - `size="l" mode="secondary" stretched`
   *
   * Для набора кнопок используйте [`ButtonGroup`](https://vkcom.github.io/VKUI/#/ButtonGroup) с параметрами:
   *
   * - `gap="s" mode="horizontal" stretched`
   * - `gap="m" mode="vertical" stretched`
   */
  actions?: React.ReactNode;

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
  dismissLabel = "Скрыть",
  ...restProps
}) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();
  const isSoftwareKeyboardOpened = useKeyboard().isOpened;

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName("ModalCardBase", platform),
        getSizeXClassName("ModalCardBase", sizeX)
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
          <Title
            level="2"
            weight={platform === ANDROID ? "2" : "1"}
            vkuiClass="ModalCardBase__header"
          >
            {header}
          </Title>
        )}
        {hasReactNode(subheader) && (
          <Subhead vkuiClass="ModalCardBase__subheader">{subheader}</Subhead>
        )}

        {children}

        {hasReactNode(actions) && (
          <div vkuiClass="ModalCardBase__actions">{actions}</div>
        )}

        <ModalDismissButton
          vkuiClass="ModalCardBase__dismiss"
          onClick={onClose}
        />
        <PanelHeaderButton
          aria-label={dismissLabel}
          vkuiClass="ModalCardBase__dismiss-ios"
          onClick={onClose}
        >
          <Icon24Dismiss />
        </PanelHeaderButton>
      </div>
    </div>
  );
};
