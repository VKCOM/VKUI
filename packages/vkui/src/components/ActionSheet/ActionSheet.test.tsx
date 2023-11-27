import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import {
  baselineComponent,
  fakeTimers,
  runAllTimers,
  userEvent,
  waitForFloatingPosition,
} from '../../testing/utils';
import { ActionSheetItem } from '../ActionSheetItem/ActionSheetItem';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { ActionSheet, ActionSheetProps } from './ActionSheet';

describe('ActionSheet', () => {
  fakeTimers();

  const toggle = document.createElement('div');
  const ActionSheetDesktop = (props: Partial<ActionSheetProps>) => (
    <ConfigProvider platform="vkcom">
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
  const ActionSheetMenu = (props: Partial<ActionSheetProps>) => (
    <ActionSheet mode="menu" toggleRef={toggle} onClose={jest.fn()} {...props} />
  );
  const ActionSheetSheet = (props: Partial<ActionSheetProps>) => (
    <ActionSheet mode="sheet" toggleRef={toggle} onClose={jest.fn()} {...props} />
  );

  describe.each([
    ['desktop', ActionSheetDesktop],
    ['mobile', ActionSheetMobile],
    ['menu', ActionSheetMenu],
    ['sheet', ActionSheetSheet],
  ])('%s', (_name, ActionSheet) => {
    baselineComponent(ActionSheet);

    describe('calls handlers', () => {
      it.each([
        {},
        { selectable: true },
        { autoClose: true },
        { autoClose: true, selectable: true },
        { autoClose: true, isCancelItem: true },
      ])('when %s', async (props) => {
        const onCloseHandler = jest.fn();
        const handlers = { onClick: jest.fn(), onChange: jest.fn() };

        const { unmount } = render(
          <ActionSheet
            onClose={(...args) => {
              onCloseHandler(...args);
              unmount();
            }}
          >
            <ActionSheetItem {...props} {...handlers} {...props} data-testid="item" />
          </ActionSheet>,
        );
        await waitForFloatingPosition();
        await userEvent.click(screen.getByTestId('item'));

        runAllTimers();
        expect(handlers.onClick).toBeCalled();
        props.selectable && expect(handlers.onChange).toBeCalled();

        if (!props.autoClose) {
          expect(onCloseHandler).not.toBeCalled();
        } else if (props.autoClose && props.isCancelItem) {
          expect(onCloseHandler).toBeCalledWith({ closedBy: 'cancel-item' });
        } else {
          props.autoClose && expect(onCloseHandler).toBeCalledWith({ closedBy: 'action-item' });
        }
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
      await userEvent.click(getNode());

      expect(onClose).not.toBeCalled();
    });
  });

  describe('desktop', () => {
    it('closes on click outside', async () => {
      const onClose = jest.fn();
      render(<ActionSheetDesktop onClose={onClose} />);
      await waitForFloatingPosition();
      await userEvent.click(document.body);
      expect(onClose).toBeCalledTimes(1);
      expect(onClose).toBeCalledWith({ closedBy: 'other' });
    });
    it('closes on item click with autoClose', async () => {
      const onClose = jest.fn();
      render(<ActionSheetDesktop onClose={onClose} />);
      await waitForFloatingPosition();
      runAllTimers();
      await userEvent.click(document.body);
      runAllTimers();

      expect(onClose).toBeCalledTimes(1);
      expect(onClose).toBeCalledWith({ closedBy: 'other' });
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
      await userEvent.click(document.querySelector('.vkuiPopoutWrapper__overlay') as Element);
      runAllTimers();
      expect(onClose).toBeCalledTimes(1);
      expect(onClose).toBeCalledWith({ closedBy: 'other' });
    });
  });

  test('renders header and text', () => {
    render(<ActionSheetMobile header="The header title" text="Text footnote" />);
    expect(screen.queryByText('The header title')).toBeTruthy();
    expect(screen.queryByText('Text footnote')).toBeTruthy();
  });

  test('renders close button only on mobile iOS', () => {
    const { rerender } = render(
      <ConfigProvider platform="ios">
        <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer>
          <ActionSheet onClose={jest.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );

    // mobile iOS
    expect(screen.queryByText('Отмена')).toBeTruthy();

    rerender(
      <ConfigProvider platform="ios">
        <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasPointer>
          <ActionSheet onClose={jest.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );

    // desktop iOS
    expect(screen.queryByText('Отмена')).toBeFalsy();

    rerender(
      <ConfigProvider platform="android">
        <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer>
          <ActionSheet onClose={jest.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );

    // mobile Android
    expect(screen.queryByText('Отмена')).toBeFalsy();

    rerender(
      <ConfigProvider platform="android">
        <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasPointer>
          <ActionSheet onClose={jest.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );

    // desktop Android
    expect(screen.queryByText('Отмена')).toBeFalsy();
  });
});
