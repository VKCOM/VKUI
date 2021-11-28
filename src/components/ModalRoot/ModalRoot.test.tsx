import * as React from "react";
import {
  baselineComponent,
  mountTest,
  runAllTimers,
  setupFakeAsync,
} from "../../testing/utils";
import { render } from "@testing-library/react";
import { ModalRoot as ModalRootAdaptive } from "./ModalRootAdaptive";
import userEvent from "@testing-library/user-event";
import { NavIdProps } from "index";
import { useModal } from "./useModal";

const MockModal: React.FC<NavIdProps & { onClose?: VoidFunction }> = ({
  id,
  onClose,
}) => {
  const { innerElement } = useModal(id, { startTranslateY: 0, onClose });
  return <div id={id} ref={innerElement} />;
};

const clickFade = () =>
  userEvent.click(document.querySelector(".ModalRoot__mask"));
setupFakeAsync();

describe.each(["mobile", "desktop"] as const)("%s", (mode) => {
  const ModalRoot: typeof ModalRootAdaptive = (p) => (
    <ModalRootAdaptive mode={mode} {...p} />
  );
  baselineComponent<any>(ModalRoot, { forward: false });
  describe("With ModalPage", () =>
    mountTest(() => (
      <ModalRoot activeModal="m">
        <MockModal id="m" />
      </ModalRoot>
    )));

  describe("shows active modal", () => {
    const modals = [
      <MockModal id="m" key="m" />,
      <MockModal id="other" key="o" />,
    ];
    it("on mount", () => {
      render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      expect(document.getElementById("m")).not.toBeNull();
      expect(document.getElementById("other")).toBeNull();
    });
    it("shows via prop update", () => {
      const h = render(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
      runAllTimers();
      h.rerender(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      runAllTimers();
      expect(document.getElementById("m")).not.toBeNull();
      expect(document.getElementById("other")).toBeNull();
    });
    it("hides via prop update", () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      runAllTimers();
      h.rerender(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
      runAllTimers();
      expect(document.getElementById("m")).toBeNull();
      expect(document.getElementById("other")).toBeNull();
    });
    it("changes via prop update", () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      runAllTimers();
      h.rerender(<ModalRoot activeModal="other">{modals}</ModalRoot>);
      runAllTimers();
      expect(document.getElementById("m")).toBeNull();
      expect(document.getElementById("other")).not.toBeNull();
    });
    it("changes via prop update during transition", () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      h.rerender(<ModalRoot activeModal="other">{modals}</ModalRoot>);
      runAllTimers();
      expect(document.getElementById("m")).toBeNull();
      expect(document.getElementById("other")).not.toBeNull();
    });
  });

  describe("calls onClose", () => {
    describe("on fade click", () => {
      it("calls modal onClose", () => {
        const onClose = jest.fn();
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <MockModal id="m" onClose={onClose} />
          </ModalRoot>
        );
        // wait for animations
        runAllTimers();
        clickFade();
        expect(onClose).toBeCalledTimes(1);
        expect(onCloseRoot).not.toBeCalled();
      });
      it("calls root onClose if modal has no onClose", () => {
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <MockModal id="m" />
          </ModalRoot>
        );
        // wait for animations
        runAllTimers();
        clickFade();
        expect(onCloseRoot).toBeCalledTimes(1);
      });
    });
    if (mode === "desktop") {
      it("on esc click", () => {
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <MockModal id="m" />
          </ModalRoot>
        );
        // wait for animations
        runAllTimers();
        userEvent.keyboard("{esc}");
        expect(onCloseRoot).toBeCalledTimes(1);
      });
    }
  });
});
