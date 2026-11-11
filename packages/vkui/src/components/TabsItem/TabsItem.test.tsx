import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { baselineComponent, setNodeEnv } from '../../testing/utils';
import { Tabs } from '../Tabs/Tabs';
import { TabsItem } from './TabsItem';

const TestTabs = () => {
  const [currentTab, setCurrentTab] = React.useState('first');
  return (
    <Tabs withScrollToSelectedTab={true} scrollBehaviorToSelectedTab="start">
      <TabsItem
        id="tab-first"
        data-testid="first"
        selected={currentTab === 'first'}
        onClick={() => setCurrentTab('first')}
      >
        First
      </TabsItem>
      <TabsItem
        id="tab-second"
        data-testid="second"
        selected={currentTab === 'second'}
        onClick={() => setCurrentTab('second')}
      >
        Second
      </TabsItem>
    </Tabs>
  );
};

const mockScrollIntoView = () => {
  const scrollIntoViewMock = vi.fn();
  Element.prototype.scrollIntoView = scrollIntoViewMock;
  return scrollIntoViewMock;
};

describe('TabsItem', () => {
  baselineComponent(TabsItem, {
    a11yConfig: {
      rules: {
        // TODO [a11y]: "Certain ARIA roles must be contained by particular parents (aria-required-parent)"
        //              https://dequeuniversity.com/rules/axe/4.5/aria-required-parent?application=axeAPI
        'aria-required-parent': { enabled: false },
      },
    },
  });

  it('should scroll to the initially selected tab', () => {
    const scrollIntoViewMock = mockScrollIntoView();

    render(<TestTabs />);

    expect(scrollIntoViewMock).toHaveBeenCalledExactlyOnceWith({
      inline: 'start',
      block: 'nearest',
      behavior: 'smooth',
    });
  });

  it('should not scroll when withScrollToSelectedTab is disabled', () => {
    const scrollIntoViewMock = mockScrollIntoView();

    render(
      <Tabs withScrollToSelectedTab={false}>
        <TabsItem selected>First</TabsItem>
      </Tabs>,
    );

    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });

  it('should scroll to tab', () => {
    render(<TestTabs />);

    const secondTab = screen.getByTestId<HTMLDivElement>('second');

    const scrollIntoViewMock = mockScrollIntoView();
    fireEvent.click(secondTab);

    expect(scrollIntoViewMock).toHaveBeenCalledExactlyOnceWith({
      inline: 'start',
      block: 'nearest',
      behavior: 'smooth',
    });
  });

  it('should no scroll to tab when vertically outside the viewport', () => {
    render(<TestTabs />);

    const secondTab = screen.getByTestId<HTMLDivElement>('second');
    vi.spyOn(secondTab, 'getBoundingClientRect').mockImplementation(() => {
      const rect = {
        top: -1,
      };
      return rect as DOMRect;
    });
    const scrollIntoViewMock = mockScrollIntoView();
    fireEvent.click(secondTab);

    expect(scrollIntoViewMock).toHaveBeenCalledTimes(0);
  });

  describe('vertical overflow ancestors', () => {
    beforeEach(() => {
      vi.spyOn(document.documentElement, 'clientHeight', 'get').mockReturnValue(768);
    });
    afterEach(() => vi.restoreAllMocks());

    it.each([
      { overflowY: 'auto', top: 107, nested: false, shouldScroll: false },
      { overflowY: 'auto', top: 149, nested: false, shouldScroll: false },
      { overflowY: 'scroll', top: 149, nested: false, shouldScroll: false },
      { overflowY: 'overlay', top: 149, nested: false, shouldScroll: false },
      { overflowY: 'hidden', top: 149, nested: false, shouldScroll: false },
      { overflowY: 'clip', top: 149, nested: false, shouldScroll: false },
      { overflowY: 'auto', top: 149, nested: true, shouldScroll: false },
      { overflowY: 'auto', top: 108, nested: false, shouldScroll: true },
      { overflowY: 'auto', top: 148, nested: false, shouldScroll: true },
      { overflowY: 'visible', top: 149, nested: false, shouldScroll: true },
    ] as const)(
      'overflowY=$overflowY top=$top nested=$nested shouldScroll=$shouldScroll',
      ({ overflowY, top, nested, shouldScroll }) => {
        const scrollIntoViewMock = mockScrollIntoView();
        const ancestorRef = (element: HTMLDivElement | null) => {
          if (element) {
            const isInner = element.dataset.testid === 'inner';
            vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(
              new DOMRect(0, isInner ? 0 : 100, 320, isInner ? 768 : 96),
            );
            vi.spyOn(element, 'clientTop', 'get').mockReturnValue(isInner ? 0 : 8);
            vi.spyOn(element, 'clientHeight', 'get').mockReturnValue(isInner ? 768 : 80);
            vi.spyOn(element, 'offsetHeight', 'get').mockReturnValue(isInner ? 768 : 96);
          }
        };
        const tabRef = (element: HTMLElement | null) => {
          if (element) {
            vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(
              new DOMRect(600, top, 100, 40),
            );
          }
        };
        const tabs = (selected: boolean) => (
          <div
            style={{ overflowY, overflowX: 'clip', borderWidth: 8, borderStyle: 'solid' }}
            ref={ancestorRef}
          >
            <div
              data-testid="inner"
              style={
                nested ? { overflowY: 'auto', borderWidth: 0, borderStyle: 'solid' } : undefined
              }
              ref={nested ? ancestorRef : undefined}
            >
              <Tabs withScrollToSelectedTab>
                <TabsItem selected={selected} getRootRef={tabRef}>
                  First
                </TabsItem>
              </Tabs>
            </div>
          </div>
        );

        const { rerender } = render(tabs(true));
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(shouldScroll ? 1 : 0);

        scrollIntoViewMock.mockClear();
        rerender(tabs(false));
        rerender(tabs(true));
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(shouldScroll ? 1 : 0);
      },
    );

    it.each([
      { height: 48.25, tabHeight: 48.25, border: 0, scrollbar: 0, shouldScroll: true },
      { height: 48.5, tabHeight: 48.5, border: 0, scrollbar: 0, shouldScroll: true },
      { height: 48.75, tabHeight: 48.75, border: 0, scrollbar: 0, shouldScroll: true },
      { height: 48.25, tabHeight: 48.25, border: 8, scrollbar: 0, shouldScroll: true },
      ...[0.8, 0.909091, 0.666667, 0.571429, 1.25, 0.6].map((border) => ({
        height: 48.25,
        tabHeight: 48.25,
        border,
        scrollbar: 0,
        shouldScroll: true,
      })),
      { height: 48.4, tabHeight: 48.4, border: 0.6, scrollbar: 0, shouldScroll: true },
      {
        height: 48.25,
        tabHeight: 48.25,
        border: 0.8,
        scrollbar: 0,
        topOffset: -0.000002,
        shouldScroll: true,
      },
      {
        height: 48.25,
        tabHeight: 48.250002,
        border: 0.8,
        scrollbar: 0,
        shouldScroll: true,
      },
      {
        height: 48.25,
        tabHeight: 48.25,
        border: 0.8,
        scrollbar: 0,
        topOffset: -0.25,
        shouldScroll: false,
      },
      { height: 48.25, tabHeight: 48.5, border: 0.8, scrollbar: 0, shouldScroll: false },
      { height: 48.25, tabHeight: 48.5, border: 0, scrollbar: 0, shouldScroll: false },
      { height: 48.5, tabHeight: 48.75, border: 0, scrollbar: 0, shouldScroll: false },
      { height: 48.25, tabHeight: 48.25, border: 8, scrollbar: 15, shouldScroll: false },
      { height: 48.25, tabHeight: 48.25, border: 0.8, scrollbar: 15, shouldScroll: false },
      {
        height: 48.6,
        tabHeight: 34,
        border: 0.6,
        scrollbar: 15,
        topOffset: 0.4,
        shouldScroll: false,
      },
    ])(
      'height=$height tabHeight=$tabHeight border=$border scrollbar=$scrollbar topOffset=$topOffset shouldScroll=$shouldScroll',
      ({ height, tabHeight, border, scrollbar, topOffset = 0, shouldScroll }) => {
        const scrollIntoViewMock = mockScrollIntoView();

        render(
          <div
            style={{ overflowY: 'auto', borderWidth: border, borderStyle: 'solid' }}
            ref={(element) => {
              if (element) {
                vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(
                  new DOMRect(0, 100, 320, height + 2 * border),
                );
                vi.spyOn(element, 'clientTop', 'get').mockReturnValue(Math.round(border));
                vi.spyOn(element, 'clientHeight', 'get').mockReturnValue(
                  Math.round(height) - scrollbar,
                );
                vi.spyOn(element, 'offsetHeight', 'get').mockReturnValue(
                  Math.round(height + 2 * border),
                );
              }
            }}
          >
            <Tabs withScrollToSelectedTab>
              <TabsItem
                selected
                getRootRef={(element) => {
                  if (element) {
                    vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(
                      new DOMRect(600, 100 + border + topOffset, 100, tabHeight),
                    );
                  }
                }}
              >
                First
              </TabsItem>
            </Tabs>
          </div>,
        );

        expect(scrollIntoViewMock).toHaveBeenCalledTimes(shouldScroll ? 1 : 0);
      },
    );
  });

  describe('DEV errros', () => {
    beforeEach(() => setNodeEnv('development'));
    afterEach(() => setNodeEnv('test'));

    it('check calls TabsItem', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(noop);
      const { rerender } = render(
        <TabsItem data-testid="first" selected={false}>
          test
        </TabsItem>,
      );
      expect(warn.mock.calls[0][0]).toBe(
        '%c[VKUI/TabsItem] Передайте в "aria-controls" id контролируемого блока',
      );

      rerender(
        <TabsItem aria-controls="control" data-testid="first" selected={false}>
          test
        </TabsItem>,
      );
      expect(warn.mock.calls[1][0]).toBe(
        '%c[VKUI/TabsItem] Передайте "id" компоненту для использования в "aria-labelledby" контролируемого блока',
      );
    });
  });
});
