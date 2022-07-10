import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
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
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { usePlatform } from "../../hooks/usePlatform";
import "./ModalCard.css";

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
  actionsLayout = "horizontal",
  onClose,
  nav,
  id,
  ...restProps
}: ModalCardProps) => {
  const { sizeX } = useAdaptivity();
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
      vkuiClass={classNames(
        getClassName("ModalCard", platform),
        getSizeXClassName("ModalCard", sizeX)
      )}
    >
      <ModalCardBase
        vkuiClass="ModalCard__in"
        getRootRef={refs.innerElement}
        icon={icon}
        header={header}
        subheader={subheader}
        actions={actions}
        actionsLayout={actionsLayout}
        onClose={onClose || modalContext.onClose}
      >
        {children}
      </ModalCardBase>
    </div>
  );
};
