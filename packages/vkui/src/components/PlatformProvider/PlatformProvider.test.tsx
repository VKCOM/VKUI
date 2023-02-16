import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import {
  ConfigProviderContextInterface,
  useConfigProvider,
} from '../ConfigProvider/ConfigProviderContext';
import { PlatformProvider } from './PlatformProvider';

describe('PlatformProvider', () => {
  it('override config context', () => {
    let config: ConfigProviderContextInterface | undefined;
    const ReadConfig = () => {
      config = useConfigProvider();
      return null;
    };

    render(
      <ConfigProvider platform="android">
        <PlatformProvider value="ios">
          <ReadConfig />
        </PlatformProvider>
      </ConfigProvider>,
    );

    expect(config).toEqual(expect.objectContaining({ platform: 'ios' }));
  });
});
