import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { baselineComponent, mockScrollContext, mountTest } from '../../testing/utils';
import { render } from '@testing-library/react';
import { View } from '../View/View';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Root } from './Root';

const views = [
  <View id="v1" key="1" activePanel="" />,
  <View id="v2" key="2" activePanel="" />,
  <View id="v3" key="3" activePanel="" />,
];

describe('Root', () => {
  beforeAll(() => jest.useFakeTimers('modern'));
  afterAll(() => jest.useRealTimers());
  baselineComponent(Root);
  describe('With View', () =>
    mountTest(() => (
      <Root activeView="view">
        <View id="view" activePanel="" />
      </Root>
    )));

  describe('shows active view', () => {
    it('on mount', () => {
      render(<Root activeView="v1">{views}</Root>);
      expect(document.getElementById('v1')).not.toBeNull();
      expect(document.getElementById('v2')).toBeNull();
    });
    it('after prop update', () => {
      render(<Root activeView="v1">{views}</Root>).rerender(<Root activeView="v2">{views}</Root>);
      act(() => {
        jest.runAllTimers();
      });
      expect(document.getElementById('v1')).toBeNull();
      expect(document.getElementById('v2')).not.toBeNull();
    });
  });

  describe('calls onTransition', () => {
    it.each([
      ['with animation', true],
      ['without animation', false],
    ])('%s', (_name, animate) => {
      const onTransition = jest.fn();
      render(
        <ConfigProvider transitionMotionEnabled={animate}>
          <Root activeView="v1" onTransition={onTransition}>
            {views}
          </Root>
        </ConfigProvider>,
      ).rerender(
        <ConfigProvider transitionMotionEnabled={animate}>
          <Root activeView="v2" onTransition={onTransition}>
            {views}
          </Root>
        </ConfigProvider>,
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(onTransition).toBeCalledTimes(1);
      expect(onTransition).toBeCalledWith({
        from: 'v1',
        to: 'v2',
        isBack: false,
      });
    });
    it('detects back transition', () => {
      const onTransition = jest.fn();
      render(
        <Root activeView="v2" onTransition={onTransition}>
          {views}
        </Root>,
      ).rerender(
        <Root activeView="v1" onTransition={onTransition}>
          {views}
        </Root>,
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(onTransition).toBeCalledWith({
        from: 'v2',
        to: 'v1',
        isBack: true,
      });
    });
    it('once on rapid transitions', () => {
      const onTransition = jest.fn();
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
      h.rerender(
        <Root activeView="v3" onTransition={onTransition}>
          {views}
        </Root>,
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(onTransition).toBeCalledTimes(1);
      expect(onTransition).toBeCalledWith({
        from: 'v1',
        to: 'v3',
        isBack: false,
      });
    });
    it('once on "canceled" transition', () => {
      const onTransition = jest.fn();
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
      h.rerender(
        <Root activeView="v1" onTransition={onTransition}>
          {views}
        </Root>,
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(onTransition).toBeCalledTimes(1);
      expect(onTransition).toBeCalledWith({
        from: 'v2',
        to: 'v1',
        isBack: true,
      });
    });
  });

  describe('blurs active element', () => {
    const renderFocused = () => render(<input autoFocus data-testid="__autofocus__" />);
    it('on activeView change', () => {
      renderFocused();
      const views = [
        <View id="focus" activePanel="" key="1" />,
        <View id="other" activePanel="" key="2" />,
      ];
      render(<Root activeView="focus">{views}</Root>).rerender(
        <Root activeView="other">{views}</Root>,
      );
      expect(document.activeElement === document.body).toBe(true);
    });
  });

  describe('scroll control', () => {
    it('restores on back navigation', () => {
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
      act(() => {
        jest.runAllTimers();
      });
      expect(scrollTo).toBeCalledWith(0, y);
    });
    it('resets on forward navigation', () => {
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
      h.rerender(
        <MockScroll>
          <Root activeView="v2">{views}</Root>
        </MockScroll>,
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(scrollTo.mock.calls[scrollTo.mock.calls.length - 1]).toEqual([0, 0]);
    });
  });
});
