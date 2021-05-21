import { render, screen } from '@testing-library/react';
import { useContext, FC } from 'react';
import { ANDROID, VKCOM } from '../../lib/platform';
import { baselineComponent } from '../../testing/utils';
import ConfigProvider from './ConfigProvider';
import { classScopingMode } from '../../lib/classScopingMode';
import { Icon24Add } from '@vkontakte/icons';
import { ConfigProviderContext, ConfigProviderContextInterface, WebviewType } from './ConfigProviderContext';

describe('ConfigProvider', () => {
  baselineComponent<any>(ConfigProvider, { forward: false });
  it('provides config context', () => {
    const config: ConfigProviderContextInterface = {
      platform: ANDROID,
      isWebView: true,
      webviewType: WebviewType.INTERNAL,
    };
    const ConfigUser: FC = () => {
      expect(useContext(ConfigProviderContext)).toEqual({
        ...ConfigProvider.defaultProps,
        ...config,
      });
      return null;
    };
    render((
      <ConfigProvider {...config}><ConfigUser /></ConfigProvider>
    ));
  });
  describe('manages body[scheme]', () => {
    it('sets body[scheme] before first render', () => {
      const SchemeUser: FC = () => {
        expect(document.body).toHaveAttribute('scheme', 'space_gray');
        return null;
      };
      render((
        <ConfigProvider scheme="space_gray"><SchemeUser /></ConfigProvider>
      ));
    });
    it('removes body[scheme] on unmount', () => {
      render(<ConfigProvider scheme="space_gray" />).unmount();
      expect(document.body).not.toHaveAttribute('scheme');
    });
    it('updates body[scheme] on change', () => {
      render(<ConfigProvider scheme="space_gray" />).rerender(<ConfigProvider scheme="bright_light" />);
      expect(document.body).toHaveAttribute('scheme', 'bright_light');
    });
    describe('scheme=inherit', () => {
      it('does not set body[scheme] to inherit', () => {
        render(<ConfigProvider scheme="inherit" />);
        expect(document.body).not.toHaveAttribute('scheme');
      });
      it('does not remove body[scheme] on unmount when scheme="inherit"', () => {
        document.body.setAttribute('scheme', 'extern');
        render(<ConfigProvider scheme="inherit" />).unmount();
        expect(document.body).toHaveAttribute('scheme', 'extern');
        document.body.removeAttribute('scheme');
      });
    });
  });
  describe('maps schemes', () => {
    it('maps legacy mobile schemes', () => {
      const { rerender } = render(<ConfigProvider scheme="client_dark" />);
      expect(document.body).toHaveAttribute('scheme', 'space_gray');
      rerender(<ConfigProvider scheme="client_light" />);
      expect(document.body).toHaveAttribute('scheme', 'bright_light');
    });
    it('enforces vkcom scheme on vkcom platform', () => {
      render(<ConfigProvider scheme="bright_light" platform={VKCOM} />);
      expect(document.body).toHaveAttribute('scheme', 'vkcom');
    });
  });
  describe('configures class prefix', () => {
    const Hello = () => <div vkuiClass="Hello" data-testid="hello" />;
    const resetScoping = () => Object.assign(classScopingMode, { _isSet: false, _noConflict: false });
    afterEach(resetScoping);
    beforeEach(resetScoping);
    it('enables global classes by default', () => {
      render(<ConfigProvider><Hello /></ConfigProvider>);
      expect(screen.getByTestId('hello')).toHaveClass('Hello');
    });
    it('can disable global classes', () => {
      render(<ConfigProvider noLegacyClasses><Hello /></ConfigProvider>);
      expect(screen.getByTestId('hello')).not.toHaveClass('Hello');
    });
    describe('icons', () => {
      it('sets icon prefix', () => {
        render(<ConfigProvider><Icon24Add data-testid="icon" /></ConfigProvider>);
        expect(screen.getByTestId('icon')).toHaveClass('vkuiIcon Icon');
      });
      it('can disable global icon classes', () => {
        render(<ConfigProvider noLegacyClasses><Icon24Add data-testid="icon" /></ConfigProvider>);
        expect(screen.getByTestId('icon')).not.toHaveClass('Icon');
      });
    });
  });
});
