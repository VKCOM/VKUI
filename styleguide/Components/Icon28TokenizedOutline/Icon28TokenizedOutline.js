import React from "react";

export const Icon28TokenizedOutline = ({
  className,
  width = 28,
  height = 28,
  stroke,
  title,
  getRootRef,
}) => {
  return (
    <div
      ref={getRootRef}
      role="presentation"
      className={`vkuiIcon vkuiIcon--28 vkuiIcon--w-${width} vkuiIcon--h-${height} ${
        className ? className : ""
      }`}
      style={{ width: width + "px", height: height + "px" }}
      title={title}
    >
      <svg
        viewBox="0 0 28 28"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="tokenized_outline_28"
      >
        <path
          d="M8 4H7a3 3 0 0 0-3 3v1m20 0V7a3 3 0 0 0-3-3h-1m0 20h1a3 3 0 0 0 3-3v-1M4 20v1a3 3 0 0 0 3 3h1M18 10h-8m4 8v-8"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <use
            xlinkHref="#tokenized_outline_28"
            style={{ fill: "none", color: stroke }}
          ></use>
        </path>
      </svg>
    </div>
  );
};
