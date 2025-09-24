import * as React from 'react';
import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import {
  baselineComponent,
  fakeTimers,
  userEvent,
  waitCSSKeyframesAnimation,
  waitForFloatingPosition,
} from '../../testing/utils';
import { ActionSheetItem } from '../ActionSheetItem/ActionSheetItem';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { ActionSheet, type ActionSheetProps } from './ActionSheet';
import popoutWrapperStyles from '../PopoutWrapper/PopoutWrapper.module.css';

const ActionSheetDesktop = ({ onClose = vi.fn(), ...restProps }: Partial<ActionSheetProps>) => {
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

const ActionSheetMobile = ({ onClose = vi.fn(), ...restProps }: Partial<ActionSheetProps>) => {
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

const ActionSheetMenu = ({ onClose = vi.fn(), ...restProps }: Partial<ActionSheetProps>) => {
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

const ActionSheetSheet = ({ onClose = vi.fn(), ...restProps }: Partial<ActionSheetProps>) => {
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
      const onCloseHandler = vi.fn();
      const handlers = { onClick: vi.fn(), onChange: vi.fn() };

      const result = render(
        <ActionSheet onClose={onCloseHandler}>
          <ActionSheetItem {...props} {...handlers} {...props} data-testid="item" />
        </ActionSheet>,
      );
      await waitForFloatingPosition();
      // эмулируем настоящее событие клика(отличается оно тем, что clientX и clientY != 0)
      // @see packages/vkui/src/components/ActionSheetItem/helpers.ts
      fireEvent(
        screen.getByTestId('item'),
        new MouseEvent('click', {
          clientX: 1,
          clientY: 1,
          bubbles: true,
        }),
      );
      act(vi.runAllTimers);

      if (onCloseHandler.mock.calls.length > 0) {
        result.unmount();
      }

      await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });
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
      const onClose = vi.fn();
      render(
        <ActionSheet data-testid="container" onClose={onClose}>
          <div data-testid="content" />
        </ActionSheet>,
      );
      await waitForFloatingPosition();
      act(vi.runAllTimers);
      await userEvent.click(getNode());
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('closes on click outside', () => {
    it('desktop', async () => {
      const onClose = vi.fn();
      const result = render(<ActionSheetDesktop onClose={onClose} />);
      await waitForFloatingPosition();
      await userEvent.click(document.body);
      await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith({ closedBy: 'other' });
    });

    it('mobile', async () => {
      const onClose = vi.fn();
      const result = render(<ActionSheetMobile onClose={onClose} />);
      await waitForFloatingPosition();
      await userEvent.click(
        result.container.querySelector<HTMLElement>(`.${popoutWrapperStyles.overlay}`)!,
      );
      await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith({ closedBy: 'other' });
    });
  });

  it('renders header and text', () => {
    render(<ActionSheetMobile title="The header title" description="Text footnote" />);
    act(vi.runAllTimers);
    expect(screen.queryByText('The header title')).toBeTruthy();
    expect(screen.queryByText('Text footnote')).toBeTruthy();
  });

  it('renders close button only on mobile iOS', async () => {
    const { rerender } = render(
      <ConfigProvider platform="ios">
        <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer>
          <ActionSheet toggleRef={targetEl} onClose={vi.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );
    await waitForFloatingPosition();

    // mobile iOS
    expect(screen.queryByText('Отмена')).toBeTruthy();

    rerender(
      <ConfigProvider platform="ios">
        <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasPointer>
          <ActionSheet toggleRef={targetEl} onClose={vi.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );
    await waitForFloatingPosition();

    // desktop iOS
    expect(screen.queryByText('Отмена')).toBeFalsy();

    rerender(
      <ConfigProvider platform="android">
        <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer>
          <ActionSheet toggleRef={targetEl} onClose={vi.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );
    await waitForFloatingPosition();

    // mobile Android
    expect(screen.queryByText('Отмена')).toBeFalsy();

    rerender(
      <ConfigProvider platform="android">
        <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasPointer>
          <ActionSheet toggleRef={targetEl} onClose={vi.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );
    await waitForFloatingPosition();

    // desktop Android
    expect(screen.queryByText('Отмена')).toBeFalsy();
  });

  describe('handle allowClickPropagation correctly', () => {
    it.each([
      ['menu', ActionSheetMenu],
      ['sheet', ActionSheetSheet],
    ])('%s', async (_name, ActionSheet) => {
      const onClose = vi.fn();
      const onClick = vi.fn();
      const { rerender } = render(
        <div onClick={onClick}>
          <ActionSheet data-testid="container" onClose={onClose}>
            <div data-testid="content" />
          </ActionSheet>
        </div>,
      );
      await waitForFloatingPosition();
      act(vi.runAllTimers);

      await userEvent.click(screen.getByTestId('content'));
      expect(onClick).not.toHaveBeenCalled();

      rerender(
        <div onClick={onClick}>
          <ActionSheet data-testid="container" onClose={onClose} allowClickPropagation>
            <div data-testid="content" />
          </ActionSheet>
        </div>,
      );

      await waitForFloatingPosition();
      act(vi.runAllTimers);

      await userEvent.click(screen.getByTestId('content'));
      expect(onClick).toHaveBeenCalled();
    });
  });
});
