import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import {
  baselineComponent,
  expectPositive,
  runAllTimers,
  setupFakeAsync,
} from "../../testing/utils";
import ModalPage from "./ModalPage";
import * as useModalPageModule from "./useModalPage";
import { ModalRoot } from "../ModalRoot/ModalRootAdaptive";
import * as modalManager from "../ModalRoot/useModalManager";
import * as useModalModule from "../ModalRoot/useModal";
import { Gesture, initGesture, TouchEvent } from "../Touch/Touch";

const { useModalPage } = useModalPageModule;
setupFakeAsync();

const managerSpy = jest.spyOn(modalManager, "useModalManager");
const getContext = () =>
  managerSpy.mock.results[managerSpy.mock.results.length - 1].value;
afterEach(() => managerSpy.mockClear());

const mockMeasure = {
  hasOverflow: () => false,
  pageHeight: () => 200,
  innerHeight: () => 180,
  isScrolled: () => false,
};

describe("ModalPage", () => {
  baselineComponent((p) => <ModalPage nav="id" {...p} />);
  // TODO: test standalone enter

  describe.each(["desktop", "mobile"] as const)("%s transitions", (mode) => {
    const modalPageSpy = jest.spyOn(useModalPageModule, "useModalPage");
    beforeEach(() => {
      modalPageSpy.mockImplementation((id, props) =>
        useModalPage(id, { ...props, ...mockMeasure })
      );
    });
    afterEach(() => modalPageSpy.mockReset());

    const testPage = <ModalPage id="c">__xxx__</ModalPage>;
    it("enters", () => {
      render(
        <ModalRoot mode={mode} activeModal="c">
          {testPage}
        </ModalRoot>
      );
      expect(getContext()).toMatchObject({ enteringModal: "c" });
      runAllTimers();
      expect(screen.getByText("__xxx__")).toBeTruthy();
      expect(getContext()).toMatchObject({
        enteringModal: null,
        exitingModal: null,
        activeModal: "c",
        isLocked: false,
      });
    });
    it("exits", () => {
      const h = render(
        <ModalRoot mode={mode} activeModal="c">
          {testPage}
        </ModalRoot>
      );
      runAllTimers();
      h.rerender(
        <ModalRoot mode={mode} activeModal={null}>
          {testPage}
        </ModalRoot>
      );
      expect(getContext()).toMatchObject({ exitingModal: "c" });
      runAllTimers();
      expect(screen.queryByText("__xxx__")).toBeFalsy();
      expect(getContext()).toMatchObject({
        enteringModal: null,
        exitingModal: null,
        activeModal: null,
        isLocked: false,
      });
    });
  });
});

describe(useModalPage, () => {
  const modalSpy = jest.spyOn(useModalModule, "useModal");
  const setupPage = ({ settlingHeight = 75 } = {}) => {
    const makeGesture = (options: Partial<Gesture>): TouchEvent => ({
      ...initGesture(0, 0),
      ...options,
      originalEvent: new Event("", { cancelable: true }) as any,
    });

    const header = document.createElement("div");
    const inner = document.createElement("div");

    const drag = jest.fn();
    const release = jest.fn();
    const innerElement = { current: inner };
    modalSpy.mockImplementation((_id, p) => ({
      drag,
      release,
      mode: "mobile",
      innerElement,
      phase: "active",
      translateY: 0,
      onClose: p.onClose,
    }));
    const { result } = renderHook(() => {
      const hook = useModalPage("c", {
        settlingHeight,
        ...mockMeasure,
        onClose: null,
      });
      hook.refs.headerElement.current = header;
      return hook;
    });

    return {
      drag,
      release,
      onStart: () =>
        act(() => result.current.handlers.onStart(makeGesture({}))),
      onMove: (g: Partial<Gesture>) =>
        act(() => result.current.handlers.onMove(makeGesture(g))),
      onEnd: (g: Partial<Gesture>) =>
        act(() => result.current.handlers.onEnd(makeGesture(g))),
    };
  };
  afterEach(() => modalSpy.mockReset());

  describe("handles gestures on mobile", () => {
    it("is draggable", () => {
      const handle = setupPage();
      handle.onMove({ isY: true, shiftY: 40 });
      runAllTimers();
      expect(handle.drag).toBeCalledWith(expectPositive());
    });
    it("stays open after drag up", () => {
      // force expandable to allow drag up
      const handle = setupPage({ settlingHeight: 100 });
      handle.onStart();
      // force snap direction down
      handle.onMove({ isY: true, shiftY: 40 });
      handle.onEnd({ isY: true, shiftY: -40, duration: 200 });
      expect(handle.release).toBeCalledWith(0);
    });
    it("stays open after weak drag", () => {
      const handle = setupPage();
      handle.onStart();
      handle.onMove({ isY: true, shiftY: 10 });
      handle.onEnd({ isY: true, shiftY: 10, duration: 200 });
      expect(handle.release).not.toBeCalledWith(100);
    });
    it("closes after long drag", () => {
      const handle = setupPage();
      handle.onStart();
      handle.onMove({ isY: true, shiftY: 50 });
      handle.onEnd({ isY: true, shiftY: 50 });
      expect(handle.release).toBeCalledWith(100);
    });
    it("closes after drag to bottom", () => {
      const handle = setupPage();
      const { innerHeight } = window;
      handle.onStart();
      handle.onMove({
        startY: 0.7 * innerHeight,
        isY: true,
        shiftY: 0.8 * innerHeight,
      });
      handle.onEnd({
        startY: 0.7 * innerHeight,
        isY: true,
        shiftY: 0.8 * innerHeight,
      });
      expect(handle.release).toBeCalledWith(100);
    });

    it("does not react to clean tap", () => {
      const handle = setupPage();
      const { innerHeight } = window;
      handle.onStart();
      handle.onMove({ startY: 0.8 * innerHeight, shiftY: 0 });
      handle.onEnd({ startY: 0.8 * innerHeight, shiftY: 0 });
      expect(handle.release).not.toBeCalled();
    });
  });

  describe("measures on height change", () => {
    const setupPage = () => {
      const header = document.createElement("div");
      const inner = document.createElement("div");

      const innerElement = { current: inner };
      const innerHeightSpy = jest.fn(mockMeasure.innerHeight);
      return {
        ...renderHook(() => {
          modalSpy.mockImplementation((_id, p) => ({
            drag: () => null,
            release: () => null,
            mode: "mobile",
            innerElement,
            phase: "active",
            translateY: 0,
            onClose: p.onClose,
          }));
          const hook = useModalPage("c", {
            settlingHeight: 75,
            ...mockMeasure,
            onClose: null,
            dynamicContentHeight: true,
            innerHeight: innerHeightSpy,
          });
          hook.refs.headerElement.current = header;
          return hook;
        }),
        innerHeightSpy,
      };
    };
    it("measures content on updateModalHeight call", () => {
      const { result, innerHeightSpy } = setupPage();
      runAllTimers();
      innerHeightSpy.mockClear();
      result.current.updateModalHeight();
      runAllTimers();
      expect(innerHeightSpy).toBeCalledTimes(1);
    });
  });
});
