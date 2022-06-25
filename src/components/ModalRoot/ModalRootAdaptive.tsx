import * as React from "react";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import { ModalRootTouch } from "./ModalRoot";
import { ModalRootDesktop } from "./ModalRootDesktop";
import {
  AdaptivityContextInterface,
  AdaptivityProps,
} from "../AdaptivityProvider/AdaptivityContext";
import { useScrollLock } from "../AppRoot/ScrollContext";
import { useAdaptivityIsDesktop } from "../../hooks/useAdaptivity";

export interface ModalRootProps extends AdaptivityProps {
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

const ModalRootComponent = (
  props: ModalRootProps & AdaptivityContextInterface
) => {
  const isDesktop = useAdaptivityIsDesktop();

  useScrollLock(!!props.activeModal);

  const RootComponent = isDesktop ? ModalRootDesktop : ModalRootTouch;

  return <RootComponent {...props} />;
};

ModalRootComponent.displayName = "ModalRoot";

/**
 * @see https://vkcom.github.io/VKUI/#/ModalRoot
 */
export const ModalRoot = withAdaptivity(ModalRootComponent, {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true,
});
