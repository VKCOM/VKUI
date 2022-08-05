import * as React from "react";
import "./PopperArrow.css";

export interface PopperArrowProps {
  style?: React.CSSProperties;
  attributes?: React.HTMLAttributes<HTMLDivElement> | null;
  arrowClassName?: string;
}

export const PopperArrow = ({
  style,
  attributes,
  arrowClassName,
}: PopperArrowProps) => {
  return (
    <div
      style={style}
      {...attributes}
      vkuiClass="PopperArrow"
      data-popper-arrow={true}
    >
      <svg
        vkuiClass="PopperArrow__in"
        className={arrowClassName}
        width="20"
        height="8"
        viewBox="0 0 20 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0C13 0 15.9999 8 20 8H0C3.9749 8 7 0 10 0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
