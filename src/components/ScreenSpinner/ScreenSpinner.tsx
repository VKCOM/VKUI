import * as React from "react";
import { Spinner, SpinnerProps } from "../Spinner/Spinner";
import { PopoutWrapper } from "../PopoutWrapper/PopoutWrapper";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { useScrollLock } from "../AppRoot/ScrollContext";
import "./ScreenSpinner.css";

export type ScreenSpinnerProps = React.HTMLAttributes<HTMLDivElement> &
  SpinnerProps;

/**
 * @see https://vkcom.github.io/VKUI/#/ScreenSpinner
 */
export const ScreenSpinner: React.FC<ScreenSpinnerProps> = ({
  style,
  className,
  size = "large",
  "aria-label": ariaLabel = "Пожалуйста, подождите...",
  ...restProps
}: ScreenSpinnerProps) => {
  const platform = usePlatform();

  useScrollLock();

  return (
    <PopoutWrapper
      hasMask={false}
      vkuiClass={getClassName("ScreenSpinner", platform)}
      className={className}
      style={style}
    >
      <div vkuiClass="ScreenSpinner__container">
        <Spinner
          vkuiClass="ScreenSpinner__spinner"
          size={size}
          aria-label={ariaLabel}
          {...restProps}
        />
      </div>
    </PopoutWrapper>
  );
};
