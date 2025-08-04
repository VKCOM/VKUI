'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useMounted } from 'nextra/hooks';
import { useConfig } from '../../contexts/config';
import { Menu } from './Menu/Menu';
import { MobileSidebar } from './MobileSidebar/MobileSidebar';
import styles from './Sidebar.module.css';

interface SidebarProps {
  asPopover?: boolean;
}

export function Sidebar({ asPopover = false }: SidebarProps): React.ReactElement {
  const mounted = useMounted();
  const {
    normalizePagesResult: { docsDirectories },
  } = useConfig();

  return (
    <>
      {!asPopover && (
        <div className={classNames(styles.root, styles.lessThenDesktopHidden)}>
          <nav id="vkui-docs-sidebar" className={styles.inner}>
            <Menu directories={docsDirectories} />
          </nav>
        </div>
      )}
      {mounted && <MobileSidebar />}
    </>
  );
}
