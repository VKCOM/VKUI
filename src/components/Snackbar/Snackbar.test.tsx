import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { noop } from '../../lib/utils';
import { act } from 'react-dom/test-utils';
import { baselineComponent, fireMouseSwipe } from '../../testing/utils';
import { Snackbar } from './Snackbar';
import { timeSince } from '../../lib/timeSince';

jest.mock('../../lib/timeSince');

beforeEach(() => {
  (timeSince as jest.Mock).mockImplementation(() => 0);
  jest.useFakeTimers();
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => window.setTimeout(cb));
});
afterEach(() => {
  jest.useRealTimers();
  (window.requestAnimationFrame as jest.Mock).mockRestore();
});

describe('Snackbar', () => {
  baselineComponent(Snackbar);
  describe('closes when expired', () => {
    function mockBodyWidth(size: number) {
      Object.defineProperty(
        document.querySelector('.Snackbar__body'),
        'offsetWidth',
        { get: () => size },
      );
    };
    it('autocloses on timeout', () => {
      const onClose = jest.fn();
      render(<Snackbar onClose={onClose} />);
      act(() => jest.runAllTimers());
      expect(onClose).toBeCalledTimes(1);
    });
    it('does not close while clicked', () => {
      const onClose = jest.fn();
      render(<Snackbar onClose={onClose}>xxx</Snackbar>);
      fireEvent.mouseDown(screen.getByText('xxx'));
      act(() => jest.runAllTimers());
      expect(onClose).not.toBeCalled();
    });
    it('closes after clean tap', () => {
      const onClose = jest.fn();
      render(<Snackbar onClose={onClose}>xxx</Snackbar>);
      userEvent.click(screen.getByText('xxx'));
      expect(onClose).toBeCalledTimes(0);
      act(() => jest.runAllTimers());
      expect(onClose).toBeCalledTimes(1);
    });
    it('closes after weak swipe', () => {
      const onClose = jest.fn();
      render(<Snackbar onClose={onClose} duration={100000}>xxx</Snackbar>);
      mockBodyWidth(100);
      (timeSince as jest.Mock).mockImplementation(() => 1000);
      fireMouseSwipe(screen.getByText('xxx'), [[0, 0], [20, 0]]);
      jest.advanceTimersByTime(500);
      expect(onClose).toBeCalledTimes(0);
      act(() => jest.runAllTimers());
      expect(onClose).toBeCalledTimes(1);
    });
    it('can be swiped away', () => {
      const onClose = jest.fn();
      render(<Snackbar onClose={onClose} duration={100000}>xxx</Snackbar>);
      mockBodyWidth(100);
      (timeSince as jest.Mock).mockImplementation(() => 1000);
      fireMouseSwipe(screen.getByText('xxx'), [[0, 0], [50, 0]]);
      jest.advanceTimersByTime(500);
      expect(onClose).toBeCalledTimes(1);
    });
  });
  describe('action', () => {
    it('calls action on click', () => {
      const onAction = jest.fn();
      render(<Snackbar action="xxx" onActionClick={onAction} onClose={noop} />);
      userEvent.click(screen.getByText('xxx'));
      expect(onAction).toBeCalledTimes(1);
    });
    it('closes on click', () => {
      const onClose = jest.fn();
      render(<Snackbar action="xxx" onClose={onClose} duration={10000} />);
      userEvent.click(screen.getByText('xxx'));
      // run timers, but not enough to trigger expiry
      jest.advanceTimersByTime(500);
      expect(onClose).toBeCalledTimes(1);
    });
  });
});
