import * as React from "react";
import { classNames } from "../../lib/classNames";
import { IOS } from "../../lib/platform";
import { HasRef, HasRootRef } from "../../types";
import { PopoutRoot } from "../PopoutRoot/PopoutRoot";
import { usePlatform } from "../../hooks/usePlatform";
import "./SplitLayout.css";

export interface SplitLayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  /**
   * Свойство для отрисовки `Alert`, `ActionSheet` и `ScreenSpinner`.
   */
  popout?: React.ReactNode;
  /**
   * Свойство для отрисовки `ModalRoot`.
   */
  modal?: React.ReactNode;
  header?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SplitLayout
 */
export const SplitLayout = ({
  popout,
  modal,
  header,
  children,
  getRootRef,
  getRef,
  ...restProps
}: SplitLayoutProps) => {
  const platform = usePlatform();

  return (
    <PopoutRoot
      vkuiClass={classNames(
        "SplitLayout",
        platform === IOS && "SplitLayout--ios"
      )}
      popout={popout}
      modal={modal}
      getRootRef={getRootRef}
    >
      {header}
      <div
        {...restProps}
        ref={getRef}
        vkuiClass={classNames(
          "SplitLayout__inner",
          !!header && "SplitLayout__inner--header"
        )}
      >
        {children}
      </div>
    </PopoutRoot>
  );
};
