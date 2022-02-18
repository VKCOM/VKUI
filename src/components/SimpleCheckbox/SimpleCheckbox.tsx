import * as React from "react";
import Tappable from "../Tappable/Tappable";

import {
  Icon20CheckBoxOn,
  Icon20CheckBoxOff,
  Icon24CheckBoxOn,
  Icon24CheckBoxOff,
  Icon20CheckBoxIndetermanate,
} from "@vkontakte/icons";

import { HasRef, HasRootRef } from "../../types";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useExternRef } from "../../hooks/useExternRef";
import { SizeType } from "../../hoc/withAdaptivity";
import { warnOnce } from "../../lib/warnOnce";
import { classNames } from "../../lib/classNames";

import "./SimpleCheckbox.css";

const warn = warnOnce("SimpleCheckbox");
const IS_DEV = process.env.NODE_ENV === "development";

export interface SimpleCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {
  indeterminate?: boolean;
  defaultIndeterminate?: boolean;
}

export const SimpleCheckbox: React.FC<SimpleCheckboxProps> = (
  props: SimpleCheckboxProps
) => {
  const {
    className,
    style,
    getRootRef,
    getRef,
    indeterminate,
    defaultIndeterminate,
    onChange,
    ...restProps
  } = props;
  const { sizeY, hasMouse } = useAdaptivity();
  const inputRef = useExternRef(getRef);

  React.useEffect(() => {
    const indeterminateValue =
      indeterminate === undefined ? defaultIndeterminate : indeterminate;

    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminateValue);
    }
  }, [defaultIndeterminate, indeterminate, inputRef]);

  const handleChange: SimpleCheckboxProps["onChange"] = React.useCallback(
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

  if (IS_DEV) {
    if (defaultIndeterminate && restProps.defaultChecked) {
      warn(
        "defaultIndeterminate and defaultChecked cannot be true at the same time"
      );
    }

    if (indeterminate && restProps.checked) {
      warn("indeterminate and checked cannot be true at the same time");
    }
  }

  return (
    <Tappable
      Component="label"
      vkuiClass={classNames("SimpleCheckbox", {
        "SimpleCheckbox--mouse": hasMouse,
      })}
      className={className}
      style={style}
      disabled={restProps.disabled}
      hoverMode={hasMouse ? "SimpleCheckbox--hover--mouse" : undefined}
      activeMode={hasMouse ? "SimpleCheckbox--active--mouse" : undefined}
      getRootRef={getRootRef}
    >
      <input
        {...restProps}
        onChange={handleChange}
        type="checkbox"
        vkuiClass="SimpleCheckbox__input"
        ref={inputRef}
      />
      <div vkuiClass="SimpleCheckbox__icon SimpleCheckbox__icon--on">
        {sizeY === SizeType.COMPACT ? (
          <Icon20CheckBoxOn />
        ) : (
          <Icon24CheckBoxOn />
        )}
      </div>
      <div vkuiClass="SimpleCheckbox__icon SimpleCheckbox__icon--off">
        {sizeY === SizeType.COMPACT ? (
          <Icon20CheckBoxOff />
        ) : (
          <Icon24CheckBoxOff />
        )}
      </div>
      <div vkuiClass="SimpleCheckbox__icon SimpleCheckbox__icon--indeterminate">
        <Icon20CheckBoxIndetermanate
          width={sizeY === SizeType.COMPACT ? 20 : 24}
          height={sizeY === SizeType.COMPACT ? 20 : 24}
        />
      </div>
    </Tappable>
  );
};

// eslint-disable-next-line import/no-default-export
export default SimpleCheckbox;
