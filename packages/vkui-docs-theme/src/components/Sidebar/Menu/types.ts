import type { Item, PageItem } from 'nextra/normalize-pages';

export interface FolderProps {
  item: PageItem | Item;
}

export interface FileProps {
  item: PageItem | Item;
  itemIdPrefix?: string | undefined;
  hovered?: boolean | undefined;
}

export interface MenuProps {
  directories: PageItem[] | Item[];
  className?: string | undefined;
  mobileView?: boolean | undefined;
  selectedName?: string | null | undefined;
  id?: string | undefined;
  label?: string | undefined;
}
