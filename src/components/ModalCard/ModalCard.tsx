import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { withPlatform } from "../../hoc/withPlatform";
import { HasPlatform } from "../../types";
import { withAdaptivity } from "../../hoc/withAdaptivity";
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
import {
  AdaptivityContextInterface,
  AdaptivityProps,
} from "../AdaptivityProvider/AdaptivityContext";
import { useAdaptivityIsDesktop } from "../../hooks/useAdaptivity";
import "./ModalCard.css";

export interface ModalCardProps
  extends HasPlatform,
    AdaptivityProps,
    NavIdProps,
    ModalCardBaseProps {}

const warn = warnOnce("ModalCard");

const ModalCardComponent: React.FC<
  ModalCardProps & AdaptivityContextInterface
> = ({
  icon,
  header,
  subheader,
  children,
  actions,
  actionsLayout = "horizontal",
  onClose,
  platform,
  viewWidth,
  viewHeight,
  hasMouse,
  nav,
  id,
  ...restProps
}) => {
  const isDesktop = useAdaptivityIsDesktop();

  const modalContext = React.useContext(ModalRootContext);
  const { refs } = useModalRegistry(
    getNavId({ nav, id }, warn),
    ModalType.CARD
  );

  return (
    <div
      {...restProps}
      id={id}
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
      vkuiClass={classNames(getClassName("ModalCard", platform), {
        "ModalCard--desktop": isDesktop,
      })}
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

/**
 * @see https://vkcom.github.io/VKUI/#/ModalCard
 */
export const ModalCard = withAdaptivity(withPlatform(ModalCardComponent), {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true,
});

ModalCard.displayName = "ModalCard";
