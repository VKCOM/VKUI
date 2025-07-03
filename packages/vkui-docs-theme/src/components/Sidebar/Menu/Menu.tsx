import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Caption, Search, Subhead, Tappable } from '@vkontakte/vkui';
import NextLink from 'next/link';
import { useFSRoute } from 'nextra/hooks';
import type { Item, PageItem } from 'nextra/normalize-pages';
import scrollIntoView from 'scroll-into-view-if-needed';
import { useThemeConfig } from '../../../contexts';
import { Accordion, type AccordionProps } from './Accordion/Accordion';
import { filterDirectories } from './helpers';
import type { FileProps, FolderProps, MenuProps } from './types';
import styles from './Menu.module.css';

const TreeState: Record<string, boolean> = Object.create(null);

function Folder({ item }: FolderProps) {
  const { searchableNavbarItems = [] } = useThemeConfig();
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

  const handleClick = React.useCallback(() => {
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
      onClick: handleClick,
      ...(isLink
        ? {
            Component: NextLink,
            focusVisibleMode: 'outside' as const,
            href: (item as PageItem).href || item.route,
          }
        : {}),
    }),
    [item, open, handleClick, isLink],
  );

  const MenuComponent = searchableNavbarItems.includes(item.name) ? SearchableMenu : Menu;

  return (
    <li className={styles.listItem}>
      <Accordion {...props}>
        {Array.isArray(item.children) ? (
          <MenuComponent className={styles.nestedMenu} directories={item.children} />
        ) : null}
      </Accordion>
    </li>
  );
}

function File({ item }: FileProps): React.ReactElement {
  const route = useFSRoute();
  const active = Boolean(item.route && route === item.route);
  const href = (item as PageItem).href || item.route;
  const ref = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    const container = document.getElementById('vkui-docs-sidebar');

    if (!container) {
      return;
    }

    if (ref.current && active) {
      scrollIntoView(ref.current, {
        block: 'center',
        scrollMode: 'if-needed',
        boundary: (parent) => Boolean(container.contains(parent)),
      });
    }
  }, [active]);

  return (
    <li className={styles.listItem} ref={ref}>
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

function SearchableMenu(props: MenuProps): React.ReactElement {
  const [search, setSearch] = React.useState<string>('');

  const filteredDirectories = search
    ? filterDirectories(props.directories, search)
    : props.directories;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value.trim());
  };

  return (
    <>
      <Search className={styles.search} value={search} onChange={handleSearch} noPadding />
      <Menu {...props} directories={filteredDirectories} />
    </>
  );
}

function Separator({ title }: { title: string }) {
  return (
    <li className={styles.separator}>
      <Caption level="3" caps>
        {title}
      </Caption>
    </li>
  );
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
        const Component = item.children?.length ? Folder : File;
        return <Component key={item.name} item={item} />;
      })}
    </ul>
  );
}
