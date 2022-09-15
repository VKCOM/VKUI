import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import { AppRootPortal } from "../AppRoot/AppRootPortal";
import { blurActiveElement, useDOM } from "../../lib/dom";
import { useAdaptivityWithMediaQueries } from "../../hooks/useAdaptivityWithMediaQueries";
import styles from "./PopoutRoot.module.css";

export interface PopoutRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  popout?: React.ReactNode;
  modal?: React.ReactNode;
}

export const PopoutRoot = ({
  popout,
  modal,
  children,
  getRootRef,
  className,
  ...restProps
}: PopoutRootProps) => {
  const { document } = useDOM();

  const { isDesktop } = useAdaptivityWithMediaQueries();

  React.useEffect(() => {
    popout && blurActiveElement(document);
  }, [document, popout]);

  return (
    <div
      {...restProps}
      className={classNamesString(styles["PopoutRoot"], className)}
      ref={getRootRef}
    >
      {children}
      <AppRootPortal>
        {!!popout && (
          <div
            className={
              isDesktop
                ? styles["PopoutRoot--absolute"]
                : styles["PopoutRoot__popout"]
            }
          >
            {popout}
          </div>
        )}
        {!!modal && <div className={styles["PopoutRoot__modal"]}>{modal}</div>}
      </AppRootPortal>
    </div>
  );
};
