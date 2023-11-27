import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ViewWidth } from '../../lib/adaptivity';
import { baselineComponent, fakeTimers, runAllTimers, userEvent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Alert } from './Alert';

describe('Alert', () => {
  fakeTimers();

  baselineComponent(Alert, {
    // TODO [a11y]: "ARIA dialog and alertdialog nodes should have an accessible name (aria-dialog-name)"
    a11y: false,
  });
  describe('closes', () => {
    it.each(['overlay', 'close'])('with %s click', async (trigger) => {
      const onClose = jest.fn();
      render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <Alert onClose={onClose} />
        </AdaptivityProvider>,
      );
      const target =
        trigger === 'overlay' ? '.vkuiPopoutWrapper__overlay' : '.vkuiModalDismissButton';

      await userEvent.click(document.querySelector(target) as Element);
      expect(onClose).not.toBeCalled();
      runAllTimers();
      expect(onClose).toBeCalledTimes(1);
    });
  });
  describe('calls actions', () => {
    describe.each(['android', 'ios'])('on %s', (platform) => {
      it('calls action', async () => {
        const action = jest.fn();
        const onClose = jest.fn();
        render(
          <ConfigProvider platform={platform}>
            <Alert onClose={onClose} actions={[{ action, title: '__action__', mode: 'default' }]} />
          </ConfigProvider>,
        );
        await userEvent.click(screen.getByText('__action__'));
        expect(action).toBeCalledTimes(1);
      });
      it('calls action after close when autoClose=true', async () => {
        const action = jest.fn();
        const onClose = jest.fn();
        render(
          <ConfigProvider platform={platform}>
            <Alert
              onClose={onClose}
              actions={[
                {
                  action,
                  title: '__action__',
                  mode: 'default',
                  autoClose: true,
                },
              ]}
            />
          </ConfigProvider>,
        );
        await userEvent.click(screen.getByText('__action__'));
        expect(action).not.toBeCalled();
        expect(onClose).not.toBeCalled();
        runAllTimers();
        expect(action).toBeCalledTimes(1);
        expect(onClose).toBeCalledTimes(1);
      });
    });
  });

  it('passes data-testid to actions', () => {
    render(
      <Alert
        onClose={jest.fn()}
        actions={[
          { 'title': 'Allow', 'mode': 'default', 'data-testid': 'allow-test-id' },
          { 'title': 'Deny', 'mode': 'default', 'data-testid': 'deny-test-id' },
        ]}
      />,
    );

    expect(screen.getByTestId('allow-test-id')).toHaveTextContent('Allow');
    expect(screen.getByTestId('deny-test-id')).toHaveTextContent('Deny');
  });
});
