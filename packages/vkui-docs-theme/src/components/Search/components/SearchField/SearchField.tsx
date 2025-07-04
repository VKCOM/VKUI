import * as React from 'react';
import { AdaptivityProvider, ContentBadge, Tappable } from '@vkontakte/vkui';
import { useModifierKey } from './useModifierKey';
import styles from '../../Search.module.css';

interface SearchFieldProps {
  searchOpen?: boolean;
  setSearchOpen: (open: boolean) => void;
}

export function SearchField({ searchOpen, setSearchOpen }: SearchFieldProps) {
  const modifierKey = useModifierKey();

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        (event.key === 'Escape' && searchOpen) ||
        (event.key.toLocaleLowerCase() === 'k' && (event.metaKey || event.ctrlKey))
      ) {
        event.preventDefault();

        if (searchOpen) {
          setSearchOpen(false);
        } else {
          setSearchOpen(true);
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchOpen]);

  const ariaKeyShortcuts = `${modifierKey === 'Ctrl' ? 'Control' : 'Meta'}+k`;

  return (
    <AdaptivityProvider sizeX="regular">
      <Tappable
        className={styles.searchField}
        onClick={() => setSearchOpen(true)}
        aria-keyshortcuts={ariaKeyShortcuts}
      >
        Поиск...
        <ContentBadge
          className={styles.kbd}
          appearance="neutral"
          mode="primary"
          aria-hidden
          size="l"
        >
          {modifierKey}+K
        </ContentBadge>
      </Tappable>
    </AdaptivityProvider>
  );
}
