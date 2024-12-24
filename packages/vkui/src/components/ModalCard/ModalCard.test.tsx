import { act } from 'react';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, waitCSSTransitionEnd } from '../../testing/utils';
import { Button } from '../Button/Button';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { ModalCard } from './ModalCard';
import { type ModalCardProps } from './types';

export const waitModalCardCSSTransitionEnd = async (el: HTMLElement) =>
  await waitCSSTransitionEnd(el);

/**
 * Большинство логики покрыто в `ModalRoot.test.tsx`
 */
describe(ModalCard, () => {
  baselineComponent((p) => <ModalCard open nav="id" {...p} />, {
    // TODO [a11y]: "ARIA dialog and alertdialog nodes should have an accessible name (aria-dialog-name)"
    //              https://dequeuniversity.com/rules/axe/4.5/aria-dialog-name?application=axeAPI
    a11y: false,
  });

  test('mount and unmount', async () => {
    const result = render(<ModalCard id="host" data-testid="host" />);
    expect(result.queryByTestId('host')).not.toBeInTheDocument();

    result.rerender(<ModalCard open id="host" data-testid="host" />);
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(result.getByTestId('host')).toBeInTheDocument();

    result.rerender(<ModalCard id="host" data-testid="host" />);
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('host')).not.toBeInTheDocument();
  });

  test('testid for modal card content', async () => {
    const result = render(<ModalCard key="host" nav="host" open data-testid="host" />);
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('modal-dismiss-button')).not.toBeTruthy();

    result.rerender(
      <ModalCard
        key="host"
        nav="id"
        open
        data-testid="host"
        modalDismissButtonTestId="modal-dismiss-button"
      />,
    );
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('modal-dismiss-button')).not.toBeTruthy();

    result.rerender(
      <ConfigProvider platform="vkcom">
        <ModalCard
          key="host"
          nav="host"
          open
          data-testid="host"
          modalDismissButtonTestId="modal-dismiss-button"
        />
      </ConfigProvider>,
    );
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(result.queryByTestId('modal-dismiss-button')).toBeTruthy();
  });

  test('can specify tags for header and subheader', async () => {
    const result = render(
      <ModalCard
        open
        data-testid="host"
        title="Баскетбол на выходных"
        description="Приглашение в беседу"
      />,
    );
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(screen.getByText('Баскетбол на выходных').tagName.toLowerCase()).toMatch('span');
    expect(screen.getByText('Приглашение в беседу').tagName.toLowerCase()).toMatch('span');

    result.rerender(
      <ModalCard
        open
        data-testid="host"
        title="Баскетбол на выходных"
        titleComponent="h2"
        description="Приглашение в беседу"
        descriptionComponent="h3"
      />,
    );
    await waitModalCardCSSTransitionEnd(result.getByTestId('host'));
    expect(screen.getByText('Баскетбол на выходных').tagName.toLowerCase()).toMatch('h2');
    expect(screen.getByText('Приглашение в беседу').tagName.toLowerCase()).toMatch('h3');
  });

  it('should hides close button by dismissButtonMode prop', async () => {
    const onClose = jest.fn();
    const h = render(
      <ModalCard
        key="host"
        id="host"
        open
        dismissButtonMode="none"
        modalDismissButtonTestId="dismiss-button"
        data-testid="host"
        onClose={onClose}
      />,
    );
    await waitModalCardCSSTransitionEnd(h.getByTestId('host'));
    expect(h.queryByTestId('dismiss-button')).toBeFalsy();
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  test('click on close button', async () => {
    const onClose = jest.fn();
    const h = render(
      <ConfigProvider platform="vkcom">
        <ModalCard
          key="host"
          id="host"
          open
          modalDismissButtonTestId="dismiss-button"
          data-testid="host"
          onClose={onClose}
        />
      </ConfigProvider>,
    );
    await waitModalCardCSSTransitionEnd(h.getByTestId('host'));
    fireEvent.click(h.getByTestId('dismiss-button'));
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledWith('click-close-button');
  });

  describe('check restoreFocus prop', () => {
    const Fixture: React.FC<Pick<ModalCardProps, 'restoreFocus'>> = ({ restoreFocus = true }) => {
      const [open, setOpen] = React.useState(false);
      return (
        <>
          <ConfigProvider platform="vkcom">
            <ModalCard
              key="host"
              id="host"
              open={open}
              modalDismissButtonTestId="dismiss-button"
              data-testid="host"
              restoreFocus={restoreFocus}
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

      await waitModalCardCSSTransitionEnd(h.getByTestId('host'));
      expect(h.queryByTestId('host')).toBeTruthy();
      jest.runAllTimers();
      expect(h.getByTestId('dismiss-button')).toHaveFocus();

      fireEvent.click(openButton);
      await waitModalCardCSSTransitionEnd(h.getByTestId('host'));
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
