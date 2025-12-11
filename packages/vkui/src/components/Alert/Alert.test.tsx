import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { ViewWidth } from '../../lib/adaptivity';
import { getDocumentBody } from '../../lib/dom';
import { Platform } from '../../lib/platform';
import {
  baselineComponent,
  fakeTimersForScope,
  setNodeEnv,
  userEvent,
  waitCSSKeyframesAnimation,
  withFakeTimers,
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
  baselineComponent((props) => <Alert {...props} title="Alert title" onClosed={noop} />, {});

  it('shows warning if title and area attributes are not provided', () => {
    setNodeEnv('development');
    const warn = vi.spyOn(console, 'warn').mockImplementation(noop);

    const component = render(<Alert onClosed={noop} title="Alert title" />);
    expect(warn).not.toHaveBeenCalled();

    component.rerender(<Alert onClosed={noop} aria-label="Alert title" />);
    expect(warn).not.toHaveBeenCalled();

    component.rerender(<Alert onClosed={noop} aria-labelledby="labelId" />);
    expect(warn).not.toHaveBeenCalled();

    component.rerender(<Alert onClosed={noop} />);

    expect(warn.mock.calls[0][0]).toBe(
      '%c[VKUI/Alert] Если "title" не используется, то необходимо задать либо "aria-label", либо "aria-labelledby" (см. правило axe aria-dialog-name)',
    );

    setNodeEnv('test');
  });

  describe('closes', () => {
    fakeTimersForScope();
    it.each(['overlay', 'close'])('with %s click', async (trigger) => {
      const onClosed = vi.fn();
      const result = render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <Alert onClosed={onClosed} />
        </AdaptivityProvider>,
      );
      const className =
        trigger === 'overlay' ? popoutWrapperStyles.overlay : modalDismissButtonStyles.host;

      await userEvent.click(document.querySelector(`.${className}`)!);
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(onClosed).toHaveBeenCalledTimes(1);
    });
  });

  describe('calls onClose with correct reason', () => {
    fakeTimersForScope();
    it('calls onClose with "click-overlay" when clicking overlay', async () => {
      const onClose = vi.fn();
      const onClosed = vi.fn();
      const result = render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <Alert onClose={onClose} onClosed={onClosed} />
        </AdaptivityProvider>,
      );

      await userEvent.click(document.querySelector(`.${popoutWrapperStyles.overlay}`)!);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('click-overlay');
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(onClosed).toHaveBeenCalledTimes(1);
    });

    it('calls onClose with "item-click" when clicking action', async () => {
      const onClose = vi.fn();
      const onClosed = vi.fn();
      const result = render(
        <ConfigProvider platform={Platform.IOS}>
          <Alert
            onClose={onClose}
            onClosed={onClosed}
            actions={[
              {
                'title': 'OK',
                'mode': 'default',
                'data-testid': '__action__',
              },
            ]}
          />
        </ConfigProvider>,
      );

      await userEvent.click(result.getByTestId('__action__'));
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('item-click');
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(onClosed).toHaveBeenCalledTimes(1);
    });

    it('calls onClose with "escape-key" when pressing Escape', async () => {
      const onClose = vi.fn();
      const onClosed = vi.fn();
      const result = render(<Alert onClose={onClose} onClosed={onClosed} title="Test Alert" />);

      await userEvent.keyboard('{Escape}');
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('escape-key');
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(onClosed).toHaveBeenCalledTimes(1);
    });

    it('calls onClose with "click-close-button" when clicking dismiss button', async () => {
      const onClose = vi.fn();
      const onClosed = vi.fn();
      const result = render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <Alert
            onClose={onClose}
            onClosed={onClosed}
            dismissButtonTestId="dismiss-button-test-id"
            dismissButtonMode="inside"
          />
        </AdaptivityProvider>,
      );

      await act(vi.runAllTimers);
      await userEvent.click(screen.getByTestId('dismiss-button-test-id'));
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('click-close-button');
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(onClosed).toHaveBeenCalledTimes(1);
    });

    it('calls onClose with "click-close-button" when clicking outside dismiss button', async () => {
      const onClose = vi.fn();
      const onClosed = vi.fn();
      const result = render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <Alert
            onClose={onClose}
            onClosed={onClosed}
            dismissButtonTestId="dismiss-button-test-id"
            dismissButtonMode="outside"
          />
        </AdaptivityProvider>,
      );

      await act(vi.runAllTimers);
      await userEvent.click(screen.getByTestId('dismiss-button-test-id'));
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('click-close-button');
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(onClosed).toHaveBeenCalledTimes(1);
    });

    it('calls onClose with "item-click" when action with autoCloseDisabled calls close', async () => {
      const onClose = vi.fn();
      const onClosed = vi.fn();
      const action = vi.fn((args) => {
        if (args && args.close) {
          args.close();
        }
      });
      const result = render(
        <ConfigProvider platform={Platform.IOS}>
          <Alert
            onClose={onClose}
            onClosed={onClosed}
            actions={[
              {
                action,
                'title': 'OK',
                'mode': 'default',
                'data-testid': '__action__',
                'autoCloseDisabled': true,
              },
            ]}
          />
        </ConfigProvider>,
      );

      await userEvent.click(result.getByTestId('__action__'));
      expect(action).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('item-click');
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(onClosed).toHaveBeenCalledTimes(1);
    });
  });

  describe('calls action and do not calls onClose with autoCloseDisabled=true', () => {
    fakeTimersForScope();
    it.each([Platform.ANDROID, Platform.IOS])('%s', async (platform) => {
      const action = vi
        .fn()
        .mockImplementationOnce(noop)
        .mockImplementationOnce((args) => {
          if (args && args.close) {
            args.close();
          }
        });

      const onClosed = vi.fn();
      const result = render(
        <ConfigProvider platform={platform}>
          <Alert
            onClosed={onClosed}
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
      expect(onClosed).not.toHaveBeenCalled();

      // второй клик закроет Alert, так как в action был вызван метод close()
      await userEvent.click(result.getByTestId('__action__'));
      expect(action).toHaveBeenCalledTimes(2);
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(onClosed).toHaveBeenCalledTimes(1);
    });

    it('should call onClose first, then action after animation', async () => {
      const callOrder: Array<'action' | 'onClose'> = [];
      const action = vi.fn().mockImplementation(() => callOrder.push('action'));
      const onClose = vi.fn().mockImplementation(() => callOrder.push('onClose'));
      const onClosed = vi.fn();
      const result = render(
        <Alert
          onClose={onClose}
          onClosed={onClosed}
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
      expect(callOrder).toEqual(['onClose', 'action']);
      expect(onClosed).toHaveBeenCalledTimes(1);
    });
  });

  describe('calls action after close by default', () => {
    fakeTimersForScope();
    it.each([Platform.ANDROID, Platform.IOS])('%s', async (platform) => {
      const action = vi.fn();
      const onClosed = vi.fn();
      const result = render(
        <ConfigProvider platform={platform}>
          <Alert
            onClosed={onClosed}
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
      expect(onClosed).toHaveBeenCalledTimes(1);
    });
  });

  it(
    'passes data-testid to actions',
    withFakeTimers(async () => {
      const result = render(
        <Alert
          onClosed={vi.fn()}
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
    }),
  );
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
    withFakeTimers(async ({ href, expectedTag }) => {
      const result = render(
        <ConfigProvider platform={Platform.IOS}>
          <Alert
            onClosed={vi.fn()}
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
    }),
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
    withFakeTimers(async ({ mode, className }) => {
      const result = render(
        <ConfigProvider platform={Platform.IOS}>
          <Alert
            onClosed={vi.fn()}
            actions={[{ 'title': 'Allow', mode, 'data-testid': 'allow-test-id' }]}
          />
        </ConfigProvider>,
      );
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      expect(screen.getByTestId('allow-test-id')).toHaveClass(className);
    }),
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
    withFakeTimers(async ({ mode, className, buttonClassName }) => {
      const result = render(
        <ConfigProvider platform={Platform.VKCOM}>
          <Alert
            onClosed={vi.fn()}
            actions={[{ 'title': 'Allow', mode, 'data-testid': 'allow-test-id' }]}
          />
        </ConfigProvider>,
      );
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      className && expect(screen.getByTestId('allow-test-id')).toHaveClass(className);
      expect(screen.getByTestId('allow-test-id')).toHaveClass(buttonClassName);
    }),
  );

  describe('handles dismissButtonMode', () => {
    fakeTimersForScope();
    it.each<AlertProps['dismissButtonMode']>([
      'outside',
      'inside',
    ])('passes data-testid to dismiss button in %s dismissButtonMode', async (dismissButtonMode) => {
      render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <Alert
            onClosed={vi.fn()}
            dismissLabel="Закрыть предупреждение"
            dismissButtonTestId="dismiss-button-test-id"
            dismissButtonMode={dismissButtonMode}
          />
        </AdaptivityProvider>,
      );
      await act(vi.runAllTimers);
      expect(screen.getByTestId('dismiss-button-test-id')).toHaveTextContent(
        'Закрыть предупреждение',
      );
    });

    it('should hide button in dismissButtonMode="none"', async () => {
      const result = render(
        <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>
          <Alert
            onClosed={vi.fn()}
            dismissButtonTestId="dismiss-button-test-id"
            dismissButtonMode="none"
          />
        </AdaptivityProvider>,
      );
      await act(vi.runAllTimers);
      expect(result.queryByTestId('dismiss-button-test-id')).not.toBeInTheDocument();
    });
  });

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
    withFakeTimers(async ({ align, className }) => {
      const result = render(<Alert onClosed={vi.fn()} actionsAlign={align} />);
      await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
        runOnlyPendingTimers: true,
      });
      const actionsWrapper = getDocumentBody().getElementsByClassName(styles.actions)[0];
      expect(actionsWrapper).toHaveClass(className);
    }),
  );

  it.each([
    {
      title: 'Header',
      titleClassNames: [titleStyles.level3, typographyStyles.weight1],
      description: 'Text',
      descriptionClassNames: [captionStyles.level1],
      platform: Platform.IOS,
    },
    {
      title: 'Header',
      titleClassNames: [titleStyles.level2, typographyStyles.weight2],
      description: 'Text',
      descriptionClassNames: [footnoteStyles.host],
      platform: Platform.VKCOM,
    },
    {
      title: 'Header',
      titleClassNames: [titleStyles.level2, typographyStyles.weight2],
      description: 'Text',
      descriptionClassNames: [typographyStyles.weight3],
      platform: Platform.ANDROID,
    },
  ])(
    `should have header classNames "$headerClassNames" and text classNames "$textClassNames" when use platform "$platform"`,
    withFakeTimers(
      async ({ title, description, titleClassNames, descriptionClassNames, platform }) => {
        const result = render(
          <ConfigProvider platform={platform}>
            <Alert
              onClosed={vi.fn()}
              titleTestId="titleTestId"
              descriptionTestId="descriptionTestId"
              title={title}
              description={description}
            />
          </ConfigProvider>,
        );
        await waitCSSKeyframesAnimation(result.getByRole('alertdialog'), {
          runOnlyPendingTimers: true,
        });
        const headerElement = screen.getByTestId('titleTestId');
        const textElement = screen.getByTestId('descriptionTestId');

        titleClassNames.forEach((className) => expect(headerElement).toHaveClass(className));
        descriptionClassNames.forEach((className) => expect(textElement).toHaveClass(className));
      },
    ),
  );

  it(
    'handle allowClickPropagation correctly',
    withFakeTimers(async () => {
      const onClosed = vi.fn();
      const onClick = vi.fn();
      const action = {
        'title': 'Item',
        'data-testid': '__action__',
        'autoCloseDisabled': true,
        'mode': 'default' as const,
      };
      const result = render(
        <div onClick={onClick}>
          <Alert onClosed={onClosed} actions={[action]} />
        </div>,
      );

      await userEvent.click(result.getByTestId('__action__'));
      expect(onClick).not.toHaveBeenCalled();

      result.rerender(
        <div onClick={onClick}>
          <Alert onClosed={onClosed} actions={[action]} allowClickPropagation />
        </div>,
      );

      await userEvent.click(result.getByTestId('__action__'));
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(onClick).toHaveBeenCalledTimes(1);
    }),
  );
});
