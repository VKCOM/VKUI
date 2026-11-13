'use client';

import { AdaptivityProvider, AppRoot, ConfigProvider } from '../../src';
import { useGetGlobalParams } from '../common/hooks/useGetGlobalParams';
import { IconsCatalog } from './IconsCatalog';

export const IconsOverviewPage = () => {
  const { colorScheme, platform, direction, hasCustomPanelHeaderAfter, hasPointer } =
    useGetGlobalParams();

  return (
    <ConfigProvider
      colorScheme={colorScheme}
      platform={platform}
      hasCustomPanelHeaderAfter={hasCustomPanelHeaderAfter}
      direction={direction}
    >
      <AdaptivityProvider hasPointer={hasPointer}>
        <AppRoot className="sb-unstyled" dir={direction}>
          <IconsCatalog />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
