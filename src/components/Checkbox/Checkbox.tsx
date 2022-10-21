import * as React from "react";
import { ACTIVE_EFFECT_DELAY, Tappable } from "../Tappable/Tappable";
import { classNamesString } from "../../lib/classNames";
import { Platform } from "../../lib/platform";
import {
  Icon20CheckBoxOn,
  Icon24CheckBoxOn,
  Icon20CheckBoxOff,
  Icon24CheckBoxOff,
  Icon20CheckBoxIndetermanate,
} from "@vkontakte/icons";
import type {
  HasRef,
  HasRootRef,
  ExpectedConditionalRenderComponentProps,
} from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { Footnote } from "../Typography/Footnote/Footnote";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useExternRef } from "../../hooks/useExternRef";
import { SizeYConditionalRender } from "../SizeYConditionalRender/SizeYConditionalRender";
import { VisuallyHiddenInput } from "../VisuallyHiddenInput/VisuallyHiddenInput";
import { warnOnce } from "../../lib/warnOnce";
import styles from "./Checkbox.module.css";

const Icon20CheckBoxOnWithProps = (
  props: ExpectedConditionalRenderComponentProps
) => <Icon20CheckBoxOn {...props} aria-hidden />;

const Icon24CheckBoxOnWithProps = (
  props: ExpectedConditionalRenderComponentProps
) => <Icon24CheckBoxOn {...props} aria-hidden />;

const Icon20CheckBoxOffWithProps = (
  props: ExpectedConditionalRenderComponentProps
) => <Icon20CheckBoxOff {...props} aria-hidden />;

const Icon24CheckBoxOffWithProps = (
  props: ExpectedConditionalRenderComponentProps
) => <Icon24CheckBoxOff {...props} aria-hidden />;

const Icon20CheckBoxIndetermanateWithProps = (
  props: ExpectedConditionalRenderComponentProps
) => (
  <Icon20CheckBoxIndetermanate {...props} aria-hidden width={20} height={20} />
);

const Icon24CheckBoxIndetermanateWithProps = (
  props: ExpectedConditionalRenderComponentProps
) => (
  <Icon20CheckBoxIndetermanate {...props} aria-hidden width={24} height={24} />
);

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
export const Checkbox = ({
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
      className={classNamesString(
        styles["Checkbox"],
        platform === Platform.VKCOM && styles["Checkbox--vkcom"],
        getSizeYClassName(styles["Checkbox"], sizeY),
        !(hasReactNode(children) || hasReactNode(description)) &&
          styles["Checkbox--simple"],
        className
      )}
      style={style}
      disabled={restProps.disabled}
      activeEffectDelay={platform === Platform.IOS ? 100 : ACTIVE_EFFECT_DELAY}
      getRootRef={getRootRef}
    >
      <VisuallyHiddenInput
        {...restProps}
        onChange={handleChange}
        type="checkbox"
        className={styles["Checkbox__input"]}
        getRef={inputRef}
      />
      <div
        className={classNamesString(
          styles["Checkbox__icon"],
          styles["Checkbox__icon--on"]
        )}
      >
        {platform === Platform.VKCOM ? (
          <Icon20CheckBoxOn aria-hidden />
        ) : (
          <SizeYConditionalRender
            Compact={Icon20CheckBoxOnWithProps}
            Regular={Icon24CheckBoxOnWithProps}
          />
        )}
      </div>
      <div
        className={classNamesString(
          styles["Checkbox__icon"],
          styles["Checkbox__icon--off"]
        )}
      >
        {platform === Platform.VKCOM ? (
          <Icon20CheckBoxOff aria-hidden />
        ) : (
          <SizeYConditionalRender
            Compact={Icon20CheckBoxOffWithProps}
            Regular={Icon24CheckBoxOffWithProps}
          />
        )}
      </div>
      <div
        className={classNamesString(
          styles["Checkbox__icon"],
          styles["Checkbox__icon--indeterminate"]
        )}
      >
        {platform === Platform.VKCOM ? (
          <Icon20CheckBoxIndetermanate aria-hidden width={20} height={20} />
        ) : (
          <SizeYConditionalRender
            Compact={Icon20CheckBoxIndetermanateWithProps}
            Regular={Icon24CheckBoxIndetermanateWithProps}
          />
        )}
      </div>
      <div className={styles["Checkbox__content"]}>
        <div className={styles["Checkbox__children"]}>{children}</div>
        {hasReactNode(description) && (
          <Footnote className={styles["Checkbox__description"]}>
            {description}
          </Footnote>
        )}
      </div>
    </Tappable>
  );
};
