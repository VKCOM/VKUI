'use client';

import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { useColorScheme } from '../../contexts';
import styles from './index.module.css';

export function VKUIWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedColorScheme } = useColorScheme();
  const mounted = useMounted();
  const colorScheme = mounted ? (resolvedColorScheme as 'light' | 'dark') : undefined;

  return (
    <ConfigProvider colorScheme={colorScheme} platform="android">
      <AdaptivityProvider>
        <AppRoot mode="partial">
          <div className={styles.root}>{children}</div>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}
