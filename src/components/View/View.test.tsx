import * as React from "react";
import { fireEvent, render, screen, act } from "@testing-library/react";
import { ConfigProvider } from "../ConfigProvider/ConfigProvider";
import { Platform } from "../../lib/platform";
import {
  baselineComponent,
  mockScrollContext,
  mountTest,
} from "../../testing/utils";
import { Panel } from "../Panel/Panel";
import { View, scrollsCache, ViewProps } from "./View";
import { ViewInfinite } from "./ViewInfinite";
import { ComponentType, Fragment } from "react";
import { HasChildren } from "../../types";

// Basically the same as Root.test.tsx

describe.each([
  ["View", View],
  ["ViewInfinite", ViewInfinite],
])("%s", (name, View) => {
  beforeAll(() => jest.useFakeTimers("modern"));
  afterAll(() => jest.useRealTimers());
  baselineComponent(View);
  describe("With Panel", () =>
    mountTest(() => (
      <View activePanel="panel">
        <Panel id="panel" />
      </View>
    )));

  describe("shows active panel", () => {
    const panels = [<Panel id="p1" key="1" />, <Panel id="p2" key="2" />];
    it("on mount", () => {
      render(<View activePanel="p1">{panels}</View>);
      expect(document.getElementById("p1")).not.toBeNull();
      expect(document.getElementById("p2")).toBeNull();
    });
    it("after prop update", () => {
      render(<View activePanel="p1">{panels}</View>).rerender(
        <View activePanel="p2">{panels}</View>
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(document.getElementById("p1")).toBeNull();
      expect(document.getElementById("p2")).not.toBeNull();
    });
    it("calls onTransition", () => {
      const onTransition = jest.fn();
      render(
        <View activePanel="p1" onTransition={onTransition}>
          {panels}
        </View>
      ).rerender(
        <View activePanel="p2" onTransition={onTransition}>
          {panels}
        </View>
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(onTransition).toBeCalledTimes(1);
      expect(onTransition).toBeCalledWith({
        from: "p1",
        to: "p2",
        isBack: false,
      });
    });
    it("detects back transition", () => {
      const onTransition = jest.fn();
      render(
        <View activePanel="p2" onTransition={onTransition}>
          {panels}
        </View>
      ).rerender(
        <View activePanel="p1" onTransition={onTransition}>
          {panels}
        </View>
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(onTransition).toBeCalledWith({
        from: "p2",
        to: "p1",
        isBack: true,
      });
    });
  });

  describe("blurs active element", () => {
    const renderFocused = () =>
      render(<input autoFocus data-testid="__autofocus__" />);
    it("on activePanel change", () => {
      renderFocused();
      const panels = [
        <Panel id="focus" key="1" />,
        <Panel id="other" key="2" />,
      ];
      render(<View activePanel="focus">{panels}</View>).rerender(
        <View activePanel="other">{panels}</View>
      );
      expect(document.activeElement === document.body).toBe(true);
    });
  });

  describe("can swipeBack", () => {
    let nowMock: jest.SpyInstance;
    const setupSwipeBack = (
      Wrapper: ComponentType<HasChildren> = Fragment,
      children: any = null
    ) => {
      const events = {
        onSwipeBack: jest.fn(),
        onTransition: jest.fn(),
        onSwipeBackStart: jest.fn(),
        onSwipeBackCancel: jest.fn(),
      };
      const SwipeBack = (p: Partial<ViewProps>) => (
        <Wrapper>
          <ConfigProvider platform={Platform.IOS} isWebView>
            <View
              id="scroll"
              activePanel="p2"
              history={["p1", "p2"]}
              {...events}
              {...p}
            >
              <Panel id="p1" />
              <Panel id="p2">{children}</Panel>
            </View>
          </ConfigProvider>
        </Wrapper>
      );
      const h = render(<SwipeBack />);
      act(() => {
        jest.runAllTimers();
      });
      const view = h.container.firstElementChild as Element;
      // force detect x-swipe
      fireEvent.mouseDown(view, { clientX: 50, clientY: 100 });
      fireEvent.mouseMove(view, { clientX: 40, clientY: 100 });
      nowMock = jest.spyOn(Date, "now");
      return { view, ...events, rerender: h.rerender, SwipeBack };
    };
    afterEach(() => nowMock && nowMock.mockClear());
    it("cancels swipeBack on swipe left", () => {
      const { view, ...events } = setupSwipeBack();
      expect(events.onSwipeBackStart).toBeCalledTimes(1);
      fireEvent.mouseUp(view, { clientX: 0, clientY: 100 });
      expect(events.onSwipeBack).not.toBeCalled();
      expect(events.onSwipeBackCancel).toBeCalledTimes(1);
    });
    it("does swipeBack immediately on overscroll", () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseMove(view, {
        clientX: window.innerWidth + 1,
        clientY: 100,
      });
      fireEvent.mouseUp(view);
      expect(events.onSwipeBack).toBeCalledTimes(1);
      expect(events.onSwipeBackCancel).not.toBeCalled();
    });
    describe("does not swipeback on", () => {
      it.each([
        ["input", <input data-testid="ex" key="" />],
        ["textarea", <textarea data-testid="ex" key="" />],
        [
          "[data-vkui-swipe-back=false]",
          <div data-vkui-swipe-back={false} data-testid="ex" key="" />,
        ],
      ])("%s", (_name, cmp) => {
        const { view, ...events } = setupSwipeBack(Fragment, cmp);
        fireEvent.mouseMove(screen.getByTestId("ex"), {
          clientX: window.innerWidth + 1,
          clientY: 100,
        });
        fireEvent.mouseUp(screen.getByTestId("ex"));
        expect(events.onSwipeBack).not.toBeCalled();
      });
    });
    it("does swipeBack after animation", () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseMove(view, {
        clientX: window.innerWidth / 2 + 1,
        clientY: 100,
      });
      // speed to 0
      nowMock.mockImplementation(() => Infinity);
      fireEvent.mouseUp(view);
      expect(events.onSwipeBack).not.toBeCalled();
      expect(events.onSwipeBackCancel).not.toBeCalled();
      act(() => {
        jest.runAllTimers();
      });
      expect(events.onSwipeBack).toBeCalledTimes(1);
    });
    it("fails weak swipeBack", () => {
      const { view, ...events } = setupSwipeBack();
      fireEvent.mouseMove(view, {
        clientX: window.innerWidth / 2 - 1,
        clientY: 100,
      });
      // speed to 0
      nowMock.mockImplementation(() => Infinity);
      fireEvent.mouseUp(view);
      act(() => {
        jest.runAllTimers();
      });
      expect(events.onSwipeBack).not.toBeCalled();
      expect(events.onSwipeBackCancel).toBeCalledTimes(1);
    });
    it("recovers after swipeBack", () => {
      const { view, rerender, SwipeBack, ...events } = setupSwipeBack();
      fireEvent.mouseMove(view, {
        clientX: window.innerWidth + 1,
        clientY: 100,
      });
      fireEvent.mouseUp(view);
      expect(document.getElementById("p1")).toBeTruthy();
      expect(document.getElementById("p2")).toBeTruthy();
      rerender(<SwipeBack activePanel="p1" history={["p1"]} />);
      expect(events.onTransition).toBeCalledTimes(1);
      expect(document.getElementById("p1")).toBeTruthy();
      expect(document.getElementById("p2")).toBeNull();
    });
    name === "View" &&
      it("restores scroll after swipeBack", () => {
        let y = 101;
        scrollsCache["scroll"]["p1"] = 22;
        const [MockScroll, scrollTo] = mockScrollContext(() => y);
        const { view, rerender, SwipeBack } = setupSwipeBack(MockScroll);
        fireEvent.mouseMove(view, {
          clientX: window.innerWidth + 1,
          clientY: 100,
        });
        fireEvent.mouseUp(view);
        rerender(<SwipeBack activePanel="p1" history={["p1"]} />);
        expect(scrollTo).toBeCalledWith(0, 22);
      });
  });

  describe("scroll control", () => {
    const panels = [<Panel id="p1" key="1" />, <Panel id="p2" key="2" />];
    it("restores on back navigation", () => {
      let y = 101;
      const [MockScroll, scrollTo] = mockScrollContext(() => y);
      const h = render(
        <MockScroll>
          <View activePanel="p1">{panels}</View>
        </MockScroll>
      );
      // trigger scroll save
      h.rerender(
        <MockScroll>
          <View activePanel="p2">{panels}</View>
        </MockScroll>
      );
      h.rerender(
        <MockScroll>
          <View activePanel="p1">{panels}</View>
        </MockScroll>
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(scrollTo).toBeCalledWith(0, y);
    });
    it("resets scroll on forward navigation", () => {
      let y = 101;
      const [MockScroll, scrollTo] = mockScrollContext(() => y);
      const h = render(
        <MockScroll>
          <View activePanel="p2">{panels}</View>
        </MockScroll>
      );
      // trigger scroll save
      h.rerender(
        <MockScroll>
          <View activePanel="p1">{panels}</View>
        </MockScroll>
      );
      act(() => {
        jest.runAllTimers();
      });
      scrollTo.mockReset();
      h.rerender(
        <MockScroll>
          <View activePanel="p2">{panels}</View>
        </MockScroll>
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(scrollTo).toBeCalledWith(0, 0);
    });
  });
});
