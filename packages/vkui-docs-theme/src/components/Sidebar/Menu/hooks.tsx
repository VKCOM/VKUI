import * as React from 'react';
import { useRouter } from 'next/navigation';
import type { Item, PageItem } from 'nextra/normalize-pages';

interface UseMenuNavigationProps {
  navigableItems: Array<PageItem | Item>;
  search: string;
}

interface UseMenuNavigationReturn {
  selectedName: string | null;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  resetSelection: () => void;
}

export function useMenuNavigation({
  navigableItems,
  search,
}: UseMenuNavigationProps): UseMenuNavigationReturn {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);

  const itemsCount = navigableItems.length;
  const isEmpty = itemsCount === 0;

  const selectedName = selectedIndex >= 0 ? (navigableItems[selectedIndex]?.name ?? null) : null;

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (isEmpty) {
        return;
      }

      switch (event.key) {
        case 'ArrowDown': {
          event.preventDefault();
          setSelectedIndex((prevIndex) => (prevIndex + 1) % itemsCount);
          break;
        }
        case 'ArrowUp': {
          event.preventDefault();
          setSelectedIndex((prevIndex) => (prevIndex <= 0 ? itemsCount - 1 : prevIndex - 1));
          break;
        }
        case 'Enter': {
          if (selectedIndex >= 0) {
            event.preventDefault();
            const item = navigableItems[selectedIndex];
            if (!item) {
              break;
            }
            const href = (item as PageItem).href || item.route;
            href && router.push(href);
          }
          break;
        }
      }
    },
    [isEmpty, itemsCount, navigableItems, selectedIndex],
  );

  const resetSelection = React.useCallback(() => setSelectedIndex(-1), []);

  React.useEffect(() => {
    setSelectedIndex((prevIndex) => {
      if (!search || isEmpty) {
        return -1;
      }
      if (prevIndex < 0 || prevIndex >= itemsCount) {
        return 0;
      }
      return prevIndex;
    });
  }, [search, isEmpty, itemsCount]);

  return {
    selectedName,
    handleKeyDown,
    resetSelection,
  };
}
