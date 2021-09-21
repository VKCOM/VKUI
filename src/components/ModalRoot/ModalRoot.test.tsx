import { baselineComponent, mountTest } from '../../testing/utils';
import { render } from '@testing-library/react';
import ModalPage from '../ModalPage/ModalPage';
import ModalCard from '../ModalCard/ModalCard';
import { ModalRootTouch } from './ModalRoot';
import { ModalRootDesktop } from './ModalRootDesktop';
import userEvent from '@testing-library/user-event';

const clickFade = () => userEvent.click(document.querySelector('.ModalRoot__mask'));
const pressEsc = () => userEvent.keyboard('{esc}');

let rafSpies: jest.SpyInstance[];
beforeEach(() => {
  jest.useFakeTimers();
  rafSpies = [
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => setTimeout(() => cb(Date.now()))),
    jest.spyOn(window, 'cancelAnimationFrame').mockImplementation((id) => clearTimeout(id)),
  ];
});
afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
  rafSpies.forEach((m) => m.mockRestore());
});

describe.each([
  ['ModalRootTouch', ModalRootTouch],
  ['ModalRootDesktop', ModalRootDesktop],
] as const)('%s', (_, ModalRoot) => {
  baselineComponent<any>(ModalRoot, { forward: false });
  describe('With ModalPage', () =>
    mountTest(() => <ModalRoot activeModal="m"><ModalPage id="m" /></ModalRoot>));
  describe('With ModalCard', () =>
    mountTest(() => <ModalRoot activeModal="m"><ModalCard id="m" /></ModalRoot>));

  describe('shows active modal', () => {
    const modals = [<ModalPage id="m" key="m" />, <ModalPage id="other" key="o" />];
    it('on mount', () => {
      render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      expect(document.getElementById('m')).not.toBeNull();
      expect(document.getElementById('other')).toBeNull();
    });
    it('shows via prop update', () => {
      const h = render(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
      jest.runAllTimers();
      h.rerender(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      jest.runAllTimers();
      expect(document.getElementById('m')).not.toBeNull();
      expect(document.getElementById('other')).toBeNull();
    });
    it('hides via prop update', () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      jest.runAllTimers();
      h.rerender(<ModalRoot activeModal={null}>{modals}</ModalRoot>);
      jest.runAllTimers();
      expect(document.getElementById('m')).toBeNull();
      expect(document.getElementById('other')).toBeNull();
    });
    it('changes via prop update', () => {
      const h = render(<ModalRoot activeModal="m">{modals}</ModalRoot>);
      jest.runAllTimers();
      h.rerender(<ModalRoot activeModal="other">{modals}</ModalRoot>);
      jest.runAllTimers();
      expect(document.getElementById('m')).toBeNull();
      expect(document.getElementById('other')).not.toBeNull();
    });
  });

  describe('calls onClose', () => {
    describe('on fade click', () => {
      it('calls modal onClose', () => {
        const onClose = jest.fn();
        const onCloseRoot = jest.fn();
        render((
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" onClose={onClose} />
          </ModalRoot>
        ));
        // wait for animations
        jest.runAllTimers();
        clickFade();
        expect(onClose).toBeCalledTimes(1);
        expect(onCloseRoot).not.toBeCalled();
      });
      it('calls root onClose if modal has no onClose', () => {
        const onCloseRoot = jest.fn();
        render((
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" />
          </ModalRoot>
        ));
        // wait for animations
        jest.runAllTimers();
        clickFade();
        expect(onCloseRoot).toBeCalledTimes(1);
      });
    });
    describe('on pressing {esc}', () => {
      it('calls modal onClose', () => {
        const onClose = jest.fn();
        const onCloseRoot = jest.fn();
        render((
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" onClose={onClose} />
          </ModalRoot>
        ));
        // wait for animations
        jest.runAllTimers();
        pressEsc();

        expect(onClose).toBeCalledTimes(1);
        expect(onCloseRoot).not.toBeCalled();
      });
      it('calls root onClose if modal has no onClose', () => {
        const onCloseRoot = jest.fn();
        render((
          <ModalRoot onClose={onCloseRoot} activeModal="m">
            <ModalPage id="m" />
          </ModalRoot>
        ));
        // wait for animations
        jest.runAllTimers();
        pressEsc();

        expect(onCloseRoot).toBeCalledTimes(1);
      });
    });
  });
});
