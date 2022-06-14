import * as React from "react";
import { ModalRootTouch } from "./ModalRoot";
import { ModalRootDesktop } from "./ModalRootDesktop";
import { useScrollLock } from "../AppRoot/ScrollContext";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { ViewWidth } from "../AdaptivityProvider/AdaptivityContext";

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

/**
 * @see https://vkcom.github.io/VKUI/#/ModalRoot
 */
export const ModalRoot: React.FC<ModalRootProps> = (props) => {
  const [closed, setClosed] = React.useState(false);

  useScrollLock(!!props.activeModal);

  const { viewWidth } = useAdaptivity();

  if (closed && !props.activeModal) {
    return null;
  }

  // Удаление обеих модалок из DOM при закрытии последней одной
  function onClosed(modalId: string) {
    setClosed(true);
    props.onClosed?.(modalId);
  }

  return (
    <React.Fragment>
      {(viewWidth === undefined || viewWidth >= ViewWidth.SMALL_TABLET) && (
        <ModalRootDesktop
          {...props}
          viewWidth={viewWidth}
          onClosed={onClosed}
        />
      )}
      {(viewWidth === undefined || viewWidth < ViewWidth.SMALL_TABLET) && (
        <ModalRootTouch {...props} viewWidth={viewWidth} onClosed={onClosed} />
      )}
    </React.Fragment>
  );
};
