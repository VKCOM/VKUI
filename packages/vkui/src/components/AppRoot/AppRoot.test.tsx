import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { SizeType } from '../../lib/adaptivity';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot, AppRootProps } from './AppRoot';
import { AppRootContext } from './AppRootContext';
import { ScrollContext, ScrollContextInterface, useScrollLock } from './ScrollContext';

describe('AppRoot', () => {
  baselineComponent(AppRoot, { getRootRef: false });
  describe('Manages portal root in embedded mode', () => {
    describe('Creates & injects portal root', () => {
      it.each(['embedded', 'partial'] as const)('in %s mode', (mode) => {
        let portalRoot: HTMLElement | undefined | null;
        const { unmount } = render(
          <AppRoot mode={mode}>
            <AppRootContext.Consumer>
              {(ctx) => {
                portalRoot = ctx.portalRoot;
                return null;
              }}
            </AppRootContext.Consumer>
          </AppRoot>,
        );
        expect(document.body).toContainElement(portalRoot as HTMLElement);
        unmount();
        expect(document.body).not.toContainElement(portalRoot as HTMLElement);
      });

      it('does not remove external portalRoot provided as prop', () => {
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
    });
    describe('applies container classes', () => {
      it('html class="vkui" in full mode', () => {
        const { unmount } = render(<AppRoot />);
        expect(document.documentElement).toHaveClass('vkui');
        unmount();
        expect(document.documentElement).not.toHaveClass('vkui');
      });
      it.each(['embedded'] as const)('container class in %s mode', (mode) => {
        const { unmount, container } = render(<AppRoot mode={mode} />);
        expect(container).toHaveClass(mode === 'embedded' ? 'vkui__root--embedded' : '');
        unmount();
        expect(container).not.toHaveClass();
      });
      it.each(['embedded', 'full'] as const)('adaptivity class in %s mode', (mode) => {
        const { unmount, container, rerender } = render(<AppRoot mode={mode} />);
        const adaptiveTarget = mode === 'embedded' ? container : document.body;
        expect(adaptiveTarget).not.toHaveClass('vkui--sizeX-regular');
        // adds class
        rerender(
          <AdaptivityProvider sizeX={SizeType.REGULAR}>
            <AppRoot mode={mode} />
          </AdaptivityProvider>,
        );
        expect(adaptiveTarget).toHaveClass('vkui--sizeX-regular');
        unmount();
        // removes class on unmount
        expect(adaptiveTarget).not.toHaveClass();
      });
    });
    it('Supports multi-instance mode', () => {
      let portalRoot1: HTMLElement | undefined | null;
      render(
        <AppRoot mode="embedded">
          <AppRootContext.Consumer>
            {(ctx) => {
              portalRoot1 = ctx.portalRoot;
              return null;
            }}
          </AppRootContext.Consumer>
        </AppRoot>,
      );
      render(<AppRoot mode="embedded" />).unmount();
      expect(document.body).toContainElement(portalRoot1 as HTMLElement);
    });
    it('should disable CSS transform on parent for mode="embedded"', () => {
      const { rerender, container } = render(<AppRoot mode="embedded" />);
      expect(container.style.transform).toBe('translate3d(0, 0, 0)');
      rerender(<AppRoot mode="embedded" disableParentTransformForPositionFixedElements />);
      expect(container.style.transform).toBe('');
    });
    it('Accepts custom portal root', () => {
      const customPortalRoot = document.createElement('div');
      let portalRoot: HTMLElement | undefined | null;
      render(
        <AppRoot portalRoot={customPortalRoot}>
          <AppRootContext.Consumer>
            {(ctx) => {
              portalRoot = ctx.portalRoot;
              return null;
            }}
          </AppRootContext.Consumer>
        </AppRoot>,
      );
      expect(portalRoot).toEqual(customPortalRoot);
    });
  });

  it('should not call enableScrollLock if scroll is already locked', () => {
    let isScrollLockStub = false;
    const enableScrollLockStub = jest.fn(() => (isScrollLockStub = true));
    const disableScrollLockStub = jest.fn();
    const scrollContextStub: ScrollContextInterface = {
      getScroll: () => ({ x: 0, y: 0 }),
      scrollTo: noop,
      get isScrollLock() {
        return Boolean(isScrollLockStub);
      },
      enableScrollLock: enableScrollLockStub,
      disableScrollLock: disableScrollLockStub,
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
    expect(enableScrollLockStub).toHaveBeenCalledTimes(1);
    // второй появившийся компонент вызвал scrollLock
    fireEvent.click(screen.getByText('Show another toggler'));

    // enableScrollLock должен быть вызван лишь раз
    expect(enableScrollLockStub).toHaveBeenCalledTimes(1);

    unmount();
    // disableScrollLock должен быть вызван лишь раз
    expect(disableScrollLockStub).toHaveBeenCalledTimes(1);
  });
});
