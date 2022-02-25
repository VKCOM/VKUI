import * as React from "react";
import { callMultiple } from "../../lib/callMultiple";
import { stopPropagation } from "../../lib/utils";
import "./InputLike.css";

export interface InputLikeProps extends React.HTMLAttributes<HTMLSpanElement> {
  length: number;
  index: number;
  value?: string;
  onElementSelect?(index: number): void;
}

export const InputLike = React.forwardRef<HTMLSpanElement, InputLikeProps>(
  (
    { value, length, index, onElementSelect, onClick, onFocus, ...props },
    ref
  ) => {
    const handleElementSelect = React.useCallback(
      (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        stopPropagation(event);
        onElementSelect?.(index);
      },
      [index, onElementSelect]
    );

    return (
      <span
        vkuiClass="InputLike"
        tabIndex={0}
        ref={ref}
        onClick={callMultiple(onClick, handleElementSelect)}
        onFocus={callMultiple(stopPropagation, onFocus)}
        {...props}
      >
        {value?.slice(0, -1)}
        <span key={index} vkuiClass="InputLike__last_character">
          {value?.slice(-1)}
        </span>
        {new Array(length - (value?.length ?? 0))
          .fill("_")
          .map((value, index) => (
            <span key={index} vkuiClass="InputLike__mask">
              {value}
            </span>
          ))}
      </span>
    );
  }
);

InputLike.displayName = "InputLike";
