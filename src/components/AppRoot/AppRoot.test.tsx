import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { AppRootContext } from './AppRootContext';
import AppRoot from './AppRoot';

describe('AppRoot', () => {
  baselineComponent(AppRoot);
  describe('Manages portal root in embedded mode', () => {
    it('Creates & injects portal root', () => {
      let portalRoot: HTMLElement;
      const { unmount } = render((
        <AppRoot embedded>
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
