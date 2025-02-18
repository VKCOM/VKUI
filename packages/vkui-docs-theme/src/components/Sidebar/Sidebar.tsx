'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Spacing } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { useConfig } from '../../contexts/config';
import { Menu } from './Menu/Menu';
import { MobileSidebar } from './MobileSidebar/MobileSidebar';
import styles from './Sidebar.module.css';

interface SideBarProps {
  asPopover?: boolean;
}

export function Sidebar({ asPopover = false }: SideBarProps): React.ReactElement {
  const mounted = useMounted();
  const {
    normalizePagesResult: { docsDirectories },
  } = useConfig();

  return (
    <>
      {!asPopover && (
        <div className={classNames(styles.root, styles.lessThenDesktopHidden)}>
          <nav className={styles.inner}>
            <Spacing size="xl" />
            <Menu directories={docsDirectories} />
          </nav>
        </div>
      )}
      {mounted && <MobileSidebar />}
    </>
  );
}
