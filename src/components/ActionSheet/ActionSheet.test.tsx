import { render, screen } from "@testing-library/react";
import { ViewWidth } from "../../hoc/withAdaptivity";
import {
  baselineComponent,
  waitForPopper,
  runAllTimers,
} from "../../testing/utils";
import { ActionSheet, ActionSheetProps } from "./ActionSheet";
import { ActionSheetItem } from "../ActionSheetItem/ActionSheetItem";
import userEvent from "@testing-library/user-event";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";

describe("ActionSheet", () => {
  beforeAll(() => jest.useFakeTimers("modern"));
  afterAll(() => jest.useRealTimers());
  const toggle = document.createElement("div");
  const ActionSheetDesktop = (props: Partial<ActionSheetProps>) => (
    <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasMouse>
      <ActionSheet toggleRef={toggle} {...props} iosCloseItem={null} />
    </AdaptivityProvider>
  );
  const ActionSheetMobile = (props: Partial<ActionSheetProps>) => (
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
      ])("when %s", async (props) => {
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
        await waitForPopper();
        userEvent.click(screen.getByTestId("item"));

        runAllTimers();
        expect(handlers.onClick).toBeCalled();
        props.selectable && expect(handlers.onChange).toBeCalled();
      });
    });

    it.each([
      ["content", () => screen.getByTestId("xxx")],
      ["toggle", () => toggle],
    ])("does not close on %s click", async (_name, getNode) => {
      const onClose = jest.fn();
      render(
        <ActionSheet onClose={onClose}>
          <div data-testid="xxx" />
        </ActionSheet>
      );
      await waitForPopper();
      runAllTimers();
      userEvent.click(getNode());
      expect(onClose).not.toBeCalled();
    });
  });

  describe("desktop", () => {
    it("closes on click outside", async () => {
      const onClose = jest.fn();
      render(<ActionSheetDesktop onClose={onClose} />);
      await waitForPopper();
      runAllTimers();
      userEvent.click(document.body);
      runAllTimers();
      expect(onClose).toBeCalledTimes(1);
    });
    it("calls popupDirection with element", async () => {
      const popupDirection = jest.fn();
      render(<ActionSheetDesktop popupDirection={popupDirection} />);
      await waitForPopper();
      expect(popupDirection).toBeCalledWith({
        current: document.querySelector(".ActionSheet"),
      });
    });
  });

  describe("mobile", () => {
    it("closes on overlay click", async () => {
      const onClose = jest.fn();
      render(<ActionSheetMobile onClose={onClose} />);
      await waitForPopper();
      runAllTimers();
      userEvent.click(
        document.querySelector(".PopoutWrapper__overlay") as Element
      );
      runAllTimers();
      expect(onClose).toBeCalledTimes(1);
    });
  });
});
