import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { ViewWidth } from '../../lib/adaptivity';
import { baselineComponent, fakeTimers, runAllTimers, userEvent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { PanelHeaderContext } from './PanelHeaderContext';

describe('PanelHeaderContext', () => {
  baselineComponent(PanelHeaderContext);
  describe('Closes', () => {
    fakeTimers();

    it('does not close on mount', () => {
      render(
        <PanelHeaderContext opened={false} onClose={noop}>
          <div data-testid="xxx" />
        </PanelHeaderContext>,
      );
      expect(screen.queryByTestId('xxx')).toBeNull();
    });

    it('on desktop outer click', async () => {
      const onClose = jest.fn();
      render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <PanelHeaderContext opened onClose={onClose} />
        </AdaptivityProvider>,
      );
      await userEvent.click(document.body);
      expect(onClose).toBeCalledTimes(1);
    });

    it('on mobile fade click', async () => {
      const onClose = jest.fn();
      render(<PanelHeaderContext opened onClose={onClose} />);
      await userEvent.click(document.querySelector('.vkuiPanelHeaderContext__fade') as Element);
      expect(onClose).toBeCalledTimes(1);
    });

    it('does not close on content click', async () => {
      const onClose = jest.fn();
      render(
        <PanelHeaderContext opened onClose={onClose}>
          <div data-testid="xxx" />
        </PanelHeaderContext>,
      );
      await userEvent.click(screen.getByTestId('xxx'));
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
      runAllTimers();
      expect(screen.queryByTestId('xxx')).toBeNull();
    });
  });
});
