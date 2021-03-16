import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { AppRootContext } from './AppRootContext';
import AppRoot from './AppRoot';
import { SizeType } from '../../hoc/withAdaptivity';

describe('AppRoot', () => {
  baselineComponent(AppRoot);
  describe('Manages portal root in embedded mode', () => {
    describe('Creates & injects portal root', () => {
      it.each(['embedded'])('in %s mode', (mode) => {
        let portalRoot: HTMLElement;
        const { unmount } = render((
          <AppRoot {...{ [mode]: true }}>
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
      it.each(['embedded', 'full'])('container class in %s mode', (mode) => {
        const { unmount, container } = render(<AppRoot embedded={mode === 'embedded'} />);
        expect(container).toHaveClass('vkui__root', mode === 'embedded' ? 'vkui__root--embedded' : '');
        unmount();
        expect(container).not.toHaveClass();
      });
      it.each(['embedded', 'full'])('adaptivity class in %s mode', (mode) => {
        const { unmount, container, rerender } = render((
          <AppRoot embedded={mode === 'embedded'} />
        ));
        const adaptiveTarget = mode === 'embedded' ? container : document.body;
        expect(adaptiveTarget).not.toHaveClass('vkui--sizeX-regular');
        rerender(<AppRoot embedded={mode === 'embedded'} sizeX={SizeType.REGULAR} />);
        // adds class
        expect(adaptiveTarget).toHaveClass('vkui--sizeX-regular');
        unmount();
        // removes class on unmount
        expect(adaptiveTarget).not.toHaveClass();
      });
    });
    it('Supports multi-instance mode', () => {
      let portalRoot1: HTMLElement;
      render((
        <AppRoot embedded>
          <AppRootContext.Consumer>
            {(ctx) => {
              portalRoot1 = ctx.portalRoot;
              return null;
            }}
          </AppRootContext.Consumer>
        </AppRoot>
      ));
      render(<AppRoot embedded />).unmount();
      expect(document.body).toContainElement(portalRoot1);
    });
  });
});
