import { isValidNotReactFragmentElement } from '../lib/utils';
import { usePatchChildren } from './usePatchChildren';

export const useReferenceElement = <ElementType extends HTMLElement = HTMLElement>(
  ...args: Parameters<typeof usePatchChildren<ElementType>>
) => {
  const [children, injectProps, externRef] = args;
  const child = isValidNotReactFragmentElement(children) ? children : <span>{children}</span>;

  const [, patchedChild] = usePatchChildren(child, injectProps, externRef);

  return patchedChild;
};
