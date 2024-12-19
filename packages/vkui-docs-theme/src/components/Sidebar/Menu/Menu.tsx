import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Paragraph, Tappable } from '@vkontakte/vkui';
import NextLink from 'next/link';
import { useFSRoute } from 'nextra/hooks';
import type { Item, PageItem } from 'nextra/normalize-pages';
import { Accordion, type AccordionProps } from '../Accordion/Accordion';
import styles from './Menu.module.css';

const TreeState: Record<string, boolean> = Object.create(null);

interface MenuProps {
  directories: PageItem[] | Item[];
  className?: string;
  metaData?: Record<string, React.FC>;
  onlyCurrentDocs?: boolean;
}

type FolderProps = {
  item: PageItem | Item;
  icon?: React.FC;
};

function MenuItemIcon({ active, Component }: { active?: boolean; Component: React.FC }) {
  return (
    <div className={classNames(styles.menuIcon, active && styles.activeMenuIcon)}>
      <Component />
    </div>
  );
}

function Folder({ item, icon }: FolderProps) {
  const routeOriginal = useFSRoute();
  const [route] = routeOriginal.split('#');
  const active = route === item.route;
  const activeRouteInside = active || route.startsWith(item.route + '/');

  const { theme } = item as Item;

  const open =
    TreeState[item.route] === undefined
      ? active || activeRouteInside || (!theme ? false : theme.collapsed)
      : TreeState[item.route];

  const rerender = React.useState({})[1];

  React.useEffect(() => {
    const updateTreeState = () => {
      if (activeRouteInside) {
        TreeState[item.route] = true;
      }
    };
    updateTreeState();
  }, [activeRouteInside, item.route]);

  const isLink = 'withIndexPage' in item && item.withIndexPage;

  let props: AccordionProps = {
    title: item.title,
    className: classNames(
      styles.menuItem,
      styles.accordion,
      activeRouteInside && styles.activeMenuItem,
    ),
    icon: icon && <MenuItemIcon active={activeRouteInside} Component={icon} />,
    expanded: open,
    onChange: () => {
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
    },
  };

  if (isLink) {
    props.Component = NextLink;
    props.focusVisibleMode = 'outside';
    props.href = (item as PageItem).href || item.route;
  }

  return (
    <li className={styles.listItem}>
      <Accordion {...props}>
        {Array.isArray(item.children) ? (
          <Menu
            className={classNames(styles.nestedMenu, icon && styles.menuItemWithIcon)}
            directories={item.children}
          />
        ) : null}
      </Accordion>
    </li>
  );
}

function File({ item, icon }: { item: PageItem | Item; icon?: React.FC }): React.ReactElement {
  const route = useFSRoute();
  const active = Boolean(item.route && route === item.route);

  return (
    <li className={styles.listItem}>
      <Tappable
        href={(item as PageItem).href || item.route}
        className={classNames(styles.menuItem, active && styles.activeMenuItem)}
        activeMode="opacity"
        hoverMode="opacity"
        Component={NextLink}
        focusVisibleMode="outside"
        {...((item as PageItem).newWindow ? { target: '_blank', rel: 'noreferrer' } : undefined)}
      >
        {icon && <MenuItemIcon active={active} Component={icon} />}
        <Paragraph>{item.title}</Paragraph>
      </Tappable>
    </li>
  );
}

export function Menu({
  directories,
  className,
  metaData = {},
  onlyCurrentDocs = false,
}: MenuProps): React.ReactElement {
  return (
    <ul className={classNames(styles.root, onlyCurrentDocs && styles.currentMenu, className)}>
      {directories.map((item) => {
        if (onlyCurrentDocs && !item.isUnderCurrentDocsTree) {
          return null;
        }

        const Component =
          item.type === 'menu' || (item.children && (item.children.length || !item.withIndexPage))
            ? Folder
            : File;

        return (
          <Component
            key={item.name}
            item={item}
            icon={onlyCurrentDocs ? metaData[item.name] : undefined}
          />
        );
      })}
    </ul>
  );
}
