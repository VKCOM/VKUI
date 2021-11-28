import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { ModalRootContext } from "../ModalRoot/ModalRootContext";
import { usePlatform } from "../../hooks/usePlatform";
import {
  withAdaptivity,
  AdaptivityProps,
  ViewWidth,
} from "../../hoc/withAdaptivity";
import ModalDismissButton from "../ModalDismissButton/ModalDismissButton";
import { getNavId, NavIdProps } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import { Touch } from "../Touch/Touch";
import { useExternRef } from "../../hooks/useExternRef";
import { useModalPage } from "./useModalPage";
import "./ModalPage.css";

export interface ModalPageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AdaptivityProps,
    NavIdProps {
  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header?: React.ReactNode;
  onClose?: VoidFunction;
  /**
   * Процент, на который изначально будет открыта модальная страница. При `settlingHeight={100}` модальная страница раскрывается на всю высоту.
   */
  settlingHeight?: number;
  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство
   */
  dynamicContentHeight?: boolean;
  getModalContentRef?: React.Ref<HTMLDivElement>;
}

const warn = warnOnce("ModalPage");
const ModalPage: React.FC<ModalPageProps> = (props: ModalPageProps) => {
  const platform = usePlatform();
  const {
    children,
    header,
    viewWidth,
    viewHeight,
    sizeX,
    hasMouse,
    onClose: _onClose,
    settlingHeight,
    dynamicContentHeight,
    getModalContentRef,
    nav,
    ...restProps
  } = props;

  const canShowCloseBtn = viewWidth >= ViewWidth.SMALL_TABLET;

  const modalContext = React.useContext(ModalRootContext);
  const pageElement = React.useRef<HTMLDivElement>();
  const contentRef = useExternRef(getModalContentRef);
  const { refs, updateModalHeight, handlers, expanded, dragging, onClose } =
    useModalPage(getNavId(props, warn), {
      onClose: _onClose,
      ...props,
      hasOverflow: () =>
        contentRef.current.scrollHeight > contentRef.current.offsetHeight,
      innerHeight: () =>
        contentRef.current.getBoundingClientRect().bottom -
        refs.innerElement.current.getBoundingClientRect().top,
      pageHeight: () => pageElement.current.offsetHeight,
      isScrolled: () => contentRef.current.scrollTop > 0,
    });
  const childContext = React.useMemo(
    () => ({ ...modalContext, updateModalHeight }),
    [updateModalHeight]
  );
  React.useEffect(() => {
    updateModalHeight();
  }, [children]);

  return (
    <div
      {...restProps}
      ref={pageElement}
      vkuiClass={classNames(
        getClassName("ModalPage", platform),
        `ModalPage--sizeX-${sizeX}`,
        {
          "ModalPage--desktop": modalContext.mode === "desktop",
          "ModalPage--scrollable": expanded && !dragging,
        }
      )}
    >
      <ModalRootContext.Provider value={childContext}>
        <Touch
          vkuiClass="ModalPage__in-wrap"
          getRootRef={refs.innerElement}
          {...handlers}
          data-vkui-modal-page
        >
          <div vkuiClass="ModalPage__in">
            <div vkuiClass="ModalPage__header" ref={refs.headerElement}>
              {header}
            </div>

            <div vkuiClass="ModalPage__content-wrap">
              <div vkuiClass="ModalPage__content" ref={contentRef}>
                <div vkuiClass="ModalPage__content-in">{children}</div>
              </div>
            </div>
            {canShowCloseBtn && <ModalDismissButton onClick={onClose} />}
          </div>
        </Touch>
      </ModalRootContext.Provider>
    </div>
  );
};

ModalPage.defaultProps = {
  settlingHeight: 75,
};

export default withAdaptivity(ModalPage, {
  viewWidth: true,
  viewHeight: true,
  sizeX: true,
  hasMouse: true,
});
