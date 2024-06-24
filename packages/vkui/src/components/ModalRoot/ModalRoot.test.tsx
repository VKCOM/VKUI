import * as React from 'react';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, mountTest, userEvent, waitCSSTransitionEnd } from '../../testing/utils';
import { ModalCard } from '../ModalCard/ModalCard';
import { ModalPage } from '../ModalPage/ModalPage';
import { ModalRootTouch } from './ModalRoot';
import { ModalRootDesktop } from './ModalRootDesktop';
import styles from './ModalRoot.module.css';

const clickFade = async () =>
  await userEvent.click(document.querySelector(`.${styles.ModalRoot__mask}`)!);
let rafSpies: jest.SpyInstance[];

describe.each([
  ['ModalRootTouch', ModalRootTouch],
  ['ModalRootDesktop', ModalRootDesktop],
] as const)('%s', (name, ModalRoot: any) => {
  beforeEach(() => {
    jest.useFakeTimers();
    rafSpies = [
      jest
        .spyOn(window, 'requestAnimationFrame')
        .mockImplementation((cb) => window.setTimeout(() => cb(Date.now()))),
      jest
        .spyOn(window, 'cancelAnimationFrame')
        .mockImplementation((id) => window.clearTimeout(id)),
    ];
  });
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    rafSpies.forEach((m) => m.mockRestore());
  });
  baselineComponent<any>(ModalRoot, { forward: false, a11y: false, getRootRef: false });
  describe('With ModalPage', () =>
    mountTest(() => (
      <ModalRoot activeModal="m">
        <ModalPage id="m" />
      </ModalRoot>
    )));
  describe('With ModalCard', () =>
    mountTest(() => (
      <ModalRoot activeModal="m">
        <ModalCard id="m" />
      </ModalRoot>
    )));

  describe('shows active modal', () => {
    const modals = [
      <ModalPage id="m" data-testid="m" key="m" />,
      <ModalPage id="other" data-testid="other" key="o" />,
    ];
    it('on mount', () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      expect(h.queryByTestId('m')).not.toBeNull();
      expect(h.queryByTestId('other')).toBeNull();
    });
    it('shows via prop update', () => {
      const h = render(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
      act(jest.runAllTimers);
      h.rerender(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      act(jest.runAllTimers);
      expect(h.queryByTestId('m')).not.toBeNull();
      expect(h.queryByTestId('other')).toBeNull();
    });
    it('hides via prop update', async () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(h.getByTestId('m')));
      expect(h.queryByTestId('m')).not.toBeNull();
      expect(h.queryByTestId('other')).toBeNull();

      h.rerender(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(h.getByTestId('m')));
      expect(h.queryByTestId('m')).toBeNull();
      expect(h.queryByTestId('other')).toBeNull();
    });
    it('changes via prop update', async () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(h.getByTestId('m')));
      expect(h.queryByTestId('m')).not.toBeNull();
      expect(h.queryByTestId('other')).toBeNull();

      h.rerender(<ModalRoot activeModal="other">{modals}</ModalRoot>);
      act(jest.runAllTimers);
      if (
        name === 'ModalRootTouch' /* note: 'ModalRootDesktop' смена `activeModal` без анимаций */
      ) {
        await waitCSSTransitionEnd(getFirstHTMLElementChild(h.getByTestId('m')));
      }
      await waitCSSTransitionEnd(getFirstHTMLElementChild(h.getByTestId('other')));
      expect(h.queryByTestId('m')).toBeNull();
      expect(h.queryByTestId('other')).not.toBeNull();
    });
  });

  describe('handle onClose', () => {
    describe('on fade click', () => {
      it('calls modal onClose', async () => {
        const onClose = jest.fn();
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" onClose={onClose} />
          </ModalRoot>,
        );
        // wait for animations
        act(jest.runAllTimers);
        await clickFade();
        expect(onClose).toHaveBeenCalledTimes(1);
        expect(onCloseRoot).not.toHaveBeenCalled();
      });
      it('calls root onClose if modal has no onClose', async () => {
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" />
          </ModalRoot>,
        );
        // wait for animations
        act(jest.runAllTimers);
        await clickFade();
        expect(onCloseRoot).toHaveBeenCalledTimes(1);
      });
      it('does not call root onClose when preventClose is provided', async () => {
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" preventClose />
          </ModalRoot>,
        );
        // wait for animations
        act(jest.runAllTimers);
        await clickFade();
        expect(onCloseRoot).not.toHaveBeenCalled();
        await userEvent.keyboard('{Escape}');
        expect(onCloseRoot).not.toHaveBeenCalled();
      });
    });
    if (name === 'ModalRootDesktop') {
      it('on esc click', async () => {
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" />
          </ModalRoot>,
        );
        // wait for animations
        act(jest.runAllTimers);
        await userEvent.keyboard('{Escape}');
        expect(onCloseRoot).toHaveBeenCalledTimes(1);
      });
    }
  });

  it('check modal mask with fast modal change', async () => {
    const onClose = jest.fn();
    const modals = [
      <ModalPage id="m" key="m" />,
      <ModalPage id="other" key="o" onClose={onClose} />,
    ];

    const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
    act(jest.runAllTimers);
    h.rerender(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
    h.rerender(<ModalRoot activeModal="other">{modals}</ModalRoot>);
    act(jest.runAllTimers);

    // check if mask is present
    expect(document.querySelector<HTMLElement>(`.${styles.ModalRoot__mask}`)?.style.opacity).toBe(
      '1',
    );

    // onClose is working
    await clickFade();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('disables native pull-to-refresh when modal is open', async () => {
    const modals = [<ModalPage id="m" data-testid="m" key="m" />, <ModalPage id="other" key="o" />];

    const component = render(<ModalRoot activeModal={null}>{modals}</ModalRoot>, {
      baseElement: document.documentElement,
    });
    act(jest.runAllTimers);

    expect(document.querySelector('.vkui--disable-overscroll-behavior')).toBeFalsy();

    component.rerender(<ModalRoot activeModal="m">{modals}</ModalRoot>);
    act(jest.runAllTimers);
    await waitCSSTransitionEnd(getFirstHTMLElementChild(component.getByTestId('m')));

    if (name === 'ModalRootTouch') {
      expect(document.querySelector('.vkui--disable-overscroll-behavior')).toBeTruthy();
    } else {
      expect(document.querySelector('.vkui--disable-overscroll-behavior')).toBeFalsy();
    }

    component.rerender(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
    act(jest.runAllTimers);
    await waitCSSTransitionEnd(getFirstHTMLElementChild(component.getByTestId('m')));

    expect(document.querySelector('.vkui--disable-overscroll-behavior')).toBeFalsy();
  });

  it('modalOverlayTestId for ModalRoot', () => {
    render(
      <ModalRoot activeModal="page" modalOverlayTestId="modal-mask">
        <ModalPage id="page" />
      </ModalRoot>,
    );
    expect(screen.queryByTestId('modal-mask')).toBeTruthy();
  });

  describe('focus', () => {
    let modalPageRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    let modalCardRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    let modalPageWithInputRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    let inputInnerModalPageRef: React.RefObject<HTMLInputElement> =
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
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(component.getByTestId('modal-page')));

      expect(modalPageRef.current).toHaveFocus();

      component.rerender(<ModalRoot activeModal="modal-card">{modals}</ModalRoot>);
      act(jest.runAllTimers);
      await waitCSSTransitionEnd(getFirstHTMLElementChild(component.getByTestId('modal-card')));

      expect(modalCardRef.current).toHaveFocus();
    });

    it('should focus on controllable element instead modal if it is focused', () => {
      render(<ModalRoot activeModal="modal-page-with-input">{modals}</ModalRoot>, {
        baseElement: document.documentElement,
      });
      act(jest.runAllTimers);

      expect(modalPageWithInputRef.current).not.toHaveFocus();
      expect(inputInnerModalPageRef.current).toHaveFocus();
    });

    it('should focus on controllable element only (if it is focused)', () => {
      const component = render(
        <ModalRoot activeModal="modal-page" noFocusToDialog>
          {modals}
        </ModalRoot>,
        {
          baseElement: document.documentElement,
        },
      );
      act(jest.runAllTimers);

      expect(modalPageRef.current).not.toHaveFocus();

      component.rerender(
        <ModalRoot activeModal="modal-page-with-input" noFocusToDialog>
          {modals}
        </ModalRoot>,
      );
      act(jest.runAllTimers);

      expect(modalPageWithInputRef.current).not.toHaveFocus();
      expect(inputInnerModalPageRef.current).toHaveFocus();
    });
  });
});

function getFirstHTMLElementChild(el: HTMLElement | null) {
  return el && el.firstElementChild instanceof HTMLElement ? el.firstElementChild : null;
}
