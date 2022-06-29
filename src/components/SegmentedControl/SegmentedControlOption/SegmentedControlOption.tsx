import { useAdaptivity } from "../../../hooks/useAdaptivity";
import { useFocusVisible } from "../../../hooks/useFocusVisible";
import { callMultiple } from "../../../lib/callMultiple";
import { classNames } from "../../../lib/classNames";
import { SizeType } from "../../AdaptivityProvider/AdaptivityContext";
import { FocusVisible } from "../../FocusVisible/FocusVisible";
import { Text } from "../../Typography/Text/Text";
import { Caption } from "../../Typography/Caption/Caption";
import {
  VisuallyHiddenInput,
  VisuallyHiddenInputProps,
} from "../../VisuallyHiddenInput/VisuallyHiddenInput";
import "./SegmentedControlOption.css";

/**
 * @see https://vkcom.github.io/VKUI/#/SegmentedControl
 */
export const SegmentedControlOption = ({
  className,
  style,
  children,
  ...restProps
}: VisuallyHiddenInputProps) => {
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
      {/* TODO v5.0.0 поправить под новую адаптивность */}
      {sizeY === SizeType.COMPACT ? (
        <Caption
          level="1"
          vkuiClass="SegmentedControlOption__content"
          weight="3"
        >
          {children}
        </Caption>
      ) : (
        <Text vkuiClass="SegmentedControlOption__content" weight="2">
          {children}
        </Text>
      )}
      <FocusVisible mode="inside" />
    </label>
  );
};
