import * as React from "react";
import { useAdaptivity } from "../../../hooks/useAdaptivity";
import { useFocusVisible } from "../../../hooks/useFocusVisible";
import { callMultiple } from "../../../lib/callMultiple";
import { classNames } from "../../../lib/classNames";
import { SizeType } from "../../AdaptivityProvider/AdaptivityContext";
import { FocusVisible } from "../../FocusVisible/FocusVisible";
import Text from "../../Typography/Text/Text";
import { Caption } from "../../Typography/Caption/Caption";
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
  const { sizeY } = useAdaptivity();

  return (
    <label
      className={className}
      style={style}
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
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
      {sizeY === SizeType.COMPACT ? (
        <Caption
          level="1"
          vkuiClass="SegmentedControlOption__content"
          weight="3"
        >
          {children}
        </Caption>
      ) : (
        <Text vkuiClass="SegmentedControlOption__content" weight="medium">
          {children}
        </Text>
      )}
      <FocusVisible mode="inside" />
    </label>
  );
};
