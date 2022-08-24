import * as React from "react";
import { ModalRootTouch } from "./ModalRoot";
import { ModalRootDesktop } from "./ModalRootDesktop";
import { useScrollLock } from "../AppRoot/ScrollContext";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { ViewWidth } from "../../lib/adaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import { Platform } from "../../lib/platform";

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
  const [closed, setClosed] = React.useState(false);
  const platform = usePlatform();

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
      {(viewWidth === undefined ||
        viewWidth >= ViewWidth.SMALL_TABLET ||
        platform === Platform.VKCOM) && (
        <ModalRootDesktop
          {...props}
          viewWidth={viewWidth}
          onClosed={onClosed}
        />
      )}
      {(viewWidth === undefined ||
        viewWidth < ViewWidth.SMALL_TABLET ||
        platform !== Platform.VKCOM) && (
        <ModalRootTouch {...props} viewWidth={viewWidth} onClosed={onClosed} />
      )}
    </React.Fragment>
  );
};
