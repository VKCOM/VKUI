import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setRef } from "../../lib/utils";
import {
  RangeSlider as RangeSliderBase,
  RangeSliderProps,
} from "./RangeSlider";
import { mockRect, baselineComponent } from "../../testing/utils";

const RangeSlider = (props: RangeSliderProps) => {
  const getRootRef: RangeSliderProps["getRootRef"] = (el) => {
    mockRect(el, { w: 100 });
    props.getRootRef && setRef(el, props.getRootRef);
  };
  return (
    <RangeSliderBase
      data-testid="range"
      min={0}
      max={10}
      {...props}
      getRootRef={getRootRef}
    />
  );
};
const getSlider = () => screen.getByTestId("range");

describe("RangeSlider", () => {
  baselineComponent(RangeSlider);

  describe("works uncontrolled", () => {
    it("uses defaultValue", () => {
      render(<RangeSlider defaultValue={[5, 6]} />);
      expect(getSlider()).toHaveAttribute("data-value", "5,6");
    });
    it("uses full range as fallback", () => {
      render(<RangeSlider />);
      expect(getSlider()).toHaveAttribute("data-value", "0,10");
    });
  });

  describe("works controlled", () => {
    it("sets value", () => {
      const { rerender } = render(<RangeSlider value={[5, 6]} />);
      expect(getSlider()).toHaveAttribute("data-value", "5,6");
      rerender(<RangeSlider value={[3, 7]} />);
      expect(getSlider()).toHaveAttribute("data-value", "3,7");
    });
    it("value overrides defaultValue", () => {
      render(<RangeSlider defaultValue={[1, 3]} value={[6, 9]} />);
      expect(getSlider()).toHaveAttribute("data-value", "6,9");
    });
  });

  describe("changes", () => {
    const pointerPos = (x: number) => ({ clientX: x, clientY: 10 });
    describe("with tap", () => {
      it("moves start", () => {
        render(<RangeSlider defaultValue={[3, 7]} />);
        userEvent.click(getSlider(), pointerPos(20));
        expect(getSlider()).toHaveAttribute("data-value", "2,7");
      });
      it("moves end", () => {
        render(<RangeSlider defaultValue={[3, 7]} />);
        userEvent.click(getSlider(), pointerPos(80));
        expect(getSlider()).toHaveAttribute("data-value", "3,8");
      });
    });
    describe("with drag", () => {
      it("moves start", async () => {
        render(<RangeSlider defaultValue={[3, 7]} />);
        fireEvent.mouseDown(getSlider(), pointerPos(30));
        fireEvent.mouseMove(getSlider(), pointerPos(40));
        expect(getSlider()).toHaveAttribute("data-value", "4,7");
        fireEvent.mouseMove(getSlider(), pointerPos(50));
        expect(getSlider()).toHaveAttribute("data-value", "5,7");
        fireEvent.mouseUp(getSlider());
      });
      it("changes direction on overdrag", () => {
        render(<RangeSlider defaultValue={[3, 7]} />);
        fireEvent.mouseDown(getSlider(), pointerPos(30));
        fireEvent.mouseMove(getSlider(), pointerPos(80));
        expect(getSlider()).toHaveAttribute("data-value", "7,8");
        fireEvent.mouseUp(getSlider());
      });
    });
  });
});
