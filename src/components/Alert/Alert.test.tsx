import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";
import { ViewWidth } from "../../hoc/withAdaptivity";
import { baselineComponent, runAllTimers } from "../../testing/utils";
import { Alert } from "./Alert";
import { ANDROID, IOS } from "../../lib/platform";
import { ConfigProvider } from "../ConfigProvider/ConfigProvider";

describe("Alert", () => {
  beforeAll(() => jest.useFakeTimers("modern"));
  afterAll(() => jest.useRealTimers());
  baselineComponent(Alert);
  describe("closes", () => {
    it.each(["overlay", "close"])("with %s click", (trigger) => {
      const onClose = jest.fn();
      render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <Alert onClose={onClose} />
        </AdaptivityProvider>
      );
      const target =
        trigger === "overlay"
          ? ".PopoutWrapper__overlay"
          : ".ModalDismissButton";

      userEvent.click(document.querySelector(target) as Element);
      expect(onClose).not.toBeCalled();
      runAllTimers();
      expect(onClose).toBeCalledTimes(1);
    });
  });
  describe("calls actions", () => {
    describe.each([ANDROID, IOS])("on %s", (platform) => {
      it("calls action", () => {
        const action = jest.fn();
        render(
          <ConfigProvider platform={platform}>
            <Alert
              actions={[{ action, title: "__action__", mode: "default" }]}
            />
          </ConfigProvider>
        );
        userEvent.click(screen.getByText("__action__"));
        expect(action).toBeCalledTimes(1);
      });
      it("calls action after close when autoclose=true", () => {
        const action = jest.fn();
        const onClose = jest.fn();
        render(
          <ConfigProvider platform={platform}>
            <Alert
              onClose={onClose}
              actions={[
                {
                  action,
                  title: "__action__",
                  mode: "default",
                  autoclose: true,
                },
              ]}
            />
          </ConfigProvider>
        );
        userEvent.click(screen.getByText("__action__"));
        expect(action).not.toBeCalled();
        expect(onClose).not.toBeCalled();
        runAllTimers();
        expect(action).toBeCalledTimes(1);
        expect(onClose).toBeCalledTimes(1);
      });
    });
  });
});
