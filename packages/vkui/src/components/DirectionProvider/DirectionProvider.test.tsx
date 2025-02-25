'use no memo';

import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import {
  type ConfigProviderContextInterface,
  useConfigProvider,
} from '../ConfigProvider/ConfigProviderContext';
import { DirectionProvider } from './DirectionProvider';

describe(DirectionProvider, () => {
  baselineComponent<any>(DirectionProvider, { forward: false, a11y: false, getRootRef: false });

  it('override config context', () => {
    let config: ConfigProviderContextInterface | undefined;
    const ReadConfig = () => {
      config = useConfigProvider();
      return null;
    };

    render(
      <ConfigProvider direction="rtl">
        <DirectionProvider value="ltr">
          <ReadConfig />
        </DirectionProvider>
      </ConfigProvider>,
    );

    expect(config).toEqual(expect.objectContaining({ direction: 'ltr' }));
  });
});
