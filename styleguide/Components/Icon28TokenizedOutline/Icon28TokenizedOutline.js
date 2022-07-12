import React from "react";

export const Icon28TokenizedOutline = (props) => {
  return (
    <div role="presentational" className={"vkui-icon " + props.className}>
      <svg
        viewBox="0 0 28 28"
        width={props.width}
        height={props.height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="tokenized_outline_28"
      >
        <path
          d="M8 4H7a3 3 0 0 0-3 3v1m20 0V7a3 3 0 0 0-3-3h-1m0 20h1a3 3 0 0 0 3-3v-1M4 20v1a3 3 0 0 0 3 3h1M18 10h-8m4 8v-8"
          stroke={props.stroke}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <title>{props.title}</title>
        </path>
      </svg>
    </div>
  );
};
