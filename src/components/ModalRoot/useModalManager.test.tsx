import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { noop } from "../../lib/utils";
import { useModalManager, modalTransitionReducer } from "./useModalManager";

const MockModal = (p: any) => <div {...p} />;

describe(useModalManager, () => {
  describe("manages multi-phase transition", () => {
    const modals = [
      <MockModal id="m1" key="m1" />,
      <MockModal id="m2" key="m2" />,
    ];
    it("can enter on mount", () => {
      const handle = renderHook(({ id = "m1" } = {} as any) =>
        useModalManager(id, modals, noop)
      );
      expect(handle.result.current).toMatchObject({
        activeModal: "m1",
        enteringModal: "m1",
        exitingModal: null,
      });
      act(() => handle.result.current.onEnter("m1"));
      expect(handle.result.current).toMatchObject({
        activeModal: "m1",
        enteringModal: null,
        exitingModal: null,
      });
    });
    it("can enter on update", () => {
      const handle = renderHook(({ id = null } = {} as any) =>
        useModalManager(id, modals, noop)
      );
      expect(handle.result.all).toMatchObject([
        { activeModal: null, enteringModal: null, exitingModal: null },
      ]);
      handle.rerender({ id: "m1" });
      expect(handle.result.current).toMatchObject({
        activeModal: "m1",
        enteringModal: "m1",
        exitingModal: null,
      });
      act(() => handle.result.current.onEnter("m1"));
      expect(handle.result.current).toMatchObject({
        activeModal: "m1",
        enteringModal: null,
        exitingModal: null,
      });
    });
    const flushMount = (initId: string = null) => {
      const handle = renderHook(({ id = initId } = {} as any) =>
        useModalManager(id, modals, noop)
      );
      act(() => handle.result.current.onEnter(initId));
      return handle;
    };
    it("can exit", () => {
      const handle = flushMount("m1");
      handle.rerender({ id: null });
      expect(handle.result.current).toMatchObject({
        activeModal: null,
        enteringModal: null,
        exitingModal: "m1",
      });
      act(() => handle.result.current.onExit("m1"));
      expect(handle.result.current).toMatchObject({
        activeModal: null,
        enteringModal: null,
        exitingModal: null,
      });
    });
  });

  describe("maintains transition history", () => {
    it("initializes with activeModal", () => {
      const handle = renderHook(() =>
        useModalManager("m1", <MockModal id="m1" />, noop)
      );
      expect(handle.result.current.history).toEqual([{ id: "m1" }]);
    });
    it("initializes empty if activeModal=null", () => {
      const handle = renderHook(() => useModalManager(null, [], noop));
      expect(handle.result.current.history).toEqual([]);
    });
    it("Handles transition forward", () => {
      const { history, isBack } = modalTransitionReducer(
        {
          history: [],
        },
        { type: "setActive", id: "m1" }
      );
      expect(history).toEqual([{ id: "m1" }]);
      expect(isBack).toBe(false);
    });
    it("Handles transition back", () => {
      const { history, isBack } = modalTransitionReducer(
        {
          history: [{ id: "m1" }, { id: "m2" }, { id: "m3" }],
        },
        { type: "setActive", id: "m2" }
      );
      expect(history).toEqual([{ id: "m1" }, { id: "m2" }]);
      expect(isBack).toBe(true);
    });
    it("resets on activeModal=null", () => {
      const { history, isBack } = modalTransitionReducer(
        {
          history: [{ id: "m1" }, { id: "m2" }, { id: "m3" }],
        },
        { type: "setActive", id: null }
      );
      expect(history).toEqual([]);
      expect(isBack).toBe(false);
    });
  });

  describe("ignores missing modal", () => {
    it("on init", () => {
      const handle = renderHook(() => useModalManager("m1", [], noop));
      expect(handle.result.current.activeModal).toEqual(null);
      expect(handle.result.current.history).toEqual([]);
    });
    it("on update", () => {
      const handle = renderHook(({ id = null }) =>
        useModalManager(id, [], noop)
      );
      handle.rerender({ id: "m1" });
      expect(handle.result.current.activeModal).toEqual(null);
    });
  });

  it("handles dynamic modals", () => {
    const handle = renderHook(({ id = "m2", children = [] }) =>
      useModalManager(id, children, noop)
    );
    const child = <MockModal id="m2" />;
    handle.rerender({ children: child });
    expect(handle.result.current.activeModal).toEqual("m2");
    expect(handle.result.current.modals).toHaveLength(1);
  });

  describe("closes active modal", () => {
    it("can capture onClose", () => {
      const onClose = jest.fn();
      const handle = renderHook(() =>
        useModalManager("m1", <MockModal id="m1" />, noop)
      );
      handle.result.current.captureClose(onClose);
      handle.result.current.closeActiveModal();
      expect(onClose).toBeCalledTimes(1);
    });
    it("calls own onClose if missing in modal props", () => {
      const onClose = jest.fn();
      const handle = renderHook(() =>
        useModalManager("m1", <MockModal id="m1" />, onClose)
      );
      handle.result.current.closeActiveModal();
      expect(onClose).toBeCalledTimes(1);
    });
    it("does not explode if no active modal", () => {
      const handle = renderHook(() => useModalManager(null, [], noop));
      expect(handle.result.current.closeActiveModal).not.toThrow();
    });
    it("does not explode if no onClose", () => {
      const handle = renderHook(() =>
        useModalManager("m1", <MockModal id="m1" />, null as any)
      );
      expect(handle.result.current.closeActiveModal).not.toThrow();
    });
  });
});
