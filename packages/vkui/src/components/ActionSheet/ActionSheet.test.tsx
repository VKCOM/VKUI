import * as React from 'react';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import {
  baselineComponent,
  fakeTimers,
  userEvent,
  waitForFloatingPosition,
} from '../../testing/utils';
import { ActionSheetItem } from '../ActionSheetItem/ActionSheetItem';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { ActionSheet, ActionSheetProps } from './ActionSheet';
import popoutWrapperStyles from '../PopoutWrapper/PopoutWrapper.module.css';

const ActionSheetDesktop = ({ onClose = jest.fn(), ...restProps }: Partial<ActionSheetProps>) => {
  const [toggleRef, setToggleRef] = React.useState<HTMLElement | null>(null);
  React.useLayoutEffect(() => {
    setToggleRef(screen.getByTestId('target'));
  }, []);
  return (
    <ConfigProvider platform="vkcom">
      <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasPointer>
        <ActionSheet
          aria-label="menu list"
          toggleRef={toggleRef}
          onClose={onClose}
          {...restProps}
        />
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

const ActionSheetMobile = ({ onClose = jest.fn(), ...restProps }: Partial<ActionSheetProps>) => {
  const [toggleRef, setToggleRef] = React.useState<HTMLElement | null>(null);
  React.useLayoutEffect(() => {
    setToggleRef(screen.getByTestId('target'));
  }, []);
  return (
    <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer={false}>
      <ActionSheet aria-label="menu list" toggleRef={toggleRef} onClose={onClose} {...restProps} />
    </AdaptivityProvider>
  );
};

const ActionSheetMenu = ({ onClose = jest.fn(), ...restProps }: Partial<ActionSheetProps>) => {
  const [toggleRef, setToggleRef] = React.useState<HTMLElement | null>(null);
  React.useLayoutEffect(() => {
    setToggleRef(screen.getByTestId('target'));
  }, []);
  return (
    <ActionSheet
      aria-label="menu list"
      mode="menu"
      toggleRef={toggleRef}
      onClose={onClose}
      {...restProps}
    />
  );
};

const ActionSheetSheet = ({ onClose = jest.fn(), ...restProps }: Partial<ActionSheetProps>) => {
  const [toggleRef, setToggleRef] = React.useState<HTMLElement | null>(null);
  React.useLayoutEffect(() => {
    setToggleRef(screen.getByTestId('target'));
  }, []);
  return (
    <ActionSheet
      aria-label="menu list"
      mode="sheet"
      toggleRef={toggleRef}
      onClose={onClose}
      {...restProps}
    />
  );
};

describe(ActionSheet, () => {
  let targetEl: HTMLElement | null = null;

  beforeEach(() => {
    targetEl = document.createElement('div');
    targetEl.dataset.testid = 'target';
    document.body.appendChild(targetEl);
  });

  afterEach(() => {
    if (targetEl) {
      document.body.removeChild(targetEl);
      targetEl = null;
    }
  });

  fakeTimers();

  describe.each([
    ['desktop', ActionSheetDesktop],
    ['mobile', ActionSheetMobile],
    ['menu', ActionSheetMenu],
    ['sheet', ActionSheetSheet],
  ])('baseline for %s', (mode, ActionSheet) => {
    baselineComponent(ActionSheet, undefined, mode);
  });

  describe.each([
    {},
    { selectable: true },
    { autoCloseDisabled: true },
    { autoCloseDisabled: true, selectable: true },
    { isCancelItem: true },
  ])('calls handlers when %s', (props) => {
    it.each([
      ['desktop', ActionSheetDesktop],
      ['mobile', ActionSheetMobile],
      ['menu', ActionSheetMenu],
      ['sheet', ActionSheetSheet],
    ])('%s', async (_, ActionSheet) => {
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

      act(jest.runAllTimers);
      expect(handlers.onClick).toHaveBeenCalled();
      props.selectable && expect(handlers.onChange).toHaveBeenCalled();

      if (props.autoCloseDisabled) {
        expect(onCloseHandler).not.toHaveBeenCalled();
      } else if (!props.autoCloseDisabled && props.isCancelItem) {
        expect(onCloseHandler).toHaveBeenCalledWith({ closedBy: 'cancel-item' });
      } else {
        !props.autoCloseDisabled &&
          expect(onCloseHandler).toHaveBeenCalledWith({ closedBy: 'action-item' });
      }
    });
  });

  describe.each([
    ['container', () => screen.getByTestId('container')],
    ['content', () => screen.getByTestId('content')],
  ])('does not close on %s click', (_name, getNode) => {
    it.each([
      ['desktop', ActionSheetDesktop],
      ['mobile', ActionSheetMobile],
      ['menu', ActionSheetMenu],
      ['sheet', ActionSheetSheet],
    ])('%s', async (_name, ActionSheet) => {
      const onClose = jest.fn();
      render(
        <ActionSheet data-testid="container" onClose={onClose}>
          <div data-testid="content" />
        </ActionSheet>,
      );
      await waitForFloatingPosition();
      act(jest.runAllTimers);
      await userEvent.click(getNode());
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('closes on click outside', () => {
    it('desktop', async () => {
      const onClose = jest.fn();
      render(<ActionSheetDesktop onClose={onClose} />);
      await waitForFloatingPosition();
      await userEvent.click(document.body);
      act(jest.runAllTimers);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith({ closedBy: 'other' });
    });

    it('mobile', async () => {
      const onClose = jest.fn();
      const { container } = render(<ActionSheetMobile onClose={onClose} />);
      await waitForFloatingPosition();
      await userEvent.click(
        container.querySelector<HTMLElement>(`.${popoutWrapperStyles['PopoutWrapper__overlay']}`)!,
      );
      act(jest.runAllTimers);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith({ closedBy: 'other' });
    });
  });

  it('renders header and text', () => {
    render(<ActionSheetMobile header="The header title" text="Text footnote" />);
    act(jest.runAllTimers);
    expect(screen.queryByText('The header title')).toBeTruthy();
    expect(screen.queryByText('Text footnote')).toBeTruthy();
  });

  it('renders close button only on mobile iOS', async () => {
    const { rerender } = render(
      <ConfigProvider platform="ios">
        <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer>
          <ActionSheet toggleRef={targetEl} onClose={jest.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );
    await waitForFloatingPosition();

    // mobile iOS
    expect(screen.queryByText('Отмена')).toBeTruthy();

    rerender(
      <ConfigProvider platform="ios">
        <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasPointer>
          <ActionSheet toggleRef={targetEl} onClose={jest.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );
    await waitForFloatingPosition();

    // desktop iOS
    expect(screen.queryByText('Отмена')).toBeFalsy();

    rerender(
      <ConfigProvider platform="android">
        <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer>
          <ActionSheet toggleRef={targetEl} onClose={jest.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );
    await waitForFloatingPosition();

    // mobile Android
    expect(screen.queryByText('Отмена')).toBeFalsy();

    rerender(
      <ConfigProvider platform="android">
        <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasPointer>
          <ActionSheet toggleRef={targetEl} onClose={jest.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );
    await waitForFloatingPosition();

    // desktop Android
    expect(screen.queryByText('Отмена')).toBeFalsy();
  });
});
