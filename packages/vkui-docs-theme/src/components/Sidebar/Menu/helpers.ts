import type { Item, PageItem } from 'nextra/normalize-pages';

const RUSSIAN_KEYBOARD_LAYOUT = 'ёйцукенгшщзхъфывапролджэячсмитьбю';
const ENGLISH_KEYBOARD_LAYOUT = "`qwertyuiop[]asdfghjkl;'zxcvbnm,.";

export function filterDirectories(directories: Array<PageItem | Item>, search: string) {
  let lastSeparator: PageItem | Item | null = null;
  let itemsAfterSeparator = 0;
  const normalizedSearch = search.toLowerCase();
  const searchInEnglishLayout = normalizedSearch.replace(/[а-яё]/g, (character) =>
    ENGLISH_KEYBOARD_LAYOUT.charAt(RUSSIAN_KEYBOARD_LAYOUT.indexOf(character)),
  );

  return directories.reduce<Array<PageItem | Item>>((data, item) => {
    const keywords = 'frontMatter' in item ? item.frontMatter?.keywords : undefined;
    const searchValues = [item.title, ...(Array.isArray(keywords) ? keywords : [keywords])];

    if (item.type === 'separator') {
      lastSeparator = item;
      itemsAfterSeparator = 0;
    } else if (
      searchValues.some(
        (value) =>
          typeof value === 'string' &&
          (value.toLowerCase().includes(normalizedSearch) ||
            value.toLowerCase().includes(searchInEnglishLayout)),
      )
    ) {
      ++itemsAfterSeparator;
      if (lastSeparator && itemsAfterSeparator === 1) {
        data.push(lastSeparator);
      }
      data.push(item);
    }
    return data;
  }, []);
}
