import * as React from 'react';
import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import {
  baselineComponent,
  fakeTimersForScope,
  userEvent,
  waitCSSKeyframesAnimation,
  waitForFloatingPosition,
  withFakeTimers,
} from '../../testing/utils';
import { ActionSheetItem } from '../ActionSheetItem/ActionSheetItem';
import { ActionSheetItemContext } from '../ActionSheetItem/context';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { ActionSheet, type ActionSheetProps } from './ActionSheet';
import { ActionSheetDefaultIosCloseItem } from './ActionSheetDefaultIosCloseItem';
import popoutWrapperStyles from '../PopoutWrapper/PopoutWrapper.module.css';

const ActionSheetDesktop = ({
  onClose = vi.fn(),
  onClosed = vi.fn(),
  ...restProps
}: Partial<ActionSheetProps>) => {
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
          onClosed={onClosed}
          {...restProps}
        />
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

const ActionSheetMobile = ({
  onClose = vi.fn(),
  onClosed = vi.fn(),
  ...restProps
}: Partial<ActionSheetProps>) => {
  const [toggleRef, setToggleRef] = React.useState<HTMLElement | null>(null);
  React.useLayoutEffect(() => {
    setToggleRef(screen.getByTestId('target'));
  }, []);
  return (
    <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer={false}>
      <ActionSheet
        aria-label="menu list"
        toggleRef={toggleRef}
        onClose={onClose}
        onClosed={onClosed}
        {...restProps}
      />
    </AdaptivityProvider>
  );
};

const ActionSheetMenu = ({
  onClose = vi.fn(),
  onClosed = vi.fn(),
  ...restProps
}: Partial<ActionSheetProps>) => {
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
      onClosed={onClosed}
      {...restProps}
    />
  );
};

const ActionSheetSheet = ({
  onClose = vi.fn(),
  onClosed = vi.fn(),
  ...restProps
}: Partial<ActionSheetProps>) => {
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
      onClosed={onClosed}
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
    fakeTimersForScope();
    it.each([
      ['desktop', ActionSheetDesktop],
      ['mobile', ActionSheetMobile],
      ['menu', ActionSheetMenu],
      ['sheet', ActionSheetSheet],
    ])('%s', async (_, ActionSheet) => {
      const onClosedHandler = vi.fn();
      const onCloseHandler = vi.fn();
      const handlers = { onClick: vi.fn(), onChange: vi.fn() };

      const result = render(
        <ActionSheet onClosed={onClosedHandler} onClose={onCloseHandler}>
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
      await act(vi.runAllTimers);

      if (onClosedHandler.mock.calls.length > 0) {
        result.unmount();
      }

      await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });
      expect(handlers.onClick).toHaveBeenCalled();
      props.selectable && expect(handlers.onChange).toHaveBeenCalled();

      if (props.autoCloseDisabled) {
        expect(onClosedHandler).not.toHaveBeenCalled();
        expect(onCloseHandler).not.toHaveBeenCalled();
      } else if (!props.autoCloseDisabled && props.isCancelItem) {
        expect(onClosedHandler).toHaveBeenCalledExactlyOnceWith({ closedBy: 'cancel-item' });
        expect(onCloseHandler).toHaveBeenCalledExactlyOnceWith('click-cancel-item');
      } else {
        !props.autoCloseDisabled &&
          expect(onClosedHandler).toHaveBeenCalledExactlyOnceWith({ closedBy: 'action-item' });
        expect(onCloseHandler).toHaveBeenCalledExactlyOnceWith('click-action-item');
      }
    });
  });

  describe.each([
    ['container', () => screen.getByTestId('container')],
    ['content', () => screen.getByTestId('content')],
  ])('does not close on %s click', (_name, getNode) => {
    fakeTimersForScope();
    it.each([
      ['desktop', ActionSheetDesktop],
      ['mobile', ActionSheetMobile],
      ['menu', ActionSheetMenu],
      ['sheet', ActionSheetSheet],
    ])('%s', async (_name, ActionSheet) => {
      const onClosed = vi.fn();
      render(
        <ActionSheet data-testid="container" onClosed={onClosed}>
          <div data-testid="content" />
        </ActionSheet>,
      );
      await waitForFloatingPosition();
      await act(vi.runAllTimers);
      await userEvent.click(getNode());
      expect(onClosed).not.toHaveBeenCalled();
    });
  });

  describe('closes on click outside', () => {
    fakeTimersForScope();
    it('desktop', async () => {
      const onClose = vi.fn();
      const onClosed = vi.fn();
      const result = render(<ActionSheetDesktop onClose={onClose} onClosed={onClosed} />);
      await waitForFloatingPosition();
      await userEvent.click(
        result.container.querySelector<HTMLElement>(`.${popoutWrapperStyles.overlay}`)!,
      );
      await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });
      expect(onClose).toHaveBeenCalledExactlyOnceWith('click-overlay');
      expect(onClosed).toHaveBeenCalledExactlyOnceWith({ closedBy: 'other' });
    });

    it('mobile', async () => {
      const onClose = vi.fn();
      const onClosed = vi.fn();
      const result = render(<ActionSheetMobile onClose={onClose} onClosed={onClosed} />);
      await waitForFloatingPosition();
      await userEvent.click(
        result.container.querySelector<HTMLElement>(`.${popoutWrapperStyles.overlay}`)!,
      );
      await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });
      expect(onClose).toHaveBeenCalledExactlyOnceWith('click-overlay');
      expect(onClosed).toHaveBeenCalledExactlyOnceWith({ closedBy: 'other' });
    });
  });

  it(
    'renders header and text',
    withFakeTimers(async () => {
      render(<ActionSheetMobile title="The header title" description="Text footnote" />);
      await act(vi.runAllTimers);
      expect(screen.queryByText('The header title')).toBeTruthy();
      expect(screen.queryByText('Text footnote')).toBeTruthy();
    }),
  );

  it('renders close button only on mobile iOS', async () => {
    const { rerender } = render(
      <ConfigProvider platform="ios">
        <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer>
          <ActionSheet toggleRef={targetEl} onClosed={vi.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );
    await waitForFloatingPosition();

    // mobile iOS
    expect(screen.queryByText('Отмена')).toBeTruthy();

    rerender(
      <ConfigProvider platform="ios">
        <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasPointer>
          <ActionSheet toggleRef={targetEl} onClosed={vi.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );
    await waitForFloatingPosition();

    // desktop iOS
    expect(screen.queryByText('Отмена')).toBeFalsy();

    rerender(
      <ConfigProvider platform="android">
        <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer>
          <ActionSheet toggleRef={targetEl} onClosed={vi.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );
    await waitForFloatingPosition();

    // mobile Android
    expect(screen.queryByText('Отмена')).toBeFalsy();

    rerender(
      <ConfigProvider platform="android">
        <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasPointer>
          <ActionSheet toggleRef={targetEl} onClosed={vi.fn()} />
        </AdaptivityProvider>
      </ConfigProvider>,
    );
    await waitForFloatingPosition();

    // desktop Android
    expect(screen.queryByText('Отмена')).toBeFalsy();
  });

  describe('handle allowClickPropagation correctly', () => {
    fakeTimersForScope();
    it.each([
      ['menu', ActionSheetMenu],
      ['sheet', ActionSheetSheet],
    ])('%s', async (_name, ActionSheet) => {
      const onClosed = vi.fn();
      const onClick = vi.fn();
      const { rerender } = render(
        <div onClick={onClick}>
          <ActionSheet data-testid="container" onClosed={onClosed}>
            <div data-testid="content" />
          </ActionSheet>
        </div>,
      );
      await waitForFloatingPosition();
      await act(vi.runAllTimers);

      await userEvent.click(screen.getByTestId('content'));
      expect(onClick).not.toHaveBeenCalled();

      rerender(
        <div onClick={onClick}>
          <ActionSheet data-testid="container" onClosed={onClosed} allowClickPropagation>
            <div data-testid="content" />
          </ActionSheet>
        </div>,
      );

      await waitForFloatingPosition();
      await act(vi.runAllTimers);

      await userEvent.click(screen.getByTestId('content'));
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('cancel item detection', () => {
    fakeTimersForScope();

    const testCancelItemDetection = async (
      ActionSheet: typeof ActionSheetDesktop,
      {
        isCancelItem,
        isCancelItemAtContext = false,
      }: { isCancelItem?: boolean; isCancelItemAtContext?: boolean },
    ) => {
      const onClose = vi.fn();
      const onClosed = vi.fn();
      const result = render(
        <ActionSheet onClose={onClose} onClosed={onClosed}>
          <ActionSheetItemContext.Provider
            value={{
              isCancelItem: isCancelItemAtContext,
            }}
          >
            <ActionSheetItem data-testid="cancel-item" isCancelItem={isCancelItem}>
              Cancel
            </ActionSheetItem>
          </ActionSheetItemContext.Provider>
        </ActionSheet>,
      );
      await waitForFloatingPosition();

      fireEvent(
        screen.getByTestId('cancel-item'),
        new MouseEvent('click', {
          clientX: 1,
          clientY: 1,
          bubbles: true,
        }),
      );
      await act(vi.runAllTimers);

      await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });

      if (onClosed.mock.calls.length > 0) {
        result.unmount();
      }

      expect(onClose).toHaveBeenCalledExactlyOnceWith('click-cancel-item');
      expect(onClosed).toHaveBeenCalledExactlyOnceWith({ closedBy: 'cancel-item' });
    };

    describe.each([
      ['desktop', ActionSheetDesktop],
      ['mobile', ActionSheetMobile],
      ['menu', ActionSheetMenu],
      ['sheet', ActionSheetSheet],
    ])('%s', (_, ActionSheet) => {
      it('detects cancel item via isCancelItem prop (backward compatibility)', async () => {
        await testCancelItemDetection(ActionSheet, { isCancelItem: true });
      });

      it('detects cancel item via context', async () => {
        await testCancelItemDetection(ActionSheet, { isCancelItemAtContext: true });
      });
    });
  });

  describe('ActionSheetDefaultIosCloseItem', () => {
    fakeTimersForScope();

    const renderIosActionSheet = (props: Partial<ActionSheetProps> = {}) => {
      return render(
        <ConfigProvider platform="ios">
          <AdaptivityProvider viewWidth={ViewWidth.MOBILE} hasPointer>
            <ActionSheet toggleRef={targetEl} onClose={vi.fn()} onClosed={vi.fn()} {...props} />
          </AdaptivityProvider>
        </ConfigProvider>,
      );
    };

    it('renders with default text "Отмена" on mobile iOS', async () => {
      renderIosActionSheet();
      await waitForFloatingPosition();
      expect(screen.queryByText('Отмена')).toBeTruthy();
    });

    it('can be customized via slotProps.iosCloseItem', async () => {
      renderIosActionSheet({
        slotProps: {
          iosCloseItem: {
            children: 'Закрыть',
          },
        },
      });
      await waitForFloatingPosition();
      expect(screen.queryByText('Закрыть')).toBeTruthy();
      expect(screen.queryByText('Отмена')).toBeFalsy();
    });

    it('can be customized via iosCloseItem prop (backward compatibility)', async () => {
      renderIosActionSheet({
        iosCloseItem: <ActionSheetDefaultIosCloseItem>Закрыть</ActionSheetDefaultIosCloseItem>,
      });
      await waitForFloatingPosition();
      expect(screen.queryByText('Закрыть')).toBeTruthy();
    });

    it('detects cancel item when ActionSheetDefaultIosCloseItem is clicked', async () => {
      const onClose = vi.fn();
      const onClosed = vi.fn();
      const result = renderIosActionSheet({
        onClose,
        onClosed,
        mode: 'sheet',
      });
      await waitForFloatingPosition();

      const cancelButton = screen.getByText('Отмена');
      fireEvent(
        cancelButton,
        new MouseEvent('click', {
          clientX: 1,
          clientY: 1,
          bubbles: true,
        }),
      );
      await act(vi.runAllTimers);

      await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });

      if (onClosed.mock.calls.length > 0) {
        result.unmount();
      }

      expect(onClose).toHaveBeenCalledExactlyOnceWith('click-cancel-item');
      expect(onClosed).toHaveBeenCalledExactlyOnceWith({ closedBy: 'cancel-item' });
    });
  });

  describe('onClose and onClosed reasons', () => {
    fakeTimersForScope();

    describe('click-action-item', () => {
      it.each([
        ['desktop', ActionSheetDesktop],
        ['mobile', ActionSheetMobile],
        ['menu', ActionSheetMenu],
        ['sheet', ActionSheetSheet],
      ])('%s', async (_, ActionSheet) => {
        const onClose = vi.fn();
        const onClosed = vi.fn();
        const result = render(
          <ActionSheet onClose={onClose} onClosed={onClosed}>
            <ActionSheetItem data-testid="item">Action</ActionSheetItem>
          </ActionSheet>,
        );
        await waitForFloatingPosition();

        fireEvent(
          screen.getByTestId('item'),
          new MouseEvent('click', {
            clientX: 1,
            clientY: 1,
            bubbles: true,
          }),
        );
        await act(vi.runAllTimers);

        await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });

        if (onClosed.mock.calls.length > 0) {
          result.unmount();
        }

        expect(onClose).toHaveBeenCalledExactlyOnceWith('click-action-item');
        expect(onClosed).toHaveBeenCalledExactlyOnceWith({ closedBy: 'action-item' });
      });
    });

    describe('click-cancel-item', () => {
      it.each([
        ['desktop', ActionSheetDesktop],
        ['mobile', ActionSheetMobile],
        ['menu', ActionSheetMenu],
        ['sheet', ActionSheetSheet],
      ])('%s', async (_, ActionSheet) => {
        const onClose = vi.fn();
        const onClosed = vi.fn();
        const result = render(
          <ActionSheet onClose={onClose} onClosed={onClosed}>
            <ActionSheetItem data-testid="cancel-item" isCancelItem>
              Cancel
            </ActionSheetItem>
          </ActionSheet>,
        );
        await waitForFloatingPosition();

        fireEvent(
          screen.getByTestId('cancel-item'),
          new MouseEvent('click', {
            clientX: 1,
            clientY: 1,
            bubbles: true,
          }),
        );
        await act(vi.runAllTimers);

        await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });

        if (onClosed.mock.calls.length > 0) {
          result.unmount();
        }

        expect(onClose).toHaveBeenCalledExactlyOnceWith('click-cancel-item');
        expect(onClosed).toHaveBeenCalledExactlyOnceWith({ closedBy: 'cancel-item' });
      });
    });

    describe('click-overlay', () => {
      it.each([
        ['mobile', ActionSheetMobile],
        ['sheet', ActionSheetSheet],
      ])('%s', async (_, ActionSheet) => {
        const onClose = vi.fn();
        const onClosed = vi.fn();
        const result = render(<ActionSheet onClose={onClose} onClosed={onClosed} />);
        await waitForFloatingPosition();

        const overlay = result.container.querySelector<HTMLElement>(
          `.${popoutWrapperStyles.overlay}`,
        )!;
        await userEvent.click(overlay);

        await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });
        expect(onClose).toHaveBeenCalledExactlyOnceWith('click-overlay');
        expect(onClosed).toHaveBeenCalledExactlyOnceWith({ closedBy: 'other' });
      });
    });

    describe('keydown-item (Enter key)', () => {
      it.each([
        ['desktop', ActionSheetDesktop],
        ['mobile', ActionSheetMobile],
        ['menu', ActionSheetMenu],
        ['sheet', ActionSheetSheet],
      ])('%s', async (_, ActionSheet) => {
        const onClose = vi.fn();
        const onClosed = vi.fn();
        const result = render(
          <ActionSheet onClose={onClose} onClosed={onClosed}>
            <ActionSheetItem data-testid="item">Action</ActionSheetItem>
          </ActionSheet>,
        );
        await waitForFloatingPosition();

        const item = screen.getByTestId('item');
        await act(async () => {
          item.focus();
        });
        expect(item).toHaveFocus();

        await act(async () => {
          fireEvent.keyDown(item, { key: 'Enter', code: 'Enter' });
        });
        await act(vi.runAllTimers);

        await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });

        if (onClosed.mock.calls.length > 0) {
          result.unmount();
        }

        // При нажатии Enter также срабатывает клик (браузер автоматически эмулирует клик),
        // поэтому onClose вызывается дважды: с 'keydown-item' и 'click-action-item'
        // Проверяем, что onClose был вызван с 'keydown-item' хотя бы один раз
        expect(onClose).toHaveBeenCalledWith('keydown-item');
        // onClosed должен быть вызван только один раз (после завершения анимации)
        expect(onClosed).toHaveBeenCalledTimes(1);
        expect(onClosed).toHaveBeenCalledWith({ closedBy: 'other' });
      });
    });

    describe('escape-key', () => {
      it.each([
        ['desktop', ActionSheetDesktop],
        ['mobile', ActionSheetMobile],
        ['menu', ActionSheetMenu],
        ['sheet', ActionSheetSheet],
      ])('%s', async (_, ActionSheet) => {
        const onClose = vi.fn();
        const onClosed = vi.fn();
        const result = render(
          <ActionSheet onClose={onClose} onClosed={onClosed}>
            <ActionSheetItem>Action</ActionSheetItem>
          </ActionSheet>,
        );
        await waitForFloatingPosition();

        await act(async () => {
          await userEvent.keyboard('{Escape}');
        });
        await act(vi.runAllTimers);

        await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });

        if (onClosed.mock.calls.length > 0) {
          result.unmount();
        }

        expect(onClose).toHaveBeenCalledExactlyOnceWith('escape-key');
        expect(onClosed).toHaveBeenCalledExactlyOnceWith({ closedBy: 'other' });
      });
    });
  });

  describe('backward compatibility', () => {
    fakeTimersForScope();

    it('onClosed works without onClose', async () => {
      const onClosed = vi.fn();
      const result = render(
        <ActionSheetDesktop onClosed={onClosed}>
          <ActionSheetItem data-testid="item">Action</ActionSheetItem>
        </ActionSheetDesktop>,
      );
      await waitForFloatingPosition();

      fireEvent(
        screen.getByTestId('item'),
        new MouseEvent('click', {
          clientX: 1,
          clientY: 1,
          bubbles: true,
        }),
      );
      await act(vi.runAllTimers);

      if (onClosed.mock.calls.length > 0) {
        result.unmount();
      }

      await waitCSSKeyframesAnimation(result.getByRole('dialog'), { runOnlyPendingTimers: true });
      expect(onClosed).toHaveBeenCalledExactlyOnceWith({ closedBy: 'action-item' });
    });
  });
});
