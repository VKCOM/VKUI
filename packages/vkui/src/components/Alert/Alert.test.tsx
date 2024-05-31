import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { ViewWidth } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import {
  baselineComponent,
  fakeTimers,
  userEvent,
  waitCSSKeyframesAnimation,
} from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Alert, type AlertProps } from './Alert';

describe('Alert', () => {
  fakeTimers();

  baselineComponent(Alert, {
    // TODO [a11y]: "ARIA dialog and alertdialog nodes should have an accessible name (aria-dialog-name)"
    a11y: false,
  });

  describe('closes', () => {
    it.each(['overlay', 'close'])('with %s click', async (trigger) => {
      const onClose = jest.fn();
      const result = render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <Alert onClose={onClose} />
        </AdaptivityProvider>,
      );
      const target =
        trigger === 'overlay' ? '.vkuiPopoutWrapper__overlay' : '.vkuiModalDismissButton';

      await userEvent.click(document.querySelector(target)!);
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('calls action and do not calls onClose with autoCloseDisabled=true', () => {
    it.each([Platform.ANDROID, Platform.IOS])('%s', async (platform) => {
      const action = jest
        .fn()
        .mockImplementationOnce(noop)
        .mockImplementationOnce((args) => {
          if (args && args.close) {
            args.close();
          }
        });

      const onClose = jest.fn();
      const result = render(
        <ConfigProvider platform={platform}>
          <Alert
            onClose={onClose}
            actions={[
              {
                action,
                'title': 'Item',
                'data-testid': '__action__',
                'autoCloseDisabled': true,
                'mode': 'default',
              },
            ]}
          />
        </ConfigProvider>,
      );
      await userEvent.click(result.getByTestId('__action__'));
      expect(action).toHaveBeenCalledTimes(1);
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(onClose).not.toHaveBeenCalled();

      // второй клик закроет Alert, так как в action был вызван метод close()
      await userEvent.click(result.getByTestId('__action__'));
      expect(action).toHaveBeenCalledTimes(2);
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('calls action after close by default', () => {
    it.each([Platform.ANDROID, Platform.IOS])('%s', async (platform) => {
      const action = jest.fn();
      const onClose = jest.fn();
      const result = render(
        <ConfigProvider platform={platform}>
          <Alert
            onClose={onClose}
            actions={[
              {
                action,
                'title': 'Item',
                'data-testid': '__action__',
                'mode': 'default',
              },
            ]}
          />
        </ConfigProvider>,
      );
      await userEvent.click(result.getByTestId('__action__'));
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(action).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  it('passes data-testid to actions', async () => {
    const result = render(
      <Alert
        onClose={jest.fn()}
        actions={[
          { 'title': 'Allow', 'mode': 'default', 'data-testid': 'allow-test-id' },
          { 'title': 'Deny', 'mode': 'default', 'data-testid': 'deny-test-id' },
        ]}
      />,
    );
    await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
      runOnlyPendingTimers: true,
    });
    expect(screen.getByTestId('allow-test-id')).toHaveTextContent('Allow');
    expect(screen.getByTestId('deny-test-id')).toHaveTextContent('Deny');
  });

  it.each<AlertProps['dismissButtonMode']>(['outside', 'inside'])(
    'passes data-testid to dismiss button in %s dismissButtonMode',
    async (dismissButtonMode) => {
      render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <Alert
            onClose={jest.fn()}
            dismissLabel="Закрыть предупреждение"
            dismissButtonTestId="dismiss-button-test-id"
            dismissButtonMode={dismissButtonMode}
          />
        </AdaptivityProvider>,
      );
      act(jest.runAllTimers);
      expect(screen.getByTestId('dismiss-button-test-id')).toHaveTextContent(
        'Закрыть предупреждение',
      );
    },
  );
});
