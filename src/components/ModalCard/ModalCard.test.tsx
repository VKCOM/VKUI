import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import {
  baselineComponent,
  expectPositive,
  runAllTimers,
  setupFakeAsync,
} from "../../testing/utils";
import ModalCard, { useModalCard } from "./ModalCard";
import { ModalRoot } from "../ModalRoot/ModalRootAdaptive";
import * as useModalModule from "../ModalRoot/useModal";
import * as modalManager from "../ModalRoot/useModalManager";
import { Gesture, initGesture, TouchEvent } from "../Touch/Touch";
import { act } from "react-dom/test-utils";
import { noop } from "../../lib/utils";

setupFakeAsync();

const managerSpy = jest.spyOn(modalManager, "useModalManager");
const getContext = () =>
  managerSpy.mock.results[managerSpy.mock.results.length - 1].value;
afterEach(() => managerSpy.mockClear());

describe("ModalCard", () => {
  baselineComponent((p) => <ModalCard nav="id" {...p} />);

  // TODO standalone tests
  describe.each(["desktop", "mobile"] as const)("%s transitions", (mode) => {
    const testCard = <ModalCard id="c">__xxx__</ModalCard>;
    it("enters", () => {
      render(
        <ModalRoot mode={mode} activeModal="c">
          {testCard}
        </ModalRoot>
      );
      expect(getContext()).toMatchObject({ enteringModal: "c" });
      runAllTimers();
      expect(screen.getByText("__xxx__")).toBeTruthy();
      expect(getContext()).toMatchObject({
        enteringModal: null,
        exitingModal: null,
        activeModal: "c",
        isLocked: true,
      });
    });
    it("exits", () => {
      const h = render(
        <ModalRoot mode={mode} activeModal="c">
          {testCard}
        </ModalRoot>
      );
      runAllTimers();
      h.rerender(
        <ModalRoot mode={mode} activeModal={null}>
          {testCard}
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

describe(useModalCard, () => {
  const modalSpy = jest.spyOn(useModalModule, "useModal");
  const setupCard = () => {
    const makeGesture = (options: Partial<Gesture>): TouchEvent => ({
      ...initGesture(0, 0),
      ...options,
      originalEvent: new Event("") as any,
    });
    const inner = document.createElement("div");
    Object.defineProperty(inner, "offsetHeight", { value: 100 });
    const drag = jest.fn();
    const release = jest.fn();
    modalSpy.mockImplementation((_id, p) => ({
      drag,
      release,
      mode: "mobile",
      innerElement: { current: inner },
      phase: "active",
      translateY: 0,
      onClose: p.onClose,
    }));
    const { result } = renderHook(() => useModalCard("c", noop));
    return {
      drag,
      release,
      onMove: (g: Partial<Gesture>) =>
        act(() => result.current.handlers.onMove(makeGesture(g))),
      onEnd: (g: Partial<Gesture>) =>
        act(() => result.current.handlers.onEnd(makeGesture(g))),
    };
  };
  afterEach(() => modalSpy.mockReset());

  describe("handles gestures on mobile", () => {
    it("is draggable", () => {
      const handle = setupCard();
      handle.onMove({ isY: true, shiftY: 40 });
      expect(handle.drag).toBeCalledWith(expectPositive());
    });
    it("stays open after drag up", () => {
      const handle = setupCard();
      handle.onMove({ isY: true, shiftY: -40 });
      handle.onEnd({ isY: true, shiftY: -40, duration: 200 });
      expect(handle.release).toBeCalledWith(0);
    });
    it("stays open after weak drag", () => {
      const handle = setupCard();
      handle.onMove({ isY: true, shiftY: 10 });
      handle.onEnd({ isY: true, shiftY: 10, duration: 200 });
      expect(handle.release).toBeCalledWith(0);
    });
    it("closes after long drag", () => {
      const handle = setupCard();
      handle.onMove({ isY: true, shiftY: 50 });
      handle.onEnd({ isY: true, shiftY: 50 });
      expect(handle.release).toBeCalledWith(100);
    });
  });
});
