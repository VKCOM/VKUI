import type * as React from 'react';
import { fireEvent, renderHook } from '@testing-library/react';
import { useTabsNavigation } from './useTabsNavigation';

describe('useTabsNavigation', () => {
  const setupTabs = () => {
    const container = document.createElement('div');
    const tabs = document.createElement('div');
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');
    const content1 = document.createElement('div');

    tabs.setAttribute('role', 'tablist');
    [tab1, tab2, tab3].forEach((tab, index) => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('tabindex', '0');
      tab.setAttribute('aria-controls', `content-${index}`);
    });

    tab1.setAttribute('aria-selected', 'true');
    content1.setAttribute('id', 'content-0');
    content1.setAttribute('tabindex', '-1');

    tabs.append(tab1, tab2, tab3);
    container.append(tabs, content1);
    document.body.append(container);

    return { container, tabs, tab1, tab2, tab3, content1 };
  };

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should switch to next tab when right arrow is pressed', () => {
    const { tabs, tab1, tab2 } = setupTabs();
    const { result } = renderHook(() => useTabsNavigation());

    // Теперь можно безопасно присвоить значение
    (result.current.tabsRef as React.MutableRefObject<HTMLDivElement>).current = tabs;
    tab1.focus();

    fireEvent.keyDown(document, { key: 'ArrowRight' });

    expect(document.activeElement).toBe(tab2);
  });

  it('should switch to previous tab when left arrow is pressed', () => {
    const { tabs, tab2, tab1 } = setupTabs();
    const { result } = renderHook(() => useTabsNavigation());

    (result.current.tabsRef as React.MutableRefObject<HTMLDivElement>).current = tabs;
    tab2.focus();

    fireEvent.keyDown(document, { key: 'ArrowLeft' });

    expect(document.activeElement).toBe(tab1);
  });

  it('should switch to first tab when Home is pressed', () => {
    const { tabs, tab3, tab1 } = setupTabs();
    const { result } = renderHook(() => useTabsNavigation());

    (result.current.tabsRef as React.MutableRefObject<HTMLDivElement>).current = tabs;
    tab3.focus();

    fireEvent.keyDown(document, { key: 'Home' });

    expect(document.activeElement).toBe(tab1);
  });

  it('should switch to last tab when End is pressed', () => {
    const { tabs, tab1, tab3 } = setupTabs();
    const { result } = renderHook(() => useTabsNavigation());

    (result.current.tabsRef as React.MutableRefObject<HTMLDivElement>).current = tabs;
    tab1.focus();

    fireEvent.keyDown(document, { key: 'End' });

    expect(document.activeElement).toBe(tab3);
  });

  it('should focus on related content when arrow down is pressed', () => {
    const { tabs, tab1, content1 } = setupTabs();
    const { result } = renderHook(() => useTabsNavigation());

    (result.current.tabsRef as React.MutableRefObject<HTMLDivElement>).current = tabs;
    tab1.focus();

    fireEvent.keyDown(document, { key: 'ArrowDown' });

    expect(document.activeElement).toBe(content1);
  });

  it('should activate tab when Enter is pressed', () => {
    const { tabs, tab1 } = setupTabs();
    const { result } = renderHook(() => useTabsNavigation());

    (result.current.tabsRef as React.MutableRefObject<HTMLDivElement>).current = tabs;
    tab1.focus();

    const clickSpy = vi.spyOn(tab1, 'click');

    fireEvent.keyDown(document, { key: 'Enter' });

    expect(clickSpy).toHaveBeenCalled();
  });

  it('should not react to keys when enabled is false', () => {
    const { tabs, tab1, tab2 } = setupTabs();
    const { result } = renderHook(() => useTabsNavigation(false));

    (result.current.tabsRef as React.MutableRefObject<HTMLDivElement>).current = tabs;
    tab1.focus();

    fireEvent.keyDown(document, { key: 'ArrowRight' });

    expect(document.activeElement).toBe(tab1);
    expect(document.activeElement).not.toBe(tab2);
  });

  it('should change active tab in rtl', () => {
    const { tabs, tab2, tab1 } = setupTabs();
    const { result } = renderHook(() => useTabsNavigation(true, true));

    (result.current.tabsRef as React.MutableRefObject<HTMLDivElement>).current = tabs;
    tab1.focus();

    fireEvent.keyDown(document, { key: 'ArrowLeft' });
    expect(document.activeElement).toBe(tab2);

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    expect(document.activeElement).toBe(tab1);
  });
});
