import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Caption, Subhead, Tappable } from '@vkontakte/vkui';
import NextLink from 'next/link';
import { useFSRoute } from 'nextra/hooks';
import type { Item, PageItem } from 'nextra/normalize-pages';
import { Accordion, type AccordionProps } from '../Accordion/Accordion';
import styles from './Menu.module.css';

const TreeState: Record<string, boolean> = Object.create(null);

function Separator({ title }: { title: string }) {
  return (
    <div className={styles.separator} role="separator">
      <Caption level="3" caps>
        {title}
      </Caption>
    </div>
  );
}

export interface FolderProps {
  item: PageItem | Item;
}

function Folder({ item }: FolderProps) {
  const routeOriginal = useFSRoute();
  const [route] = routeOriginal.split('#');
  const active = route === item.route;
  const activeRouteInside = active || route.startsWith(item.route + '/');
  const { theme } = item as Item;

  const [, rerender] = React.useState({});

  const open =
    TreeState[item.route] === undefined
      ? active || activeRouteInside || (!theme ? false : theme.collapsed)
      : TreeState[item.route];

  React.useEffect(() => {
    if (activeRouteInside) {
      TreeState[item.route] = true;
    }
  }, [activeRouteInside, item.route]);

  const isLink = 'withIndexPage' in item && item.withIndexPage;

  const handleChange = React.useCallback(() => {
    if (isLink) {
      if (active) {
        // eslint-disable-next-line react-compiler/react-compiler
        TreeState[item.route] = !open;
      } else {
        TreeState[item.route] = true;
      }
      rerender({});
      return;
    }
    if (active) {
      return;
    }
    TreeState[item.route] = !open;
    rerender({});
  }, [active, isLink, item.route, open]);

  const props: AccordionProps = React.useMemo(
    () => ({
      title: item.title,
      className: styles.menuItem,
      hoverMode: styles.hoverMenuItem,
      expanded: open,
      onChange: handleChange,
      ...(isLink
        ? {
            Component: NextLink,
            focusVisibleMode: 'outside' as const,
            href: (item as PageItem).href || item.route,
          }
        : {}),
    }),
    [item, open, handleChange, isLink],
  );

  return (
    <li className={styles.listItem}>
      <Accordion {...props}>
        {Array.isArray(item.children) ? (
          <Menu className={styles.nestedMenu} directories={item.children} />
        ) : null}
      </Accordion>
    </li>
  );
}

export interface FileProps {
  item: PageItem | Item;
}

function File({ item }: FileProps): React.ReactElement {
  const route = useFSRoute();
  const active = Boolean(item.route && route === item.route);
  const href = (item as PageItem).href || item.route;

  return (
    <li className={styles.listItem}>
      <Tappable
        href={href}
        className={classNames(styles.menuItem, active && styles.activeMenuItem)}
        activeMode="opacity"
        hoverMode={styles.hoverMenuItem}
        Component={NextLink}
        focusVisibleMode="inside"
        borderRadiusMode="inherit"
      >
        <Subhead>{item.title}</Subhead>
      </Tappable>
    </li>
  );
}

export interface MenuProps {
  directories: PageItem[] | Item[];
  className?: string;
  mobileView?: boolean;
}

export function Menu({
  directories,
  className,
  mobileView = false,
}: MenuProps): React.ReactElement {
  return (
    <ul className={classNames(styles.root, !mobileView && styles.currentMenu, className)}>
      {directories.map((item) => {
        if (item.type === 'separator') {
          return <Separator key={item.name} title={item.title} />;
        }
        const Component = item.type === 'menu' || item.children?.length ? Folder : File;
        return <Component key={item.name} item={item} />;
      })}
    </ul>
  );
}
