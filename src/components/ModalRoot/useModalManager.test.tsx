import { renderHook, act } from "@testing-library/react-hooks";
import { noop } from "../../lib/utils";
import { ModalType } from "./types";
import { useModalManager, modalTransitionReducer } from "./useModalManager";

const MockModal = (p: any) => <div {...p} />;

describe(useModalManager, () => {
  describe("manages multi-phase transition", () => {
    const modals = [
      <MockModal id="m1" key="m1" />,
      <MockModal id="m2" key="m2" />,
    ];
    it("can enter on mount", () => {
      const handle = renderHook(
        ({ id }) => useModalManager(id, modals, noop, noop),
        {
          initialProps: { id: "m1" },
        }
      );
      expect(handle.result.current).toMatchObject({
        activeModal: "m1",
        enteringModal: "m1",
        exitingModal: null,
        delayEnter: false,
      });
      act(() => {
        handle.result.current.onEnter("m1");
      });
      expect(handle.result.current).toMatchObject({
        activeModal: "m1",
        enteringModal: null,
        exitingModal: null,
      });
    });
    it("can enter on update", () => {
      const handle = renderHook(
        ({ id }) => useModalManager(id, modals, noop, noop),
        {
          initialProps: { id: null as string | null },
        }
      );
      expect(handle.result.all).toMatchObject([
        { activeModal: null, enteringModal: null, exitingModal: null },
      ]);
      handle.rerender({ id: "m1" });
      expect(handle.result.current).toMatchObject({
        activeModal: "m1",
        enteringModal: "m1",
        exitingModal: null,
        delayEnter: false,
      });

      act(() => {
        handle.result.current.onEnter("m1");
      });
      expect(handle.result.current).toMatchObject({
        activeModal: "m1",
        enteringModal: null,
        exitingModal: null,
      });
    });
    const flushMount = (initId: string | null = null) => {
      const handle = renderHook(
        ({ id }) => useModalManager(id, modals, noop, noop),
        {
          initialProps: { id: initId },
        }
      );
      act(() => {
        handle.result.current.onEnter(initId);
      });
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
      act(() => {
        handle.result.current.onExit("m1");
      });
      expect(handle.result.current).toMatchObject({
        activeModal: null,
        enteringModal: null,
        exitingModal: null,
      });
    });
    it.each([
      [ModalType.CARD, ModalType.CARD, true],
      [ModalType.PAGE, ModalType.PAGE, false],
    ])("transitions %s -> %s with delay=%s", (t1, t2, delayEnter) => {
      const handle = flushMount("m1");
      handle.result.current.getModalState("m1").type = t1;
      handle.result.current.getModalState("m2").type = t2;
      handle.rerender({ id: "m2" });
      expect(handle.result.current).toMatchObject({
        activeModal: "m2",
        enteringModal: "m2",
        exitingModal: "m1",
        delayEnter,
      });
      act(() => {
        handle.result.current.onExit("m1");
      });
      expect(handle.result.current).toMatchObject({
        activeModal: "m2",
        enteringModal: "m2",
        exitingModal: null,
      });
      act(() => {
        handle.result.current.onEnter("m2");
      });
      expect(handle.result.current).toMatchObject({
        activeModal: "m2",
        enteringModal: null,
        exitingModal: null,
      });
    });
  });

  describe("maintains transition history", () => {
    it("initializes with activeModal", () => {
      const handle = renderHook(() =>
        useModalManager("m1", <MockModal id="m1" />, noop, noop)
      );
      expect(handle.result.current.history).toEqual(["m1"]);
    });
    it("initializes empty if activeModal=null", () => {
      const handle = renderHook(() => useModalManager(null, [], noop, noop));
      expect(handle.result.current.history).toEqual([]);
    });
    it("Handles transition forward", () => {
      const { history, isBack } = modalTransitionReducer(
        {
          history: [],
        },
        { type: "setActive", id: "m1" }
      );
      expect(history).toEqual(["m1"]);
      expect(isBack).toBe(false);
    });
    it("Handles transition back", () => {
      const { history, isBack } = modalTransitionReducer(
        {
          history: ["m1", "m2", "m3"],
        },
        { type: "setActive", id: "m2" }
      );
      expect(history).toEqual(["m1", "m2"]);
      expect(isBack).toBe(true);
    });
    it("resets on activeModal=null", () => {
      const { history, isBack } = modalTransitionReducer(
        {
          history: ["m1", "m2", "m3"],
        },
        { type: "setActive", id: null }
      );
      expect(history).toEqual([]);
      expect(isBack).toBe(false);
    });
  });

  describe("ignores missing modal", () => {
    it("on init", () => {
      const handle = renderHook(() => useModalManager("m1", [], noop, noop));
      expect(handle.result.current.activeModal).toEqual(null);
      expect(handle.result.current.history).toEqual([]);
    });
    it("on update", () => {
      const handle = renderHook(
        ({ id }) => useModalManager(id, [], noop, noop),
        {
          initialProps: { id: null as string | null },
        }
      );
      handle.rerender({ id: "m1" });
      expect(handle.result.current.activeModal).toEqual(null);
    });
  });

  it("handles dynamic modals", () => {
    // const handle = renderHook(({ id = "m1", children = [] }) =>
    //   useModalManager(id, children, noop)
    // );
    // handle.rerender({ children: <MockModal id="m2" /> });

    const handle = renderHook(
      ({ id, children }) => useModalManager(id, children, noop, noop),
      {
        initialProps: {
          id: "m1" as string | null,
          children: [] as React.ReactNode | undefined,
        },
      }
    );
    handle.rerender({
      children: <MockModal id="m2" />,
      id: "m1",
    });
    expect(handle.result.current.getModalState("m2")).toBeTruthy();
  });

  describe("onOpen() callback", () => {
    it("call onOpen provided to component", () => {
      const onOpenOfComponent = jest.fn();
      const onOpenOfArgument = jest.fn();
      const handle = renderHook(() =>
        useModalManager(
          "m1",
          <MockModal id="m1" onOpen={onOpenOfComponent} />,
          onOpenOfArgument,
          noop
        )
      );
      act(() => {
        handle.result.current.onEnter("m1");
      });
      expect(onOpenOfComponent).toBeCalledTimes(1);
      expect(onOpenOfArgument).toBeCalledTimes(0);
    });
    it("call onOpen provided to argument", () => {
      const onOpen = jest.fn();
      const handle = renderHook(() =>
        useModalManager("m1", <MockModal id="m1" />, onOpen, noop)
      );
      act(() => {
        handle.result.current.onEnter("m1");
      });
      expect(onOpen).toBeCalledTimes(1);
    });
  });

  describe("closes active modal", () => {
    it("calls active modal onClose", () => {
      const onClose = jest.fn();
      const handle = renderHook(() =>
        useModalManager(
          "m1",
          <MockModal id="m1" onClose={onClose} />,
          noop,
          noop
        )
      );
      handle.result.current.closeActiveModal();
      expect(onClose).toBeCalledTimes(1);
    });
    it("calls own onClose if missing in modal props", () => {
      const onClose = jest.fn();
      const handle = renderHook(() =>
        useModalManager("m1", <MockModal id="m1" />, noop, onClose)
      );
      handle.result.current.closeActiveModal();
      expect(onClose).toBeCalledTimes(1);
    });
    it("does not explode if no active modal", () => {
      const handle = renderHook(() => useModalManager(null, [], noop, noop));
      expect(handle.result.current.closeActiveModal).not.toThrow();
    });
    it("does not explode if no onClose", () => {
      const handle = renderHook(() =>
        useModalManager("m1", <MockModal id="m1" />, noop, null as any)
      );
      expect(handle.result.current.closeActiveModal).not.toThrow();
    });
  });
});
