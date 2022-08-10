import * as React from "react";
import { PopoutWrapper } from "../PopoutWrapper/PopoutWrapper";
import { IOS, VKCOM } from "../../lib/platform";
import { ActionSheetDropdownDesktop } from "./ActionSheetDropdownDesktop";
import { ActionSheetDropdown } from "./ActionSheetDropdown";
import { hasReactNode, noop } from "../../lib/utils";
import { ActionSheetContext, ItemClickHandler } from "./ActionSheetContext";
import { Footnote } from "../Typography/Footnote/Footnote";
import { usePlatform } from "../../hooks/usePlatform";
import { useTimeout } from "../../hooks/useTimeout";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useObjectMemo } from "../../hooks/useObjectMemo";
import { SharedDropdownProps, PopupDirection, ToggleRef } from "./types";
import { getViewWidthClassName } from "../../helpers/getViewWidthClassName";
import { ViewWidth } from "../AdaptivityProvider/AdaptivityContext";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
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
  const { viewWidth } = useAdaptivity();
  const [closing, setClosing] = React.useState(false);
  const onClose = () => setClosing(true);
  const _action = React.useRef(noop);

  const afterClose = () => {
    restProps.onClose();
    _action.current();
    _action.current = noop;
  };

  let timeout = platform === IOS ? 300 : 200;

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

  const contextDesktop = useObjectMemo({ onItemClick, isDesktop: true });
  const contextMobile = useObjectMemo({ onItemClick, isDesktop: false });

  return (
    <React.Fragment>
      {(viewWidth === undefined ||
        viewWidth >= ViewWidth.SMALL_TABLET ||
        platform === VKCOM) && (
        <ActionSheetContext.Provider value={contextDesktop}>
          <ActionSheetDropdownDesktop
            closing={closing}
            timeout={timeout}
            {...(restProps as Omit<SharedDropdownProps, "closing">)}
            onClose={onClose}
            className={className}
            style={style}
            popupDirection={popupDirection}
          >
            {(hasReactNode(header) || hasReactNode(text)) && (
              <header vkuiClass="ActionSheet__header">
                {hasReactNode(header) && (
                  <Footnote
                    weight={platform === IOS ? "1" : "2"}
                    vkuiClass="ActionSheet__title"
                  >
                    {header}
                  </Footnote>
                )}
                {hasReactNode(text) && (
                  <Footnote vkuiClass="ActionSheet__text">{text}</Footnote>
                )}
              </header>
            )}
            {children}
          </ActionSheetDropdownDesktop>
        </ActionSheetContext.Provider>
      )}
      {(viewWidth === undefined ||
        viewWidth < ViewWidth.SMALL_TABLET ||
        platform !== VKCOM) && (
        <PopoutWrapper
          closing={closing}
          alignY="bottom"
          className={className}
          vkuiClass={classNames(
            getClassName("ActionSheetMobile", platform),
            getViewWidthClassName("ActionSheetMobile", viewWidth)
          )}
          style={style}
          onClick={onClose}
          hasMask
          fixed
        >
          <ActionSheetContext.Provider value={contextMobile}>
            <ActionSheetDropdown
              closing={closing}
              timeout={timeout}
              {...(restProps as Omit<SharedDropdownProps, "closing">)}
              onClose={onClose}
              popupDirection={popupDirection}
            >
              {(hasReactNode(header) || hasReactNode(text)) && (
                <header vkuiClass="ActionSheet__header">
                  {hasReactNode(header) && (
                    <Footnote
                      weight={platform === IOS ? "1" : "2"}
                      vkuiClass="ActionSheet__title"
                    >
                      {header}
                    </Footnote>
                  )}
                  {hasReactNode(text) && (
                    <Footnote vkuiClass="ActionSheet__text">{text}</Footnote>
                  )}
                </header>
              )}
              {children}
              {platform === IOS && iosCloseItem}
            </ActionSheetDropdown>
          </ActionSheetContext.Provider>
        </PopoutWrapper>
      )}
    </React.Fragment>
  );
};
