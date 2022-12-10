import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { baselineComponent, runAllTimers } from '../../testing/utils';
import { noop } from '../../lib/utils';
import { PullToRefresh } from './PullToRefresh';
import { act } from 'react-dom/test-utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Platform } from '../../lib/platform';

const hasSpinner = () => !!document.querySelector('.vkuiPullToRefresh__spinner--on');

function firePull(el: HTMLElement, { end = true } = {}) {
  fireEvent.mouseDown(el, { clientY: 0 });
  fireEvent.mouseMove(el, { clientY: 20 });
  fireEvent.mouseMove(el, { clientY: 500 });
  end && fireEvent.mouseUp(el, { clientY: 500 });
}

function Refresher(props: any) {
  const [isFetching, setIsFetching] = React.useState(false);
  React.useImperativeHandle(props.controller, () => (v: boolean) => setIsFetching(v));
  return (
    <PullToRefresh
      onRefresh={() => setIsFetching(true)}
      data-testid="xxx"
      isFetching={isFetching}
    />
  );
}

function renderRefresher({ platform = Platform.ANDROID } = {}) {
  let controller: (v: boolean) => void;
  const setFetching = (v: boolean) => act(() => controller(v));
  const handle = render(
    <ConfigProvider platform={platform}>
      <Refresher controller={(e: any) => (controller = e)} />
    </ConfigProvider>,
  );
  return { setFetching, ...handle };
}

describe('PullToRefresh', () => {
  beforeAll(() => jest.useFakeTimers('modern'));
  afterAll(() => jest.useRealTimers());
  baselineComponent(PullToRefresh);

  describe('calls onRefresh', () => {
    it('after pull', () => {
      const onRefresh = jest.fn();
      render(<PullToRefresh onRefresh={onRefresh} data-testid="xxx" />);
      firePull(screen.getByTestId('xxx'));
      expect(onRefresh).toBeCalledTimes(1);
    });
    it('during pull on iOS', () => {
      const onRefresh = jest.fn();
      render(
        <ConfigProvider platform={Platform.IOS}>
          <PullToRefresh onRefresh={onRefresh} data-testid="xxx" />
        </ConfigProvider>,
      );
      firePull(screen.getByTestId('xxx'), { end: false });
      expect(onRefresh).toBeCalledTimes(1);
      fireEvent.mouseUp(screen.getByTestId('xxx'));
      expect(onRefresh).toBeCalledTimes(1);
    });
  });

  describe('shows spinner', () => {
    // reset touch detection
    afterEach(() => delete window['ontouchstart']);
    it('after a gesture', () => {
      renderRefresher();
      firePull(screen.getByTestId('xxx'));
      expect(hasSpinner()).toBe(true);
    });
    it('until isFetching=false after release', () => {
      const { setFetching } = renderRefresher();
      firePull(screen.getByTestId('xxx'));
      setFetching(false);
      expect(hasSpinner()).toBe(false);
    });
    it('until touch release after isFetching=false on iOS', () => {
      const { setFetching } = renderRefresher({ platform: Platform.IOS });
      firePull(screen.getByTestId('xxx'), { end: false });
      setFetching(false);
      expect(hasSpinner()).toBe(true);
      fireEvent.mouseUp(screen.getByTestId('xxx'));
      expect(hasSpinner()).toBe(false);
    });
    it('stops on touch release if isFetching was never true', () => {
      render(<PullToRefresh onRefresh={noop} data-testid="xxx" />);
      firePull(screen.getByTestId('xxx'));
      runAllTimers();
      expect(hasSpinner()).toBe(false);
    });
    it('on second interaction', () => {
      const { setFetching } = renderRefresher();
      firePull(screen.getByTestId('xxx'));
      setFetching(false);
      firePull(screen.getByTestId('xxx'));
      setFetching(true);
    });
  });

  describe('touch prevention', () => {
    const expectEvents = (toHaveDefault: boolean) => {
      const hasDefaultMove = fireEvent.touchMove(document.body);
      expect(hasDefaultMove).toBe(toHaveDefault);
      const hasDefaultStart = fireEvent.mouseDown(screen.getByTestId('xxx'));
      expect(hasDefaultStart).toBe(toHaveDefault);
    };
    it('prevents during refresh', () => {
      renderRefresher();
      firePull(screen.getByTestId('xxx'));
      expectEvents(false);
    });
    it('releases after refresh', () => {
      const { setFetching } = renderRefresher();
      firePull(screen.getByTestId('xxx'));
      setFetching(false);
      expectEvents(true);
    });
    it('releases if unmounted during refresh', () => {
      const { unmount } = renderRefresher();
      firePull(screen.getByTestId('xxx'));
      unmount();
      const hasDefaultMove = fireEvent.touchMove(document.body);
      expect(hasDefaultMove).toBe(true);
    });
  });

  describe('only shows spinner after a gesture', () => {
    it('not if mounted with isFetching', () => {
      render(<PullToRefresh isFetching onRefresh={noop} />);
      expect(hasSpinner()).toBe(false);
    });
    it('not if updated to isFetching', () => {
      const h = render(<PullToRefresh onRefresh={noop} />);
      h.rerender(<PullToRefresh isFetching onRefresh={noop} />);
      expect(hasSpinner()).toBe(false);
    });
  });
});
