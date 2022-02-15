import * as React from "react";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import HorizontalScroll, {
  HorizontalScrollProps,
} from "../HorizontalScroll/HorizontalScroll";
import { useDOM } from "../../lib/dom";
import "./CardScroll.css";

export interface CardScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * При `size=false` ширина `Card` будет регулироваться контентом внутри. В остальных случаях — будет явно задана в процентах.
   */
  size?: "s" | "m" | "l" | false;
  showArrows?: HorizontalScrollProps["showArrows"];
  withSpaces?: boolean;
}

export const CardScroll: React.FC<CardScrollProps> = ({
  children,
  size = "s",
  showArrows = true,
  withSpaces = true,
  ...restProps
}: CardScrollProps) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();

  const refContainer = React.useRef<HTMLDivElement>(null);
  const gapRef = React.useRef<HTMLDivElement>(null);

  const { window } = useDOM();

  function getScrollToLeft(offset: number): number {
    if (!refContainer.current || !gapRef.current) {
      return offset;
    }
    const containerWidth = refContainer.current.offsetWidth;
    const slideIndex = (
      Array.from(refContainer.current.children) as HTMLElement[]
    ).findIndex(
      (el: HTMLElement) =>
        el.offsetLeft +
          el.offsetWidth +
          parseInt(window!.getComputedStyle(el).marginRight) -
          offset >=
        0
    );

    if (slideIndex === -1) {
      return offset;
    }

    if (slideIndex === 0) {
      return 0;
    }

    const slide = refContainer.current.children[slideIndex] as HTMLElement;

    const scrollTo =
      slide.offsetLeft -
      (containerWidth - slide.offsetWidth) +
      gapRef.current.offsetWidth;

    if (scrollTo <= 2 * gapRef.current.offsetWidth) {
      return 0;
    }

    return scrollTo;
  }

  function getScrollToRight(offset: number): number {
    if (!refContainer.current || !gapRef.current) {
      return offset;
    }

    const containerWidth = refContainer.current.offsetWidth;
    const slide = Array.prototype.find.call(
      refContainer.current.children,
      (el: HTMLElement) =>
        el.offsetLeft + el.offsetWidth - offset > containerWidth
    ) as HTMLElement;

    if (!slide) {
      return offset;
    }

    return slide.offsetLeft - gapRef.current.offsetWidth;
  }

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        getClassName("CardScroll", platform),
        `CardScroll--sizeX-${sizeX}`,
        `CardScroll--${size}`,
        { ["CardScroll--withSpaces"]: withSpaces }
      )}
    >
      <HorizontalScroll
        getScrollToLeft={getScrollToLeft}
        getScrollToRight={getScrollToRight}
        showArrows={showArrows}
      >
        <div vkuiClass="CardScroll__in" ref={refContainer}>
          <span vkuiClass="CardScroll__gap" ref={gapRef} />
          {children}
          <span vkuiClass="CardScroll__gap" />
        </div>
      </HorizontalScroll>
    </div>
  );
};
