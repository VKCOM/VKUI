import * as React from 'react';
import {
  Icon20AddSquareOutline,
  Icon20BrushOutline,
  Icon20ComputerSmartphoneOutline,
  Icon20LogoVkOutline,
  Icon20PlaneOutline,
  Icon20Rectangle2HorizontalOutline,
  Icon20SparkleOutline,
  Icon20Square4PlusOutline,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { Paragraph, Tappable } from '@vkontakte/vkui';
import NextLink from 'next/link';
import { useFSRoute } from 'nextra/hooks';
import type { Item, PageItem } from 'nextra/normalize-pages';
import { Accordion, type AccordionProps } from '../Accordion/Accordion';
import styles from './Menu.module.css';

const TreeState: Record<string, boolean> = Object.create(null);

const IconsMap = {
  'about': <Icon20LogoVkOutline />,
  'quick-start': <Icon20PlaneOutline />,
  'setup-modes': <Icon20AddSquareOutline />,
  'adaptivity': <Icon20ComputerSmartphoneOutline />,
  'platforms-and-themes': <Icon20BrushOutline />,
  'structure': <Icon20Rectangle2HorizontalOutline />,
  'integrations': <Icon20Square4PlusOutline />,
  'advanced': <Icon20SparkleOutline />,
};

interface MenuProps {
  directories: PageItem[] | Item[];
  className?: string;
  mobileView?: boolean;
}

type FolderProps = Pick<MenuProps, 'mobileView'> & {
  item: PageItem | Item;
};

export interface SidebarTitleProps {
  title: string;
  icon: React.ReactElement;
}

function SidebarTitle({ title, icon }: SidebarTitleProps) {
  return (
    <>
      <div className={classNames(styles.menuIcon)}>{icon}</div>
      <Paragraph>{title}</Paragraph>
    </>
  );
}

function Folder({ item, mobileView }: FolderProps) {
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
  const icon = IconsMap[item.name as keyof typeof IconsMap];

  let props: AccordionProps = {
    title: mobileView || !icon ? item.title : <SidebarTitle title={item.title} icon={icon} />,
    className: classNames(
      styles.menuItem,
      styles.accordion,
      activeRouteInside && styles.activeMenuItem,
    ),
    expanded: open,
    onChange: (e, toggle) => {
      if (toggle) {
        e?.preventDefault();
        e?.stopPropagation();
      }
      if (isLink) {
        if (active || toggle) {
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
            className={classNames(
              styles.nestedMenu,
              icon && !mobileView && styles.menuItemWithIcon,
            )}
            directories={item.children}
            mobileView={mobileView}
          />
        ) : null}
      </Accordion>
    </li>
  );
}

function File({
  item,
  mobileView,
}: { item: PageItem | Item } & Pick<MenuProps, 'mobileView'>): React.ReactElement {
  const route = useFSRoute();
  const active = Boolean(item.route && route === item.route);
  const href = (item as PageItem).href || item.route;
  const newWindow = /^https?:\/\//.test(href);
  const icon = IconsMap[item.name as keyof typeof IconsMap];

  return (
    <li className={styles.listItem}>
      <Tappable
        href={href}
        className={classNames(styles.menuItem, active && styles.activeMenuItem)}
        activeMode="opacity"
        hoverMode="opacity"
        Component={NextLink}
        focusVisibleMode="outside"
        {...(newWindow ? { target: '_blank', rel: 'noreferrer' } : undefined)}
      >
        {icon && !mobileView && <div className={classNames(styles.menuIcon)}>{icon}</div>}
        <Paragraph>{item.title}</Paragraph>
      </Tappable>
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
        const Component = item.type === 'menu' || item.children?.length ? Folder : File;

        return <Component key={item.name} item={item} mobileView={mobileView} />;
      })}
    </ul>
  );
}
