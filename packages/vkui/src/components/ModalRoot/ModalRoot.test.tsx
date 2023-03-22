import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent, mountTest, runAllTimers } from '../../testing/utils';
import { ModalCard } from '../ModalCard/ModalCard';
import { ModalPage } from '../ModalPage/ModalPage';
import { ModalRootTouch } from './ModalRoot';
import { ModalRootDesktop } from './ModalRootDesktop';

const clickFade = () => userEvent.click(document.querySelector('.vkuiModalRoot__mask') as Element);
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
  baselineComponent<any>(ModalRoot, { forward: false });
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
});
