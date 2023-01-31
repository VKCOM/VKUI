import * as React from "react";
import {
  ACTIVE_EFFECT_DELAY,
  TappableProps,
  Tappable,
} from "../Tappable/Tappable";
import { classNames } from "../../lib/classNames";
import { IOS, VKCOM } from "../../lib/platform";

import {
  Icon20CheckBoxOn,
  Icon20CheckBoxOff,
  Icon24CheckBoxOn,
  Icon24CheckBoxOff,
  Icon20CheckBoxIndetermanate,
} from "@vkontakte/icons";

import { HasRef, HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import {
  withAdaptivity,
  AdaptivityProps,
  SizeType,
} from "../../hoc/withAdaptivity";
import { Text } from "../Typography/Text/Text";
import { hasReactNode } from "../../lib/utils";
import { Caption } from "../Typography/Caption/Caption";
import { useExternRef } from "../../hooks/useExternRef";
import { VisuallyHiddenInput } from "../VisuallyHiddenInput/VisuallyHiddenInput";
import { warnOnce } from "../../lib/warnOnce";
import "./Checkbox.css";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement>,
    AdaptivityProps,
    Pick<
      TappableProps,
      "hoverMode" | "activeMode" | "hasHover" | "hasActive" | "focusVisibleMode"
    > {
  description?: React.ReactNode;
  indeterminate?: boolean;
  defaultIndeterminate?: boolean;
}

const warn = warnOnce("Checkbox");

/**
 * @see https://vkcom.github.io/VKUI/#/Checkbox
 */
export const Checkbox = ({
  children,
  className,
  style,
  getRootRef,
  getRef,
  description,
  indeterminate,
  defaultIndeterminate,
  sizeY,
  hoverMode,
  activeMode,
  hasHover,
  hasActive,
  focusVisibleMode,
  onChange,
  ...restProps
}: CheckboxProps) => {
  const inputRef = useExternRef(getRef);
  const platform = usePlatform();

  React.useEffect(() => {
    const indeterminateValue =
      indeterminate === undefined ? defaultIndeterminate : indeterminate;

    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminateValue);
    }
  }, [defaultIndeterminate, indeterminate, inputRef]);

  const handleChange: CheckboxProps["onChange"] = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (
        defaultIndeterminate !== undefined &&
        indeterminate === undefined &&
        restProps.checked === undefined &&
        inputRef.current
      ) {
        inputRef.current.indeterminate = false;
      }
      if (indeterminate !== undefined && inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
      onChange && onChange(event);
    },
    [defaultIndeterminate, indeterminate, restProps.checked, onChange, inputRef]
  );

  if (process.env.NODE_ENV === "development") {
    if (defaultIndeterminate && restProps.defaultChecked) {
      warn(
        "defaultIndeterminate и defaultChecked не могут быть true одновременно",
        "error"
      );
    }

    if (indeterminate && restProps.checked) {
      warn("indeterminate и checked не могут быть true одновременно", "error");
    }

    if (restProps.defaultChecked && restProps.checked) {
      warn("defaultChecked и checked не могут быть true одновременно", "error");
    }
  }

  return (
    <Tappable
      Component="label"
      vkuiClass={classNames(
        "Checkbox",
        `Checkbox--sizeY-${sizeY}`,
        !(hasReactNode(children) || hasReactNode(description)) &&
          `Checkbox--simple`
      )}
      className={className}
      style={style}
      disabled={restProps.disabled}
      activeEffectDelay={platform === IOS ? 100 : ACTIVE_EFFECT_DELAY}
      getRootRef={getRootRef}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
    >
      <VisuallyHiddenInput
        {...restProps}
        onChange={handleChange}
        type="checkbox"
        vkuiClass="Checkbox__input"
        getRef={inputRef}
      />
      <div vkuiClass="Checkbox__icon Checkbox__icon--on">
        {sizeY === SizeType.COMPACT || platform === VKCOM ? (
          <Icon20CheckBoxOn aria-hidden />
        ) : (
          <Icon24CheckBoxOn aria-hidden />
        )}
      </div>
      <div vkuiClass="Checkbox__icon Checkbox__icon--off">
        {sizeY === SizeType.COMPACT || platform === VKCOM ? (
          <Icon20CheckBoxOff aria-hidden />
        ) : (
          <Icon24CheckBoxOff aria-hidden />
        )}
      </div>
      <div vkuiClass="Checkbox__icon Checkbox__icon--indeterminate">
        <Icon20CheckBoxIndetermanate
          aria-hidden
          width={sizeY === SizeType.COMPACT || platform === VKCOM ? 20 : 24}
          height={sizeY === SizeType.COMPACT || platform === VKCOM ? 20 : 24}
        />
      </div>
      <Text vkuiClass="Checkbox__content" Component="div">
        <div vkuiClass="Checkbox__children">{children}</div>
        {hasReactNode(description) && (
          <Caption vkuiClass="Checkbox__description">{description}</Caption>
        )}
      </Text>
    </Tappable>
  );
};

// eslint-disable-next-line import/no-default-export
export default withAdaptivity(Checkbox, {
  sizeY: true,
});
