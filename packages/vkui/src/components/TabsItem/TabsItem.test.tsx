import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
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
  const scrollIntoViewMock = jest.fn();
  Element.prototype.scrollIntoView = scrollIntoViewMock;
  return scrollIntoViewMock;
};

describe('TabsItem', () => {
  baselineComponent(TabsItem, {
    a11Config: {
      rules: {
        // TODO [a11y]: "Certain ARIA roles must be contained by particular parents (aria-required-parent)"
        //              https://dequeuniversity.com/rules/axe/4.5/aria-required-parent?application=axeAPI
        'aria-required-parent': { enabled: false },
      },
    },
  });

  it('should scroll to tab', () => {
    render(<TestTabs />);

    const secondTab = screen.getByTestId<HTMLDivElement>('second');

    const scrollIntoViewMock = mockScrollIntoView();
    fireEvent.click(secondTab);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      inline: 'start',
      block: 'nearest',
      behavior: 'smooth',
    });
  });

  it('should no scroll to tab when vertically outside the viewport', () => {
    render(<TestTabs />);

    const secondTab = screen.getByTestId<HTMLDivElement>('second');
    jest.spyOn(secondTab, 'getBoundingClientRect').mockImplementation(() => {
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
      const warn = jest.spyOn(console, 'warn').mockImplementation(noop);
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
