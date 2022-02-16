import * as React from "react";
import { useFocusVisible } from "../../../hooks/useFocusVisible";
import { callMultiple } from "../../../lib/callMultiple";
import { classNames } from "../../../lib/classNames";
import { FocusVisible } from "../../FocusVisible/FocusVisible";
import Text from "../../Typography/Text/Text";
import {
  VisuallyHiddenInput,
  VisuallyHiddenInputProps,
} from "../../VisuallyHiddenInput/VisuallyHiddenInput";
import "./SegmentedControlOption.css";

export const SegmentedControlOption: React.FC<VisuallyHiddenInputProps> = ({
  className,
  style,
  children,
  ...restProps
}) => {
  const { focusVisible, onBlur, onFocus } = useFocusVisible();

  return (
    <label
      className={className}
      style={style}
      vkuiClass={classNames("SegmentedControlOption", {
        "SegmentedControlOption--checked": restProps.checked,
        "SegmentedControlOption--focus-visible": focusVisible,
      })}
    >
      <VisuallyHiddenInput
        {...restProps}
        type="radio"
        onBlur={callMultiple(onBlur, restProps.onBlur)}
        onFocus={callMultiple(onFocus, restProps.onFocus)}
      />
      <Text vkuiClass="SegmentedControlOption__content" weight="medium">
        {children}
      </Text>
      <FocusVisible mode="inside" />
    </label>
  );
};
