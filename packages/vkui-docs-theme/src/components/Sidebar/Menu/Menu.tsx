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
import { useMenuNavigation } from './hooks';
import type { FileProps, FolderProps, MenuProps } from './types';
import styles from './Menu.module.css';

function Folder({ item }: FolderProps) {
  const { searchableNavbarItems = [] } = useThemeConfig();
  const routeOriginal = useFSRoute();
  const [route] = routeOriginal.split('#');
  const itemRoute = item.route;
  const active = route === itemRoute;
  const activeRouteInside = active || route.startsWith(itemRoute + '/');
  const { theme } = item as Item;

  const [open, setOpen] = React.useState<boolean | undefined>(
    active || activeRouteInside || (!theme ? false : theme.collapsed),
  );

  React.useEffect(() => {
    if (route === itemRoute || route.startsWith(itemRoute + '/')) {
      setOpen(true);
    }
  }, [route, itemRoute]);

  const isLink = 'withIndexPage' in item && item.withIndexPage;

  const handleClick = React.useCallback(() => {
    if (isLink) {
      if (active) {
        setOpen((value) => !value);
      } else {
        setOpen(true);
      }
      return;
    }
    if (active) {
      return;
    }
    setOpen((value) => !value);
  }, [active, isLink]);

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

function File({ item, itemIdPrefix, hovered = false }: FileProps): React.ReactElement {
  const route = useFSRoute();
  const active = Boolean(item.route && route === item.route);
  const href = (item as PageItem).href || item.route;
  const ref = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    const container = document.getElementById('vkui-docs-sidebar');

    if (!container) {
      return;
    }

    if (ref.current && (active || hovered)) {
      scrollIntoView(ref.current, {
        block: 'center',
        scrollMode: 'if-needed',
        boundary: (parent) => Boolean(container.contains(parent)),
      });
    }
  }, [active, hovered]);

  return (
    <li
      className={styles.listItem}
      ref={ref}
      id={itemIdPrefix ? `${itemIdPrefix}_${item.name}` : undefined}
    >
      <Tappable
        href={href}
        className={classNames(styles.menuItem, active && styles.activeMenuItem)}
        activeMode="opacity"
        hoverMode={styles.hoverMenuItem}
        Component={NextLink}
        focusVisibleMode="inside"
        borderRadiusMode="inherit"
        hovered={hovered}
        aria-selected={hovered}
      >
        <Subhead>{item.title}</Subhead>
      </Tappable>
    </li>
  );
}

function SearchableMenu(props: MenuProps): React.ReactElement {
  const [search, setSearch] = React.useState<string>('');
  const listboxId = React.useId();

  const filteredDirectories = search
    ? filterDirectories(props.directories, search)
    : props.directories;

  const navigableItems = React.useMemo(() => {
    return filteredDirectories.filter(
      (item) => item.type !== 'separator' && !item.children?.length,
    );
  }, [filteredDirectories]);

  const { selectedName, handleKeyDown, resetSelection } = useMenuNavigation({
    navigableItems,
    search,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value.trim());
    resetSelection();
  };

  const activeDescendantId = selectedName ? `${listboxId}_${selectedName}` : undefined;

  return (
    <>
      <Search
        className={styles.search}
        value={search}
        onChange={handleSearch}
        slotProps={{
          input: {
            'onKeyDown': handleKeyDown,
            'role': 'combobox',
            'aria-expanded': !!search,
            'aria-haspopup': 'listbox',
            'aria-controls': listboxId,
            'aria-activedescendant': activeDescendantId,
            'aria-autocomplete': 'list',
          },
        }}
        noPadding
      />
      <Menu
        {...props}
        directories={filteredDirectories}
        selectedName={selectedName}
        id={listboxId}
        label={!!search ? 'Результаты поиска' : undefined}
      />
    </>
  );
}

function Separator({ title }: { title: React.ReactNode }) {
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
  selectedName = null,
  id,
  label,
}: MenuProps): React.ReactElement {
  return (
    <ul
      id={id}
      className={classNames(styles.root, !mobileView && styles.currentMenu, className)}
      aria-label={label}
    >
      {directories.map((item) => {
        if (item.type === 'separator') {
          return <Separator key={item.name} title={item.title} />;
        }
        const isFile = !item.children?.length;
        const Component = isFile ? File : Folder;
        const hovered = isFile && item.name === selectedName;

        return (
          <Component
            key={item.name}
            item={item}
            {...(isFile ? { hovered, itemIdPrefix: id } : {})}
          />
        );
      })}
    </ul>
  );
}
