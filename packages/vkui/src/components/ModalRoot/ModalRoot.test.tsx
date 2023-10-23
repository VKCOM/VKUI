import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent, mountTest, runAllTimers } from '../../testing/utils';
import { ModalCard } from '../ModalCard/ModalCard';
import { ModalPage } from '../ModalPage/ModalPage';
import { ModalRootTouch } from './ModalRoot';
import { ModalRootDesktop } from './ModalRootDesktop';
import styles from './ModalRoot.module.css';

const clickFade = () => userEvent.click(document.querySelector(`.${styles.ModalRoot__mask}`)!);
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
      it('calls modal onClose', () => {
        const onClose = jest.fn();
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" onClose={onClose} />
          </ModalRoot>,
        );
        // wait for animations
        runAllTimers();
        clickFade();
        expect(onClose).toBeCalledTimes(1);
        expect(onCloseRoot).not.toBeCalled();
      });
      it('calls root onClose if modal has no onClose', () => {
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" />
          </ModalRoot>,
        );
        // wait for animations
        runAllTimers();
        clickFade();
        expect(onCloseRoot).toBeCalledTimes(1);
      });
    });
    if (name === 'ModalRootDesktop') {
      it('on esc click', () => {
        const onCloseRoot = jest.fn();
        render(
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" />
          </ModalRoot>,
        );
        // wait for animations
        runAllTimers();
        userEvent.keyboard('{esc}');
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
    clickFade();
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
});
