import * as React from "react";
import Tappable, { ACTIVE_EFFECT_DELAY } from "../Tappable/Tappable";
import { getClassName } from "../../helpers/getClassName";
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
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useExternRef } from "../../hooks/useExternRef";
import { SizeType } from "../../hoc/withAdaptivity";
import { warnOnce } from "../../lib/warnOnce";

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
  const { sizeY } = useAdaptivity();
  const platform = usePlatform();
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
      vkuiClass={classNames(
        getClassName("SimpleCheckbox", platform),
        `SimpleCheckbox--sizeY-${sizeY}`
      )}
      className={className}
      style={style}
      disabled={restProps.disabled}
      activeMode={platform === VKCOM ? "SimpleCheckbox--active" : "background"}
      hoverMode={platform === VKCOM ? "SimpleCheckbox--hover" : "background"}
      activeEffectDelay={platform === IOS ? 100 : ACTIVE_EFFECT_DELAY}
      getRootRef={getRootRef}
    >
      <input
        {...restProps}
        onChange={handleChange}
        type="checkbox"
        vkuiClass="SimpleCheckbox__input"
        ref={inputRef}
      />
      <div vkuiClass="SimpleCheckbox__container">
        <div vkuiClass="SimpleCheckbox__icon SimpleCheckbox__icon--on">
          {sizeY === SizeType.COMPACT || platform === VKCOM ? (
            <Icon20CheckBoxOn />
          ) : (
            <Icon24CheckBoxOn />
          )}
        </div>
        <div vkuiClass="SimpleCheckbox__icon SimpleCheckbox__icon--off">
          {sizeY === SizeType.COMPACT || platform === VKCOM ? (
            <Icon20CheckBoxOff />
          ) : (
            <Icon24CheckBoxOff />
          )}
        </div>
        <div vkuiClass="SimpleCheckbox__icon SimpleCheckbox__icon--indeterminate">
          <Icon20CheckBoxIndetermanate
            width={sizeY === SizeType.COMPACT || platform === VKCOM ? 20 : 24}
            height={sizeY === SizeType.COMPACT || platform === VKCOM ? 20 : 24}
          />
        </div>
      </div>
      {platform === VKCOM && (
        <div aria-hidden={true} vkuiClass="SimpleCheckbox__activeShadow" />
      )}
      {platform === VKCOM && (
        <div aria-hidden={true} vkuiClass="SimpleCheckbox__hoverShadow" />
      )}
    </Tappable>
  );
};
