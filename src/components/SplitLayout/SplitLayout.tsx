import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { HasRef, HasRootRef } from "../../types";
import { PopoutRoot } from "../PopoutRoot/PopoutRoot";
import { usePlatform } from "../../hooks/usePlatform";
import { SplitLayoutContext } from "./SplitLayoutContext";
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

export const SplitLayout: React.FC<SplitLayoutProps> = ({
  popout,
  modal,
  header,
  children,
  getRootRef,
  getRef,
  ...restProps
}: SplitLayoutProps) => {
  const platform = usePlatform();

  const [_popout, setPopout] = React.useState<React.ReactNode>(null);
  const [_header, setHeader] = React.useState<React.ReactNode>(null);
  const [_modal, setModal] = React.useState<React.ReactNode>(null);

  const context = React.useMemo(
    () => ({
      setPopout,
      setModal,
      setHeader,
    }),
    [setPopout, setHeader, setModal]
  );

  return (
    <SplitLayoutContext.Provider value={context}>
      <PopoutRoot
        vkuiClass={getClassName("SplitLayout", platform)}
        popout={_popout ?? popout}
        modal={_modal ?? modal}
        getRootRef={getRootRef}
      >
        {_header ?? header}
        <div
          {...restProps}
          ref={getRef}
          vkuiClass={classNames("SplitLayout__inner", {
            "SplitLayout__inner--header": !!header,
          })}
        >
          {children}
        </div>
      </PopoutRoot>
    </SplitLayoutContext.Provider>
  );
};
