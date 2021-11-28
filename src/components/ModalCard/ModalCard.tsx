import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { withPlatform } from "../../hoc/withPlatform";
import { HasPlatform } from "../../types";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import { useModal } from "../ModalRoot/useModal";
import { getNavId, NavIdProps } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import {
  ModalCardBase,
  ModalCardBaseProps,
} from "../ModalCardBase/ModalCardBase";
import { usePlatform } from "../../hooks/usePlatform";
import { TouchEvent } from "../Touch/Touch";
import { ANDROID, VKCOM } from "../../lib/platform";
import { rubber } from "../../lib/touch";
import "./ModalCard.css";

export interface ModalCardProps
  extends HasPlatform,
    AdaptivityProps,
    NavIdProps,
    ModalCardBaseProps {}

const warn = warnOnce("ModalCard");

const ModalCard: React.FC<ModalCardProps> = (props: ModalCardProps) => {
  const {
    icon,
    header,
    subheader,
    children,
    actions,
    actionsLayout,
    onClose: _onClose,
    platform,
    viewWidth,
    viewHeight,
    hasMouse,
    nav,
    ...restProps
  } = props;

  // const modalContext = React.useContext(ModalRootContext);
  const { innerElement, handlers, mode, onClose } = useModalCard(
    getNavId(props, warn),
    _onClose
  );

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName("ModalCard", platform), {
        "ModalCard--desktop": mode === "desktop",
      })}
    >
      <ModalCardBase
        vkuiClass="ModalCard__in"
        getRootRef={innerElement}
        {...handlers}
        icon={icon}
        header={header}
        subheader={subheader}
        actions={actions}
        actionsLayout={actionsLayout}
        onClose={onClose}
      >
        {children}
      </ModalCardBase>
    </div>
  );
};

export function useModalCard(id: string, onCloseOverride: VoidFunction) {
  const { innerElement, mode, drag, release, onClose } = useModal(id, {
    only: true,
    startTranslateY: 0,
    globalTranslate: false,
    onClose: onCloseOverride,
  });

  const platform = usePlatform();
  const getTranslate = (shiftY: number) => {
    const shiftYPercent = (shiftY / innerElement.current.offsetHeight) * 100;
    return Math.max(
      0,
      rubber(
        shiftYPercent,
        72,
        1.2,
        platform === ANDROID || platform === VKCOM
      ) || 0
    );
  };
  const onMove = ({ shiftY }: TouchEvent) => drag(getTranslate(shiftY));
  const onEnd = ({ duration, shiftY }: TouchEvent) => {
    const extrapolatedTranslate =
      getTranslate(shiftY) * (1 + (Math.sign(shiftY) / duration) * 240 * 0.6);
    release(extrapolatedTranslate >= 30 ? 100 : 0);
  };

  return {
    innerElement,
    handlers: mode === "mobile" ? { onMove, onEnd } : {},
    mode,
    onClose,
  };
}

ModalCard.defaultProps = {
  actionsLayout: "horizontal",
};

export default withAdaptivity(withPlatform(ModalCard), {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true,
});
