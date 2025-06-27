import type { Item, PageItem } from 'nextra/normalize-pages';

export function filterDirectories(directories: Array<PageItem | Item>, search: string) {
  let lastSeparator: PageItem | Item | null = null;
  let itemsAfterSeparator = 0;

  return directories.reduce<Array<PageItem | Item>>((data, item) => {
    if (item.type === 'separator') {
      lastSeparator = item;
      itemsAfterSeparator = 0;
    } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
      ++itemsAfterSeparator;
      if (lastSeparator && itemsAfterSeparator === 1) {
        data.push(lastSeparator);
      }
      data.push(item);
    }
    return data;
  }, []);
}
