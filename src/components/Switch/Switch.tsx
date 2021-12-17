import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { callMultiple } from "../../lib/callMultiple";
import { usePlatform } from "../../hooks/usePlatform";
import { HasRef, HasRootRef } from "../../types";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useExternRef } from "../../hooks/useExternRef";
import { useFocusVisible } from "../../hooks/useFocusVisible";
import { FocusVisible } from "../FocusVisible/FocusVisible";
import "./Switch.css";

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {}

export const Switch: React.FC<SwitchProps> = ({
  style,
  className,
  getRef,
  getRootRef,
  ...restProps
}: SwitchProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();
  const { focusVisible, onBlur, onFocus } = useFocusVisible();

  const inputRef = useExternRef(getRef);

  return (
    <label
      vkuiClass={classNames(
        getClassName("Switch", platform),
        `Switch--sizeY-${sizeY}`,
        {
          "Switch--disabled": restProps.disabled,
          "Switch--focus-visible": focusVisible,
        }
      )}
      className={className}
      style={style}
      ref={getRootRef}
      role="presentation"
    >
      <input
        {...restProps}
        type="checkbox"
        vkuiClass="Switch__self"
        ref={inputRef}
        onBlur={callMultiple(onBlur, restProps.onBlur)}
        onFocus={callMultiple(onFocus, restProps.onFocus)}
      />
      <span role="presentation" vkuiClass="Switch__pseudo" />
      <FocusVisible mode="outside" />
    </label>
  );
};
