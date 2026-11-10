import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { baselineComponent, setNodeEnv } from '../../testing/utils';
import { Tabs } from '../Tabs/Tabs';
import { TabsItem } from './TabsItem';
import styles from './TabsItem.module.css';
import subheadStyles from '../Typography/Subhead/Subhead.module.css';
import typographyStyles from '../Typography/Typography.module.css';
import visuallyHiddenStyles from '../VisuallyHidden/VisuallyHidden.module.css';

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

  it.each(['99+', 'New', 0, 5])('renders primitive status %s with Subhead styling', (status) => {
    render(<TabsItem status={status}>Tab</TabsItem>);

    const statusElement = screen.getByText(String(status));
    expect(statusElement.tagName).toBe('SPAN');
    expect(statusElement).toHaveClass(
      styles.status,
      styles.statusCount,
      subheadStyles.host,
      typographyStyles.weight2,
    );
    expect(statusElement.firstElementChild).toHaveClass(visuallyHiddenStyles.host);
    expect(statusElement.firstElementChild?.textContent).toBe('\u00a0');
    expect(screen.getByRole('tab')).toHaveAccessibleName(`Tab ${status}`);
  });

  it('renders custom status in an ordinary span', () => {
    render(<TabsItem status={<strong>New</strong>}>Tab</TabsItem>);

    const statusElement = screen.getByText('New').parentElement;
    expect(statusElement?.tagName).toBe('SPAN');
    expect(statusElement).toHaveClass(styles.status);
    expect(statusElement).not.toHaveClass(styles.statusCount);
    expect(statusElement).not.toHaveClass(subheadStyles.host);
    expect(statusElement?.firstElementChild).toHaveClass(visuallyHiddenStyles.host);
    expect(statusElement?.firstElementChild?.textContent).toBe('\u00a0');
    expect(screen.getByRole('tab')).toHaveAccessibleName('Tab New');
  });

  it.each([undefined, ''])('omits the status wrapper for status %s', (status) => {
    const { container } = render(<TabsItem status={status}>Tab</TabsItem>);

    expect(container.querySelector(`.${styles.status}`)).toBeNull();
    expect(screen.getByRole('tab')).toHaveAccessibleName('Tab');
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
