'use client';

import { useColorSchemeSwitcher } from '@/client/ColorSchemeSwitcher';
import {
  AdaptivityProvider,
  AppRoot,
  ColorSchemeProvider,
  ConfigProvider,
  FixedLayout,
  Flex,
} from '@vkontakte/vkui';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

function LayoutContent({ children }: LayoutProps) {
  const [colorScheme, colorSchemeSwitcher] = useColorSchemeSwitcher();

  return (
    <ColorSchemeProvider value={colorScheme}>
      <AppRoot>
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

export function Layout({ children }: LayoutProps) {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <LayoutContent>{children}</LayoutContent>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}
