import { useTokensClassName } from '../lib/tokens/useTokenClassName';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

export function useSyncHTMLWithTokens({
  appRootRef,
  enable,
}: {
  appRootRef: React.RefObject<HTMLElement | null>;
  enable: boolean;
}) {
  const tokenClassName = useTokensClassName();

  useIsomorphicLayoutEffect(() => {
    if (!enable) {
      return;
    }

    const htmlElement = appRootRef.current?.ownerDocument.documentElement;
    /* eslint-disable-next-line no-restricted-properties */
    htmlElement?.classList.add(tokenClassName);

    return () => {
      /* eslint-disable-next-line no-restricted-properties */
      htmlElement?.classList.remove(tokenClassName);
    };
  }, [tokenClassName]);
}
