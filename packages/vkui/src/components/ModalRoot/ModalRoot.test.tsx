import * as React from 'react';
import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent, fakeTimersForScope, withFakeTimers } from '../../testing/utils';
import { ModalCard } from '../ModalCard/ModalCard';
import { waitModalCardCSSTransitionEnd } from '../ModalCard/ModalCard.test';
import { ModalPage } from '../ModalPage/ModalPage';
import { waitModalPageCSSTransitionEnd } from '../ModalPage/ModalPage.test';
import { ModalRoot } from './ModalRoot';

const waitCSSTransitionEndConditionally = async (el: HTMLElement, displayName: string) =>
  displayName === 'ModalPage'
    ? await waitModalPageCSSTransitionEnd(el)
    : await waitModalCardCSSTransitionEnd(el);

describe(ModalRoot, () => {
  baselineComponent(ModalRoot, { forward: false, getRootRef: false });

  describe.each([
    { displayName: 'ModalPage', Component: ModalPage },
    { displayName: 'ModalCard', Component: ModalCard },
  ])('With $displayName', ({ displayName, Component }) => {
    fakeTimersForScope();
    test.each(['global', 'local'])('mount and unmount (should use %s callbacks)', async (type) => {
      const globalCallbacks = {
        onOpen: vi.fn(),
        onOpened: vi.fn(),
        onClose: vi.fn(),
        onClosed: vi.fn(),
      };
      const localCallbacks = {
        onOpen: vi.fn(),
        onOpened: vi.fn(),
        onClose: vi.fn(),
        onClosed: vi.fn(),
      };

      const h = render(
        <ModalRoot activeModal="m" {...globalCallbacks}>
          {type === 'local' ? (
            <Component id="m" data-testid="m" {...localCallbacks} />
          ) : (
            <Component id="m" data-testid="m" />
          )}
        </ModalRoot>,
      );
      await waitCSSTransitionEndConditionally(h.getByTestId('m'), displayName);
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(h.getByTestId('m')).toBeInTheDocument();

      h.rerender(
        <ModalRoot activeModal={null} {...globalCallbacks}>
          {type === 'local' ? (
            <Component id="m" data-testid="m" {...localCallbacks} />
          ) : (
            <Component id="m" data-testid="m" />
          )}
        </ModalRoot>,
      );
      await waitCSSTransitionEndConditionally(h.getByTestId('m'), displayName);
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(h.queryByTestId('m')).not.toBeInTheDocument();

      if (type === 'global') {
        expect(globalCallbacks.onOpen).toHaveBeenCalledExactlyOnceWith('m');
        expect(globalCallbacks.onOpened).toHaveBeenCalledExactlyOnceWith('m');
        expect(globalCallbacks.onClose).toHaveBeenCalledTimes(0);
        expect(globalCallbacks.onClosed).toHaveBeenCalledExactlyOnceWith('m');
      } else {
        expect(globalCallbacks.onOpen).toHaveBeenCalledTimes(0);
        expect(globalCallbacks.onOpened).toHaveBeenCalledTimes(0);
        expect(globalCallbacks.onClose).toHaveBeenCalledTimes(0);
        expect(globalCallbacks.onClosed).toHaveBeenCalledTimes(0);

        expect(localCallbacks.onOpen).toHaveBeenCalledExactlyOnceWith();
        expect(localCallbacks.onOpened).toHaveBeenCalledExactlyOnceWith();
        expect(localCallbacks.onClose).toHaveBeenCalledTimes(0);
        expect(localCallbacks.onClosed).toHaveBeenCalledExactlyOnceWith();
      }
    });

    test('open by prop vs open by context', async () => {
      const h = render(
        <ModalRoot activeModal={null}>
          <Component id="m" open data-testid="m" />
        </ModalRoot>,
      );
      expect(h.queryByTestId('m')).not.toBeInTheDocument();

      h.rerender(
        <ModalRoot activeModal="m">
          <Component id="m" open data-testid="m" />
        </ModalRoot>,
      );
      await waitCSSTransitionEndConditionally(h.getByTestId('m'), displayName);
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(h.queryByTestId('m')).toBeInTheDocument();
    });

    test('keepMounted', async () => {
      const h = render(
        <ModalRoot activeModal={null}>
          <Component id="m" keepMounted data-testid="m" />
        </ModalRoot>,
      );
      expect(h.queryByTestId('m')).toBeInTheDocument();
    });
  });

  describe('shows active modal', () => {
    fakeTimersForScope();
    const modals = [
      <ModalPage id="m" data-testid="m" key="m" />,
      <ModalPage id="other" data-testid="other" key="o" />,
    ];
    it('on mount', async () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      await waitModalPageCSSTransitionEnd(h.getByTestId('m'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(h.queryByTestId('m')).not.toBeNull();
      expect(h.queryByTestId('other')).toBeNull();
    });
    it('shows via prop update', async () => {
      const h = render(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
      expect(h.queryByTestId('m')).toBeNull();
      expect(h.queryByTestId('other')).toBeNull();

      h.rerender(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      await waitModalPageCSSTransitionEnd(h.getByTestId('m'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(h.queryByTestId('m')).not.toBeNull();
      expect(h.queryByTestId('other')).toBeNull();
    });
    it('hides via prop update', async () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      await waitModalPageCSSTransitionEnd(h.getByTestId('m'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(h.queryByTestId('m')).not.toBeNull();
      expect(h.queryByTestId('other')).toBeNull();

      h.rerender(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
      await waitModalPageCSSTransitionEnd(h.getByTestId('m'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(h.queryByTestId('m')).toBeNull();
      expect(h.queryByTestId('other')).toBeNull();
    });
    it('changes via prop update', async () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      await waitModalPageCSSTransitionEnd(h.getByTestId('m'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(h.queryByTestId('m')).not.toBeNull();
      expect(h.queryByTestId('other')).toBeNull();

      h.rerender(<ModalRoot activeModal="other">{modals}</ModalRoot>);
      await waitModalPageCSSTransitionEnd(h.getByTestId('m'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      await waitModalPageCSSTransitionEnd(h.getByTestId('other'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(h.queryByTestId('m')).toBeNull();
      expect(h.queryByTestId('other')).not.toBeNull();
    });
  });

  describe.each([
    { displayName: 'ModalPage', Component: ModalPage },
    { displayName: 'ModalCard', Component: ModalCard },
  ])('handle onClose', ({ displayName, Component }) => {
    fakeTimersForScope();
    describe('on fade click', () => {
      it('calls modal onClose', async () => {
        const onClose = vi.fn();
        const onCloseRoot = vi.fn();
        const h = render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <Component id="m" data-testid="m" modalOverlayTestId="overlay" onClose={onClose} />
          </ModalRoot>,
        );
        await waitCSSTransitionEndConditionally(h.getByTestId('m'), displayName);
        act(() => {
          vi.runOnlyPendingTimers();
        });
        fireEvent.click(h.getByTestId('overlay'));
        expect(onClose).toHaveBeenCalledExactlyOnceWith('click-overlay', expect.any(Object));
        expect(onCloseRoot).not.toHaveBeenCalled();
      });
      it('calls root onClose if modal has no onClose', async () => {
        const onCloseRoot = vi.fn();
        const h = render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <Component id="m" data-testid="m" modalOverlayTestId="overlay" />
          </ModalRoot>,
        );
        await waitCSSTransitionEndConditionally(h.getByTestId('m'), displayName);
        act(() => {
          vi.runOnlyPendingTimers();
        });
        fireEvent.click(h.getByTestId('overlay'));
        expect(onCloseRoot).toHaveBeenCalledTimes(1);
      });
      it('does not call root onClose when preventClose is provided', async () => {
        const onCloseRoot = vi.fn();
        const h = render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <Component preventClose id="m" data-testid="m" modalOverlayTestId="overlay" />
          </ModalRoot>,
        );
        await waitCSSTransitionEndConditionally(h.getByTestId('m'), displayName);
        act(() => {
          vi.runOnlyPendingTimers();
        });
        fireEvent.click(h.getByTestId('overlay'));
        fireEvent.keyDown(h.getByTestId('m'), { key: 'Escape', code: 'Escape' });
        expect(onCloseRoot).not.toHaveBeenCalled();
      });
    });
    it('on esc click', async () => {
      const onCloseRoot = vi.fn();
      const h = render(
        <ModalRoot onClose={onCloseRoot} activeModal="m">
          <Component id="m" data-testid="m" />
        </ModalRoot>,
      );
      await waitCSSTransitionEndConditionally(h.getByTestId('m'), displayName);
      act(() => {
        vi.runOnlyPendingTimers();
      });
      fireEvent.keyDown(h.getByTestId('m'), { key: 'Escape', code: 'Escape' });
      expect(onCloseRoot).toHaveBeenCalledTimes(1);
    });
  });

  it(
    'check modalOverlayTestId prop vs context priority',
    withFakeTimers(async () => {
      const h = render(
        <ModalRoot activeModal="page" modalOverlayTestId="modal-mask">
          <ModalPage id="page" data-testid="page" />
        </ModalRoot>,
      );
      await waitModalPageCSSTransitionEnd(h.getByTestId('page'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(screen.queryByTestId('modal-mask')).toBeTruthy();

      h.rerender(
        <ModalRoot activeModal="page" modalOverlayTestId="modal-mask">
          <ModalPage id="page" data-testid="page" modalOverlayTestId="custom-mask" />
        </ModalRoot>,
      );
      await waitModalPageCSSTransitionEnd(h.getByTestId('page'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(screen.queryByTestId('modal-mask')).toBeFalsy();
      expect(screen.queryByTestId('custom-mask')).toBeTruthy();
    }),
  );

  describe('focus', () => {
    fakeTimersForScope();
    let modalPageRef: React.RefObject<HTMLDivElement | null> = React.createRef<HTMLDivElement>();
    let modalCardRef: React.RefObject<HTMLDivElement | null> = React.createRef<HTMLDivElement>();
    let modalPageWithInputRef: React.RefObject<HTMLDivElement | null> =
      React.createRef<HTMLDivElement>();
    let inputInnerModalPageRef: React.RefObject<HTMLInputElement | null> =
      React.createRef<HTMLInputElement>();
    let modals: React.ReactElement[] = [];

    beforeEach(() => {
      modalPageRef = React.createRef<HTMLDivElement>();
      modalCardRef = React.createRef<HTMLDivElement>();
      modalPageWithInputRef = React.createRef<HTMLDivElement>();
      inputInnerModalPageRef = React.createRef<HTMLInputElement>();
      modals = [
        <ModalPage id="modal-page" data-testid="modal-page" key="1" getRootRef={modalPageRef} />,
        <ModalCard id="modal-card" data-testid="modal-card" key="2" getRootRef={modalCardRef} />,
        <ModalPage
          id="modal-page-with-input"
          data-testid="modal-page-with-input"
          key="3"
          getRootRef={modalPageWithInputRef}
        >
          <input ref={inputInnerModalPageRef} autoFocus />
        </ModalPage>,
      ];
    });

    it('should focus on modal container if controllable element does not exist or is not focused', async () => {
      const component = render(<ModalRoot activeModal="modal-page">{modals}</ModalRoot>, {
        baseElement: document.documentElement,
      });
      await waitModalPageCSSTransitionEnd(component.getByTestId('modal-page'));
      await act(vi.runOnlyPendingTimers);
      expect(modalPageRef.current).toHaveFocus();

      component.rerender(<ModalRoot activeModal="modal-card">{modals}</ModalRoot>);
      await waitModalPageCSSTransitionEnd(component.getByTestId('modal-page'));
      await waitModalCardCSSTransitionEnd(component.getByTestId('modal-card'));
      await act(vi.runOnlyPendingTimers);

      expect(modalCardRef.current).toHaveFocus();
    });

    it('should focus on controllable element instead modal if it is focused', async () => {
      const h = render(<ModalRoot activeModal="modal-page-with-input">{modals}</ModalRoot>, {
        baseElement: document.documentElement,
      });
      await waitModalPageCSSTransitionEnd(h.getByTestId('modal-page-with-input'));
      act(() => {
        vi.runOnlyPendingTimers();
      });

      expect(modalPageWithInputRef.current).not.toHaveFocus();
      expect(inputInnerModalPageRef.current).toHaveFocus();
    });

    it('should focus on controllable element only (if it is focused)', async () => {
      const component = render(
        <ModalRoot activeModal="modal-page" noFocusToDialog>
          {modals}
        </ModalRoot>,
        {
          baseElement: document.documentElement,
        },
      );
      await waitModalPageCSSTransitionEnd(component.getByTestId('modal-page'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(modalPageRef.current).not.toHaveFocus();

      component.rerender(
        <ModalRoot activeModal="modal-page-with-input" noFocusToDialog>
          {modals}
        </ModalRoot>,
      );
      await waitModalPageCSSTransitionEnd(component.getByTestId('modal-page-with-input'));
      act(() => {
        vi.runOnlyPendingTimers();
      });

      expect(modalPageWithInputRef.current).not.toHaveFocus();
      expect(inputInnerModalPageRef.current).toHaveFocus();
    });
  });
});
