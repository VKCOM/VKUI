import * as React from 'react';
import { Icon12Check, Icon12Stars } from '@vkontakte/icons';
import { Link, usePopover } from '@vkontakte/vkui';
import type * as AssistantMenuModule from './AssistantMenu';
import { useCopyFeedback } from './useCopyFeedback';
import styles from './CopyFeedback.module.css';

type MenuModule = typeof AssistantMenuModule;
let menuPromise: Promise<MenuModule> | undefined;

export function OverviewHeaderActions({ pageUrl, mdxUrl }: { pageUrl: string; mdxUrl: string }) {
  const [Menu, setMenu] = React.useState<MenuModule['AssistantMenu'] | null>(null);
  const { copied, animationKey, copy } = useCopyFeedback();
  const loadMenu = React.useCallback(() => {
    menuPromise ||= import('./AssistantMenu');
    void menuPromise.then(
      (mod) => setMenu(() => mod.AssistantMenu),
      () => {
        menuPromise = undefined;
      },
    );
  }, []);

  const { anchorRef, anchorProps, popover } = usePopover({
    placement: 'bottom-end',
    trigger: ['hover', 'focus'],
    onShownChange: (shown) => {
      if (shown) {
        loadMenu();
      }
    },
    content: Menu ? <Menu pageUrl={pageUrl} mdxUrl={mdxUrl} /> : null,
  });

  return (
    <>
      <Link
        {...anchorProps}
        getRootRef={anchorRef}
        aria-expanded={Menu ? anchorProps['aria-expanded'] : false}
        onMouseEnter={loadMenu}
        onFocus={(event) => {
          loadMenu();
          anchorProps.onFocus?.(event);
        }}
        onClick={(event) => {
          anchorProps.onClick?.(event);
          void copy(pageUrl);
        }}
      >
        Скопировать ссылку&nbsp;
        <span
          key={animationKey}
          className={`${styles.icon} ${styles.smallIcon} ${copied ? styles.copied : ''}`}
        >
          <Icon12Stars className={styles.copyIcon} />
          <Icon12Check className={styles.doneIcon} />
        </span>
      </Link>
      {Menu && popover}
    </>
  );
}
