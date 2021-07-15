import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import { AppRootContext } from './AppRootContext';
import AppRoot from './AppRoot';
import { SizeType } from '../../hoc/withAdaptivity';

describe('AppRoot', () => {
  baselineComponent(AppRoot);
  describe('Manages portal root in embedded mode', () => {
    describe('Creates & injects portal root', () => {
      it.each(['embedded', 'partial'] as const)('in %s mode', (mode) => {
        let portalRoot: HTMLElement;
        const { unmount } = render((
          <AppRoot mode={mode}>
            <AppRootContext.Consumer>
              {(ctx) => {
                portalRoot = ctx.portalRoot;
                return null;
              }}
            </AppRootContext.Consumer>
          </AppRoot>
        ));
        expect(document.body).toContainElement(portalRoot);
        unmount();
        expect(document.body).not.toContainElement(portalRoot);
      });
    });
    describe('applies container classes', () => {
      it('html class="vkui" in full mode', () => {
        const { unmount } = render(<AppRoot />);
        expect(document.documentElement).toHaveClass('vkui');
        unmount();
        expect(document.documentElement).not.toHaveClass('vkui');
      });
      it.each(['embedded', 'full'] as const)('container class in %s mode', (mode) => {
        const { unmount, container } = render(<AppRoot mode={mode} />);
        expect(container).toHaveClass('vkui__root', mode === 'embedded' ? 'vkui__root--embedded' : '');
        unmount();
        expect(container).not.toHaveClass();
      });
      it.each(['embedded', 'full'] as const)('adaptivity class in %s mode', (mode) => {
        const { unmount, container, rerender } = render(<AppRoot mode={mode} />);
        const adaptiveTarget = mode === 'embedded' ? container : document.body;
        expect(adaptiveTarget).not.toHaveClass('vkui--sizeX-regular');
        // adds class
        rerender(<AppRoot mode={mode} sizeX={SizeType.REGULAR} />);
        expect(adaptiveTarget).toHaveClass('vkui--sizeX-regular');
        unmount();
        // removes class on unmount
        expect(adaptiveTarget).not.toHaveClass();
      });
    });
    it('Supports multi-instance mode', () => {
      let portalRoot1: HTMLElement;
      render((
        <AppRoot mode="embedded">
          <AppRootContext.Consumer>
            {(ctx) => {
              portalRoot1 = ctx.portalRoot;
              return null;
            }}
          </AppRootContext.Consumer>
        </AppRoot>
      ));
      render(<AppRoot mode="embedded" />).unmount();
      expect(document.body).toContainElement(portalRoot1);
    });
  });
  it('has class .AppRoot--keyboard-input on keyboard navigation and no class on mouse click', () => {
    render(<AppRoot data-testid="root" mode="embedded" />);
    const root = screen.getByTestId('root');

    // test keyboard nav and outline
    userEvent.tab();
    expect(root).toHaveClass('AppRoot--keyboard-input');

    // test click and no outline
    userEvent.click(root);
    expect(root).not.toHaveClass('AppRoot--keyboard-input');
  });
});
