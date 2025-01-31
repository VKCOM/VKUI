import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Spacing } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import type { Item, PageItem } from 'nextra/normalize-pages';
import { Menu } from './Menu/Menu';
import { MobileSidebar } from './MobileSidebar/MobileSidebar';
import styles from './Sidebar.module.css';

interface SideBarProps {
  docsDirectories: PageItem[];
  flatDirectories: Item[];
  fullDirectories: Item[];
  asPopover?: boolean;
  metaData?: Record<string, React.FC>;
}

export function Sidebar({
  docsDirectories,
  flatDirectories,
  fullDirectories,
  asPopover = false,
  metaData,
}: SideBarProps): React.ReactElement {
  const mounted = useMounted();

  return (
    <>
      {!asPopover && (
        <div className={classNames(styles.root, styles.lessThenDesktopHidden)}>
          <nav className={styles.inner}>
            <Spacing size="xl" />
            <Menu directories={docsDirectories} metaData={metaData} onlyCurrentDocs />
          </nav>
        </div>
      )}
      {mounted && (
        <MobileSidebar flatDirectories={flatDirectories} fullDirectories={fullDirectories} />
      )}
    </>
  );
}
