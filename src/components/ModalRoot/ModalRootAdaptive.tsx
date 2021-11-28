import * as React from "react";
import {
  withAdaptivity,
  AdaptivityProps,
  ViewHeight,
  ViewWidth,
} from "../../hoc/withAdaptivity";
import TouchRootContext from "../Touch/TouchContext";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { ANDROID, VKCOM } from "../../lib/platform";
import ModalRootContext, {
  ModalRootContextInterface,
} from "./ModalRootContext";
import {
  ConfigProviderContext,
  WebviewType,
} from "../ConfigProvider/ConfigProviderContext";
import { getNavId } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import { noop } from "../../lib/utils";
import { usePlatform } from "../../hooks/usePlatform";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { useModalManager, ModalManagerContext } from "./useModalManager";
import { useObjectMemo } from "../../hooks/useObjectMemo";
import { useDOM } from "../../lib/dom";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { clamp } from "../../helpers/math";
import "./ModalRoot.css";

const warn = warnOnce("ModalRoot");
const ActiveTouch: React.FC = ({ children }) => (
  <TouchRootContext.Provider value={true}>{children}</TouchRootContext.Provider>
);

function useFocusRestoration(isSuspended: boolean) {
  const { document } = useDOM();
  useIsomorphicLayoutEffect(() => {
    const restoreFocusTo = document.activeElement as HTMLElement;
    if (!isSuspended || !restoreFocusTo) {
      return noop;
    }
    return () => {
      document.body.contains(restoreFocusTo) && restoreFocusTo.focus();
    };
  }, [isSuspended]);
}

export interface ModalRootProps extends AdaptivityProps {
  activeModal?: string | null;

  /**
   * Будет вызвано при закрытии активной модалки с её id
   */
  onClose?: (modalId: string) => void;
  mode?: "mobile" | "desktop";
}

const ModalRootComponent: React.FC<ModalRootProps> = (
  props: React.PropsWithChildren<ModalRootProps>
) => {
  const {
    viewWidth,
    viewHeight,
    hasMouse,
    mode = viewWidth >= ViewWidth.SMALL_TABLET &&
    (hasMouse || viewHeight >= ViewHeight.MEDIUM)
      ? "desktop"
      : "mobile",
  } = props;
  const platform = usePlatform();
  const { webviewType } = React.useContext(ConfigProviderContext);

  const transitionManager = useModalManager(
    props.activeModal,
    props.children,
    props.onClose
  );
  const { activeModal, exitingModal, enteringModal, modals, closeActiveModal } =
    transitionManager;

  const timeout = platform === ANDROID || platform === VKCOM ? 320 : 400;
  const Wrapper = mode === "desktop" ? React.Fragment : ActiveTouch;

  useFocusRestoration(modals.length > 0);

  const maskElementRef = React.useRef<HTMLDivElement>();
  const maskAnimationFrame = React.useRef<number>();
  const setMaskOpacity = React.useCallback(
    (opacity: number, animate = true) => {
      cancelAnimationFrame(maskAnimationFrame.current);
      maskAnimationFrame.current = requestAnimationFrame(() => {
        if (maskElementRef.current) {
          maskElementRef.current.style.opacity = String(clamp(opacity, 0, 1));
          maskElementRef.current.style.transition = animate ? null : "none";
        }
      });
    },
    []
  );
  React.useEffect(() => {
    !activeModal && setMaskOpacity(0);
  }, [!activeModal]);

  const modalRootContext = React.useMemo<ModalRootContextInterface>(
    () => ({
      updateModalHeight: noop,
      onClose: closeActiveModal,
      isInsideModal: true,
      mode,
      setMaskOpacity,
    }),
    []
  );
  const managerContext = useObjectMemo(transitionManager);

  if (!modals.length) {
    return null;
  }

  return (
    <Wrapper>
      <ModalManagerContext.Provider value={managerContext}>
        <ModalRootContext.Provider value={modalRootContext}>
          <div
            vkuiClass={classNames(getClassName("ModalRoot", platform), {
              "ModalRoot--vkapps": webviewType === WebviewType.VKAPPS,
              "ModalRoot--switching":
                mode === "mobile" && !!(enteringModal || exitingModal),
              "ModalRoot--desktop": mode === "desktop",
            })}
          >
            <div
              vkuiClass="ModalRoot__mask"
              ref={maskElementRef}
              onClick={closeActiveModal}
            />
            <div vkuiClass="ModalRoot__viewport">
              {modals.map((Modal: React.ReactElement) => {
                const modalId = getNavId(Modal.props, warn);

                return (
                  <FocusTrap
                    restoreFocus={false}
                    onClose={closeActiveModal}
                    timeout={timeout}
                    key={`modal-${modalId}`}
                    vkuiClass={classNames("ModalRoot__modal", {
                      "ModalRoot__modal--active":
                        !exitingModal &&
                        !enteringModal &&
                        modalId === activeModal,
                      "ModalRoot__modal--prev": modalId === exitingModal,
                      "ModalRoot__modal--next":
                        exitingModal && modalId === activeModal,
                    })}
                  >
                    {Modal}
                  </FocusTrap>
                );
              })}
            </div>
          </div>
        </ModalRootContext.Provider>
      </ModalManagerContext.Provider>
    </Wrapper>
  );
};

ModalRootComponent.displayName = "ModalRoot";

export const ModalRoot = withAdaptivity(ModalRootComponent, {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true,
});
