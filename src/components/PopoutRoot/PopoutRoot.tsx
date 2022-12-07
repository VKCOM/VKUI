import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import { AppRootPortal } from "../AppRoot/AppRootPortal";
import { blurActiveElement, useDOM } from "../../lib/dom";
import { useAdaptivityWithJSMediaQueries } from "../../hooks/useAdaptivityWithJSMediaQueries";
import styles from "./PopoutRoot.module.css";

interface PopoutRootPopoutProps {
  children: React.ReactNode;
}

const PopoutRootPopout = ({ children }: PopoutRootPopoutProps) => {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  return (
    <div
      className={classNamesString(
        styles["PopoutRoot__popout"],
        isDesktop && styles["PopoutRoot__popout--absolute"]
      )}
    >
      {children}
    </div>
  );
};

interface PopoutRootModalProps {
  children: React.ReactNode;
}

const PopoutRootModal = ({ children }: PopoutRootModalProps) => {
  return <div className={styles["PopoutRoot__modal"]}>{children}</div>;
};

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
        {!!popout && <PopoutRootPopout>{popout}</PopoutRootPopout>}
        {!!modal && <PopoutRootModal>{modal}</PopoutRootModal>}
      </AppRootPortal>
    </div>
  );
};
