import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ViewWidth } from "../../hoc/withAdaptivity";
import { baselineComponent } from "../../testing/utils";
import { ActionSheet, ActionSheetProps } from "./ActionSheet";
import ActionSheetItem from "../ActionSheetItem/ActionSheetItem";
import userEvent from "@testing-library/user-event";
import AdaptivityProvider from "../AdaptivityProvider/AdaptivityProvider";
import { FC } from "react";

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

describe("ActionSheet", () => {
  const toggle = document.createElement("div");
  const ActionSheetDesktop: FC<Partial<ActionSheetProps>> = (props) => (
    <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasMouse>
      <ActionSheet toggleRef={toggle} {...props} iosCloseItem={null} />
    </AdaptivityProvider>
  );
  const ActionSheetMobile: FC<Partial<ActionSheetProps>> = (props) => (
    <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasMouse={false}>
      <ActionSheet toggleRef={toggle} {...props} iosCloseItem={null} />
    </AdaptivityProvider>
  );

  describe.each([
    ["desktop", ActionSheetDesktop],
    ["mobile", ActionSheetMobile],
  ])("%s", (_name, ActionSheet) => {
    baselineComponent((p) => <ActionSheet {...p} />);

    describe("calls handlers", () => {
      it.each([
        {},
        { selectable: true },
        { autoclose: true },
        { autoclose: true, selectable: true },
      ])("when %s", (props) => {
        const handlers = { onClick: jest.fn(), onChange: jest.fn() };
        const { unmount } = render(
          <ActionSheet onClose={() => unmount()}>
            <ActionSheetItem
              {...props}
              {...handlers}
              {...props}
              data-testid="item"
            />
          </ActionSheet>
        );
        userEvent.click(screen.getByTestId("item"));
        jest.runAllTimers();
        expect(handlers.onClick).toBeCalled();
        props.selectable && expect(handlers.onChange).toBeCalled();
      });
    });

    it.each([
      ["content", () => screen.getByTestId("xxx")],
      ["toggle", () => toggle],
    ])("does not close on %s click", (_name, getNode) => {
      const onClose = jest.fn();
      render(
        <ActionSheet onClose={onClose}>
          <div data-testid="xxx" />
        </ActionSheet>
      );
      act(() => {
        jest.runAllTimers();
      });
      userEvent.click(getNode());
      expect(onClose).not.toBeCalled();
    });
  });

  describe("desktop", () => {
    it("closes on click outside", () => {
      const onClose = jest.fn();
      render(<ActionSheetDesktop onClose={onClose} />);
      jest.runAllTimers();
      userEvent.click(document.body);
      jest.runAllTimers();
      expect(onClose).toBeCalledTimes(1);
    });
    it("calls popupDirection with element", () => {
      const popupDirection = jest.fn();
      render(<ActionSheetDesktop popupDirection={popupDirection} />);
      expect(popupDirection).toBeCalledWith({
        current: document.querySelector(".ActionSheet"),
      });
    });
  });

  describe("mobile", () => {
    it("closes on overlay click", () => {
      const onClose = jest.fn();
      render(<ActionSheetMobile onClose={onClose} />);
      jest.runAllTimers();
      userEvent.click(
        document.querySelector(".PopoutWrapper__overlay") as Element
      );
      jest.runAllTimers();
      expect(onClose).toBeCalledTimes(1);
    });
  });
});
