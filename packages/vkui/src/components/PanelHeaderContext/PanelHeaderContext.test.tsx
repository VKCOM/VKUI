import { render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { ViewWidth } from '../../lib/adaptivity';
import {
  baselineComponent,
  fakeTimers,
  userEvent,
  waitCSSKeyframesAnimation,
} from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { PanelHeaderContext } from './PanelHeaderContext';
import panelHeaderContextStyles from './PanelHeaderContext.module.css';

describe('PanelHeaderContext', () => {
  baselineComponent((props) => <PanelHeaderContext opened onClose={noop} {...props} />);
  describe('Closes', () => {
    fakeTimers();

    it('does not close on mount', async () => {
      render(
        <PanelHeaderContext opened={false} onClose={noop}>
          <div data-testid="xxx" />
        </PanelHeaderContext>,
      );
      expect(screen.queryByTestId('xxx')).toBeNull();
    });

    it('on desktop outer click', async () => {
      const onClose = vi.fn();
      render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <PanelHeaderContext opened onClose={onClose} />
        </AdaptivityProvider>,
      );
      await userEvent.click(document.body);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('on mobile fade click', async () => {
      const onClose = vi.fn();
      render(<PanelHeaderContext opened onClose={onClose} />);
      await userEvent.click(document.querySelector(`.${panelHeaderContextStyles.fade}`) as Element);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not close on content click', async () => {
      const onClose = vi.fn();
      render(
        <PanelHeaderContext opened onClose={onClose}>
          <div data-testid="xxx" />
        </PanelHeaderContext>,
      );
      await userEvent.click(screen.getByTestId('xxx'));
      expect(onClose).not.toHaveBeenCalled();
    });

    it('Removes content after opened=false', async () => {
      const result = render(
        <PanelHeaderContext opened onClose={noop}>
          <div data-testid="xxx" />
        </PanelHeaderContext>,
      );
      result.rerender(
        <PanelHeaderContext opened={false} onClose={noop}>
          <div data-testid="xxx" />
        </PanelHeaderContext>,
      );
      await waitCSSKeyframesAnimation(result.getByTestId('content'));
      expect(screen.queryByTestId('xxx')).toBeNull();
    });
  });
});
