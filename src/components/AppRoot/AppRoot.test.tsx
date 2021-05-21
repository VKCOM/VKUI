import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { AppRootContext } from './AppRootContext';
import AppRoot from './AppRoot';
import { classScopingMode } from '../../lib/classScopingMode';
import { Icon24Add } from '@vkontakte/icons';
import ConfigProvider from '../ConfigProvider/ConfigProvider';

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
  describe('configures class prefix', () => {
    const Hello = () => <div vkuiClass="Hello" data-testid="hello" />;
    const resetScoping = () => Object.assign(classScopingMode, { _isSet: false, _noConflict: false });
    afterEach(resetScoping);
    beforeEach(resetScoping);
    it('enables global classes by default', () => {
      render(<AppRoot><Hello /></AppRoot>);
      expect(screen.getByTestId('hello')).toHaveClass('Hello');
    });
    it('can disable global classes', () => {
      render(<AppRoot noLegacyClasses><Hello /></AppRoot>);
      expect(screen.getByTestId('hello')).not.toHaveClass('Hello');
    });
    describe('icons', () => {
      it('sets icon prefix', () => {
        render(<AppRoot><Icon24Add data-testid="icon" /></AppRoot>);
        expect(screen.getByTestId('icon')).toHaveClass('vkuiIcon Icon');
      });
      it('can disable global icon classes', () => {
        render(<AppRoot noLegacyClasses><Icon24Add data-testid="icon" /></AppRoot>);
        expect(screen.getByTestId('icon')).not.toHaveClass('Icon');
      });
    });
    describe('works inside ConfigProvider', () => {
      it('disables global classes inside config provider', () => {
        render((
          <ConfigProvider>
            <AppRoot noLegacyClasses>
              <Hello />
              <Icon24Add data-testid="icon" />
            </AppRoot>
          </ConfigProvider>
        ));
        expect(screen.getByTestId('icon')).not.toHaveClass('Icon');
        expect(screen.getByTestId('hello')).not.toHaveClass('Hello');
      });
      it('inherits config provider prefix setting when set', () => {
        render((
          <ConfigProvider noLegacyClasses>
            <AppRoot>
              <Hello />
              <Icon24Add data-testid="icon" />
            </AppRoot>
          </ConfigProvider>
        ));
        expect(screen.getByTestId('icon')).not.toHaveClass('Icon');
        expect(screen.getByTestId('hello')).not.toHaveClass('Hello');
      });
    });
  });
});
