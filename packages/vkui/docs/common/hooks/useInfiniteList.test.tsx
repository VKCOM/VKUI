import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useInfiniteList } from './useInfiniteList';

const sections = [{ id: '12' }, { id: '24' }];

const mockDimensions = (element: HTMLElement) => {
  vi.spyOn(element, 'clientHeight', 'get').mockReturnValue(200);
  vi.spyOn(element, 'scrollHeight', 'get').mockReturnValue(500);
};

afterEach(() => {
  vi.restoreAllMocks();
  document.documentElement.scrollTop = 0;
});

describe('useInfiniteList', () => {
  it('renders the requested initial sections and keeps that count after filtering', () => {
    const items = [...sections, { id: '28' }];
    const { result, rerender } = renderHook(
      ({ items }) => useInfiniteList(items, {}, { current: null }, undefined, 2),
      { initialProps: { items } },
    );

    expect(result.current.remappedSections).toEqual(sections);
    expect(result.current.hasMoreSections).toBe(true);

    rerender({ items: items.slice(1) });
    expect(result.current.remappedSections).toEqual(items.slice(1));
    expect(result.current.hasMoreSections).toBe(false);

    rerender({ items: [sections[0]] });
    expect(result.current.remappedSections).toEqual([sections[0]]);

    rerender({ items: [] });
    expect(result.current.remappedSections).toEqual([]);
  });

  it('loads more sections when the page reaches the bottom', () => {
    mockDimensions(document.documentElement);
    const { result } = renderHook(() => useInfiniteList(sections, {}, { current: null }));

    expect(result.current.remappedSections).toEqual([sections[0]]);
    expect(result.current.hasMoreSections).toBe(true);

    act(() => {
      document.documentElement.scrollTop = 300;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.hasMoreSections).toBe(false);
    expect(result.current.remappedSections).toEqual(sections);
  });

  it('uses the local scroll container and resets it when sections change', () => {
    const container = document.createElement('div');
    const scrollContainerRef = { current: container };
    mockDimensions(container);
    const { result, rerender } = renderHook(
      ({ items }) => useInfiniteList(items, {}, { current: null }, scrollContainerRef),
      { initialProps: { items: sections } },
    );

    act(() => {
      container.scrollTop = 300;
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current.hasMoreSections).toBe(true);

    act(() => container.dispatchEvent(new Event('scroll')));
    expect(result.current.hasMoreSections).toBe(false);

    rerender({ items: [sections[1]] });
    expect(container.scrollTop).toBe(0);
    expect(result.current.remappedSections).toEqual([sections[1]]);

    rerender({ items: [] });
    expect(result.current.remappedSections).toEqual([]);
    expect(result.current.hasMoreSections).toBe(false);
  });
});
