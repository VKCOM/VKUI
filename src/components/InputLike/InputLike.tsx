import * as React from "react";
import { callMultiple } from "../../lib/callMultiple";
import { stopPropagation } from "../../lib/utils";
import { classNames } from "../../lib/classNames";
import { HasRootRef } from "../../types";
import "./InputLike.css";

export interface InputLikeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    HasRootRef<HTMLSpanElement> {
  length: number;
  index: number;
  value?: string;
  onElementSelect?(index: number): void;
}

const MASK_SYMBOL = String.fromCharCode(0x2007);

function getMaskElements(length: number) {
  const result = [];
  for (let index = 0; index < length; index += 1) {
    result.push(
      <span key={index} vkuiClass="InputLike__mask">
        {MASK_SYMBOL}
      </span>
    );
  }
  return result;
}

export const InputLike: React.FC<InputLikeProps> = ({
  value,
  length,
  index,
  onElementSelect,
  onClick,
  onFocus,
  getRootRef,
  ...props
}) => {
  const handleElementSelect = React.useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      stopPropagation(event);
      onElementSelect?.(index);
    },
    [index, onElementSelect]
  );

  return (
    <span
      vkuiClass={classNames(
        "InputLike",
        value?.length === length && `InputLike--full`
      )}
      tabIndex={0}
      ref={getRootRef}
      onClick={callMultiple(onClick, handleElementSelect)}
      onFocus={callMultiple(stopPropagation, onFocus)}
      {...props}
    >
      {value?.slice(0, length - 1)}
      {value?.slice(length - 1) && (
        <span key={index} vkuiClass="InputLike__last_character">
          {value.slice(length - 1)}
        </span>
      )}
      {getMaskElements(length - (value?.length ?? 0))}
    </span>
  );
};

InputLike.displayName = "InputLike";
