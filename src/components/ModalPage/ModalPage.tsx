import * as React from "react";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { classNames } from "../../lib/classNames";
import { Platform } from "../../lib/platform";
import {
  ModalRootContext,
  useModalRegistry,
} from "../ModalRoot/ModalRootContext";
import { usePlatform } from "../../hooks/usePlatform";
import { useOrientationChange } from "../../hooks/useOrientationChange";
import { ModalDismissButton } from "../ModalDismissButton/ModalDismissButton";
import { multiRef } from "../../lib/utils";
import { ModalType } from "../ModalRoot/types";
import { getNavId, NavIdProps } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import { useAdaptivityWithMediaQueries } from "../../hooks/useAdaptivityWithMediaQueries";
import "./ModalPage.css";

export interface ModalPageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    NavIdProps {
  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header?: React.ReactNode;
  /**
   * Задаёт контенту максимальную ширину.
   *
   * > ⚠️ **Заметки:**
   * > - Для `viewWidth < SMALL_TABLET_SIZE` будет всегда `"s"`
   * > - Для `platform === VKCOM` максимальная ширина зашита, её не изменить.
   */
  size?: "s" | "m" | "l";
  /**
   * Будет вызвано при начале открытия модалки.
   */
  onOpen?: VoidFunction;
  /**
   * Будет вызвано при окончательном открытии модалки.
   */
  onOpened?: VoidFunction;
  /**
   * Будет вызвано при начале закрытия модалки.
   */
  onClose?: VoidFunction;
  /**
   * Будет вызвано при окончательном закрытии модалки.
   */
  onClosed?: VoidFunction;
  /**
   * Процент, на который изначально будет открыта модальная страница. При `settlingHeight={100}` модальная страница раскрывается на всю высоту.
   */
  settlingHeight?: number;
  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство
   */
  dynamicContentHeight?: boolean;
  getModalContentRef?: React.Ref<HTMLDivElement>;
  /**
   * Скрывает кнопку закрытия (актуально для iOS, т.к. можно отрисовать кнопку закрытия внутри модалки)
   */
  hideCloseButton?: boolean;
}

const warn = warnOnce("ModalPage");

/**
 * @see https://vkcom.github.io/VKUI/#/ModalPage
 */
export const ModalPage = ({
  children,
  header,
  size: sizeProp = "s",
  onOpen,
  onOpened,
  onClose,
  onClosed,
  settlingHeight, // 75
  dynamicContentHeight,
  getModalContentRef,
  nav,
  id,
  hideCloseButton = false,
  ...restProps
}: ModalPageProps) => {
  const { updateModalHeight } = React.useContext(ModalRootContext);

  const platform = usePlatform();
  const orientation = useOrientationChange();
  const { sizeX, isDesktop } = useAdaptivityWithMediaQueries();

  React.useEffect(updateModalHeight, [
    children,
    orientation,
    updateModalHeight,
  ]);

  const isCloseButtonShown = !hideCloseButton && isDesktop;
  const size = isDesktop ? sizeProp : "s";

  const modalContext = React.useContext(ModalRootContext);
  const { refs } = useModalRegistry(
    getNavId({ nav, id }, warn),
    ModalType.PAGE
  );

  return (
    <div
      {...restProps}
      id={id}
      vkuiClass={classNames(
        "ModalPage",
        platform === Platform.IOS && "ModalPage--ios",
        platform === Platform.VKCOM && "ModalPage--vkcom",
        getSizeXClassName("ModalPage", sizeX),
        isDesktop && "ModalPage--desktop",
        size && `ModalPage--${size}`
      )}
    >
      <div vkuiClass="ModalPage__in-wrap" ref={refs.innerElement}>
        <div vkuiClass="ModalPage__in">
          <div vkuiClass="ModalPage__header" ref={refs.headerElement}>
            {header}
          </div>

          <div vkuiClass="ModalPage__content-wrap">
            <div
              vkuiClass="ModalPage__content"
              ref={multiRef<HTMLDivElement>(
                refs.contentElement,
                getModalContentRef
              )}
            >
              <div vkuiClass="ModalPage__content-in">{children}</div>
            </div>
          </div>
          {isCloseButtonShown && (
            <ModalDismissButton onClick={onClose || modalContext.onClose} />
          )}
        </div>
      </div>
    </div>
  );
};
