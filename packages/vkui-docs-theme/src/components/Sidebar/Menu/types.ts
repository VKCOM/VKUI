import type { Item, PageItem } from 'nextra/normalize-pages';

export interface FolderProps {
  item: PageItem | Item;
}

export interface FileProps {
  item: PageItem | Item;
  itemIdPrefix?: string;
  hovered?: boolean;
}

export interface MenuProps {
  directories: PageItem[] | Item[];
  className?: string;
  mobileView?: boolean;
  selectedName?: string | null;
  id?: string;
  label?: string;
}
