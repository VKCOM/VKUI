import * as React from 'react';
import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { Platform, type PlatformType } from '../../lib/platform';
import { baselineComponent, fakeTimersForScope, withFakeTimers } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { PullToRefresh } from './PullToRefresh';
import pullToRefreshStyles from './PullToRefresh.module.css';

const hasSpinner = (container: HTMLElement) =>
  container.getElementsByClassName(pullToRefreshStyles.spinnerOn).length > 0;

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

function renderRefresher(
  { platform }: { platform: PlatformType } = {
    platform: Platform.ANDROID,
  },
) {
  let controller: (v: boolean) => void;
  const setFetching = (v: boolean) => act(() => controller(v));
  const handle = render(
    <ConfigProvider platform={platform}>
      <Refresher controller={(e: any) => (controller = e)} />
    </ConfigProvider>,
  );
  return { setFetching, ...handle };
}

describe(PullToRefresh, () => {
  baselineComponent(PullToRefresh);

  describe('calls onRefresh', () => {
    fakeTimersForScope();
    it('after pull', () => {
      const onRefresh = vi.fn();
      render(<PullToRefresh onRefresh={onRefresh} data-testid="xxx" />);
      firePull(screen.getByTestId('xxx'));
      act(vi.runAllTimers);
      expect(onRefresh).toHaveBeenCalledTimes(1);
    });
    it('during pull on iOS', () => {
      const onRefresh = vi.fn();
      render(
        <ConfigProvider platform="ios">
          <PullToRefresh onRefresh={onRefresh} data-testid="xxx" />
        </ConfigProvider>,
      );
      firePull(screen.getByTestId('xxx'), { end: false });
      act(vi.runAllTimers);
      expect(onRefresh).toHaveBeenCalledTimes(1);
      fireEvent.mouseUp(screen.getByTestId('xxx'));
      expect(onRefresh).toHaveBeenCalledTimes(1);
    });
  });

  describe('shows spinner', () => {
    // reset touch detection
    afterEach(() => delete window['ontouchstart']);
    it('after a gesture', () => {
      const { container } = renderRefresher();
      firePull(screen.getByTestId('xxx'));
      expect(hasSpinner(container)).toBe(true);
    });
    it('until isFetching=false after release', () => {
      const { setFetching, container } = renderRefresher();
      firePull(screen.getByTestId('xxx'));
      setFetching(false);
      expect(hasSpinner(container)).toBe(false);
    });
    it('until touch release after isFetching=false on iOS', () => {
      const { setFetching, container } = renderRefresher({ platform: Platform.IOS });
      firePull(screen.getByTestId('xxx'), { end: false });
      setFetching(false);
      expect(hasSpinner(container)).toBe(true);
      fireEvent.mouseUp(screen.getByTestId('xxx'));
      expect(hasSpinner(container)).toBe(false);
    });
    it(
      'stops on touch release if isFetching was never true',
      withFakeTimers(() => {
        const { container } = render(<PullToRefresh onRefresh={noop} data-testid="xxx" />);
        firePull(screen.getByTestId('xxx'));
        act(vi.runAllTimers);
        expect(hasSpinner(container)).toBe(false);
      }),
    );
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
      const hasDefaultMove = fireEvent.touchMove(document.body, {
        changedTouches: [{ clientY: 0 }],
      });
      expect(hasDefaultMove).toBe(toHaveDefault);
      const hasDefaultStart = fireEvent.mouseDown(screen.getByTestId('xxx'), { clientY: 0 });
      expect(hasDefaultStart).toBe(toHaveDefault);
    };
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
      const hasDefaultMove = fireEvent.touchMove(document.body, {
        changedTouches: [{ clientY: 0 }],
      });
      expect(hasDefaultMove).toBe(true);
    });
  });

  describe('only shows spinner after a gesture', () => {
    it('not if mounted with isFetching', () => {
      const { container } = render(<PullToRefresh isFetching onRefresh={noop} />);
      expect(hasSpinner(container)).toBe(false);
    });
    it('not if updated to isFetching', () => {
      const h = render(<PullToRefresh onRefresh={noop} />);
      h.rerender(<PullToRefresh isFetching onRefresh={noop} />);
      expect(hasSpinner(h.container)).toBe(false);
    });
  });

  it('disables native pull-to-refresh while pulling', async () => {
    const component = render(
      <ConfigProvider platform="ios">
        <PullToRefresh onRefresh={noop} isFetching={false} data-testid="xxx" />
      </ConfigProvider>,
      { baseElement: document.documentElement },
    );

    expect(
      window.document.documentElement.classList.contains('vkui--disable-overscroll-behavior'),
    ).toBeFalsy();

    // класс присутствует пока пуллим
    firePull(component.getByTestId('xxx'), { end: false });
    expect(
      window.document.documentElement.classList.contains('vkui--disable-overscroll-behavior'),
    ).toBeTruthy();

    component.rerender(
      <ConfigProvider platform="ios">
        <PullToRefresh onRefresh={noop} isFetching data-testid="xxx" />
      </ConfigProvider>,
    );

    fireEvent.mouseUp(component.getByTestId('xxx'), { clientY: 500 });
    expect(
      window.document.documentElement.classList.contains('vkui--disable-overscroll-behavior'),
    ).toBeTruthy();

    // пока идёт обновление, класс не удаляется, чтобы не вызывалось нативное поведение
    firePull(component.getByTestId('xxx'), { end: true });
    expect(
      window.document.documentElement.classList.contains('vkui--disable-overscroll-behavior'),
    ).toBeTruthy();

    component.rerender(
      <ConfigProvider platform="ios">
        <PullToRefresh onRefresh={noop} isFetching={false} data-testid="xxx" />
      </ConfigProvider>,
    );

    expect(
      window.document.documentElement.classList.contains('vkui--disable-overscroll-behavior'),
    ).toBeFalsy();
  });
});
