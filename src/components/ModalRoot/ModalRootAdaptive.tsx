import * as React from "react";
import { ModalRootTouch } from "./ModalRoot";
import { ModalRootDesktop } from "./ModalRootDesktop";
import { useScrollLock } from "../AppRoot/ScrollContext";
import { useAdaptivityWithJSMediaQueries } from "../../hooks/useAdaptivityWithJSMediaQueries";

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
  children?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ModalRoot
 */
export const ModalRoot = (props: ModalRootProps) => {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  useScrollLock(!!props.activeModal);

  const RootComponent = isDesktop ? ModalRootDesktop : ModalRootTouch;

  return <RootComponent {...props} />;
};
