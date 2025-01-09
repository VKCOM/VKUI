import { act } from 'react';
import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import { baselineComponent, waitCSSTransitionEnd } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Button } from '../Button/Button';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { type ModalCardProps } from '../ModalCard/types';
import { ModalPage } from './ModalPage';

export const waitModalPageCSSTransitionEnd = async (el: HTMLElement) =>
  await waitCSSTransitionEnd(
    el && el.firstElementChild instanceof HTMLElement ? el.firstElementChild : null,
  );

/**
 * Большинство логики покрыто в `ModalRoot.test.tsx`
 */
describe(ModalPage, () => {
  baselineComponent((props) => <ModalPage open nav="id" {...props} />, {
    a11yConfig: {
      rules: {
        // TODO [a11y]: "ARIA dialog and alertdialog nodes should have an accessible name (aria-dialog-name)"
        //      https://dequeuniversity.com/rules/axe/4.5/aria-dialog-name?application=axeAPI
        'aria-dialog-name': { enabled: false },
      },
    },
  });

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
    const onClose = jest.fn();
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
    const onClose = jest.fn();
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
    const onClose = jest.fn();
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

  describe('check restoreFocus prop', () => {
    const Fixture: React.FC<Pick<ModalCardProps, 'restoreFocus'>> = ({ restoreFocus = true }) => {
      const [open, setOpen] = React.useState(false);
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
      jest.useFakeTimers();
      const h = render(<Fixture restoreFocus={restoreFocus} />);
      expect(h.queryByTestId('host')).toBeFalsy();

      const openButton = h.getByTestId('open-modal');
      await act(async () => {
        openButton.focus();
      });
      fireEvent.click(openButton);
      expect(openButton).toHaveFocus();

      await waitModalPageCSSTransitionEnd(h.getByTestId('host'));
      expect(h.queryByTestId('host')).toBeTruthy();
      jest.runAllTimers();
      expect(h.getByTestId('dismiss-button')).toHaveFocus();

      fireEvent.click(openButton);
      await waitModalPageCSSTransitionEnd(h.getByTestId('host'));
      expect(h.queryByTestId('host')).toBeFalsy();
      jest.runAllTimers();

      if (restoreFocus) {
        expect(openButton).toHaveFocus();
      } else {
        expect(openButton).not.toHaveFocus();
      }
    });
  });
});
