import * as React from "react";
import { classNames } from "../../lib/classNames";
import { transitionEvent } from "../../lib/supportEvents";
import { HasPlatform } from "../../types";
import { withPlatform } from "../../hoc/withPlatform";
import { withContext } from "../../hoc/withContext";
import ModalRootContext, {
  ModalRootContextInterface,
} from "./ModalRootContext";
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  WebviewType,
} from "../ConfigProvider/ConfigProviderContext";
import { ModalsStateEntry } from "./types";
import { ANDROID, VKCOM } from "../../lib/platform";
import { getClassName } from "../../helpers/getClassName";
import { DOMProps, withDOM } from "../../lib/dom";
import { getNavId } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { ModalTransitionProps, withModalManager } from "./useModalManager";
import "./ModalRoot.css";

const warn = warnOnce("ModalRoot");

export interface ModalRootProps extends HasPlatform {
  activeModal?: string | null;
  /**
   * @ignore
   */
  configProvider?: ConfigProviderContextInterface;

  /**
   * Будет вызвано при закрытии активной модалки с её id
   */
  onClose?(modalId: string): void;
}

class ModalRootDesktopComponent extends React.Component<
  ModalRootProps & DOMProps & ModalTransitionProps
> {
  constructor(props: ModalRootProps & ModalTransitionProps) {
    super(props);

    this.maskElementRef = React.createRef();

    this.modalRootContext = {
      updateModalHeight: () => undefined,
      registerModal: ({ id, ...data }) =>
        Object.assign(this.getModalState(id), data),
      onClose: () => this.props.closeActiveModal(),
      isInsideModal: true,
    };
  }

  private readonly maskElementRef: React.RefObject<HTMLDivElement>;
  private maskAnimationFrame: number | undefined = undefined;
  private readonly modalRootContext: ModalRootContextInterface;
  private restoreFocusTo: HTMLElement | undefined = undefined;

  private get timeout() {
    return this.props.platform === ANDROID || this.props.platform === VKCOM
      ? 320
      : 400;
  }

  private get modals() {
    return React.Children.toArray(this.props.children) as React.ReactElement[];
  }

  getModalState(id: string | null) {
    if (id === null) {
      return undefined;
    }
    return this.props.getModalState(id);
  }

  componentDidUpdate(prevProps: ModalRootProps & ModalTransitionProps) {
    // transition phase 2: animate exiting modal
    if (
      this.props.exitingModal &&
      this.props.exitingModal !== prevProps.exitingModal
    ) {
      this.closeModal(this.props.exitingModal);
    }

    // transition phase 3: animate entering modal
    if (
      this.props.enteringModal &&
      this.props.enteringModal !== prevProps.enteringModal
    ) {
      const { enteringModal } = this.props;
      const enteringState = this.getModalState(enteringModal);
      requestAnimationFrame(() => {
        if (this.props.enteringModal === enteringModal) {
          this.waitTransitionFinish(enteringState, () =>
            this.props.onEnter(enteringModal)
          );
          this.animateModalOpacity(enteringState, true);
        }
      });
    }

    // focus restoration
    if (this.props.activeModal && !prevProps.activeModal) {
      this.restoreFocusTo = (this.props.document?.activeElement ??
        undefined) as HTMLElement | undefined;
    }
    if (
      !this.props.activeModal &&
      !this.props.exitingModal &&
      this.restoreFocusTo
    ) {
      this.restoreFocusTo.focus();
      this.restoreFocusTo = undefined;
    }
  }

  closeModal(id: string) {
    const prevModalState = this.getModalState(id);
    if (!prevModalState) {
      return;
    }

    this.waitTransitionFinish(prevModalState, () => this.props.onExit(id));
    this.animateModalOpacity(prevModalState, false);
    if (!this.props.activeModal) {
      this.setMaskOpacity(prevModalState, 0);
    }
  }

  waitTransitionFinish(
    modalState: ModalsStateEntry | undefined,
    eventHandler: () => void
  ) {
    if (transitionEvent.supported) {
      const onceHandler = () => {
        modalState?.innerElement?.removeEventListener(
          transitionEvent.name as string,
          onceHandler
        );
        eventHandler();
      };

      modalState?.innerElement?.addEventListener(
        transitionEvent.name as string,
        onceHandler
      );
    } else {
      setTimeout(eventHandler, this.timeout);
    }
  }

  /* Анимирует сдивг модалки */
  animateModalOpacity(
    modalState: ModalsStateEntry | undefined,
    display: boolean
  ) {
    if (modalState?.innerElement) {
      modalState.innerElement.style.transitionDelay =
        display && this.props.delayEnter ? `${this.timeout}ms` : "";
      modalState.innerElement.style.opacity = display ? "1" : "0";
    }
  }

  /* Устанавливает прозрачность для полупрозрачной подложки */
  setMaskOpacity(
    modalState: ModalsStateEntry,
    forceOpacity: number | null = null
  ) {
    if (forceOpacity === null && this.props.history?.[0] !== modalState.id) {
      return;
    }

    if (this.maskAnimationFrame) {
      cancelAnimationFrame(this.maskAnimationFrame);
    }
    this.maskAnimationFrame = requestAnimationFrame(() => {
      if (this.maskElementRef.current) {
        const { translateY = 0, translateYCurrent = 0 } = modalState;

        const opacity =
          forceOpacity === null
            ? 1 - (translateYCurrent - translateY) / (100 - translateY) || 0
            : forceOpacity;
        this.maskElementRef.current.style.opacity = Math.max(
          0,
          Math.min(100, opacity)
        ).toString();
      }
    });
  }

  render() {
    const { exitingModal, activeModal, enteringModal } = this.props;

    if (!activeModal && !exitingModal) {
      return null;
    }

    return (
      <ModalRootContext.Provider value={this.modalRootContext}>
        <div
          vkuiClass={classNames(
            getClassName("ModalRoot", this.props.platform),
            {
              "ModalRoot--vkapps":
                this.props.configProvider?.webviewType === WebviewType.VKAPPS,
            },
            "ModalRoot--desktop"
          )}
        >
          <div
            vkuiClass="ModalRoot__mask"
            ref={this.maskElementRef}
            onClick={this.props.closeActiveModal}
          />
          <div vkuiClass="ModalRoot__viewport">
            {this.modals.map((Modal: React.ReactElement) => {
              const modalId = getNavId(Modal.props, warn);
              if (modalId !== activeModal && modalId !== exitingModal) {
                return null;
              }

              const key = `modal-${modalId}`;

              return (
                <FocusTrap
                  restoreFocus={false}
                  onClose={this.props.closeActiveModal}
                  timeout={this.timeout}
                  key={key}
                  vkuiClass={classNames("ModalRoot__modal", {
                    "ModalRoot__modal--active":
                      !exitingModal &&
                      !enteringModal &&
                      modalId === activeModal,
                    "ModalRoot__modal--prev": modalId === exitingModal,
                    "ModalRoot__modal--next":
                      Boolean(exitingModal) && modalId === activeModal,
                  })}
                >
                  {Modal}
                </FocusTrap>
              );
            })}
          </div>
        </div>
      </ModalRootContext.Provider>
    );
  }
}

export const ModalRootDesktop = withContext(
  withPlatform(
    withDOM<ModalRootProps>(withModalManager()(ModalRootDesktopComponent))
  ),
  ConfigProviderContext,
  "configProvider"
);
