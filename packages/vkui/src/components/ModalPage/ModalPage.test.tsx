import { act, useState } from 'react';
import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import { baselineComponent, userEvent, waitCSSTransitionEnd } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Button } from '../Button/Button';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { type ModalCardProps } from '../ModalCard/types';
import { ModalPageHeader } from '../ModalPageHeader/ModalPageHeader';
import { ModalPage } from './ModalPage';
import styles from './ModalPage.module.css';

export const waitModalPageCSSTransitionEnd = async (el: HTMLElement) =>
  await waitCSSTransitionEnd(
    el && el.firstElementChild instanceof HTMLElement ? el.firstElementChild : null,
  );

/**
 * Большинство логики покрыто в `ModalRoot.test.tsx`.
 */
describe(ModalPage, () => {
  baselineComponent((props) => (
    <ModalPage open nav="id" {...props}>
      <ModalPageHeader>Title</ModalPageHeader>
    </ModalPage>
  ));

  test('mount and unmount', async () => {
    const result = render(<ModalPage id="host" data-testid="host" />);
    expect(result.queryByTestId('host')).not.toBeInTheDocument();

    result.rerender(<ModalPage open id="host" data-testid="host" />);
    await waitModalPageCSSTransitionEnd(result.getByTestId('host'));
    expect(result.getByTestId('host')).toBeInTheDocument();

    result.rerender(<ModalPage id="host" data-testid="host" />);
    await waitModalPageCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('host')).not.toBeInTheDocument();
  });

  test('should not find overlay when use disableModalOverlay', async () => {
    const result = render(
      <ModalPage id="host" data-testid="host" modalOverlayTestId="overlay" disableModalOverlay />,
    );
    expect(result.queryByTestId('host')).not.toBeInTheDocument();

    result.rerender(
      <ModalPage
        open
        id="host"
        data-testid="host"
        modalOverlayTestId="overlay"
        disableModalOverlay
      />,
    );
    await waitModalPageCSSTransitionEnd(result.getByTestId('host'));
    expect(result.getByTestId('host')).toBeInTheDocument();

    expect(result.queryByTestId('overlay')).toBe(null);
  });

  test('testid for modal page content', async () => {
    const result = render(
      <ModalPage key="host" open nav="host" data-testid="host" noFocusToDialog />,
    );
    await waitModalPageCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('modal-content-id')).not.toBeTruthy();
    expect(result.queryByTestId('modal-dismiss-button')).not.toBeTruthy();

    result.rerender(
      <ModalPage
        key="host"
        nav="id"
        open
        data-testid="host"
        noFocusToDialog
        modalContentTestId="modal-content-id"
        modalDismissButtonTestId="modal-dismiss-button"
      />,
    );
    await waitModalPageCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('modal-content-id')).toBeTruthy();
    expect(result.queryByTestId('modal-dismiss-button')).not.toBeTruthy();

    result.rerender(
      <ConfigProvider platform="vkcom">
        <ModalPage
          key="host"
          nav="host"
          open
          data-testid="host"
          noFocusToDialog
          modalDismissButtonTestId="modal-dismiss-button"
        />
      </ConfigProvider>,
    );
    await waitModalPageCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('modal-dismiss-button')).toBeTruthy();
  });

  it('should hides close button by adaptivity props ', async () => {
    const onClose = vi.fn();
    const h = render(
      <AdaptivityProvider viewWidth={ViewWidth.SMALL_MOBILE}>
        <ModalPage
          key="host"
          id="host"
          open
          modalDismissButtonTestId="dismiss-button"
          noFocusToDialog
          data-testid="host"
          onClose={onClose}
        />
      </AdaptivityProvider>,
    );
    await waitModalPageCSSTransitionEnd(h.getByTestId('host'));
    expect(h.queryByTestId('dismiss-button')).toBeFalsy();
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it('should hides close button by hideCloseButton prop', async () => {
    const onClose = vi.fn();
    const h = render(
      <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasPointer>
        <ModalPage
          key="host"
          id="host"
          open
          hideCloseButton
          modalDismissButtonTestId="dismiss-button"
          noFocusToDialog
          data-testid="host"
          onClose={onClose}
        />
      </AdaptivityProvider>,
    );
    await waitModalPageCSSTransitionEnd(h.getByTestId('host'));
    expect(h.queryByTestId('dismiss-button')).toBeFalsy();
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  test('click on close button', async () => {
    const onClose = vi.fn();
    const h = render(
      <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasPointer>
        <ModalPage
          key="host"
          id="host"
          open
          modalDismissButtonTestId="dismiss-button"
          noFocusToDialog
          data-testid="host"
          onClose={onClose}
        />
      </AdaptivityProvider>,
    );
    await waitModalPageCSSTransitionEnd(h.getByTestId('host'));
    fireEvent.click(h.getByTestId('dismiss-button'));
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledWith('click-close-button', expect.any(Object));
  });

  test('check disable focus trap', async () => {
    vi.useFakeTimers();
    const Fixture = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasPointer>
            <ModalPage
              key="host"
              id="host"
              open={open}
              modalDismissButtonTestId="dismiss-button"
              disableFocusTrap
              noFocusToDialog
              data-testid="host"
            />
          </AdaptivityProvider>
          <Button data-testid="open-button" onClick={() => setOpen(true)} />
        </>
      );
    };

    const h = render(<Fixture />);

    const openButton = h.getByTestId('open-button');
    fireEvent.click(openButton);

    await waitModalPageCSSTransitionEnd(h.getByTestId('host'));

    const dismissButton = h.getByTestId('dismiss-button');
    act(() => {
      dismissButton.focus();
    });
    expect(dismissButton).toHaveFocus();

    await userEvent.tab();
    expect(openButton).toHaveFocus();
    vi.runAllTimers();
    vi.useRealTimers();
  });

  describe('check restoreFocus prop', () => {
    const Fixture: React.FC<Pick<ModalCardProps, 'restoreFocus'>> = ({ restoreFocus = true }) => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <ConfigProvider platform="vkcom">
            <ModalPage
              key="host"
              id="host"
              open={open}
              restoreFocus={restoreFocus}
              modalDismissButtonTestId="dismiss-button"
              data-testid="host"
            />
            <Button onClick={() => setOpen((v) => !v)} data-testid="open-modal">
              Открыть
            </Button>
          </ConfigProvider>
        </>
      );
    };

    it.each([true, false])('check restoreFocus=%s', async (restoreFocus) => {
      vi.useFakeTimers();
      const h = render(<Fixture restoreFocus={restoreFocus} />);
      expect(h.queryByTestId('host')).toBeFalsy();

      const openButton = h.getByTestId('open-modal');
      act(() => {
        openButton.focus();
      });
      fireEvent.click(openButton);
      expect(openButton).toHaveFocus();

      await waitModalPageCSSTransitionEnd(h.getByTestId('host'));
      expect(h.queryByTestId('host')).toBeTruthy();
      act(vi.runAllTimers);
      expect(h.getByTestId('dismiss-button')).toHaveFocus();

      fireEvent.click(openButton);
      await waitModalPageCSSTransitionEnd(h.getByTestId('host'));
      expect(h.queryByTestId('host')).toBeFalsy();
      act(vi.runAllTimers);

      if (restoreFocus) {
        expect(openButton).toHaveFocus();
      } else {
        expect(openButton).not.toHaveFocus();
      }
      vi.useRealTimers();
    });
  });

  describe('size prop', () => {
    it.each([
      ['s' as const, styles.hostDesktopMaxWidthS],
      ['m' as const, styles.hostDesktopMaxWidthM],
      ['l' as const, styles.hostDesktopMaxWidthL],
    ])('applies preset class on desktop for size=%s', async (size, expectedClass) => {
      const h = render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasPointer>
          <ModalPage key="host" id="host" open size={size} noFocusToDialog data-testid="host" />
        </AdaptivityProvider>,
      );

      await waitModalPageCSSTransitionEnd(h.getByTestId('host'));
      expect(h.getByTestId('host')).toHaveClass(expectedClass);
    });

    it('sets CSS variable for custom numeric size on desktop', async () => {
      const h = render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasPointer>
          <ModalPage key="host" id="host" open size={500} noFocusToDialog data-testid="host" />
        </AdaptivityProvider>,
      );

      await waitModalPageCSSTransitionEnd(h.getByTestId('host'));
      expect(h.getByTestId('host')).toHaveStyle(
        '--vkui_internal_ModalPage--desktopMaxWidth: 500px',
      );
    });

    it('sets CSS variable for custom string size on desktop', async () => {
      const h = render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} hasPointer>
          <ModalPage
            key="host"
            id="host"
            open
            size="fit-content"
            noFocusToDialog
            data-testid="host"
          />
        </AdaptivityProvider>,
      );

      await waitModalPageCSSTransitionEnd(h.getByTestId('host'));
      expect(h.getByTestId('host')).toHaveStyle(
        '--vkui_internal_ModalPage--desktopMaxWidth: fit-content',
      );
    });

    it('ignores size on mobile', async () => {
      const h = render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_MOBILE}>
          <ModalPage key="host" id="host" open size="l" noFocusToDialog data-testid="host" />
        </AdaptivityProvider>,
      );

      await waitModalPageCSSTransitionEnd(h.getByTestId('host'));
      const el = h.getByTestId('host');
      expect(el).toHaveClass(styles.hostMobile);
      expect(el).not.toHaveClass(styles.hostDesktopMaxWidthS);
    });
  });
});
