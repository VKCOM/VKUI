import * as React from "react";
import {
  withAdaptivity,
  ViewHeight,
  ViewWidth,
} from "../../hoc/withAdaptivity";
import { ModalRootTouch } from "./ModalRoot";
import { ModalRootDesktop } from "./ModalRootDesktop";
import { AdaptivityContextInterface } from "../AdaptivityProvider/AdaptivityContext";

export interface ModalRootProps extends AdaptivityContextInterface {
  activeModal?: string | null;

  /**
   * Будет вызвано при закрытии активной модалки с её id
   */
  onClose?: (modalId: string) => void;
}

const ModalRootComponent: React.FC<ModalRootProps> = (props) => {
  const { viewWidth, viewHeight, hasMouse } = props;
  const isDesktop =
    viewWidth >= ViewWidth.SMALL_TABLET &&
    (hasMouse || viewHeight >= ViewHeight.MEDIUM);

  const RootComponent = isDesktop ? ModalRootDesktop : ModalRootTouch;

  return <RootComponent {...props} />;
};

ModalRootComponent.displayName = "ModalRoot";

export const ModalRoot = withAdaptivity(ModalRootComponent, {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true,
});
