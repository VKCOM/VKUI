import * as React from "react";
import { PopoutWrapper } from "../PopoutWrapper/PopoutWrapper";
import { Platform } from "../../lib/platform";
import { ActionSheetDropdownDesktop } from "./ActionSheetDropdownDesktop";
import { ActionSheetDropdown } from "./ActionSheetDropdown";
import { noop } from "../../lib/utils";
import { ActionSheetContext, ItemClickHandler } from "./ActionSheetContext";
import { Footnote } from "../Typography/Footnote/Footnote";
import { usePlatform } from "../../hooks/usePlatform";
import { useTimeout } from "../../hooks/useTimeout";
import { useAdaptivityWithMediaQueries } from "../../hooks/useAdaptivityWithMediaQueries";
import { useObjectMemo } from "../../hooks/useObjectMemo";
import { PopupDirection, SharedDropdownProps, ToggleRef } from "./types";
import { useScrollLock } from "../AppRoot/ScrollContext";
import "./ActionSheet.css";

export interface ActionSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  text?: React.ReactNode;
  /**
   * Закрыть попап по клику снаружи.
   */
  onClose: VoidFunction;
  /**
   * Элемент, рядом с которым вылезает попап на десктопе.
   * Лучше передавать RefObject c current.
   */
  toggleRef: ToggleRef;
  /**
   * Направление на десктопе
   */
  popupDirection?: PopupDirection;
  /**
   * Только iOS.
   */
  iosCloseItem?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ActionSheet
 */
export const ActionSheet = ({
  children,
  className,
  header,
  text,
  style,
  iosCloseItem,
  popupDirection = "bottom",
  ...restProps
}: ActionSheetProps) => {
  const platform = usePlatform();
  const [closing, setClosing] = React.useState(false);
  const onClose = () => setClosing(true);
  const _action = React.useRef(noop);

  const afterClose = () => {
    restProps.onClose();
    _action.current();
    _action.current = noop;
  };

  const { isDesktop } = useAdaptivityWithMediaQueries();

  useScrollLock(!isDesktop);

  let timeout = platform === Platform.IOS ? 300 : 200;

  if (isDesktop) {
    timeout = 0;
  }

  const fallbackTransitionFinish = useTimeout(afterClose, timeout);
  React.useEffect(() => {
    if (closing) {
      fallbackTransitionFinish.set();
    } else {
      fallbackTransitionFinish.clear();
    }
  }, [closing, fallbackTransitionFinish]);

  const onItemClick = React.useCallback<ItemClickHandler>(
    (action, immediateAction, autoClose) => (event) => {
      event.persist();
      immediateAction && immediateAction(event);
      if (autoClose) {
        _action.current = () => action && action(event);
        setClosing(true);
      } else {
        action && action(event);
      }
    },
    []
  );
  const contextValue = useObjectMemo({ onItemClick, isDesktop });

  const DropdownComponent = isDesktop
    ? ActionSheetDropdownDesktop
    : ActionSheetDropdown;

  const actionSheet = (
    <ActionSheetContext.Provider value={contextValue}>
      <DropdownComponent
        closing={closing}
        timeout={timeout}
        {...(restProps as Omit<SharedDropdownProps, "closing">)}
        popupDirection={popupDirection}
        onClose={onClose}
        className={isDesktop ? className : undefined}
        style={isDesktop ? style : undefined}
      >
        {(header || text) && (
          <header vkuiClass="ActionSheet__header">
            {header && (
              <Footnote weight="2" vkuiClass="ActionSheet__title">
                {header}
              </Footnote>
            )}
            {text && <Footnote vkuiClass="ActionSheet__text">{text}</Footnote>}
          </header>
        )}
        {children}
        {platform === Platform.IOS && !isDesktop && iosCloseItem}
      </DropdownComponent>
    </ActionSheetContext.Provider>
  );

  if (isDesktop) {
    return actionSheet;
  }

  return (
    <PopoutWrapper
      closing={closing}
      alignY="bottom"
      className={className}
      style={style}
      onClick={onClose}
      hasMask
      fixed
    >
      {actionSheet}
    </PopoutWrapper>
  );
};
