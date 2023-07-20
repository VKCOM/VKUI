import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewWidth } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { baselineComponent, runAllTimers, waitForFloatingPosition } from '../../testing/utils';
import { ActionSheetItem } from '../ActionSheetItem/ActionSheetItem';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { ActionSheet, ActionSheetProps } from './ActionSheet';

describe('ActionSheet', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());
  const toggle = document.createElement('div');
  const ActionSheetDesktop = (props: Partial<ActionSheetProps>) => (
    <ConfigProvider platform={Platform.VKCOM}>
      <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasPointer>
        <ActionSheet toggleRef={toggle} onClose={jest.fn()} {...props} />
      </AdaptivityProvider>
    </ConfigProvider>
  );
  const ActionSheetMobile = (props: Partial<ActionSheetProps>) => (
    <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer={false}>
      <ActionSheet toggleRef={toggle} onClose={jest.fn()} {...props} />
    </AdaptivityProvider>
  );

  describe.each([
    ['desktop', ActionSheetDesktop],
    ['mobile', ActionSheetMobile],
  ])('%s', (_name, ActionSheet) => {
    baselineComponent((props) => <ActionSheet {...props} />, {
      // TODO [a11y]: "Exceeded timeout of 5000 ms for a test.
      //              Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."
      a11y: false,
    });

    describe('calls handlers', () => {
      it.each([
        {},
        { selectable: true },
        { autoClose: true },
        { autoClose: true, selectable: true },
      ])('when %s', async (props) => {
        const handlers = { onClick: jest.fn(), onChange: jest.fn() };
        const { unmount } = render(
          <ActionSheet onClose={() => unmount()}>
            <ActionSheetItem {...props} {...handlers} {...props} data-testid="item" />
          </ActionSheet>,
        );
        await waitForFloatingPosition();
        userEvent.click(screen.getByTestId('item'));

        runAllTimers();
        expect(handlers.onClick).toBeCalled();
        props.selectable && expect(handlers.onChange).toBeCalled();
      });
    });

    it.each([
      ['content', () => screen.getByTestId('xxx')],
      ['toggle', () => toggle],
    ])('does not close on %s click', async (_name, getNode) => {
      const onClose = jest.fn();
      render(
        <ActionSheet onClose={onClose}>
          <div data-testid="xxx" />
        </ActionSheet>,
      );
      await waitForFloatingPosition();
      runAllTimers();
      userEvent.click(getNode());
      expect(onClose).not.toBeCalled();
    });
  });

  describe('desktop', () => {
    it('closes on click outside', async () => {
      const onClose = jest.fn();
      render(<ActionSheetDesktop onClose={onClose} />);
      await waitForFloatingPosition();
      runAllTimers();
      userEvent.click(document.body);
      runAllTimers();
      expect(onClose).toBeCalledTimes(1);
    });
    it('calls popupDirection with element', async () => {
      const popupDirection = jest.fn();
      render(<ActionSheetDesktop popupDirection={popupDirection} />);
      await waitForFloatingPosition();
      expect(popupDirection).toBeCalledWith({
        current: document.querySelector('.vkuiActionSheet'),
      });
    });
  });

  describe('mobile', () => {
    it('closes on overlay click', async () => {
      const onClose = jest.fn();
      render(<ActionSheetMobile onClose={onClose} />);
      await waitForFloatingPosition();
      runAllTimers();
      userEvent.click(document.querySelector('.vkuiPopoutWrapper__overlay') as Element);
      runAllTimers();
      expect(onClose).toBeCalledTimes(1);
    });
  });
});
