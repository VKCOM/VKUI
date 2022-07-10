import { Spinner, SpinnerProps } from "../Spinner/Spinner";
import { Icon24Cancel } from "@vkontakte/icons";
import { Icon48DoneOutline } from "./Icon48DoneOutline";
import { Icon48CancelCircle } from "./Icon48CancelCircle";
import { PopoutWrapper } from "../PopoutWrapper/PopoutWrapper";
import { useScrollLock } from "../AppRoot/ScrollContext";
import { classNames } from "../../lib/classNames";
import "./ScreenSpinner.css";

export interface ScreenSpinnerProps extends SpinnerProps {
  state?: "loading" | "cancelable" | "done" | "error";
}

/**
 * @see https://vkcom.github.io/VKUI/#/ScreenSpinner
 */
export const ScreenSpinner = ({
  style,
  className,
  state = "loading",
  size = "large",
  "aria-label": ariaLabel = "Пожалуйста, подождите...",
  onClick,
  ...restProps
}: ScreenSpinnerProps) => {
  const hideSpinner = state === "done" || state === "error";

  const Icon = {
    loading: () => null,
    cancelable: Icon24Cancel,
    done: Icon48DoneOutline,
    error: Icon48CancelCircle,
  }[state];

  useScrollLock();

  return (
    <PopoutWrapper
      hasMask={false}
      vkuiClass={classNames(
        "ScreenSpinner",
        hideSpinner && "ScreenSpinner--hideSpinner",
        `ScreenSpinner--state-${state}`
      )}
      className={className}
      style={style}
    >
      <div vkuiClass="ScreenSpinner__container" onClick={onClick}>
        <Spinner
          vkuiClass="ScreenSpinner__spinner"
          size={size}
          aria-label={ariaLabel}
          {...restProps}
        />
        <div vkuiClass="ScreenSpinner__icon">
          <Icon aria-hidden />
        </div>
      </div>
    </PopoutWrapper>
  );
};
