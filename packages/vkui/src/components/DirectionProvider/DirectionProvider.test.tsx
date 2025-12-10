import { renderHook } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { DirectionProvider } from './DirectionProvider';

describe(DirectionProvider, () => {
  baselineComponent<any>(DirectionProvider, { forward: false, a11y: false, getRootRef: false });

  it('override config context', () => {
    const { result } = renderHook(useConfigProvider, {
      wrapper: ({ children }) => (
        <ConfigProvider direction="rtl">
          <DirectionProvider value="ltr">{children}</DirectionProvider>
        </ConfigProvider>
      ),
    });

    expect(result.current).toEqual(expect.objectContaining({ direction: 'ltr' }));
  });
});
