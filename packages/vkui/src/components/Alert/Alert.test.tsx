import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewWidth } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { baselineComponent, runAllTimers } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Alert } from './Alert';

describe('Alert', () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());
  baselineComponent(Alert, {
    // TODO [a11y]: "Exceeded timeout of 5000 ms for a test.
    //              Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."
    a11y: false,
  });
  describe('closes', () => {
    it.each(['overlay', 'close'])('with %s click', (trigger) => {
      const onClose = jest.fn();
      render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <Alert onClose={onClose} />
        </AdaptivityProvider>,
      );
      const target =
        trigger === 'overlay' ? '.vkuiPopoutWrapper__overlay' : '.vkuiModalDismissButton';

      userEvent.click(document.querySelector(target) as Element);
      expect(onClose).not.toBeCalled();
      runAllTimers();
      expect(onClose).toBeCalledTimes(1);
    });
  });
  describe('calls actions', () => {
    describe.each([Platform.ANDROID, Platform.IOS])('on %s', (platform) => {
      it('calls action', () => {
        const action = jest.fn();
        const onClose = jest.fn();
        render(
          <ConfigProvider platform={platform}>
            <Alert onClose={onClose} actions={[{ action, title: '__action__', mode: 'default' }]} />
          </ConfigProvider>,
        );
        userEvent.click(screen.getByText('__action__'));
        expect(action).toBeCalledTimes(1);
      });
      it('calls action after close when autoClose=true', () => {
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
        userEvent.click(screen.getByText('__action__'));
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
