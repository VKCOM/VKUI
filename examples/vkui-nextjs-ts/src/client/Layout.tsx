'use client';

import { useColorSchemeSwitcher } from '@/client/ColorSchemeSwitcher';
import { AdaptivityProvider, AppRoot, ConfigProvider, FixedLayout, Flex } from '@vkontakte/vkui';
import styles from './Layout.module.css';
import '@vkontakte/vkui/dist/cssm/styles/themes.css';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [colorScheme, colorSchemeSwitcher] = useColorSchemeSwitcher();

  return (
    <ConfigProvider colorScheme={colorScheme}>
      <AdaptivityProvider>
        <AppRoot>
          <Flex direction="column" justify="center" className={styles.layout}>
            <FixedLayout vertical="top">
              <Flex justify="end" className={styles.header}>
                <Flex.Item flexBasis={100}>{colorSchemeSwitcher}</Flex.Item>
              </Flex>
            </FixedLayout>
            {children}
          </Flex>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}
