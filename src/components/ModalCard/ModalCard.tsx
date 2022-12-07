import * as React from "react";
import { getPlatformClassName } from "../../helpers/getPlatformClassName";
import { classNamesString } from "../../lib/classNames";
import {
  ModalRootContext,
  useModalRegistry,
} from "../ModalRoot/ModalRootContext";
import { ModalType } from "../ModalRoot/types";
import { getNavId, NavIdProps } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import {
  ModalCardBase,
  ModalCardBaseProps,
} from "../ModalCardBase/ModalCardBase";
import { useAdaptivityWithJSMediaQueries } from "../../hooks/useAdaptivityWithJSMediaQueries";
import { usePlatform } from "../../hooks/usePlatform";
import styles from "./ModalCard.module.css";

export interface ModalCardProps extends NavIdProps, ModalCardBaseProps {}

const warn = warnOnce("ModalCard");

/**
 * @see https://vkcom.github.io/VKUI/#/ModalCard
 */
export const ModalCard = ({
  icon,
  header,
  subheader,
  children,
  actions,
  onClose,
  nav,
  id,
  className,
  ...restProps
}: ModalCardProps) => {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const platform = usePlatform();

  const modalContext = React.useContext(ModalRootContext);
  const { refs } = useModalRegistry(
    getNavId({ nav, id }, warn),
    ModalType.CARD
  );

  return (
    <div
      {...restProps}
      id={id}
      className={classNamesString(
        styles["ModalCard"],
        getPlatformClassName(styles["ModalCard"], platform),
        isDesktop && styles["ModalCard--desktop"],
        className
      )}
    >
      <ModalCardBase
        className={styles["ModalCard__in"]}
        getRootRef={refs.innerElement}
        icon={icon}
        header={header}
        subheader={subheader}
        actions={actions}
        onClose={onClose || modalContext.onClose}
      >
        {children}
      </ModalCardBase>
    </div>
  );
};
