import * as React from "react";
import { classNames } from "../../lib/classNames";
import {
  HorizontalScroll,
  HorizontalScrollProps,
  ScrollPositionHandler,
} from "../HorizontalScroll/HorizontalScroll";
import "./SubnavigationBar.css";

export interface SubnavigationBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<
      HorizontalScrollProps,
      | "showArrows"
      | "getScrollToLeft"
      | "getScrollToRight"
      | "scrollAnimationDuration"
    > {
  mode?: "fixed" | "overflow";
}

const defaultScrollToLeft: ScrollPositionHandler = (x) => x - 240;

const defaultScrollToRight: ScrollPositionHandler = (x) => x + 240;

/**
 * @see https://vkcom.github.io/VKUI/#/SubnavigationBar
 */
export const SubnavigationBar = ({
  mode = "overflow",
  children,
  showArrows = true,
  getScrollToLeft = defaultScrollToLeft,
  getScrollToRight = defaultScrollToRight,
  scrollAnimationDuration,
  ...restProps
}: SubnavigationBarProps) => {
  let ScrollWrapper: React.ElementType;
  let scrollWrapperProps = {};

  if (mode === "fixed") {
    ScrollWrapper = "div";
  } else {
    ScrollWrapper = HorizontalScroll;
    scrollWrapperProps = {
      showArrows,
      getScrollToLeft,
      getScrollToRight,
      scrollAnimationDuration,
    };
  }

  return (
    <div
      {...restProps}
      vkuiClass={classNames("SubnavigationBar", `SubnavigationBar--${mode}`)}
    >
      <ScrollWrapper vkuiClass="SubnavigationBar__in" {...scrollWrapperProps}>
        <div vkuiClass="SubnavigationBar__scrollIn">{children}</div>
      </ScrollWrapper>
    </div>
  );
};
