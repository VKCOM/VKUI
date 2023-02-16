import * as React from 'react';
import { ComponentProps, useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Group } from '../Group/Group';
import { TabsItem } from '../TabsItem/TabsItem';
import { Tabs } from './Tabs';

function TestTabs(props: { disabledKeys?: string[] }) {
  const [currentTab, setCurrentTab] = useState('first');

  return (
    <div>
      <Tabs>
        <TabsItem
          id="tab-first"
          data-testid="first"
          selected={currentTab === 'first'}
          onClick={() => setCurrentTab('first')}
          aria-controls="tab-content-first"
          disabled={props.disabledKeys?.includes('first')}
        >
          First
        </TabsItem>
        <TabsItem
          id="tab-second"
          data-testid="second"
          aria-controls="tab-content-second"
          onClick={() => setCurrentTab('second')}
          selected={currentTab === 'second'}
          disabled={props.disabledKeys?.includes('second')}
        >
          Second
        </TabsItem>
        <TabsItem
          id="tab-third"
          data-testid="third"
          aria-controls="tab-content-third"
          onClick={() => setCurrentTab('third')}
          selected={currentTab === 'third'}
          disabled={props.disabledKeys?.includes('third')}
        >
          Third
        </TabsItem>
      </Tabs>
      {currentTab === 'first' && (
        <Group
          role="tabpanel"
          data-testid="content-first"
          id="tab-content-first"
          aria-labelledby="tab-first"
        ></Group>
      )}
      {currentTab === 'second' && (
        <Group
          role="tabpanel"
          data-testid="content-second"
          id="tab-content-second"
          aria-labelledby="tab-second"
        ></Group>
      )}
      {currentTab === 'third' && (
        <Group
          role="tabpanel"
          data-testid="content-third"
          id="tab-content-third"
          aria-labelledby="tab-third"
        ></Group>
      )}
    </div>
  );
}

function isTabSelected(el: HTMLElement) {
  return el.getAttribute('aria-selected') === 'true';
}

function isTabFocused(el: HTMLElement) {
  return document.activeElement === el;
}

function renderTestTabs(props: ComponentProps<typeof TestTabs> = {}) {
  render(<TestTabs {...props} />);
  screen.getByTestId('first').focus();
  screen.getByTestId('first').click();
}

function pressKey(key: string) {
  if (!document.activeElement) {
    return;
  }

  fireEvent.keyDown(document.activeElement, {
    key,
  });
}

describe('Tabs', () => {
  baselineComponent(Tabs);

  describe('Mouse handlers', () => {
    it('select element on click', () => {
      renderTestTabs();

      fireEvent.click(screen.getByTestId('third'));

      expect(isTabSelected(screen.getByTestId('third'))).toBeTruthy();
    });
    it("doesn't select disabled element on click", () => {
      renderTestTabs({ disabledKeys: ['third'] });

      fireEvent.click(screen.getByTestId('third'));

      expect(isTabSelected(screen.getByTestId('third'))).toBeFalsy();
    });
  });

  describe('Keyboard handlers', () => {
    it("doesn't focus previous element when first focused", () => {
      renderTestTabs();
      screen.getByTestId('first').focus();
      pressKey('ArrowLeft');
      expect(isTabFocused(screen.getByTestId('first'))).toBeTruthy();
    });
    it("doesn't focus next element when last focused", () => {
      renderTestTabs();
      screen.getByTestId('third').focus();
      pressKey('ArrowRight');
      expect(isTabFocused(screen.getByTestId('third'))).toBeTruthy();
    });
    it('focus next element with ArrowRight key', () => {
      renderTestTabs();
      screen.getByTestId('second').focus();
      pressKey('ArrowRight');
      expect(isTabFocused(screen.getByTestId('third'))).toBeTruthy();
    });
    it('focus previuos element with ArrowLeft key', () => {
      renderTestTabs();
      screen.getByTestId('second').focus();
      pressKey('ArrowLeft');
      expect(isTabFocused(screen.getByTestId('first'))).toBeTruthy();
    });
    it('focus first element with Home key', () => {
      renderTestTabs();
      screen.getByTestId('third').focus();
      pressKey('Home');
      expect(isTabFocused(screen.getByTestId('first'))).toBeTruthy();
    });
    it('focus last element with End key', () => {
      renderTestTabs();
      screen.getByTestId('first').focus();
      pressKey('End');
      expect(isTabFocused(screen.getByTestId('third'))).toBeTruthy();
    });
    it('select element with Space key', () => {
      renderTestTabs();
      screen.getByTestId('first').focus();
      pressKey('ArrowRight');
      pressKey('Space');
      expect(isTabFocused(screen.getByTestId('second'))).toBeTruthy();
      expect(isTabSelected(screen.getByTestId('second'))).toBeTruthy();
    });
    it('select element with Enter key', () => {
      renderTestTabs();
      screen.getByTestId('first').focus();
      pressKey('ArrowRight');
      pressKey('Enter');
      expect(isTabFocused(screen.getByTestId('second'))).toBeTruthy();
      expect(isTabSelected(screen.getByTestId('second'))).toBeTruthy();
    });
    it('skip disabled elements', () => {
      renderTestTabs({ disabledKeys: ['second'] });
      screen.getByTestId('first').focus();
      pressKey('ArrowRight');
      pressKey('Enter');
      expect(isTabFocused(screen.getByTestId('third'))).toBeTruthy();
      expect(isTabSelected(screen.getByTestId('second'))).toBeFalsy();
      expect(isTabSelected(screen.getByTestId('third'))).toBeTruthy();
    });
    it('focus content with Down key', () => {
      renderTestTabs();
      screen.getByTestId('second').focus();
      pressKey('Enter');
      pressKey('ArrowDown');
      expect(isTabSelected(screen.getByTestId('second'))).toBeTruthy();
      expect(document.activeElement).toEqual(screen.getByTestId('content-second'));
    });
  });
});
