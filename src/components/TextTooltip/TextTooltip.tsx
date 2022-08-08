import * as React from "react";
import { HoverPopper, HoverPopperProps } from "../HoverPopper/HoverPopper";
import { hasReactNode } from "../../lib/utils";
import { Subhead } from "../Typography/Subhead/Subhead";
import { prefixClass } from "../../lib/prefixClass";
import { classNames } from "../../lib/classNames";
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
  /**
   * Стиль отображения подсказки
   */
  appearance?: "accent" | "neutral" | "white" | "black" | "inversion";
}

/**
 * @see https://vkcom.github.io/VKUI/#/TextTooltip
 */
export const TextTooltip = ({
  children,
  text,
  header,
  appearance = "black", // TODO v5 сменить по умолчанию на "neutral"
  ...popperProps
}: TextTooltipProps) => {
  return (
    <HoverPopper
      vkuiClass={classNames("TextTooltip", `TextTooltip--${appearance}`)}
      arrow
      arrowClassName={prefixClass("TextTooltip__arrow")}
      content={
        <React.Fragment>
          {hasReactNode(header) && (
            <Subhead weight="2" vkuiClass="TextTooltip__header">
              {header}
            </Subhead>
          )}
          {hasReactNode(text) && (
            <Subhead vkuiClass="TextTooltip__text">{text}</Subhead>
          )}
        </React.Fragment>
      }
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
