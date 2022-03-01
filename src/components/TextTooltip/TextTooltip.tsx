import * as React from "react";
import { HoverPopper, HoverPopperProps } from "../HoverPopper/HoverPopper";
import { getClassName } from "../../helpers/getClassName";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import Subhead from "../Typography/Subhead/Subhead";
import { prefixClass } from "../../lib/prefixClass";
import "./TextTooltip.css";

export interface TextTooltipProps
  extends Omit<HoverPopperProps, "arrow" | "arrowClassName" | "content"> {
  /**
   * Текст тултипа
   */
  text?: React.ReactNode;
  /**
   * Заголовок тултипа
   */
  header?: React.ReactNode;
}

export const TextTooltip: React.FC<TextTooltipProps> = ({
  children,
  text,
  header,
  ...popperProps
}: TextTooltipProps) => {
  const platform = usePlatform();

  return (
    <HoverPopper
      vkuiClass={getClassName("TextTooltip", platform)}
      arrow
      arrowClassName={prefixClass("TextTooltip__arrow")}
      content={
        <React.Fragment>
          {hasReactNode(header) && (
            <Subhead
              Component="span"
              weight="2"
              vkuiClass="TextTooltip__header"
            >
              {header}
            </Subhead>
          )}
          {hasReactNode(text) && (
            <Subhead Component="span" vkuiClass="TextTooltip__text">
              {text}
            </Subhead>
          )}
        </React.Fragment>
      }
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
