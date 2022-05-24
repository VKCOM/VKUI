import * as React from "react";
import { ModalRootTouch } from "./ModalRoot";
import { ModalRootDesktop } from "./ModalRootDesktop";
import { useScrollLock } from "../AppRoot/ScrollContext";
import { useAdaptivityIsDesktop } from "../../hooks/useAdaptivity";

export interface ModalRootProps {
  activeModal?: string | null;

  /**
   * Будет вызвано при начале открытия активной модалки с её id
   */
  onOpen?(modalId: string): void;

  /**
   * Будет вызвано при окончательном открытии активной модалки с её id
   */
  onOpened?(modalId: string): void;

  /**
   * Будет вызвано при начале закрытия активной модалки с её id
   */
  onClose?(modalId: string): void;

  /**
   * Будет вызвано при окончательном закрытии активной модалки с её id
   */
  onClosed?(modalId: string): void;
}

const ModalRoot: React.FC<ModalRootProps> = (props) => {
  const isDesktop = useAdaptivityIsDesktop();

  useScrollLock(!!props.activeModal);

  const RootComponent = isDesktop ? ModalRootDesktop : ModalRootTouch;

  return <RootComponent {...props} />;
};

ModalRoot.displayName = "ModalRoot";

/**
 * @see https://vkcom.github.io/VKUI/#/ModalRoot
 */
export { ModalRoot };
