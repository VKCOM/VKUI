import * as React from "react";
import { ACTIVE_EFFECT_DELAY, Tappable } from "../Tappable/Tappable";
import { classNames } from "../../lib/classNames";
import { IOS, VKCOM } from "../../lib/platform";
import {
  Icon20CheckBoxOn,
  Icon24CheckBoxOn,
  Icon20CheckBoxOff,
  Icon24CheckBoxOff,
  Icon20CheckBoxIndetermanate,
} from "@vkontakte/icons";
import { HasRef, HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { Caption } from "../Typography/Caption/Caption";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useExternRef } from "../../hooks/useExternRef";
import { SizeYConditionalRender } from "../SizeYConditionalRender/SizeYConditionalRender";
import { VisuallyHiddenInput } from "../VisuallyHiddenInput/VisuallyHiddenInput";
import { warnOnce } from "../../lib/warnOnce";
import "./Checkbox.css";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {
  description?: React.ReactNode;
  indeterminate?: boolean;
  defaultIndeterminate?: boolean;
}

const warn = warnOnce("Checkbox");

/**
 * @see https://vkcom.github.io/VKUI/#/Checkbox
 */
export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  children,
  className,
  style,
  getRootRef,
  getRef,
  description,
  indeterminate,
  defaultIndeterminate,
  onChange,
  ...restProps
}: CheckboxProps) => {
  const inputRef = useExternRef(getRef);
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  React.useEffect(() => {
    const indeterminateValue =
      indeterminate === undefined ? defaultIndeterminate : indeterminate;

    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminateValue);
    }
  }, [defaultIndeterminate, indeterminate, inputRef]);

  const handleChange: CheckboxProps["onChange"] = React.useCallback(
    (event) => {
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
        platform === VKCOM && "Checkbox--vkcom",
        getSizeYClassName("Checkbox", sizeY),
        !(hasReactNode(children) || hasReactNode(description)) &&
          "Checkbox--simple"
      )}
      className={className}
      style={style}
      disabled={restProps.disabled}
      activeEffectDelay={platform === IOS ? 100 : ACTIVE_EFFECT_DELAY}
      getRootRef={getRootRef}
    >
      <VisuallyHiddenInput
        {...restProps}
        onChange={handleChange}
        type="checkbox"
        vkuiClass="Checkbox__input"
        getRef={inputRef}
      />
      <div vkuiClass="Checkbox__icon Checkbox__icon--on">
        {platform === VKCOM ? (
          <Icon20CheckBoxOn aria-hidden />
        ) : (
          <SizeYConditionalRender
            compact={<Icon20CheckBoxOn aria-hidden />}
            regular={<Icon24CheckBoxOn aria-hidden />}
          />
        )}
      </div>
      <div vkuiClass="Checkbox__icon Checkbox__icon--off">
        {platform === VKCOM ? (
          <Icon20CheckBoxOff aria-hidden />
        ) : (
          <SizeYConditionalRender
            compact={<Icon20CheckBoxOff aria-hidden />}
            regular={<Icon24CheckBoxOff aria-hidden />}
          />
        )}
      </div>
      <div vkuiClass="Checkbox__icon Checkbox__icon--indeterminate">
        {platform === VKCOM ? (
          <Icon20CheckBoxIndetermanate aria-hidden width={20} height={20} />
        ) : (
          <SizeYConditionalRender
            compact={
              <Icon20CheckBoxIndetermanate aria-hidden width={20} height={20} />
            }
            regular={
              <Icon20CheckBoxIndetermanate aria-hidden width={24} height={24} />
            }
          />
        )}
      </div>
      <div vkuiClass="Checkbox__content">
        <div vkuiClass="Checkbox__children">{children}</div>
        {hasReactNode(description) && (
          <Caption vkuiClass="Checkbox__description">{description}</Caption>
        )}
      </div>
    </Tappable>
  );
};

// eslint-disable-next-line import/no-default-export
export default Checkbox;
