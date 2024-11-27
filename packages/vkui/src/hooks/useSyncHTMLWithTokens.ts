import { useTokensClassName } from '../lib/tokens/useTokenClassName';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

export function useSyncHTMLWithTokens({
  appRootRef,
  enable,
}: {
  appRootRef: React.RefObject<HTMLElement>;
  enable: boolean;
}) {
  const tokenClassName = useTokensClassName();

  useIsomorphicLayoutEffect(() => {
    if (!enable) {
      return;
    }

    const htmlElement = appRootRef.current?.ownerDocument.documentElement;
    /* eslint-disable-next-line no-restricted-properties */
    htmlElement?.classList.add(tokenClassName, 'vkui');

    return () => {
      /* eslint-disable-next-line no-restricted-properties */
      htmlElement?.classList.remove(tokenClassName, 'vkui');
    };
  }, [tokenClassName]);
}
