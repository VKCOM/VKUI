import { act } from 'react';
import { render, screen } from '@testing-library/react';
import {
  baselineComponent,
  fakeTimers,
  mockScrollContext,
  mountTest,
  waitCSSKeyframesAnimation,
  withFakeTimers,
} from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { View } from '../View/View';
import { Root } from './Root';
import styles from './Root.module.css';

const views = [
  <View id="v1" data-testid="v1" key="1" activePanel="">
    <></>
  </View>,
  <View id="v2" data-testid="v2" key="2" activePanel="">
    <></>
  </View>,
  <View id="v3" data-testid="v3" key="3" activePanel="">
    <></>
  </View>,
];

describe(Root, () => {
  baselineComponent(Root);

  describe('With View', () => {
    fakeTimers();
    mountTest(() => (
      <Root activeView="view">
        <View id="view" activePanel="">
          <></>
        </View>
      </Root>
    ));
  });

  describe('shows active view', () => {
    it('on mount', () => {
      render(<Root activeView="v1">{views}</Root>);
      expect(document.getElementById('v1')).not.toBeNull();
      expect(document.getElementById('v2')).toBeNull();
    });
    it('after prop update', async () => {
      const result = render(<Root activeView="v1">{views}</Root>);
      result.rerender(<Root activeView="v2">{views}</Root>);
      await waitCSSKeyframesAnimation(getViewPanelById('v2'));
      expect(result.queryByTestId('v1')).toBeNull();
      expect(result.queryByTestId('v2')).not.toBeNull();
    });
  });

  describe('calls onTransition', () => {
    fakeTimers();
    it.each([
      ['with animation', true],
      ['without animation', false],
    ])('%s', async (_name, animate) => {
      const onTransition = vi.fn();
      const result = render(
        <ConfigProvider transitionMotionEnabled={animate}>
          <Root activeView="v1" onTransition={onTransition}>
            {views}
          </Root>
        </ConfigProvider>,
      );
      result.rerender(
        <ConfigProvider transitionMotionEnabled={animate}>
          <Root activeView="v2" onTransition={onTransition}>
            {views}
          </Root>
        </ConfigProvider>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('v2'), { runOnlyPendingTimers: true });
      expect(onTransition).toHaveBeenCalledTimes(1);
      expect(onTransition).toHaveBeenCalledWith({
        from: 'v1',
        to: 'v2',
        isBack: false,
      });
    });
    it('detects back transition', async () => {
      const onTransition = vi.fn();
      const h = render(
        <Root activeView="v2" onTransition={onTransition}>
          {views}
        </Root>,
      );
      h.rerender(
        <Root activeView="v1" onTransition={onTransition}>
          {views}
        </Root>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('v2'));
      await waitCSSKeyframesAnimation(getViewPanelById('v1'), { runOnlyPendingTimers: true });
      expect(onTransition).toHaveBeenCalledWith({
        from: 'v2',
        to: 'v1',
        isBack: true,
      });
    });
    it('once on rapid transitions', async () => {
      const onTransition = vi.fn();
      const h = render(
        <Root activeView="v2" onTransition={onTransition}>
          {views}
        </Root>,
      );
      h.rerender(
        <Root activeView="v1" onTransition={onTransition}>
          {views}
        </Root>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('v2'));
      await waitCSSKeyframesAnimation(getViewPanelById('v1'));
      h.rerender(
        <Root activeView="v3" onTransition={onTransition}>
          {views}
        </Root>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('v3'), { runOnlyPendingTimers: true });
      expect(onTransition).toHaveBeenCalledTimes(2);
      expect(onTransition).toHaveBeenCalledWith({
        from: 'v1',
        to: 'v3',
        isBack: false,
      });
    });
    it('once on "canceled" transition', async () => {
      const onTransition = vi.fn();
      const h = render(
        <Root activeView="v1" onTransition={onTransition}>
          {views}
        </Root>,
      );
      h.rerender(
        <Root activeView="v2" onTransition={onTransition}>
          {views}
        </Root>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('v1'));
      await waitCSSKeyframesAnimation(getViewPanelById('v2'));
      h.rerender(
        <Root activeView="v1" onTransition={onTransition}>
          {views}
        </Root>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('v2'));
      await waitCSSKeyframesAnimation(getViewPanelById('v1'), { runOnlyPendingTimers: true });
      expect(onTransition).toHaveBeenCalledTimes(2);
      expect(onTransition).toHaveBeenCalledWith({
        from: 'v2',
        to: 'v1',
        isBack: true,
      });
    });
  });

  describe('blurs active element', () => {
    const renderFocused = () => render(<input autoFocus data-testid="__autofocus__" />);
    it(
      'on activeView change',
      withFakeTimers(() => {
        renderFocused();
        const views = [
          <View id="focus" activePanel="" key="1">
            <></>
          </View>,
          <View id="other" activePanel="" key="2">
            <></>
          </View>,
        ];
        render(<Root activeView="focus">{views}</Root>).rerender(
          <Root activeView="other">{views}</Root>,
        );
        act(vi.runAllTimers);
        expect(document.activeElement === document.body).toBe(true);
      }),
    );
  });

  describe('scroll control', () => {
    fakeTimers();
    it('restores on back navigation', async () => {
      let y = 101;
      const [MockScroll, scrollTo] = mockScrollContext(() => y);
      const h = render(
        <MockScroll>
          <Root activeView="v1">{views}</Root>
        </MockScroll>,
      );
      // trigger scroll save
      h.rerender(
        <MockScroll>
          <Root activeView="v2">{views}</Root>
        </MockScroll>,
      );
      h.rerender(
        <MockScroll>
          <Root activeView="v1">{views}</Root>
        </MockScroll>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('v2'));
      await waitCSSKeyframesAnimation(getViewPanelById('v1'), { runOnlyPendingTimers: true });
      expect(scrollTo).toHaveBeenCalledWith(0, y);
    });
    it('resets on forward navigation', async () => {
      let y = 101;
      const [MockScroll, scrollTo] = mockScrollContext(() => y);
      const h = render(
        <MockScroll>
          <Root activeView="v2">{views}</Root>
        </MockScroll>,
      );
      // trigger scroll save
      h.rerender(
        <MockScroll>
          <Root activeView="v1">{views}</Root>
        </MockScroll>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('v2'));
      await waitCSSKeyframesAnimation(getViewPanelById('v1'), { runOnlyPendingTimers: true });
      h.rerender(
        <MockScroll>
          <Root activeView="v2">{views}</Root>
        </MockScroll>,
      );
      await waitCSSKeyframesAnimation(getViewPanelById('v1'));
      await waitCSSKeyframesAnimation(getViewPanelById('v2'), { runOnlyPendingTimers: true });
      expect(scrollTo.mock.calls[scrollTo.mock.calls.length - 1]).toEqual([0, 0]);
    });
  });
});

function getViewPanelById(panelTestId: string) {
  return screen.getByTestId(panelTestId).closest<HTMLElement>(`.${styles.view}`)!;
}
