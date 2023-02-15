/**
 * jest-runners-groups
 * @group unit
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { SizeType } from '../../lib/adaptivity';
import { baselineComponent } from '../../testing/utils';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from './AppRoot';
import { AppRootContext } from './AppRootContext';

describe('AppRoot', () => {
  baselineComponent(AppRoot);
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
});
