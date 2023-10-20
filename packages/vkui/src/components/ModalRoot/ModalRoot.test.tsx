import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent, mountTest, runAllTimers, userEvent } from '../../testing/utils';
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
    const modals = [<ModalPage id="m" key="m" />, <ModalPage id="other" key="o" />];
    it('on mount', () => {
      render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      expect(document.getElementById('m')).not.toBeNull();
      expect(document.getElementById('other')).toBeNull();
    });
    it('shows via prop update', () => {
      const h = render(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
      runAllTimers();
      h.rerender(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      runAllTimers();
      expect(document.getElementById('m')).not.toBeNull();
      expect(document.getElementById('other')).toBeNull();
    });
    it('hides via prop update', () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      runAllTimers();
      h.rerender(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
      runAllTimers();
      expect(document.getElementById('m')).toBeNull();
      expect(document.getElementById('other')).toBeNull();
    });
    it('changes via prop update', () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      runAllTimers();
      h.rerender(<ModalRoot activeModal="other">{modals}</ModalRoot>);
      runAllTimers();
      expect(document.getElementById('m')).toBeNull();
      expect(document.getElementById('other')).not.toBeNull();
    });
  });

  describe('calls onClose', () => {
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
        runAllTimers();
        await clickFade();
        expect(onClose).toBeCalledTimes(1);
        expect(onCloseRoot).not.toBeCalled();
      });
      it('calls root onClose if modal has no onClose', async () => {
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" />
          </ModalRoot>,
        );
        // wait for animations
        runAllTimers();
        await clickFade();
        expect(onCloseRoot).toBeCalledTimes(1);
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
        runAllTimers();
        await userEvent.keyboard('{Escape}');
        expect(onCloseRoot).toBeCalledTimes(1);
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
    runAllTimers();
    h.rerender(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
    h.rerender(<ModalRoot activeModal="other">{modals}</ModalRoot>);
    runAllTimers();

    // check if mask is present
    expect(document.querySelector<HTMLElement>(`.${styles.ModalRoot__mask}`)?.style.opacity).toBe(
      '1',
    );

    // onClose is working
    await clickFade();
    expect(onClose).toBeCalledTimes(1);
  });

  it('disables native pull-to-refresh when modal is open', () => {
    const modals = [<ModalPage id="m" key="m" />, <ModalPage id="other" key="o" />];

    const component = render(<ModalRoot activeModal={null}>{modals}</ModalRoot>, {
      baseElement: document.documentElement,
    });
    runAllTimers();

    expect(document.querySelector('.vkui--disable-overscroll-behavior')).toBeFalsy();

    component.rerender(<ModalRoot activeModal="m">{modals}</ModalRoot>);
    runAllTimers();

    if (name === 'ModalRootTouch') {
      expect(document.querySelector('.vkui--disable-overscroll-behavior')).toBeTruthy();
    } else {
      expect(document.querySelector('.vkui--disable-overscroll-behavior')).toBeFalsy();
    }

    component.rerender(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
    runAllTimers();

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
        <ModalPage id="modal-page" key="1" getRootRef={modalPageRef} />,
        <ModalCard id="modal-card" key="2" getRootRef={modalCardRef} />,
        <ModalPage id="modal-page-with-input" key="3" getRootRef={modalPageWithInputRef}>
          <input ref={inputInnerModalPageRef} autoFocus />
        </ModalPage>,
      ];
    });

    it('should focus on modal container if controllable element does not exist or is not focused', () => {
      const component = render(<ModalRoot activeModal="modal-page">{modals}</ModalRoot>, {
        baseElement: document.documentElement,
      });
      runAllTimers();

      expect(modalPageRef.current).toHaveFocus();

      component.rerender(<ModalRoot activeModal="modal-card">{modals}</ModalRoot>);
      runAllTimers();

      expect(modalCardRef.current).toHaveFocus();
    });

    it('should focus on controllable element instead modal if it is focused', () => {
      render(<ModalRoot activeModal="modal-page-with-input">{modals}</ModalRoot>, {
        baseElement: document.documentElement,
      });
      runAllTimers();

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
      runAllTimers();

      expect(modalPageRef.current).not.toHaveFocus();

      component.rerender(
        <ModalRoot activeModal="modal-page-with-input" noFocusToDialog>
          {modals}
        </ModalRoot>,
      );
      runAllTimers();

      expect(modalPageWithInputRef.current).not.toHaveFocus();
      expect(inputInnerModalPageRef.current).toHaveFocus();
    });
  });
});
