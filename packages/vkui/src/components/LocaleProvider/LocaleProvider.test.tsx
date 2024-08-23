'use no memo';

import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import {
  type ConfigProviderContextInterface,
  useConfigProvider,
} from '../ConfigProvider/ConfigProviderContext';
import { LocaleProvider } from './LocaleProvider';

describe(LocaleProvider, () => {
  baselineComponent<any>(LocaleProvider, { forward: false, a11y: false, getRootRef: false });

  it('override config context', () => {
    let config: ConfigProviderContextInterface | undefined;
    const ReadConfig = () => {
      config = useConfigProvider();
      return null;
    };

    render(
      <ConfigProvider locale="ru">
        <LocaleProvider value="en">
          <ReadConfig />
        </LocaleProvider>
      </ConfigProvider>,
    );

    expect(config).toEqual(expect.objectContaining({ locale: 'en' }));
  });
});
