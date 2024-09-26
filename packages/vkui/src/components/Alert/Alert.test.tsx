import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { ViewWidth } from '../../lib/adaptivity';
import { getDocumentBody } from '../../lib/dom';
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
import styles from './Alert.module.css';
import buttonStyles from '../Button/Button.module.css';
import modalDismissButtonStyles from '../ModalDismissButton/ModalDismissButton.module.css';
import popoutWrapperStyles from '../PopoutWrapper/PopoutWrapper.module.css';
import captionStyles from '../Typography/Caption/Caption.module.css';
import footnoteStyles from '../Typography/Footnote/Footnote.module.css';
import titleStyles from '../Typography/Title/Title.module.css';
import typographyStyles from '../Typography/Typography.module.css';

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
      const className =
        trigger === 'overlay' ? popoutWrapperStyles.overlay : modalDismissButtonStyles.host;

      await userEvent.click(document.querySelector(`.${className}`)!);
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

    it('should call onClose last', async () => {
      const callOrder: Array<'action' | 'onClose'> = [];
      const action = jest.fn().mockImplementation(() => callOrder.push('action'));
      const onClose = jest.fn().mockImplementation(() => callOrder.push('onClose'));
      const result = render(
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
        />,
      );
      await userEvent.click(result.getByTestId('__action__'));
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(callOrder).toEqual(['action', 'onClose']);
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
  it.each([
    {
      href: '#',
      expectedTag: 'A',
    },
    {
      href: undefined,
      expectedTag: 'BUTTON',
    },
  ])(
    'action should use "$expectedTag" tag when use href "$href" ',
    async ({ href, expectedTag }) => {
      const result = render(
        <ConfigProvider platform={Platform.IOS}>
          <Alert
            onClose={jest.fn()}
            actions={[
              { 'title': 'Allow', 'mode': 'default', 'data-testid': 'allow-test-id', href },
            ]}
          />
        </ConfigProvider>,
      );
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(screen.getByTestId('allow-test-id').tagName).toBe(expectedTag);
    },
  );

  it.each([
    {
      mode: 'destructive' as const,
      className: styles.actionModeDestructive,
    },
    {
      mode: 'cancel' as const,
      className: styles.actionModeCancel,
    },
  ])(
    'should have className "$className" with mode "$mode" in IOS platform',
    async ({ mode, className }) => {
      const result = render(
        <ConfigProvider platform={Platform.IOS}>
          <Alert
            onClose={jest.fn()}
            actions={[{ 'title': 'Allow', mode, 'data-testid': 'allow-test-id' }]}
          />
        </ConfigProvider>,
      );
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(screen.getByTestId('allow-test-id')).toHaveClass(className);
    },
  );

  it.each([
    {
      mode: 'cancel' as const,
      className: styles.buttonModeCancel,
      buttonClassName: buttonStyles.modeSecondary,
    },
    {
      mode: 'destructive' as const,
      className: undefined,
      buttonClassName: buttonStyles.modePrimary,
    },
  ])(
    'should have className "$className" ans "$buttonClassName" with mode "$mode" in VKCOM platform',
    async ({ mode, className, buttonClassName }) => {
      const result = render(
        <ConfigProvider platform={Platform.VKCOM}>
          <Alert
            onClose={jest.fn()}
            actions={[{ 'title': 'Allow', mode, 'data-testid': 'allow-test-id' }]}
          />
        </ConfigProvider>,
      );
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      className && expect(screen.getByTestId('allow-test-id')).toHaveClass(className);
      expect(screen.getByTestId('allow-test-id')).toHaveClass(buttonClassName);
    },
  );

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

  it.each([
    {
      align: 'left' as const,
      className: styles.actionsAlignLeft,
    },
    {
      align: 'center' as const,
      className: styles.actionsAlignCenter,
    },
    {
      align: 'right' as const,
      className: styles.actionsAlignRight,
    },
  ])(
    'actions wrapper should have className "$className" when use align "$align"',
    async ({ align, className }) => {
      const result = render(<Alert onClose={jest.fn()} actionsAlign={align} />);
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      const actionsWrapper = getDocumentBody().getElementsByClassName(styles.actions)[0];
      expect(actionsWrapper).toHaveClass(className);
    },
  );

  it.each([
    {
      header: 'Header',
      headerClassNames: [titleStyles.level3, typographyStyles.weight1],
      text: 'Text',
      textClassNames: [captionStyles.level1],
      platform: Platform.IOS,
    },
    {
      header: 'Header',
      headerClassNames: [titleStyles.level2, typographyStyles.weight2],
      text: 'Text',
      textClassNames: [footnoteStyles.host],
      platform: Platform.VKCOM,
    },
    {
      header: 'Header',
      headerClassNames: [titleStyles.level2, typographyStyles.weight2],
      text: 'Text',
      textClassNames: [typographyStyles.weight3],
      platform: Platform.ANDROID,
    },
  ])(
    `should have header classNames "$headerClassNames" and text classNames "$textClassNames" when use platform "$platform"`,
    async ({ header, text, headerClassNames, textClassNames, platform }) => {
      const result = render(
        <ConfigProvider platform={platform}>
          <Alert onClose={jest.fn()} header={header} text={text} />
        </ConfigProvider>,
      );
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      const headerElement = result.container.getElementsByClassName(styles.header)[0];
      const textElement = result.container.getElementsByClassName(styles.text)[0];

      headerClassNames.forEach((className) => expect(headerElement).toHaveClass(className));
      textClassNames.forEach((className) => expect(textElement).toHaveClass(className));
    },
  );
});
