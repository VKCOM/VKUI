import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { baselineComponent } from '../../testing/utils';
import { noop } from '../../lib/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ViewWidth } from '../../lib/adaptivity';
import { PanelHeaderContext } from './PanelHeaderContext';

describe('PanelHeaderContext', () => {
  baselineComponent(PanelHeaderContext);
  describe('Closes', () => {
    beforeEach(() => jest.useFakeTimers('modern'));
    afterEach(() => jest.useRealTimers());

    it('does not close on mount', () => {
      render(
        <PanelHeaderContext opened={false} onClose={noop}>
          <div data-testid="xxx" />
        </PanelHeaderContext>,
      );
      expect(screen.queryByTestId('xxx')).toBeNull();
    });

    it('on desktop outer click', () => {
      const onClose = jest.fn();
      render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <PanelHeaderContext opened onClose={onClose} />
        </AdaptivityProvider>,
      );
      userEvent.click(document.body);
      expect(onClose).toBeCalledTimes(1);
    });

    it('on mobile fade click', () => {
      const onClose = jest.fn();
      render(<PanelHeaderContext opened onClose={onClose} />);
      userEvent.click(document.querySelector('.vkuiPanelHeaderContext__fade') as Element);
      expect(onClose).toBeCalledTimes(1);
    });

    it('does not close on content click', () => {
      const onClose = jest.fn();
      render(
        <PanelHeaderContext opened onClose={onClose}>
          <div data-testid="xxx" />
        </PanelHeaderContext>,
      );
      userEvent.click(screen.getByTestId('xxx'));
      expect(onClose).not.toBeCalled();
    });

    it('Removes content after opened=false', () => {
      const { rerender } = render(
        <PanelHeaderContext opened onClose={noop}>
          <div data-testid="xxx" />
        </PanelHeaderContext>,
      );
      rerender(
        <PanelHeaderContext opened={false} onClose={noop}>
          <div data-testid="xxx" />
        </PanelHeaderContext>,
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(screen.queryByTestId('xxx')).toBeNull();
    });
  });
});
