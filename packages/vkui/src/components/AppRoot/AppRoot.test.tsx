import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { generateVKUITokensClassName } from '../../helpers/generateVKUITokensClassName';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { AppRoot } from './AppRoot';
import { AppRootContext } from './AppRootContext';

describe('AppRoot', () => {
  baselineComponent(AppRoot, { getRootRef: false });

  it('should returns expected context', () => {
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

  describe('portalRoot in mode="embedded"', () => {
    it.each(['embedded', 'partial'] as const)(
      'should creates and inject portal in %s mode',
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

    it('should not removes external portalRoot provided as prop', () => {
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

    it('should supports multi-instance mode', () => {
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

    it('should accepts custom portal root', () => {
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
    it('should adds class="vkui" to html element in full mode', () => {
      const { unmount } = render(<AppRoot />);
      expect(document.documentElement).toHaveClass('vkui');
      unmount();
      expect(document.documentElement).not.toHaveClass('vkui');
    });

    it('should adds nothing when "partial" mode', () => {
      const { unmount, container } = render(<AppRoot mode="partial" />);
      expect(document.documentElement).not.toHaveClass();
      expect(document.body).not.toHaveClass();
      expect(container).not.toHaveClass();
      unmount();
      expect(document.documentElement).not.toHaveClass();
      expect(document.body).not.toHaveClass();
      expect(container).not.toHaveClass();
    });

    it('should adds "embedded" mode class to container', () => {
      const { unmount, container } = render(<AppRoot mode="embedded" />);
      expect(container).toHaveClass('vkui__root--embedded');
      unmount();
      expect(container).not.toHaveClass();
    });

    it.each(['embedded', 'full'] as const)('should adds adaptivity classes in %s mode', (mode) => {
      const { unmount, container, rerender } = render(<AppRoot mode={mode} />);
      const adaptiveTarget = mode === 'embedded' ? container : document.body;
      expect(adaptiveTarget).not.toHaveClass('vkui--sizeX-regular');
      rerender(
        <AdaptivityProvider sizeX="regular">
          <AppRoot mode={mode} />
        </AdaptivityProvider>,
      );
      expect(adaptiveTarget).toHaveClass('vkui--sizeX-regular');
      unmount();
      expect(adaptiveTarget).not.toHaveClass();
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
      const conditionalContainer = mode === 'full' ? document.body : container;
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

    it('should adds VKUITokenClassName to document.body on mount and removes on unmount', async () => {
      const config = { appearance: 'light', platform: 'vkcom' } as const;
      const vkuiTokenClassName = generateVKUITokensClassName(config.platform, config.appearance);
      const { unmount } = render(
        <ConfigProvider {...config}>
          <AppRoot />
        </ConfigProvider>,
      );
      expect(document.body).toHaveClass(vkuiTokenClassName);
      unmount();
      expect(document.body).not.toHaveClass(vkuiTokenClassName);
    });

    it('should adds VKUITokenClassName to embedded element of AppRoot inner full AppRoot and removes on unmount', async () => {
      const configForFullMode = { appearance: 'light', platform: 'vkcom' } as const;
      const vkuiTokenModeClassNameForFullMode = generateVKUITokensClassName(
        configForFullMode.platform,
        configForFullMode.appearance,
      );

      const configForEmbeddedMode = { appearance: 'dark', platform: 'vkcom' } as const;
      const vkuiTokenModeClassNameForEmbeddedMode = generateVKUITokensClassName(
        configForEmbeddedMode.platform,
        configForEmbeddedMode.appearance,
      );

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

      expect(document.body).toHaveClass(vkuiTokenModeClassNameForFullMode);
      expect(result.getByTestId('app-root-embedded')).toHaveClass(
        vkuiTokenModeClassNameForEmbeddedMode,
      );

      fireEvent.click(screen.getByRole('button'));

      expect(document.body).toHaveClass(vkuiTokenModeClassNameForFullMode);
      expect(() => result.getByTestId('app-root-embedded')).toThrow();

      result.unmount();

      expect(document.body).not.toHaveClass(vkuiTokenModeClassNameForFullMode);
    });
  });

  describe('Workarounds', () => {
    it('should disable CSS transform on parent for mode="embedded"', () => {
      const { rerender, container } = render(<AppRoot mode="embedded" />);
      expect(container.style.transform).toBe('translate3d(0, 0, 0)');
      rerender(<AppRoot mode="embedded" disableParentTransformForPositionFixedElements />);
      expect(container.style.transform).toBe('');
    });
  });
});
