import { renderHook } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { LocaleProvider } from './LocaleProvider';

describe(LocaleProvider, () => {
  baselineComponent<any>(LocaleProvider, { forward: false, a11y: false, getRootRef: false });

  it('override config context', () => {
    const { result } = renderHook(useConfigProvider, {
      wrapper: ({ children }) => (
        <ConfigProvider locale="ru">
          <LocaleProvider value="en">{children}</LocaleProvider>
        </ConfigProvider>
      ),
    });

    expect(result.current).toEqual(expect.objectContaining({ locale: 'en' }));
  });
});
