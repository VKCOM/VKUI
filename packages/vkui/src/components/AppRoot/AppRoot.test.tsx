import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { ColorScheme } from '../../lib/colorScheme';
import { Platform } from '../../lib/platform';
import { DEFAULT_TOKENS_CLASS_NAMES } from '../../lib/tokens';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { AppRoot, type AppRootProps } from './AppRoot';
import { AppRootContext } from './AppRootContext';
import { ScrollContext, type ScrollContextInterface, useScrollLock } from './ScrollContext';
import { CUSTOM_PROPERTY_INSET_PREFIX } from './helpers';
import styles from './AppRoot.module.css';

describe('AppRoot', () => {
  baselineComponent(AppRoot, { getRootRef: false });

  describe('userSelectMode', () => {
    it('controlled by hasPointer in enalbe-with-pointer from AdaptivityProvider', () => {
      const Template = (props: { hasPointer?: boolean }) => (
        <AdaptivityProvider {...props}>
          <AppRoot mode="full" data-testid="app-root" userSelectMode="enabled-with-pointer" />
        </AdaptivityProvider>
      );
      const result = render(<Template />);
      expect(result.getByTestId('app-root')).toHaveClass(styles.pointerNone);
      result.rerender(<Template hasPointer={false} />);
      expect(result.getByTestId('app-root')).toHaveClass(styles.userSelectNone);
      result.rerender(<Template hasPointer={true} />);
      expect(result.getByTestId('app-root')).not.toHaveClass(
        styles.pointerNone,
        styles.userSelectNone,
      );
    });

    it('controlled by isWebView from ConfigProvider by default', () => {
      const Template = ({ isWebView }: { isWebView?: boolean }) => (
        <ConfigProvider isWebView={isWebView}>
          <AppRoot mode="full" data-testid="app-root" />
        </ConfigProvider>
      );
      // по умолчанию userSelectMode='disabled-in-webview'
      const result = render(<Template isWebView />);
      expect(result.getByTestId('app-root')).toHaveClass(styles.userSelectNone);

      result.rerender(<Template isWebView={false} />);
      expect(result.getByTestId('app-root')).not.toHaveClass(
        styles.pointerNone,
        styles.userSelectNone,
      );
    });

    it('should setup user-select-none class when user-select mode is disalbed', () => {
      const result = render(
        <AppRoot mode="full" data-testid="app-root" userSelectMode="enabled" />,
      );

      expect(result.getByTestId('app-root')).not.toHaveClass(
        styles.pointerNone,
        styles.userSelectNone,
      );

      result.rerender(<AppRoot mode="full" data-testid="app-root" userSelectMode="disabled" />);
      expect(result.getByTestId('app-root')).toHaveClass(styles.userSelectNone);
    });
  });

  it('should return expected context', () => {
    let portalRoot: React.RefObject<HTMLElement | null> = React.createRef();
    const contextCallback = jest.fn().mockImplementation((ctx) => {
      portalRoot = ctx.portalRoot;
      return null;
    });
    const result = render(
      <AppRoot mode="full" data-testid="app-root">
        <AppRootContext.Consumer>{contextCallback}</AppRootContext.Consumer>
      </AppRoot>,
    );
    expect(contextCallback).toHaveBeenCalledWith({
      appRoot: { current: result.getByTestId('app-root') },
      portalRoot: portalRoot,
      embedded: false,
      mode: 'full',
      disablePortal: false,
      layout: undefined,
      keyboardInput: false,
    });
  });

  it('should toggle scroll container', () => {
    const ScrollToggler = () => {
      const [enable, setEnable] = React.useState(true);
      useScrollLock(enable);
      return (
        <input
          type="checkbox"
          checked={enable}
          onChange={(event) => setEnable(Boolean(event.target.checked))}
        />
      );
    };
    const Template = (props: Pick<AppRootProps, 'scroll'>) => (
      <AppRoot mode="full" data-testid="app-root" {...props}>
        <ScrollToggler />
      </AppRoot>
    );

    const result = render(<Template />);
    expect(document.body).toHaveStyle('position: fixed');
    fireEvent.click(result.getByRole('checkbox'));
    expect(document.body).not.toHaveStyle('position: fixed');

    result.rerender(<Template scroll="contain" />);
    expect(result.getByTestId('app-root')).toHaveStyle('position: absolute');
    fireEvent.click(result.getByRole('checkbox'));
    expect(result.getByTestId('app-root')).not.toHaveStyle('position: absolute');
  });

  it('should not call enableScrollLock if scroll is already locked', () => {
    const incrementScrollLockCounterStub = jest.fn();
    const decrementScrollLockCounterStub = jest.fn();
    const scrollContextStub: ScrollContextInterface = {
      getScroll: () => ({ x: 0, y: 0 }),
      scrollTo: noop,
      incrementScrollLockCounter: incrementScrollLockCounterStub,
      decrementScrollLockCounter: decrementScrollLockCounterStub,
    };

    const ScrollToggler = () => {
      useScrollLock(true);
      return null;
    };

    const ScrollStub = ({ children }: { children: React.ReactNode }) => {
      return <ScrollContext.Provider value={scrollContextStub}>{children}</ScrollContext.Provider>;
    };

    const Template = (props: Pick<AppRootProps, 'scroll'>) => {
      const [showAnotherToggler, setShowAnotherToggler] = React.useState(false);
      return (
        <AppRoot mode="full" data-testid="app-root" {...props}>
          <ScrollStub>
            <ScrollToggler />
            {showAnotherToggler && <ScrollToggler />}
            <button onClick={() => setShowAnotherToggler(true)}>Show another toggler</button>
          </ScrollStub>
        </AppRoot>
      );
    };

    const { unmount } = render(<Template />);
    // первый компонент вызвал scrollLock
    expect(incrementScrollLockCounterStub).toHaveBeenCalledTimes(1);
    // второй появившийся компонент вызвал scrollLock
    fireEvent.click(screen.getByText('Show another toggler'));

    // incrementScrollLockCounterStub должен быть вызван второй раз
    expect(incrementScrollLockCounterStub).toHaveBeenCalledTimes(2);
    expect(decrementScrollLockCounterStub).toHaveBeenCalledTimes(0);

    unmount();
    // decrementScrollLockCounterStub должен быть вызван два раза
    expect(decrementScrollLockCounterStub).toHaveBeenCalledTimes(2);
  });

  describe('portalRoot in mode="embedded"', () => {
    it.each(['embedded', 'partial'] as const)(
      'should create and inject portal in %s mode',
      (mode) => {
        let portalRoot: React.RefObject<HTMLElement | null> = React.createRef();
        const contextCallback = jest.fn().mockImplementation((ctx) => {
          portalRoot = ctx.portalRoot;
          return null;
        });
        const { unmount } = render(
          <AppRoot mode={mode}>
            <AppRootContext.Consumer>{contextCallback}</AppRootContext.Consumer>
          </AppRoot>,
        );
        expect(document.body).toContainElement(portalRoot.current);
        unmount();
        expect(document.body).not.toContainElement(portalRoot.current);
      },
    );

    it('should not remove external portalRoot provided as prop', () => {
      const TestComponent = () => {
        const [shouldMount, setShouldMount] = React.useState(false);
        const portalRootRef = React.useRef<HTMLDivElement | null>(null);
        return (
          <div>
            {shouldMount && <AppRoot portalRoot={portalRootRef} />}
            <button onClick={() => setShouldMount((mountFlag) => !mountFlag)}>
              {shouldMount ? 'unmount' : 'mount'}
            </button>
            <div data-testid="portal-root" ref={portalRootRef} />
          </div>
        );
      };

      render(<TestComponent />);

      expect(screen.queryByTestId('portal-root')).toBeTruthy();
      fireEvent.click(screen.getByText('mount'));
      expect(screen.queryByTestId('portal-root')).toBeTruthy();
      fireEvent.click(screen.getByText('unmount'));
      expect(screen.queryByTestId('portal-root')).toBeTruthy();
    });

    it('should support multi-instance mode', () => {
      let portalRoot: React.RefObject<HTMLElement | null> = React.createRef();
      const contextCallback = jest.fn().mockImplementation((ctx) => {
        portalRoot = ctx.portalRoot ?? null;
        return null;
      });
      render(
        <AppRoot mode="embedded">
          <AppRootContext.Consumer>{contextCallback}</AppRootContext.Consumer>
        </AppRoot>,
      );
      render(<AppRoot mode="embedded" />).unmount();
      expect(document.body).toContainElement(portalRoot.current);
    });

    it('should accept custom portal root', () => {
      const customPortalRoot = document.createElement('div');
      let portalRoot: React.RefObject<HTMLElement | null> = React.createRef();
      const contextCallback = jest.fn().mockImplementation((ctx) => {
        portalRoot = ctx.portalRoot ?? null;
        return null;
      });
      render(
        <AppRoot portalRoot={customPortalRoot}>
          <AppRootContext.Consumer>{contextCallback}</AppRootContext.Consumer>
        </AppRoot>,
      );
      expect(portalRoot.current).toEqual(customPortalRoot);
    });
  });

  describe('Setup containers', () => {
    it('should add class="vkui" to html element in full mode', () => {
      const { unmount } = render(<AppRoot />);
      expect(document.documentElement).toHaveClass('vkui');
      unmount();
      expect(document.documentElement).not.toHaveClass('vkui');
    });

    it('should add nothing when "partial" mode', () => {
      const result = render(<AppRoot mode="partial" data-testid="app-root" />);
      expect(document.documentElement).not.toHaveClass();
      expect(document.body).not.toHaveClass();
      expect(result.queryByTestId('app-root')).toBeNull();
    });

    it('should add "embedded" mode class to container', () => {
      const { unmount, container: parentElement } = render(<AppRoot mode="embedded" />);
      expect(parentElement).toHaveClass('vkui__root--embedded');
      unmount();
      expect(parentElement).not.toHaveClass();
    });

    it.each(['embedded', 'full'] as const)('should add adaptivity classes in %s mode', (mode) => {
      const { unmount, rerender, container } = render(<AppRoot mode={mode} />);
      const parentElement = mode === 'embedded' ? container : document.documentElement;
      expect(parentElement).not.toHaveClass('vkui--sizeX-regular');
      rerender(
        <AdaptivityProvider sizeX="regular">
          <AppRoot mode={mode} />
        </AdaptivityProvider>,
      );
      expect(parentElement).toHaveClass('vkui--sizeX-regular');
      unmount();
      expect(parentElement).not.toHaveClass();
    });

    it.each(['embedded', 'full'] as const)('should add safe area insets in %s mode', (mode) => {
      const CUSTOM_PROPERTY_INSET_TOP = `${CUSTOM_PROPERTY_INSET_PREFIX}top: 0px`;
      const CUSTOM_PROPERTY_INSET_BOTTOM = `${CUSTOM_PROPERTY_INSET_PREFIX}bottom: 0px`;
      const CUSTOM_PROPERTY_INSETS = `${CUSTOM_PROPERTY_INSET_TOP}; ${CUSTOM_PROPERTY_INSET_BOTTOM}`;

      const { unmount, rerender, container } = render(
        <AppRoot mode={mode} safeAreaInsets={{ top: 0 }} />,
      );
      const parentElement = mode === 'embedded' ? container : document.documentElement;
      expect(parentElement).toHaveStyle(CUSTOM_PROPERTY_INSET_TOP);

      rerender(<AppRoot mode={mode} safeAreaInsets={{ top: 0, bottom: 0 }} />);
      expect(parentElement).toHaveStyle(CUSTOM_PROPERTY_INSETS);

      unmount();

      expect(parentElement).not.toHaveStyle(CUSTOM_PROPERTY_INSETS);
    });

    it.each([
      { mode: 'full', layout: 'card' },
      { mode: 'embedded', layout: 'card' },
      { mode: 'partial', layout: 'card' },
      { mode: 'full', layout: 'plain' },
      { mode: 'embedded', layout: 'plain' },
      { mode: 'partial', layout: 'plain' },
    ] as const)('should resolve "$layout" layout prop (mode="$mode")', ({ mode, layout }) => {
      const { unmount, container, rerender } = render(<AppRoot mode={mode} />);
      const conditionalContainer = mode === 'full' ? document.documentElement : container;
      const className = layout === 'card' ? 'vkui--layout-card' : 'vkui--layout-plain';

      expect(conditionalContainer).not.toHaveClass(className);

      rerender(<AppRoot mode={mode} layout={layout} />);

      if (mode === 'partial') {
        expect(conditionalContainer).not.toHaveClass(className);
      } else {
        expect(conditionalContainer).toHaveClass(className);
      }

      unmount();

      expect(conditionalContainer).not.toHaveClass(className);
    });

    const CUSTOM_TOKEN_CLASS_NAME = 'myClassName';

    it.each([
      ['default', Platform.IOS, ColorScheme.LIGHT, undefined],
      ['default', Platform.IOS, ColorScheme.LIGHT, {}],
      ['default', Platform.IOS, ColorScheme.DARK, DEFAULT_TOKENS_CLASS_NAMES],
      ['default', Platform.IOS, ColorScheme.LIGHT, { dark: CUSTOM_TOKEN_CLASS_NAME }],
      ['default', Platform.IOS, ColorScheme.LIGHT, { android: { dark: CUSTOM_TOKEN_CLASS_NAME } }],
      ['custom', Platform.IOS, ColorScheme.DARK, { dark: CUSTOM_TOKEN_CLASS_NAME }],
      [
        'custom',
        Platform.ANDROID,
        ColorScheme.DARK,
        { android: { dark: CUSTOM_TOKEN_CLASS_NAME } },
      ],
    ])(
      'should use %s tokensClassName if platform="%s" colorScheme="%s" tokensClassNames={%o}',
      (type, platform, colorScheme, tokensClassNames) => {
        const { unmount } = render(
          <ConfigProvider
            platform={platform}
            colorScheme={colorScheme}
            tokensClassNames={tokensClassNames}
          >
            <AppRoot />
          </ConfigProvider>,
        );
        const tokensClassName =
          type === 'default'
            ? DEFAULT_TOKENS_CLASS_NAMES[platform][colorScheme]
            : CUSTOM_TOKEN_CLASS_NAME;
        expect(document.documentElement).toHaveClass(tokensClassName);
        unmount();
        expect(document.documentElement).not.toHaveClass(tokensClassName);
      },
    );
  });

  it('should add tokensClassName to embedded element of AppRoot inner full AppRoot and removes on unmount', async () => {
    const configForFullMode = { colorScheme: ColorScheme.LIGHT, platform: Platform.VKCOM };
    const vkuiTokenModeClassNameForFullMode =
      DEFAULT_TOKENS_CLASS_NAMES[configForFullMode.platform][configForFullMode.colorScheme];

    const configForEmbeddedMode = { colorScheme: ColorScheme.DARK, platform: Platform.VKCOM };
    const vkuiTokenModeClassNameForEmbeddedMode =
      DEFAULT_TOKENS_CLASS_NAMES[configForEmbeddedMode.platform][configForEmbeddedMode.colorScheme];

    const ConfigUserWithOwnProvider = () => {
      return (
        <ConfigProvider {...configForEmbeddedMode}>
          <AppRoot mode="embedded" data-testid="app-root-embedded"></AppRoot>
        </ConfigProvider>
      );
    };

    const TestComponent = () => {
      const [isMounted, setIsMounted] = React.useState(true);
      return (
        <ConfigProvider {...configForFullMode}>
          <AppRoot>
            <button onClick={() => setIsMounted(false)}>Unmount child context</button>
            {isMounted && <ConfigUserWithOwnProvider />}
          </AppRoot>
        </ConfigProvider>
      );
    };

    const result = render(<TestComponent />);

    expect(document.documentElement).toHaveClass(vkuiTokenModeClassNameForFullMode);
    expect(result.getByTestId('app-root-embedded')).toHaveClass(
      vkuiTokenModeClassNameForEmbeddedMode,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(document.documentElement).toHaveClass(vkuiTokenModeClassNameForFullMode);
    expect(result.queryByTestId('app-root-embedded')).toBeNull();

    result.unmount();

    expect(document.documentElement).not.toHaveClass(vkuiTokenModeClassNameForFullMode);
  });

  describe('Workarounds', () => {
    it('should disable CSS transform on parent for mode="embedded"', () => {
      const { rerender, container: parentElement } = render(<AppRoot mode="embedded" />);
      expect(parentElement).toHaveStyle('transform: translate3d(0, 0, 0)');
      rerender(<AppRoot mode="embedded" disableParentTransformForPositionFixedElements />);
      expect(parentElement).not.toHaveStyle('transform: translate3d(0, 0, 0)');
    });
  });
});
