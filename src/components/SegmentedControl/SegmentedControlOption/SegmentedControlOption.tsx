import * as React from "react";
import { useAdaptivity } from "../../../hooks/useAdaptivity";
import { useFocusVisible } from "../../../hooks/useFocusVisible";
import { callMultiple } from "../../../lib/callMultiple";
import { classNames } from "../../../lib/classNames";
import { FocusVisible } from "../../FocusVisible/FocusVisible";
import {
  VisuallyHiddenInput,
  VisuallyHiddenInputProps,
} from "../../VisuallyHiddenInput/VisuallyHiddenInput";
import { getSizeYClassName } from "../../../helpers/getSizeYClassName";
import "./SegmentedControlOption.css";

/**
 * @see https://vkcom.github.io/VKUI/#/SegmentedControl
 */
export const SegmentedControlOption: React.FC<VisuallyHiddenInputProps> = ({
  className,
  style,
  children,
  ...restProps
}) => {
  const { focusVisible, onBlur, onFocus } = useFocusVisible();
  const { sizeY } = useAdaptivity();

  return (
    <label
      className={className}
      style={style}
      vkuiClass={classNames(
        "SegmentedControlOption",
        restProps.checked && "SegmentedControlOption--checked",
        focusVisible && "SegmentedControlOption--focus-visible"
      )}
    >
      <VisuallyHiddenInput
        {...restProps}
        type="radio"
        onBlur={callMultiple(onBlur, restProps.onBlur)}
        onFocus={callMultiple(onFocus, restProps.onFocus)}
      />
      <span
        vkuiClass={classNames(
          "SegmentedControlOption__content",
          getSizeYClassName("SegmentedControlOption__content", sizeY)
        )}
      >
        {children}
      </span>
      <FocusVisible mode="inside" />
    </label>
  );
};
