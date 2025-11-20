'use client';

import { useColorSchemeSwitcher } from '@/client/ColorSchemeSwitcher';
import {
  AdaptivityProvider,
  AppRoot,
  ColorSchemeProvider,
  ConfigProvider,
  FixedLayout,
  Flex,
  type ConfigProviderProps,
} from '@vkontakte/vkui';
import styles from './Layout.module.css';

function LayoutContent({ children }: React.PropsWithChildren) {
  const [colorScheme, colorSchemeSwitcher] = useColorSchemeSwitcher();

  return (
    <ColorSchemeProvider value={colorScheme}>
      <AppRoot disableSettingVKUIClassesInRuntime>
        <Flex direction="column" justify="center" className={styles.layout}>
          <FixedLayout vertical="top">
            <Flex justify="end" className={styles.header}>
              {colorSchemeSwitcher}
            </Flex>
          </FixedLayout>
          {children}
        </Flex>
      </AppRoot>
    </ColorSchemeProvider>
  );
}

type LayoutProps = Pick<ConfigProviderProps, 'platform' | 'direction'> & React.PropsWithChildren;

export function Layout({ platform, direction, children }: LayoutProps) {
  return (
    <ConfigProvider platform={platform} direction={direction}>
      <AdaptivityProvider>
        <LayoutContent>{children}</LayoutContent>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}
