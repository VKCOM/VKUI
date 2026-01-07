import * as React from 'react';
import type { Item, PageItem } from 'nextra/normalize-pages';

interface NavigationNode {
  name: string;
  item: PageItem | Item;
  next: NavigationNode | null;
  prev: NavigationNode | null;
}

interface UseMenuNavigationProps {
  navigableItems: Array<PageItem | Item>;
  search: string;
}

interface UseMenuNavigationReturn {
  selectedName: string | null;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  resetSelection: () => void;
}

function buildDoublyLinkedList(items: Array<PageItem | Item>): {
  getNext: (name: string | null) => string | null;
  getPrev: (name: string | null) => string | null;
  getItem: (name: string | null) => (PageItem | Item) | null;
  getFirst: () => string | null;
  hasItem: (name: string) => boolean;
  isEmpty: () => boolean;
} {
  if (items.length === 0) {
    return {
      getNext: () => null,
      getPrev: () => null,
      getItem: () => null,
      getFirst: () => null,
      hasItem: () => false,
      isEmpty: () => true,
    };
  }

  const nodesMap = new Map<string, NavigationNode>();
  const nodes: NavigationNode[] = items.map((item) => {
    const node: NavigationNode = {
      name: item.name,
      item,
      next: null,
      prev: null,
    };
    nodesMap.set(item.name, node);
    return node;
  });

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].next = nodes[i + 1] || nodes[0]; // Последний указывает на первый
    nodes[i].prev = nodes[i - 1] || nodes[nodes.length - 1]; // Первый указывает на последний)
  }

  const head = nodes[0];

  const getNext = (name: string | null): string | null => {
    if (!name) {
      return head.name;
    }
    const currentNode = nodesMap.get(name);
    return currentNode?.next?.name || head.name;
  };

  const getPrev = (name: string | null): string | null => {
    if (!name) {
      return head.prev!.name;
    }
    const currentNode = nodesMap.get(name);
    return currentNode?.prev?.name || head.prev!.name;
  };

  const getItem = (name: string | null): (PageItem | Item) | null => {
    if (!name) {
      return null;
    }
    const currentNode = nodesMap.get(name);
    return currentNode?.item || null;
  };

  const getFirst = (): string | null => {
    return head.name;
  };

  const hasItem = (name: string): boolean => {
    return nodesMap.has(name);
  };

  const isEmpty = (): boolean => {
    return nodesMap.size === 0;
  };

  return { getNext, getPrev, getItem, getFirst, hasItem, isEmpty };
}

export function useMenuNavigation({
  navigableItems,
  search,
}: UseMenuNavigationProps): UseMenuNavigationReturn {
  const [selectedName, setSelectedName] = React.useState<string | null>(null);

  const { getNext, getPrev, getItem, getFirst, hasItem, isEmpty } = React.useMemo(
    () => buildDoublyLinkedList(navigableItems),
    [navigableItems],
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (isEmpty()) {
        return;
      }

      switch (event.key) {
        case 'ArrowDown': {
          event.preventDefault();
          setSelectedName((prevName) => getNext(prevName));
          break;
        }
        case 'ArrowUp': {
          event.preventDefault();
          setSelectedName((prevName) => getPrev(prevName));
          break;
        }
        case 'Enter': {
          if (selectedName) {
            event.preventDefault();
            const item = getItem(selectedName);
            if (item) {
              const href = (item as PageItem).href || item.route;
              if (href) {
                window.location.href = href;
              }
            }
          }
          break;
        }
      }
    },
    [isEmpty, getNext, getPrev, getItem, selectedName],
  );

  const resetSelection = React.useCallback(() => setSelectedName(null), []);

  React.useEffect(() => {
    if (search && !isEmpty()) {
      setSelectedName((prevName) => {
        if (!prevName || !hasItem(prevName)) {
          return getFirst();
        }
        return prevName;
      });
    } else {
      setSelectedName(null);
    }
  }, [search, isEmpty, hasItem, getFirst]);

  return {
    selectedName,
    handleKeyDown,
    resetSelection,
  };
}
